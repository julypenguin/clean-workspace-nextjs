import axios, { AxiosResponse } from 'axios'
import { Platform } from '@model/platform'
import { QueryClient } from '@tanstack/react-query'

/** 本站 Axios 實體 */
export const SportAPI = axios.create({
  baseURL: Platform.API_URL,
  timeout: 20 * 1000,
})

/** Set Headers */
export const setHeaders = (headers: Record<string, string>) => {
  Object.assign(SportAPI.defaults.headers, headers)
}

/** Header 或 Cookie 擴充屬性 */
export enum API_CONST {
  X_SESSION_TOKEN = 'x-session-token',
  X_LANG = 'x-lang',
  TIME_ZONE = 'time-zone',
  MARKET_TYPE = 'market-type',
  USER_ID = 'user-id',
}

/** Query Client */
export const QueryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000, // 預設快取
      retryDelay: 5 * 1000, // 預設重新嘗試
      placeholderData: (prev: AxiosResponse) => prev, // 保持上一次的請求，避免彈跳
      refetchOnWindowFocus: false, // 禁用自動重新請求
    },
  },
})

/** Chat Axios 實體 */
export const ChatAPI = axios.create({
  timeout: 20 * 1000,
})

/** Set Chat Headers */
export const setChatHeaders = (headers: Record<string, string>) => {
  Object.assign(ChatAPI.defaults.headers, headers)
}
