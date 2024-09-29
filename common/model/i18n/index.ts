import { useMessages, useTranslations } from 'next-intl'
import { type NextRouter, useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import React from 'react'
import { waitInterval } from '@model/utils'
import { createUrl } from '@common/utils'
import { Platform, LocaleRegex, isClient } from '@model/platform'
import { API_CONST, setHeaders } from '@common/apis/client/instance'
import { useForceUpdate } from 'framer-motion'
import { setSessionState, useSessionStore } from '@model/website/useSessionStore'
import { getKeys } from './utils'

type RefTranslate = {
  // 拿 useTranslations 的 return
  t: ReturnType<typeof useTranslations>
  // 仿 i18n.te() 判斷是否存在 key
  te: (key: string) => boolean
  // 當前所有翻譯
  messages: ReturnType<typeof useMessages>
  // 當前語系
  locale: string
  // 是否是 SSG，用於 router.push 兩種模式不同處理
  SSG: boolean
}

type RefType = Partial<RefTranslate & NextRouter>

/** Ref */
const ref: RefType = {
  t: ((key: string) => key) as RefType['t'],
  te: () => true,
  messages: {},
}
/** 綁定 ref Proxy */
export const bindRef = (payload: Partial<typeof ref>) => Object.assign(ref, { ...payload })

/** 動態產，不然浪費一幀處理 key Map */
let messageMaps: Set<string>

/** 翻譯 Proxy 用於頂層或 Runtime JS */
export const i18n: RefTranslate = new Proxy(ref as RefTranslate, {
  get: function (target, key) {
    switch (key) {
      /** 當前語系 */
      case 'locale': {
        return i18n?.t?.('locale') || Platform.LOCALE
      }
      /** 翻譯 */
      case 't': {
        return (key: string) => ref?.t?.(key) || key
      }
      /** 判斷翻譯是否存在。慎用：渲染影響30+毫秒*/
      case 'te': {
        return (key: string) => {
          if (!messageMaps) {
            messageMaps = getKeys(ref?.messages).reduce((map, key) => {
              map.add(key)
              return map
            }, new Set<string>([]))
          }
          return messageMaps?.has?.(key)
        }
      }
      /** 其他屬性直接參照 */
      default: {
        if (typeof key === 'string' && key in target) return target[key as keyof RefTranslate]
        return undefined
      }
    }
  },
})

/** 設定語系 */
export const setLocale = async (locale: string) => {
  if (!router?.pathname) await waitInterval(() => !!router?.pathname, 33)
  setSessionState({ locale })
  // 不存在的語系
  if (!Platform.LOCALES.includes(locale)) return
  // 目前路由
  const url = createUrl(document.URL)
  if (!url) return
  // 切語系
  if (Platform.SSG) {
    // SSG
    url.pathname = `/${locale}/${url.pathname.replace(LocaleRegex, '').replace(/^\//g, '')}`
    ref.replace?.(url.pathname + url.search).catch(console.warn)
  } else {
    // SSR
    url.pathname = router.asPath?.split('?')?.[0]
    ref.replace?.(url, url, { locale }).catch(console.warn)
  }
}

/** 綁定 ref Proxy */
export const ProvideRouter = () => {
  const t = useTranslations()
  const router = useRouter()
  /** 更新路由 */
  bindRef({ ...router })
  /** 更新翻譯 */
  useEffect(() => void bindRef({ t }), [t])

  return null
}

/** SSG Path 轉換 */
const parseSSGPushPath = (...args: Parameters<NextRouter['push']>) => {
  const locale = useSessionStore.getState().locale || Platform.LOCALE // SSG 吃不到 router 的 locale
  const url = typeof args[0] === 'string' ? createUrl(`${location.origin}${args[0]}`) : args[0]
  // 路徑是否包含 [locale]，移除
  if (Number(url?.pathname?.indexOf(`[locale]`) || -1) > -1) url!.pathname = url!.pathname?.replace(LocaleRegex, '')?.replace(`[locale]`, locale || Platform.LOCALE)
  // 判斷當前語系是否為預設，不是預設跳轉需要補上語系
  if (locale !== Platform.LOCALE) url!.pathname = `/${locale}/${String(url?.pathname).replace(LocaleRegex, '').replace(/^\//g, '')}`
  return typeof args[0] === 'string' ? ([`${url?.pathname}${url?.search || ''}`] as Parameters<NextRouter['push']>) : args
}

/** SSR Path 轉換 */
const parseSSRPushPath = (...args: Parameters<NextRouter['push']>) => {
  if (args.length === 1) return [args[0], args[0], { locale: ref?.locale || Platform.LOCALE }] as Parameters<NextRouter['push']>
  if (args[2] && !args[2]?.locale) args[2].locale = ref?.locale || Platform.LOCALE
  return args
}

/** 路由 Proxy 用於頂層或 Runtime JS */
export const router: NextRouter = new Proxy(ref as NextRouter, {
  get: function (target, key) {
    switch (key) {
      /** Router Push */
      case 'push': {
        return async (...args: Parameters<NextRouter['push']>) => {
          try {
            if (Platform.SSG) return ref?.push?.apply(null, parseSSGPushPath(...args))
            else return ref?.push?.apply(null, parseSSRPushPath(...args))
          } catch (e) {
            console.warn('i18n.push', e)
          }
        }
      }
      /** Router Replace */
      case 'replace': {
        return async (...args: Parameters<NextRouter['replace']>) => {
          try {
            if (Platform.SSG) return ref?.replace?.apply(null, parseSSGPushPath(...args))
            else return ref?.replace?.apply(null, parseSSRPushPath(...args))
          } catch (e) {
            console.warn('i18n.push', e)
          }
        }
      }
      /** Router Back */
      case 'back': {
        return async () => ref?.back?.()
      }
      /** 其他屬性直接參照 */
      default: {
        if (typeof key === 'string' && key in target) return target[key as keyof NextRouter]
        return undefined
      }
    }
  },
})

/** LocaleMap 需要 */
export type LocaleLazyLoadProps = { locale: string; messages: Record<string, any> }
export type LazyMap = Map<string, () => Promise<{ messages: LocaleLazyLoadProps['messages'] }>>
export type LazyProps = { children: ({ locale, messages }: LocaleLazyLoadProps) => React.ReactNode; locale?: string; lazy: LazyMap; messages?: Record<string, any> }

/**
 * 用於語系切換時，封裝加載語系 dynamic(() => import())
 * @example
 * export default CombineLazyLoad(locale, messages)
 */
export const CombineLazyLoad = (firstLocale: string, firstMessages: Record<string, any>) => {
  /** 此區塊只執行一次 */
  bindRef({ locale: firstLocale, messages: firstMessages })
  if (isClient) setSessionState({ locale: firstLocale })

  /** 返回一個組件 */
  return ({ children: Component, locale = firstLocale, lazy, messages }: LazyProps) => {
    const [forceUpdate] = useForceUpdate()
    const lang = useRef(locale)
    const clientMessages = useRef(firstMessages)

    /** API 綁定語系 */
    setHeaders({ [API_CONST.X_LANG]: locale })

    /** 前端語系切換 */
    useEffect(() => {
      if (locale === lang.current) return
      const fetch = async () => {
        const importTarget = lazy.get(String(locale))! || lazy.get('en')!
        const { messages: load } = await importTarget()
        if (load['locale'] !== locale) return
        clientMessages.current = { ...clientMessages.current, ...load }
        lang.current = load['locale']
        forceUpdate()
      }
      fetch().catch(console.warn)
    }, [locale, messages])

    /** 頁面擴充 */
    if (messages) clientMessages.current = { ...clientMessages.current, ...messages }

    return Component({ locale: lang.current, messages: clientMessages.current })
  }
}
