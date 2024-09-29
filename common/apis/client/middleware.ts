import { SportAPI, ChatAPI } from '@common/apis/client/instance'
import axios, { AxiosInstance } from 'axios'
import { alerts, router, toast } from '@model'
import { logout } from '@model/user/useUserStore'
import { ROUTES } from '@model/platform/routes'
import { autoCancelMap, cancelRequest } from '@common/apis/utils'

/**
 * 攔截器
 */
const defineMiddleware = (instance: AxiosInstance) => {
  /** Request Middleware */
  instance.interceptors.request.use(async function (config) {
    // auto cancel
    if (!config?.signal && (config.autoCancel === undefined || config.autoCancel)) {
      const key = typeof config.autoCancel === 'string' ? config.autoCancel : config.url + (config.data || config.params ? JSON.stringify(config.params) : '')
      // 自動取消上一次
      cancelRequest(key)
      const controller = new AbortController()
      autoCancelMap[key] = controller
      config.cancelControllerKey = key
      config.signal = controller.signal
    }
    return config
  })

  /** Response Middleware */
  instance.interceptors.response.use(
    function (res) {
      // 已請求結束，刪除自動取消
      if (!res.config?.signal && res?.config?.cancelControllerKey) delete autoCancelMap[res.config.cancelControllerKey]
      // 解構
      return res.data
    },
    function (error) {
      // 取消不處理任何事
      if (axios.isCancel(error)) return Promise.reject(error)
      // 無視錯誤處理: 通常用於避免自動登出或影響邏輯的判斷
      if (error?.config?.ignoreError) return Promise.resolve(error)
      // 已請求結束，刪除自動取消
      if (!error?.config?.signal && error?.config?.cancelControllerKey) delete autoCancelMap[error.config.cancelControllerKey]
      // 錯誤訊息
      const errorMessage = error?.response?.data?.msg || String(error)
      /** 自動顯示 Toast */
      if (error.config?.toast) {
        if (error?.config?.toast === true) toast(errorMessage)
        else if (typeof error?.config?.toast === 'function') toast(error?.config?.toast(error))
        else toast(error.config.toast || errorMessage)
      }
      /** 自動顯示 Alert */
      if (error.config?.alerts) {
        if (error?.config?.alerts === true) alerts({ message: errorMessage })
        else if (typeof error?.config?.alerts === 'function') alerts(error?.config?.alerts(error))
        else if (typeof error?.config.alerts === 'object' && error?.config.alert !== null) alerts(error.config.alert)
      }
      /** 帳號在異地登出 */
      if (/1004|1005/.test(error?.response?.data?.code)) {
        logout() // 直接登出
        alerts({
          key: String(error?.response?.data?.code),
          message: String(error?.response?.data?.msg || error),
          onClose: ({ close }) => {
            router?.push?.(ROUTES.HOME).catch(console.warn)
            close?.()
          },
        })
      }
      return Promise.reject(error)
    },
  )
}

defineMiddleware(SportAPI)
defineMiddleware(ChatAPI)
