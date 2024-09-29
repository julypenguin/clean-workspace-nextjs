import { defineStore, logoutCallMap } from '@model/utils'
import { reqIndexChecktoken, reqMyFavoriteQuery, reqUserInfo, reqUserMoney, useSWR } from '@common/apis'
import { useEffect, useMemo, useRef } from 'react'
import { API_CONST, QueryClientInstance, setHeaders } from '@common/apis/client/instance'
import { formatThousandths } from '@common/utils'
import { useConfigStore } from '@model/platform/useConfigStore'
import { useQuery } from '@tanstack/react-query'
import { reqSingleWalletUserMoney } from '@common/apis/custom'

export type UserState = {
  // 鑑權：來自 login
  token?: string
  // 用戶資訊
  userInfo?: Partial<API_USER_INFO.RES['t']>
  // 用戶餘額
  wallet: number
  // 餘額鎖定
  lockMoney: WS.UserLockMoneyEvent
} & {
  // 登出處理
  logout: () => UserState
}

/** 初始值 */
const initialState = (): UserState => ({
  token: undefined, // 可以直接拿來判斷 isLogin
  userInfo: undefined, // 用戶資訊
  wallet: 0, // 用戶餘額
  lockMoney: { lockMoney: '0', uwEnableTime: 0 },
  logout: () => initialState(), // 登出 Callback
})

/** 用戶資訊 Store */
export const [useUserStore, setUserState] = defineStore<UserState>(initialState(), {
  name: 'USER',
  partialize: (state) => ({ userInfo: state.userInfo, token: state.token }) as UserState,
})

/** Runtime 第一時間就有 Token */
if (useUserStore.getState()?.token) {
  setHeaders({ [API_CONST.X_SESSION_TOKEN]: String(useUserStore.getState()?.token || '') })
}

/** 登出處理 */
export const logout = () => {
  setHeaders({ [API_CONST.X_SESSION_TOKEN]: '' })
  // 需要登出的 store 處理
  logoutCallMap.forEach((store) => {
    const { update, logout } = store.getState() ?? {}
    if (update && logout) update?.(logout?.())
  })
  /** useQuery 清理數據 */
  QueryClientInstance.clear()
  /** 持久化為何需要手動刪除，因為可能尚未實體化但有緩存在 browser */
  // 要刪除的持久化 localStorage key
  // deleteStorageItem('')
  // 要刪除的持久化 sessionStorage key
  // deleteSessionItem('')
}

/**
 * 用戶資訊預載 + CheckToken 輪詢 hooks
 */
export const InitUserInfo = ({ token }: InitGlobalComponentProps) => {
  /** 用戶詳情 */
  const { data } = useSWR(`/user/info/${token}`, reqUserInfo, { enabled: !!token })
  useEffect(() => data && setUserState({ userInfo: data.t }), [data])

  /** 用戶收藏 */
  const { data: favorite } = useQuery({
    queryKey: ['/fetch/my/favorite', token],
    queryFn: ({ signal }) => reqMyFavoriteQuery.call({ signal }),
    staleTime: 60 * 1000,
    enabled: !!token,
  })

  /** Polling */
  const first = useRef(0)
  useQuery({
    queryKey: [`/user`, token],
    // 無視第一次
    queryFn: async ({ signal }) => (first.current++ <= 1 ? Promise.resolve({}) : reqIndexChecktoken.call({ signal })),
    enabled: !!token,
    staleTime: 0,
    refetchInterval: 10 * 1000,
  })

  return null
}

/** 用戶餘額 */
export const useWallet = () => {
  const config = useConfigStore((state) => state.config)
  const wallet = useUserStore((state) => state.wallet) // 餘額
  const currency = useUserStore((state) => state.userInfo?.currency) // 幣別
  /** API */
  const { data, refetch, isLoading, isRefetching } = useQuery({
    queryKey: ['/user/money', String(config?.walletType)],
    queryFn: ({ signal }) => {
      // config?.walletType === 1 要使用單錢包
      if (Number(config?.walletType) === 1) return reqSingleWalletUserMoney.call({ signal })
      // 一般
      return reqUserMoney.call({ signal }) // Socket 會推
    },
    enabled: false, // 預設 Socket 會發一次
  })
  /** Update */
  useEffect(() => data && setUserState({ wallet: data.t }), [data])
  return { isLoading: isLoading || isRefetching, wallet: formatThousandths(wallet || 0, 2), refetch, currency }
}

/** 簡單判斷登入狀態 */
export const useIsLogin = () => {
  const isLogin = useUserStore((state) => !!state.token)
  const isGuest = useUserStore((state) => Number(state.userInfo?.testFlag) === 1)
  return { isLogin, isGuest }
}

/** 用戶資訊 */
export const useUserInfo = () => {
  const userInfo = useUserStore((state) => state?.userInfo)
  return useMemo(
    () => ({
      userInfo,
      isLogin: !!userInfo,
      isGuest: Number(userInfo?.testFlag) === 1,
    }),
    [userInfo],
  )
}
