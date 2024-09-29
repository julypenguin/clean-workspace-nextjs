import type { GetServerSidePropsResult, GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { Platform } from '@model/platform'
import { flatMap, isObject, keys } from 'lodash'

/**
 * 物件的屬性名稱扁平化
 * @example
 * getKeys({ a: { b: { c: 1 } } }) // ['a.b.c']
 */
export const getKeys = <T = Record<string, any>>(obj: T, prefix: string = ''): string[] => {
  return flatMap(keys(obj), (key) => {
    const fullKey = prefix ? `${prefix}.${key}` : key
    return isObject(obj[key as keyof typeof obj]) ? getKeys(obj[key as keyof typeof obj], fullKey) : [fullKey]
  })
}

/**
 * 封装 SSR ISR SSG 的 Side Props
 * @example
 * const { getStaticProps, getServerSideProps } = GenerateSideProps(async () => {
 *   return {
 *     props: {
 *       seo: { title: 'Activity', description: 'Activity' },
 *     },
 *     // ISR 專屬配置，遇到 SSG 模式會自動移除
 *     revalidate: 30, // 快取單位是秒
 *   }
 * })
 * export { getStaticProps, getServerSideProps }
 */
export const GenerateSideProps = <PageProps = any>(
  propsCallbackOrData:
    | { props?: AppPageProps<Partial<PageProps>>; revalidate?: number }
    | ((ctx?: GetServerSidePropsContext | GetStaticPropsContext | undefined) => Promise<{ props?: AppPageProps<Partial<PageProps>>; revalidate?: number }>),
  prerender?: {
    paths: Array<{ [key: string]: string }> // 預渲染路徑
    fallback?: false | true | 'blocking' // 等待機制
  },
) => {
  /** ISR + SSG */
  const getStaticProps: GetStaticProps<AppPageProps<PageProps>> = async (ctx) => {
    const response = typeof propsCallbackOrData === 'function' ? await propsCallbackOrData(ctx) : propsCallbackOrData
    if (!response?.props) response.props = {}
    // SSG
    if (Platform.SSG) {
      if (response.revalidate) delete response.revalidate // SSG 無法使用 ISR 參數
      response.props.locale = String(ctx?.params?.locale || Platform.LOCALE)
    }
    Object.assign(response.props, { ...ctx.params })
    return response as GetStaticPropsResult<AppPageProps<PageProps>>
  }
  /** SSR */
  const getServerSideProps: GetServerSideProps<AppPageProps<PageProps>> = async (ctx) => {
    const response = typeof propsCallbackOrData === 'function' ? await propsCallbackOrData(ctx) : propsCallbackOrData
    if (response.revalidate) delete response.revalidate
    return response as GetServerSidePropsResult<AppPageProps<PageProps>>
  }
  /** SSG Prerender Path */
  const getStaticPaths = () => {
    if (Platform.SSG) {
      if (!prerender?.paths?.length) {
        return {
          paths: Platform.LOCALES.map((locale) => ({ params: { locale } })),
          fallback: false, // SSG 只能返回 404
        }
      }
      return {
        paths: Platform.LOCALES.map((locale) => prerender?.paths?.map((field) => ({ params: { ...field, locale } }))).flat(),
        fallback: false, // SSG 只能返回 404
      }
    }
    // ISR
    if (!prerender?.paths?.length)
      return {
        ...prerender,
      }
    return {
      fallback: false,
      ...prerender,
      /** [{ field: 'any'}] => [{ locale: 'en', field: 'any' }, { locale: 'zh', field: 'any' }, ...] */
      paths: Platform.LOCALES.map((locale) => prerender?.paths?.map((field) => ({ params: { ...field }, locale }))).flat(),
    }
  }
  return { getStaticProps, getServerSideProps, getStaticPaths }
}
