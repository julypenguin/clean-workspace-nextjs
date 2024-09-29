import { useEffect, useRef } from 'react'
import { useMemoizedFn } from 'ahooks'
import { getTimeDataBySeconds } from '@common/utils/date'

type CountdownParams = ReturnType<typeof getTimeDataBySeconds>

/** 管理器 */
const countdownCallback: Array<{ callback: (now: number) => void; destroyed?: boolean }> = []
let countdownInterval: NodeJS.Timeout | undefined = undefined
/** 每秒執行 */
const timerFn = () => {
  const now = Date.now()
  for (let i = countdownCallback.length - 1; i >= 0; i--) {
    if (countdownCallback[i].destroyed) countdownCallback.splice(i, 1)
    else countdownCallback[i]?.callback?.(now)
  }
  if (countdownCallback.length === 0) {
    clearInterval(countdownInterval)
    countdownInterval = undefined
  }
}
/** 監聽 */
const on = (fn: (typeof countdownCallback)[0]['callback']) => {
  const find = countdownCallback.find((item) => item?.callback === fn)
  if (find) find.destroyed = false
  else countdownCallback.push({ callback: fn })
  if (!countdownInterval) countdownInterval = setInterval(timerFn, 1000) // 有可能超過一秒，你懂的
}
/** 移除 */
const off = (fn: (typeof countdownCallback)[0]['callback']) => {
  const find = countdownCallback.find((item) => item?.callback === fn)
  if (!find) return
  find.destroyed = true
}

/**
 * 統一處理倒數，固定一秒執行一次，效能較好，跨組件的倒數數值也會統一
 * @example
 * useCountdown(
 *   (date) => {
 *     // 返回屬性
 *     console.log(date) // { value: 10, format: '00:00:10', hour: '00', minute: '00', second: '10' }
 *     // 如果量很大，請使用非受控組件更新 dom
 *     dom.current.innerText = date.format
 *   },
 *   {
 *     // key 觸發更新，例如：開獎期號
 *     key: "",
 *     // 欲倒數的秒數
 *     countdown: 10
 *   }
 * )
 */
export const useCountdown = (
  // 倒數每秒的 callback
  callback: (time: CountdownParams) => void,
  // 設定
  options: {
    // key 更新才會重新倒數，例如期號
    key: string | number | null | undefined
    // 預設先呼叫一次
    immediate?: boolean
    // 剩餘 0 時自動取消
    autoCancel?: boolean
  } & (
    | {
        // 欲倒數的秒數
        countdown: number
      }
    | {
        // 結束時間戳
        end: number
      }
  ),
) => {
  const cache = useRef<{
    // 結束毫秒，時間戳
    end: number
    // 剩餘秒數
    value: number
    // 停止秒數
    pause?: number
  }>({
    end: 0,
    value: 0,
    pause: 0,
  })

  /** 倒數 */
  const call = useMemoizedFn((now: number, immediate = false) => {
    if (!immediate) cache.current.value--
    const value = Math.max(0, cache.current.value)
    callback?.(getTimeDataBySeconds(value))
    // 時間誤差修正
    const next = Math.max(0, Math.floor((cache.current.end - now) * 0.001))
    if (Math.abs(next - value) > 3) cache.current.value = next
    // 剩餘 0 時自動取消
    if ((options?.autoCancel ?? true) && value <= 0) off(call)
  })

  useEffect(() => {
    if (!options.key) return
    const now = Date.now()
    // 0 秒不執行
    if ('countdown' in options && options.countdown === 0) return
    else if ('end' in options && options.end <= now) return
    cache.current.end = 'countdown' in options ? now + options.countdown * 1000 : options.end
    cache.current.value = Math.max(0, Math.floor((cache.current.end - now) * 0.001))
    // 註冊倒數
    on(call)
    if (options.immediate ?? true) call(Date.now(), true)
    // 移除註冊
    return () => off(call)
  }, [options.key, call])

  return {
    // 繼續
    resume: () => {
      // 沒有暫停過
      if (!cache.current?.pause) return
      // 恢復
      const pauseTime = Date.now() - cache.current.pause
      cache.current.end += pauseTime
      cache.current.value = Math.max(0, Math.floor((cache.current.end - Date.now()) * 0.001))
      cache.current.pause = undefined
      on(call)
      if (options.immediate ?? true) call(Date.now())
    },
    // 暫停
    pause: () => {
      cache.current.pause = Date.now()
      off(call)
    },
    call,
    cache,
  }
}

/**
 * 訂閱統一處理的計時器
 */
export const useTimer = <T = Record<string, any>>(
  // 計時每秒的 callback
  callback: (
    // 當前時間戳
    time: number,
    // 保存數據
    meta?: T,
  ) => void,
  // 設定
  options: {
    // 觸發重新計算用的 key, null | undefined 就不會觸發 callback
    key?: string | number | null
    // 保存數據用
    meta?: T
  },
) => {
  const cache = useRef<T>({} as T)

  /** 開始 */
  const start = useMemoizedFn(() => on(call))
  /** 關閉 */
  const pause = useMemoizedFn(() => off(call))
  /** 計時 */
  const call = useMemoizedFn((time: number) => callback?.(time, options?.meta))

  useEffect(() => {
    if (!options.key) return
    on(call)
    return () => off(call)
  }, [options.key])

  return {
    call,
    start,
    pause,
    cache,
  }
}
