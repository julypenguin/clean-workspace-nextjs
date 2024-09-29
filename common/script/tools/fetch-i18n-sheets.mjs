import axios from 'axios'
import { Agent } from 'node:https'
import fs from 'node:fs'
import path from 'node:path'

const ACCOUNT = 'api_front'
const PASSWORD = '*aN7Uu9g#yzd+9hM'
const I18N_OBJECT_ID = '1276_7SBVV6JGPP0VN9GF1340JT9D3K.sh'
const I18N_PATH = path.resolve(path.dirname('.'), './common/model/i18n/locales')

/** API */
const API = axios.create({
  baseURL: 'https://chat.dsteam.vip:55566',
  httpsAgent: new Agent({
    rejectUnauthorized: false,
  }),
})

/** 獲取資料 */
const runFetchSheets = async () => {
  const auth = await API.get('/webapi/entry.cgi', {
    params: {
      api: 'SYNO.API.Auth',
      version: '3',
      method: 'login',
      account: ACCOUNT,
      passwd: PASSWORD,
      format: 'sid',
    },
  })
  const { data } = await API.get('/webapi/entry.cgi', {
    params: {
      _sid: auth.data.data.sid,
      api: 'SYNO.Office.Sheet.Snapshot',
      version: '1',
      method: 'get',
      object_id: I18N_OBJECT_ID,
    },
  })
  return Object.values(data.data.sh_1.cells)
}

/** 解析資料 */
const parseData = async (data) => {
  /**
   * 索引分別對應欄位名稱：
   * 0. 所属模块
   * 1. 編號
   * 2. 中文CN
   * 3. 英文EN
   * 4. 越南文VN
   * 5. 印尼文Indonesian
   * 6. 菲文TAGALOG
   * 7. 泰文 Thai
   * 8. 馬來文MY
   * 9. 韓文Korean
   * 10. 日文Japanese
   * 11. 葡萄牙語
   * 12. 备注
   */
  const locales = [
    { locale: 'zh', map: '2', fallback: '3' },
    { locale: 'en', map: '3', fallback: '3' },
    { locale: 'id', map: '5', fallback: '3' },
    { locale: 'vi', map: '4', fallback: '3' },
    { locale: 'th', map: '7', fallback: '3' },
    { locale: 'ko', map: '9', fallback: '3' },
    { locale: 'br', map: '11', fallback: '3' },
  ]
  // 0 是欄位名稱
  const language = locales.reduce((res, item) => ({ ...res, [String(item.locale)]: { v2: {} } }), {})

  data.slice(1).forEach((row, index) => {
    const i18nKey = row['1']?.v || ''
    // 有「編號欄位」未設置
    if (!i18nKey?.trim()?.length) {
      Object.values(row).some((item) => !!item?.v) &&
        console.log(
          `[${index}]編號未設置`,
          Object.values(row)
            .filter((item) => !!item?.v)
            .map((item) => item.v),
        )
      return
    }
    locales.forEach(({ locale, map, fallback }) => {
      // assign
      const value = String(row[map]?.v || row[fallback]?.v || '')
      if (value) language[locale].v2[i18nKey] = value
    })
  })
  // 保存
  for (const locale in language) {
    const filePath = path.join(I18N_PATH, locale, 'v2.json')
    await fs.promises.writeFile(filePath, JSON.stringify(language[locale], null, 2))
  }
}

/** IIFE */
try {
  // 下載
  const sheetData = await runFetchSheets()
  // 解析
  await parseData(sheetData)
  // 結束
  console.log('i18n 建構完成')
} catch (error) {
  console.error('ERROR', String(error))
}
