import { defineStore } from '@model/utils'
import { reqIndexConfigjson } from '@common/apis'
import { Platform } from '@common/model'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getDevice } from '@common/utils'

export type ConfigState = {
  // 是否正在獲取
  fetching: boolean
  // 配置
  config: Partial<API_INDEX_CONFIG_JSON.RES['t']> & {
    // 初始化狀態，判斷是否為快取用
    initialize: boolean
  }
  // 登录来源（0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS）
  loginSrc: number
}

/**
 * 網站設定 Config Store
 */
export const [useConfigStore, setConfigState] = defineStore<ConfigState>(
  {
    fetching: false,
    config: {
      initialize: false,
    },
    loginSrc: getDevice() === 'PC' ? 0 : 1,
  },
  {
    name: 'CONFIG',
    partialize: (state) => ({ config: { ...state.config, initialize: false } }) as ConfigState,
  },
)

/** 預載 Config 組件化 */
export const InitConfig = ({ locale, token }: InitGlobalComponentProps) => {
  /** Fetch */
  const { data } = useQuery({
    queryKey: ['/config', locale, token],
    queryFn: ({ signal }) => reqIndexConfigjson.call({ signal }),
    refetchOnMount: !Platform.DEVELOP,
    staleTime: 60 * 1000,
  })

  /** Update */
  useEffect(() => {
    if (!data) return
    setConfigState({
      config: {
        ...data.t,
        // 初始化完成
        initialize: true,
        // null = 0
        sportMaintainStatus: data.t?.sportMaintainStatus || '0',
      },
    })
  }, [data])

  return null
}
