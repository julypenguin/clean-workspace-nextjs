import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import TailwindConfig from '@/tailwind.config'

/** 網頁入口 */
export default function Document() {
  return (
    <Html data-sid="374028926">
      <Head>
        <style>{TailwindConfig.cssVariablesInnerHTML}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
