import { describe } from '@jest/globals'
import { act, renderHook } from '@testing-library/react'
import { alerts, errorAlert, errorToast, toast } from '@model'
import { clearToast, removeToast, useToastStore } from '@model/website/useToastStore'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { shiftAlert, useAlertStore } from '@model/website/useAlertStore'

describe('UIStore', () => {
  /** useToastStore */
  test('useToastStore', async () => {
    const { result } = renderHook(() => useToastStore((state) => state.toasts))
    expect(result.current?.length).toBe(0)
    // 新增
    await act(() => Array.from({ length: 5 }, () => toast('toast', -250))) // 250 = ANIMATION_LEAVE
    expect(result.current?.length).toBe(5)
    // 移除全部
    await new Promise((resolve) => setTimeout(resolve, 33))
    act(() => clearToast())
    expect(result.current?.length).toBe(0)
    // 測試 errorToast
    const error = new AxiosError('', undefined, undefined, undefined, { data: { msg: 'msg' } } as AxiosResponse)
    act(() => errorToast(error))
    expect(result.current?.[0]?.message).toBe('msg')
    // 取消請求 errorToast
    const cancel = new axios.Cancel('Request canceled')
    act(() => errorToast(cancel as any))
    expect(result.current?.length).toBe(1)
    // 單一關閉測試
    expect(result.current?.[0]?.enabled).toBe(true)
    act(() => removeToast(result.current?.[0]?.id))
    expect(result.current?.[0]?.enabled).toBe(false)
  })

  /** useAlertStore */
  test('useAlertStore', () => {
    const { result } = renderHook(() => useAlertStore((state) => state.alerts?.[0]))
    // 新增
    act(() => alerts({ message: 'alert' }))
    expect(result.current?.message).toBe('alert')
    // 關閉
    act(() => result.current?.onClose?.({}))
    expect(result.current?.enabled).toBe(false)
    // 刪除
    act(() => shiftAlert())
    expect(result.current).toBe(undefined)
    // 唯一彈窗測試
    act(() => {
      alerts({ message: 'alert1' })
      alerts({ message: 'alert1' })
      alerts({ message: 'alert1' })
      alerts({ message: 'alert1', key: 'only' })
      alerts({ message: 'alert1', key: 'only' })
      alerts({ message: 'alert1', key: 'only' })
    })
    expect(useAlertStore.getState().alerts?.length).toBe(4)
    // 移除全部
    act(() => Array.from({ length: 4 }, () => shiftAlert()))
    // 測試 errorAlert
    const error = new AxiosError('', undefined, undefined, undefined, { data: { msg: 'msg' } } as AxiosResponse)
    act(() => errorAlert(error))
    expect(result.current?.message).toBe('msg')
    // 取消請求 errorAlert
    const cancel = new axios.Cancel('Request canceled')
    act(() => errorAlert(cancel as any))
    expect(useAlertStore.getState().alerts.length).toBe(1)
  })
})
