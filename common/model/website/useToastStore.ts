import { defineStore } from '@model/utils'
import axios, { type AxiosError } from 'axios'
import { createUUID } from '@common/utils'
import { useInterval } from 'ahooks'
import { i18n } from '@model/i18n'

/** 自動關閉時間 */
const AUTO_CLOSE = 3 * 1000

/** 消失動畫時間 */
const ANIMATION_LEAVE = 250

/** 最多同時幾個 */
const MAX_TOAST = 3

/** 型別 */
export type UseToastStore = {
  id: string
  // 提示訊息
  message: string
  // 隱藏時間
  expired: number
  // 啟用狀態
  enabled: boolean
}

type State = {
  // 全部提示訊息
  toasts: UseToastStore[]
}

/** Toast Store */
const [useToastStore, setState] = defineStore<State>(
  {
    toasts: [],
  },
  'TOAST',
)
export { useToastStore }

/** 新增 Toast */
export const toast = (message: string, autoClose = AUTO_CLOSE, max = MAX_TOAST) => {
  setState((state) => {
    state.toasts.push({ id: createUUID(), message, expired: Date.now() + autoClose, enabled: true })
    const enable = state.toasts.filter((item) => item.enabled)
    if (enable.length > max) enable[0].enabled = false
  })
}

/** 自動套用 i18n */
export const toastI18n = (key: string, autoClose = AUTO_CLOSE, max = MAX_TOAST) => toast(i18n.t(key), autoClose, max)

/** 自動確認 catch error 是否有訊息 */
export const errorToast = (error: AxiosError<any> | unknown, autoClose = AUTO_CLOSE) => {
  if (typeof error !== 'object' || error === null) return // 不是物件
  if (axios.isCancel(error) as unknown) return // 被取消
  toast((error as AxiosError<any>)?.response?.data?.msg || String(error), autoClose)
}

/** 關閉某一筆 */
export const removeToast = (id: string) =>
  setState((state) => {
    const find = state.toasts.find((item) => item.id === id)
    if (!find) return
    find.expired = Date.now() - 1
    find.enabled = false
  })

/** 清理 toast。需要輪詢呼叫 */
export const clearToast = () => {
  const now = Date.now()
  const toasts = useToastStore.getState().toasts.slice(0)
  // 甭更新
  if (!toasts.some((item) => (item.enabled && item.expired < now) || item.expired + ANIMATION_LEAVE < now)) return
  // 更新
  setState((state) => {
    for (let index = state.toasts.length - 1; index >= 0; --index) {
      const item = state.toasts[index]
      if (item.expired < now) item.enabled = false
      if (item.expired + ANIMATION_LEAVE > now) continue
      state.toasts.splice(index, 1)
    }
  })
}

/**
 * 客製化 toast 時需要掛載的定時清理
 * @example
 * const toasts = useToastStore((state) => state.toasts)
 * useToastClear(toasts.length)
 */
export const useToastClear = (length: number) => {
  /** 自動關閉 */
  useInterval(clearToast, length > 0 ? 200 : undefined, {
    immediate: length > 0,
  })
}
