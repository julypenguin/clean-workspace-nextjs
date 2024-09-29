import { defineStore } from '@model/utils'
import axios, { type AxiosError } from 'axios'
import React from 'react'
import { i18n } from '@model/i18n'

// 自訂彈窗
export type AlertOptions<T = any> = {
  // 唯一彈窗，可避免重複顯示
  key?: string
  // 標題
  title?: string | React.ReactNode
  // 內容
  message?: string | React.ReactNode
  // 自訂：覆蓋 title message
  children?: ({ onClose, onConfirm }: { onClose: () => Promise<void>; onConfirm: () => Promise<void> }) => React.ReactNode
  // 啟用狀態
  enabled?: boolean
  // 點擊背景是否可關閉
  bgClose?: boolean
  // 樣式覆蓋
  atomic?: { bg?: string; body?: string; content?: string; title?: string; message?: string }
  // 是否顯示浮動 X 按鈕
  closeButton?: boolean
  // 關閉
  close?: string | boolean // 取消文字
  onClose?: (options: { close?: () => void }) => void | Promise<void> // 取消事件
  closeProps?: T // 自訂按鈕參數，但因為客製化無法指定型別
  // 確認
  confirm?: string | boolean // 確認文字
  onConfirm?: (options: { close?: () => void }) => void | Promise<void> // 確認事件
  confirmProps?: T // 自訂按鈕參數，但因為客製化無法指定型別
}

type State = {
  alerts: AlertOptions[]
}

/** Alert Store */
const [useAlertStore, setState] = defineStore<State>(
  {
    alerts: [],
  },
  'ALERT',
)
export { useAlertStore }

/** 新增彈窗 */
export const alerts = (alert: AlertOptions) => {
  if (alert?.key && useAlertStore.getState().alerts.some((item) => item?.key === alert.key)) return
  // close 覆蓋
  const originClose = alert?.onClose
  if (originClose) alert.onClose = () => originClose({ close: closeAlert })
  else alert.onClose = closeAlert
  // confirm 覆蓋
  const originConfirm = alert?.onConfirm
  if (originConfirm) alert.onConfirm = () => originConfirm({ close: closeAlert })
  else if (originClose) alert.onConfirm = () => originClose({ close: closeAlert })
  else alert.onConfirm = closeAlert
  /** Add */
  setState((state) => {
    state.alerts.push({
      title: i18n.t?.('v2.A302') || '',
      ...alert,
      enabled: true,
    })
  })
  return () => alert?.onClose?.({})
}

/** 自動套用 i18n 翻譯 */
export const alertI18n = (alert: AlertOptions) => {
  if (alert.title) alert.title = i18n.t(alert.title)
  if (alert.message) alert.message = i18n.t(alert.message)
  alerts(alert)
}

/** 自動確認 catch error 是否有訊息 */
export const errorAlert = (error: AxiosError<any> | unknown) => {
  if (typeof error !== 'object' || error === null) return // 不是物件
  if (axios.isCancel(error) as unknown) return // 被取消
  alerts({ message: ((error as AxiosError)?.response?.data as { msg: string })?.msg || String(error) })
}

/** 關閉第一筆彈窗 */
export const closeAlert = () => {
  setState((state) => {
    if (!state.alerts?.length) return
    state.alerts[0].enabled = false
  })
}

/** 刪除第一筆彈窗 */
export const shiftAlert = () => {
  setState((state) => void state.alerts.shift())
}
