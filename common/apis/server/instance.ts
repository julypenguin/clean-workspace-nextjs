import axios from 'axios'
import { Platform } from '@model/platform'

/** Server 用的 axios 實體 */
export const ServerAPI = axios.create({
  baseURL: Platform.API_URL,
  timeout: 5 * 1000,
})

/** Response Middleware */
ServerAPI.interceptors.response.use(
  function (res) {
    // 解構
    return res.data
  },
  function (error) {
    return Promise.reject(error)
  },
)
