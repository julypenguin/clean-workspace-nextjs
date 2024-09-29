import '@common/style/global.scss'
import '@core/polyfill'
import { type AppProps } from 'next/app'
import CommonProvide from '@common/components/core/CommonProvide'
import DemoLayout from '@templates/views-demo/layout'
import { Platform } from '@model'
import { AlertsManager } from '@common/components/manager/alert'
import { ToastManager } from '@common/components/manager/toast'
import React, { memo } from 'react'
import ErrorBoundary from '@common/components/core/ErrorBoundary'
import { AnimatePresence } from 'framer-motion'

/** 純前端掛載全域組件 */
const GlobalComponent = memo(() => {
  return (
    <>
      {/*Global Manager*/}
      <ToastManager />
      <AlertsManager />
    </>
  )
})

GlobalComponent.displayName = 'GlobalComponent'

/**
 * APP Root
 */
export default function App({ Component, pageProps, router }: AppProps<AppPageProps>) {
  return (
    <CommonProvide locale={pageProps?.locale || router?.locale || Platform.LOCALE} GlobalComponent={GlobalComponent} pageProps={pageProps}>
      <DemoLayout>
        <ErrorBoundary>
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} />
          </AnimatePresence>
        </ErrorBoundary>
      </DemoLayout>
    </CommonProvide>
  )
}
