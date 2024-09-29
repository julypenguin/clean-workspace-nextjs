import { GetServerSideProps } from 'next'
import { Platform } from '@model'

/**
 * 跳轉配置
 * @return {GetServerSideProps 返回跳轉配置
 */
export const bindRedirectServerSideProps =
  (to: string = '/home'): GetServerSideProps =>
  async (context) => {
    const { locale } = context

    return {
      redirect: {
        destination: `${locale ? `/${locale}` : ''}${to}`,
        permanent: false,
      },
    }
  }

/**
 * 跳轉配置 SSG 版本
 */
export const bindRedirectStaticProps = (to: string = '/home', locale = Platform.LOCALE) => {
  return async () => {
    return {
      redirect: {
        destination: `/${locale}${to}`,
        permanent: false,
      },
    }
  }
}

export default function Page() {
  return null
}
