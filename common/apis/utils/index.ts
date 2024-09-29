import type { AxiosRequestConfig } from 'axios'
import type { QueryFunctionContext } from '@tanstack/query-core'
import { type UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useMemoizedFn } from 'ahooks'

/** 取消請求 */
export const autoCancelMap: Record<string, AbortController> = {}
export const cancelRequest = (key: string) => {
  if (!(key in autoCancelMap)) return
  const controller = autoCancelMap[key]
  if (typeof window !== 'undefined') requestAnimationFrame(() => controller?.abort?.())
  delete autoCancelMap[key]
}

/** 模擬 useSWR 縮寫 */
export const useSWR = <TResult = any, TParam = any>(
  key: string | string[] | null,
  // API Method
  fetcher: (p: TParam) => Promise<TResult>,
  // useQuery Options
  params?: Partial<UndefinedInitialDataOptions> & {
    // API Params
    params?: TParam | ((query: QueryFunctionContext) => Promise<TParam> | TParam | null)
    // Axios Config
    config?: AxiosRequestConfig
  },
) => {
  let keyCache = (typeof key === 'string' ? key : key?.join(',')) || null
  // fetcher
  const queryFn = useMemoizedFn(async (query: QueryFunctionContext) => {
    const { signal } = query
    let apiParams: TParam | undefined | null
    if (typeof params?.params === 'function') apiParams = await Promise.all([(params.params as (query: QueryFunctionContext) => Promise<TParam> | TParam | null)(query)]).then(([p]) => p)
    else apiParams = params?.params
    if (apiParams === null) return null
    return fetcher.call({ signal, ...params?.config }, apiParams as TParam)
  })
  // Query Options
  const options = useMemo(() => {
    const options: Record<string, any> = {
      queryKey: typeof key === 'string' ? [key] : key,
      queryFn,
      ...{ ...params, params: undefined, config: undefined },
    }
    options.enabled = params && 'enabled' in params ? !!params?.enabled : key !== null
    // if (!options.enabled && options?.queryFn) delete options.queryFn
    return options
  }, [keyCache, queryFn, params?.enabled])

  return useQuery<TResult>(options as UndefinedInitialDataOptions<TResult>)
}
