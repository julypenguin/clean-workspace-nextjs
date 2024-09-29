import { useEffect } from 'react'
import router from 'next/router'
import { router as i18nRouter } from '@model/i18n'
import { useIsLogin } from '@model/user/useUserStore'

/**
 * 路由驗證。SSR 階段有畫面，前端判斷跳轉，所以會閃爍一下
 * @desc 不會閃爍的解決方案在 Layout 中判斷，但 SSR 階段只有登入畫面
 */
export const useRouterVerify = (pageProps?: AppPageProps) => {
  const { isLogin } = useIsLogin()

  /** 判斷路由要不要登入 */
  useEffect(() => {
    // 不需驗證
    if (!pageProps?.auth) return
    // 有登入
    if (isLogin) return
    // 跳轉登入
    i18nRouter.replace('/login').catch(console.warn)
  }, [isLogin, pageProps?.auth])

  /** 監聽 Route */
  useEffect(() => {
    /** 這裡可以攔截路由 */
    const handleRouteChange = async (path: string) => {
      // path
    }
    router?.events?.on?.('routeChangeStart', handleRouteChange)
    return () => void router?.events?.off?.('routeChangeStart', handleRouteChange)
  }, [])
}
