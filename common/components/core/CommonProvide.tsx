import { LazyMap, LazyProps, LocaleLazyLoadProps } from '@model/i18n'
import { NextIntlClientProvider } from 'next-intl'
import React, { memo, type MemoExoticComponent, type ReactNode, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Platform, initWebSite, ProvideRouter } from '@model'
import { SEO } from '@common/components/core/SEO'
import { QueryClientProvider } from '@tanstack/react-query'
import { ToastManager } from '@common/components/manager/toast'
import { AlertsManager } from '@common/components/manager/alert'
import { QueryClientInstance } from '@common/apis/client/instance'
import NiceModal from '@ebay/nice-modal-react'
import { ThemeProvider } from './ThemeProvider'
import ClientOnly from './ClientOnly'

/** CSR 階段懶載 */
const LocaleImport: LazyMap = new Map<string, () => Promise<{ messages: LocaleLazyLoadProps['messages'] }>>([
  ['zh', () => import('@model/i18n/locales/zh')],
  ['vi', () => import('@model/i18n/locales/vi')],
  ['th', () => import('@model/i18n/locales/th')],
  ['id', () => import('@model/i18n/locales/id')],
  ['en', () => import('@model/i18n/locales/en')],
  ['br', () => import('@model/i18n/locales/br')],
  ['ko', () => import('@model/i18n/locales/ko')],
])

/** SSR 階段懶載 */
const LocaleMap = new Map<string, React.ComponentType<LazyProps>>([
  ['zh', dynamic(() => import('@model/i18n/locales/zh'), { ssr: true })],
  ['vi', dynamic(() => import('@model/i18n/locales/vi'), { ssr: true })],
  ['th', dynamic(() => import('@model/i18n/locales/th'), { ssr: true })],
  ['id', dynamic(() => import('@model/i18n/locales/id'), { ssr: true })],
  ['en', dynamic(() => import('@model/i18n/locales/en'), { ssr: true })],
  ['br', dynamic(() => import('@model/i18n/locales/br'), { ssr: true })],
  ['ko', dynamic(() => import('@model/i18n/locales/ko'), { ssr: true })],
])

/** 組件初始化: 放所有商戶通用邏輯 */
const Initialize = memo(() => {
  /** 初始化 */
  initWebSite()

  return (
    <>
      {/*綁定 useRouter 到 Global*/}
      <ProvideRouter />
    </>
  )
})

Initialize.displayName = 'Initialize'

/** 純前端掛載全域組件示範 */
export const GlobalComponentDemo = memo(() => {
  return (
    <>
      {/*Global Manager*/}
      <ToastManager />
      <AlertsManager />
    </>
  )
})

GlobalComponentDemo.displayName = 'GlobalComponentDemo'

// 無視語系錯誤
const IgnoreError = (error: Error) => {}

/** 各種綁定 */
export default function CommonProvide({
  pageProps,
  children,
  locale,
  GlobalComponent = GlobalComponentDemo,
}: {
  pageProps?: AppPageProps
  // Router
  children: ReactNode
  // 語系
  locale?: string
  // 商戶自訂 Provider
  GlobalComponent?: MemoExoticComponent<() => ReactNode>
}) {
  // 當前語系
  const lang = String(locale || Platform.LOCALE)
  const firstLocale = useRef(lang)
  // 懶載語系
  const LocaleLazyLoad = LocaleMap.get(firstLocale.current)!

  return (
    <QueryClientProvider client={QueryClientInstance}>
      <ThemeProvider
        attribute="class"
        defaultTheme="day"
        themes={['day', 'night']} // 定义自定义的主题列表
        value={{
          day: 'day',
          night: 'night',
        }}>
        <LocaleLazyLoad locale={lang} lazy={LocaleImport} messages={pageProps?.messages}>
          {({ locale, messages }) => (
            <NextIntlClientProvider timeZone="Asia/Taipei" locale={locale} messages={messages} onError={IgnoreError}>
              <NiceModal.Provider>
                {/*初始化: 只渲染一次*/}
                <Initialize />
                {/*商戶客製化*/}
                <ClientOnly>
                  <GlobalComponent />
                </ClientOnly>
                {/*SEO*/}
                <SEO seo={pageProps?.seo} />
                {/*Page Router*/}
                {children}
              </NiceModal.Provider>
            </NextIntlClientProvider>
          )}
        </LocaleLazyLoad>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
