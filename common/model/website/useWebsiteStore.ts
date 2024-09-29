import { defineStore } from '@model/utils'
import { createUrl } from '@common/utils'
import { isClient, WEB_SEARCH_QUERY } from '@model/platform'
import { setSessionState } from '@model/website/useSessionStore'
import { setLocale } from '@model/i18n'
import { useMemo } from 'react'
import { useMemoizedFn } from 'ahooks'
import { debounce } from 'lodash'

/** 視窗集距，正常要依照版型設計調整，暫時識別 TailwindCSS 的間距 */
export const Responsive = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const

export type WebsiteState = {
  // 專案字體大小
  fontSize: number
  // 視窗寬高，慎用：會 hydration
  size: {
    // 視窗寬
    width: number
    // 視窗高
    height: number
  }
  // 安全範圍，慎用：會 hydration
  safeArea: {
    top: number
    right: number
    bottom: number
    left: number
  }
  // 是否初始化
  init: boolean
  // 被嵌入狀態
  isWebview: boolean
  // 三方模式
  isThirdMode: boolean
}

/** 存放當前網站相關資訊 */
export const [useWebsiteStore, setWebsiteState] = defineStore<WebsiteState>(
  {
    // 專案字體大小
    fontSize: 1,
    // 視窗寬高
    size: {
      width: isClient ? window.innerWidth : 0,
      height: isClient ? window.innerHeight : 0,
    },
    // 安全範圍
    safeArea: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    init: false,
    isWebview: false,
    isThirdMode: false,
  },
  {
    name: 'WEBSITE',
    partialize: (state) => ({ isWebview: state.isWebview, isThirdMode: state.isThirdMode }) as WebsiteState,
  },
)

let initialized = 0

/** 初始化網站相關資訊 */
export const initWebSite = () => {
  if (!isClient || initialized++ > 0) return

  /** 離開時間過久判斷 */
  {
    let leaveTime = 0
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        leaveTime = Date.now()
      } else if (leaveTime !== 0) {
        const duration = Date.now() - leaveTime
        // 離開超過兩小重整
        if (duration > 2 * 60 * 60 * 1000) window.location.reload()
      }
    })
  }

  /** 視窗更新 */
  {
    const resize = debounce(() => {
      const style = getComputedStyle(document.body)
      const size = { width: window.innerWidth, height: window.innerHeight }
      const safeArea = {
        top: parseInt(String(style.getPropertyValue('--area-top')).replace(/[^0-9]/g, '')) || 0,
        right: parseInt(String(style.getPropertyValue('--area-right')).replace(/[^0-9]/g, '')) || 0,
        bottom: parseInt(String(style.getPropertyValue('--area-bottom')).replace(/[^0-9]/g, '')) || 0,
        left: parseInt(String(style.getPropertyValue('--area-left')).replace(/[^0-9]/g, '')) || 0,
      }
      setWebsiteState({ size, safeArea })
      document.body.style.setProperty('--svw', `${size.width}px`)
      document.body.style.setProperty('--svh', `${size.height}px`)
    }, 100)
    window.addEventListener('resize', resize)
    resize()
  }

  /** 網址參數處理 */
  {
    const url = createUrl(document.URL)
    // 邀請好友
    if (url?.searchParams?.get(WEB_SEARCH_QUERY.INVITE_STR)) {
      const inviteStr = url?.searchParams?.get(WEB_SEARCH_QUERY.INVITE_STR) || ''
      const nationCode = url?.searchParams?.get(WEB_SEARCH_QUERY.NATION_CODE) || ''
      const currency = url?.searchParams?.get(WEB_SEARCH_QUERY.CURRENCY) || ''
      setSessionState({ inviteFriend: { inviteStr, nationCode, currency } })
    }
    // 是否為三方
    if (url?.searchParams?.get(WEB_SEARCH_QUERY.THIRD_SHOW_FLAG) === '0') {
      setWebsiteState({ isThirdMode: true })
    }
    // 是否APP嵌入
    if (url?.searchParams?.get(WEB_SEARCH_QUERY.IS_APP)) {
      setWebsiteState({ isWebview: true })
    }
    // 語系
    if (url?.searchParams?.get(WEB_SEARCH_QUERY.LANG)) {
      setLocale(url?.searchParams?.get(WEB_SEARCH_QUERY.LANG)!).catch(console.warn)
    }
  }

  setWebsiteState({ init: true })
}

/**
 * 判斷視窗大小用
 * @example
 * const { is, lt, gt, breakpoints } = useRWD()
 * is.sm // is.md, is.lg is.lt_md is.gt_md
 * lt(768) // 小於
 * gt(768) // 大於
 * breakpoints({ 0: A, 500: B, 1000: C }) // 條件大於時返回指定物件, 未設定 0 的時候，< 500 識別為 B
 */
export const useRWD = () => {
  type Key = keyof typeof Responsive | `lt_${keyof typeof Responsive}` | `gt_${keyof typeof Responsive}`

  // 當前螢幕寬
  const size = useWebsiteStore((state) => state.size)
  const fontSize = useWebsiteStore((state) => state.fontSize)
  const { width, height } = size

  // rem to px
  const rem = (n: number) => n * fontSize

  // 判斷視窗大小
  const get = useMemoizedFn((_, key: string) => {
    const type = String(key).toLowerCase() as Key
    switch (type) {
      case 'sm': {
        return width < Responsive.sm
      }
      case 'md': {
        return width >= Responsive.md && width < Responsive.lg
      }
      case 'lg': {
        return width >= Responsive.lg && width < Responsive.xl
      }
      case 'xl': {
        return width >= Responsive.xl
      }
      default: {
        if (type.startsWith('lt_')) {
          const n = Responsive[type.replace('lt_', '') as keyof typeof Responsive]
          return width < n
        }
        if (type.startsWith('gt_')) {
          const n = Responsive[type.replace('gt_', '') as keyof typeof Responsive]
          return width >= n
        }
        return false
      }
    }
  })

  /**
   * RWD 區間
   * @example
   * breakpoints({ 0: A, 500: B, 1000: C }) // 條件大於時返回指定物件, 未設定 0 的時候，< 500 識別為 B
   */
  const breakpoints = useMemoizedFn(<T = any>(condition: Record<number | string, T>) => {
    const sizes = Object.keys(condition)
      .map(Number)
      .sort((a, b) => b - a)
    for (let i = 0; i < sizes.length; i++) {
      const size = sizes[i]
      if (width >= Number(size)) return condition[size]
    }
    return condition[sizes?.[sizes.length - 1]]
  })

  return {
    size,
    // rem to px
    rem,
    // is.sm || is.md || is.lg
    is: useMemo<Record<Key, boolean>>(() => new Proxy({} as Record<Key, boolean>, { get }), [get]),
    // 是否小於視窗，單位是 px
    lt: (n: number) => width < n,
    // 是否大於視窗，單位是 px
    gt: (n: number) => width > n,
    // RWD 區間判斷
    breakpoints,
  }
}
