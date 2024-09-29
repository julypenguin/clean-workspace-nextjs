import { type AxiosRequestConfig } from 'axios'
import { SportAPI } from './client/instance'

/** 這邊放自動解析無法使用的情況 */

/** 用戶單一錢包：沒有在文件中 */
export const reqSingleWalletUserMoney = async function (this: AxiosRequestConfig | void): Promise<API_INDEX_RESOURCE_JSON.RES> {
  return SportAPI.get('/api/front/singleWallet/user/money', this || undefined)
}

/** 投注單錢包，沒有在文件中 */
export const reqSingleWalletMatchBetAdd = async function (this: AxiosRequestConfig | void, params?: API_MATCH_BET_ADD.REQ): Promise<API_MATCH_BET_ADD.RES> {
  return SportAPI.post('/api/front/singleWallet/match/bet/add', params, this || undefined)
}

/** 圖檔上傳 */
export const reqUploadImage = async function (this: AxiosRequestConfig | void, data: FormData): Promise<{ t: { path: string } }> {
  return SportAPI.post('/api/upload/image', data, {
    ...(this || undefined),
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
