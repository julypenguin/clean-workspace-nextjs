import Script from 'next/script'
import { Platform } from '@model'

/** Google GA */
export const GoogleGA = () => {
  return (
    <>
      <Script data-sid="-368451031" async src={`https://www.googletagmanager.com/gtag/js?id=${Platform.NEXT_PUBLIC_GA_ID}`} />
      <Script data-sid="-368451029" id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${Platform.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  )
}
