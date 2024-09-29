import { i18n, router } from '@model/i18n'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useMemoizedFn } from 'ahooks'
import { Platform, LocaleRegex, isClient } from '@model/platform'
import { createUrl } from '@common/utils'
import { isEqual } from 'lodash'
import { useWebsiteStore } from '@common/model'

// Proxy
const { te } = i18n
const { back, push, replace } = router

/**
 * 常用 hooks 翻譯/跳轉/語系。不要亂塞，這裡只能放只渲染一次的資訊
 */
export const useCommon = () => {
  const t = useTranslations()
  return useMemo(
    () => ({
      // 翻譯用
      t,
      // 判斷翻譯是否存在
      te,
      // 返回
      back,
      // 跳轉
      push,
      replace,
      // 當前語言
      locale: t('locale') || Platform.LOCALE,
    }),
    [t],
  )
}

/**
 * 網址參數轉 state, 且自動更新網址
 * next.js 無法使用 @ahooksjs/use-url-state 這一套需要 react-router-dom 的套件
 */
export const useUrlQuery = (key: string, init: string, autoUpdate = true): [string, (value: string) => void] => {
  const isInit = useWebsiteStore((state) => state.init)
  const initValue = useMemo(() => (isClient ? createUrl(document.URL)?.searchParams?.get?.(key) || init : init), [])
  const [value, setValue] = useState(isInit ? initValue : init)

  useEffect(() => {
    if (!isClient) return
    setValue(createUrl(document.URL)?.searchParams?.get?.(key) || init)
  }, [])

  /** 更新 */
  const update = (next: string) => {
    setValue(next)
    if (autoUpdate && router.query?.[key] !== next) {
      updateQuerySearch({ [key]: next })
    }
  }

  return useMemo(() => [value, update], [value])
}

/**
 * SSG SSR 的 pathname 有包含語系，自動覆蓋掉語系，/en/home => /home
 * @example
 * const { pathname, searchParams, equalPathname, createQueryString, push, replace } = useURL()
 */
export const useUrl = () => {
  const pathname = usePathname()?.replace(LocaleRegex, '').replace(/\/$/, '') || '/'

  /** 匹配路徑是否一致 */
  const equalPathname = useMemoizedFn((path: string, strict = true) => {
    if (strict) return pathname.replace(/^\/|\/$/, '') === path.replace(/^\/|\/$/, '')
    return pathname.startsWith(path)
  })

  return {
    // pathname 過濾語系
    pathname,
    // 匹配路徑是否一致
    equalPathname,
    // 更新網址參數
    updateQuerySearch,
  }
}

/**
 * 直接更新網址參數
 * @see https://github.com/vercel/next.js/discussions/18072 bug
 */
export const updateQuerySearch = (record: Record<string, string | number | null | undefined>, mode: 'replace' | 'push' = 'replace') => {
  const url = createUrl(document.URL)
  if (isEqual(Object.fromEntries(url?.searchParams?.entries() || []), record)) return
  const call = mode === 'replace' ? replace : push
  const query = Object.keys({ ...record })
    .filter((key) => record[key] !== null && record[key] !== undefined)
    .reduce((acc, key) => ({ ...acc, [key]: String(record[key]) }), { ...router.query } as Record<string, string>)
  call({ pathname: router.pathname, query }, undefined, { shallow: true }).catch(console.warn)
}
