import axios from 'axios'
import { Agent } from 'node:https'
import { load } from 'cheerio'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

// 聊天室
const OPT = {
  URL: 'https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/',
  DECLARE_PATH: path.resolve(path.dirname('.'), './common/@types/chat-apis.d.ts'),
  METHODS_PATH: path.resolve(path.dirname('.'), './common/apis/chat.ts'),
}

/** API */
const API = axios.create({
  baseURL: '',
  httpsAgent: new Agent({
    rejectUnauthorized: false,
  }),
})

/** 獲取資料 */
const runFetchSheets = async () => {
  const html = await API.get(OPT.URL)
  const $ = load(html.data)
  const results = []

  // 過濾空白
  const replaceSpace = (text) => text.replace(/&nbsp;/g, '')

  Array.from($('#content > div.sect1')).forEach((sectionDom) => {
    const section = $(sectionDom)

    // 大標題
    const title = replaceSpace(section.find('h2 > a.link')?.text() || '')

    // 子項目
    const subs = section.find('div.sect2')
    Array.from(subs).forEach((subDom) => {
      const sub = $(subDom)
      const children = Array.from(sub.find('div, table'))

      /** 請求方式 */
      const typeText = sub
        ?.find('.paragraph > p > strong')
        .filter(function () {
          return $(this).text().startsWith('Type:')
        })
        .parent()
        .text()
        .replace('Type:', '')
        .trim()

      /** 子標題 */
      const result = {}
      const subTitle = replaceSpace(sub?.find('h3 > a.link')?.text() || '')
      result.group = title.replace(/ /g, '')
      result.sub = subTitle.replace(/ /g, '')
      result.type = typeText
      result.see = OPT.URL + encodeURIComponent(replaceSpace(sub?.find('h3 > a.link')?.attr('href') || '')).replace(/%23/, '#')
      result.url = replaceSpace(sub?.find('a.bare')?.text() || '')
        .replace(/ /g, '')
        .replace(/;.*$/, '')

      /** 請求參數 */
      const findRequestIndex = children.findIndex((dom) => /Request-parameters/i.test($(dom).html()))
      // 沒有就是不需要請求參數
      if (findRequestIndex > -1) {
        // 請求參數標題下方的表格就是參數列表，所以 +1
        const requestHeader = $(children?.[findRequestIndex + 1])
        const header = Array.from(requestHeader.find('thead > tr')?.find('th') || [])?.map((th) => $(th)?.text()?.trim()?.toLowerCase())
        const rows = Array.from(requestHeader.find('tbody > tr'))?.map((rowDom) => Array.from($(rowDom).find('td')).map((td) => $(td)?.text()))
        result.request = rows.map((cols) => cols.reduce((res, col, index) => ({ ...res, [header[index]]: col }), {}))
      }

      /** 返回參數 */
      const findResponseIndex = children.findIndex((dom) => /Response-fields/i.test($(dom).html()))
      // 沒有就是不需要返回參數
      if (findResponseIndex > -1) {
        // 請求參數標題下方的表格就是參數列表，所以 +1
        const requestHeader = $(children?.[findResponseIndex + 1])
        const header = Array.from(requestHeader.find('thead > tr')?.find('th') || [])?.map((th) => $(th)?.text()?.trim()?.toLowerCase())
        const rows = Array.from(requestHeader.find('tbody > tr'))?.map((rowDom) => Array.from($(rowDom).find('td')).map((td) => $(td)?.text()))
        result.response = rows.map((cols) => cols.reduce((res, col, index) => ({ ...res, [header[index]]: col }), {}))
      }
      results.push(result)
    })
  })

  return results
}

const MatchDynamicPath = /\{[^}]*}/g

/** 解析資料 */
const parseData = async (result) => {
  try {
    const contents = []
    const apis = []
    // 新增空白
    const space = (n) => ' '.repeat((n - 1) * 2)
    // 過濾換行
    const clearRN = (str) => str.replace(/\n/g, '')
    // 拼裝陣列或物件
    const contactProperty = (item, index, list, tab) => {
      const spaceCount = tab + 1
      const result = [`${space(spaceCount)}// ${clearRN(item.description)}`]
      const field = (item.field || item.parameter).replace(/^└─|^ +└─/, '')
      switch (item.type) {
        case 'int32':
        case 'double':
        case 'int64': {
          result.push(`${space(spaceCount)}${field}${item.required === 'false' ? '?' : ''}: number`)
          break
        }
        case 'array':
        case 'object':
        case 'map': {
          // object key value
          const type = [`{`]
          if (list.length > index) {
            const currentKeyIndex = (item.field || item.parameter).indexOf('└─')
            let idx
            for (idx = index + 1; idx < list.length; ++idx) {
              const child = list[idx]
              const childKeyIndex = (child.field || child.parameter).indexOf('└─')
              if ((currentKeyIndex < 0 && childKeyIndex > -1) || (currentKeyIndex >= 0 && currentKeyIndex < childKeyIndex)) {
                const [property, jump] = contactProperty(child, idx, list, spaceCount)
                if (jump - idx !== 1) idx = jump
                type.push(property)
              } else {
                idx -= 2
                break
              }
            }
            index = idx
          }
          type.push(`}`)
          switch (item.type) {
            case 'array': {
              type[0] = `${space(spaceCount)}${field}${item.required === 'false' ? '?' : ''}: Array<${type[0]}`
              type[type.length - 1] = `${space(spaceCount)}${type[type.length - 1]}>`
              break
            }
            case 'object': {
              type[0] = `${space(spaceCount)}${field}${item.required === 'false' ? '?' : ''}: ${type[0]}`
              type[type.length - 1] = `${space(spaceCount)}${type[type.length - 1]}`
              break
            }
            case 'map': {
              type[0] = `${space(spaceCount)}${field}${item.required === 'false' ? '?' : ''}: { [key: string]: ${type[0]}`
              type[type.length - 1] = `${space(spaceCount)}${type[type.length - 1]}}`
              break
            }
          }
          if (type.length > 2) result.push(type.join('\n'))
          else result.push(`${space(spaceCount)}${field}${item.required === 'false' ? '?' : ''}: ${item.type === 'array' ? 'any[]' : 'any'}`)
          break
        }
        default: {
          // 後端格式亂打...
          if (/(start|end)Time|todayStart|now/.test(field)) result.push(`${space(spaceCount)}${field}${item.required === 'false' ? '?' : ''}: ${item.type} | number`)
          else result.push(`${space(spaceCount)}${field}${item.required === 'false' ? '?' : ''}: ${item.type}`)
          break
        }
      }
      return [result.join('\n'), index + 1]
    }
    // 解析屬性
    const createProperty = (res, list) => {
      let currentIndex = 0
      list.map((item, index) => {
        if (currentIndex > index) return
        const [field, jump] = contactProperty(item, index, list, 2)
        currentIndex = jump
        res.push(field)
      })
    }

    result.map((api) => {
      const type = []
      const name = api.url
        .replace(/(.*)\/api\/chat\/front\//i, '')
        .replace(/[^a-z\d]/gi, '_')
        .replace(/_+/g, '_')
        .replace(/_$/g, '')
        .toUpperCase()
      const apiDesc = clearRN(`${api.group}: ${api.sub}`)
      type.push(`${space(1)}// ${apiDesc}`, `${space(1)}declare namespace API_${name} {`, `${space(1)}}`)
      apis.push({
        name,
        ...api,
      })
      const isDynamicPath = MatchDynamicPath.test(api.url)

      // 路徑上有參數，但 request 中不存在
      if (isDynamicPath) {
        const dynamicParams = decodeURIComponent(api.url)
          .match(MatchDynamicPath)
          .map((v) => v.trim().replace(/[{}]/g, ''))
        const reqExtra = dynamicParams.filter((p) => !api.request?.some?.((n) => n.parameter === p))
        if (reqExtra?.length) {
          reqExtra.forEach((key) => {
            api.request?.push({
              parameter: key,
              type: 'string',
              description: '網址上的參數',
              required: 'true',
              since: '-',
            })
          })
        }
      }

      if (api.request?.length) {
        const request = [`${space(2)}// ${apiDesc}`, `${space(2)}type REQ = {`]
        createProperty(
          request,
          api.request.filter((item) => !/No\sfield|any\sobject/.test(item.parameter)),
        )
        request.push(`${space(2)}}`)
        type.splice(2, 0, request)
      }

      if (api.response?.length) {
        const response = [`${space(2)}// ${apiDesc}`, `${space(2)}type RES = {`]
        createProperty(
          response,
          api.response.filter((item) => !/No\sfield|any\sobject/.test(item.field)),
        )
        response.push(`${space(2)}}`)
        type.splice(2, 0, response)
      }

      contents.push(type.flat())
    })

    // 存檔
    await fs.promises.writeFile(OPT.DECLARE_PATH, contents.flat().join('\n').replace(/ /g, ''))
    // 排版
    await prettier(OPT.DECLARE_PATH)

    return apis
  } catch (e) {
    console.error('fail', String(e))
  }
}

/** 排版 */
const prettier = async (path) => {
  try {
    execSync(`./node_modules/.bin/prettier --write ${path}`)
  } catch (e) {
    throw e
  }
}

/** 受 eleven 啟發：自動產出所有 api method 逐個 export，Webpack 會按需加載 */
const createMethods = async (apis) => {
  const result = [
    `/** 這隻檔案為自動生成，請勿更動 */`,
    `import { type AxiosRequestConfig } from "axios";`,
    `import { ChatAPI } from "./client/instance";`,
    `export { cancelRequest, useSWR } from "./utils";\n`,
  ]
  const checkExist = new Set()
  apis.forEach((api) => {
    let { pathname } = new URL(api.url)
    // 網址上的參數
    const isDynamicPath = MatchDynamicPath.test(api.url)
    // 方法名
    const name = decodeURIComponent(pathname)
      .replace(/\/api\/chat\/front/, '/chat') // /api/chat/front => /chat
      .replace(/\/api\/front\/|[^a-zA-Z\d/0-9]/g, '')
      .replace(/(\/\{.*})/g, '')
      .split('/')
      .map((item) => item.replace(/^\w/, (c) => c.toUpperCase()))
      .join('')
    // 過濾重複
    if (checkExist.has(name)) return
    checkExist.add(name)
    // 生成函式
    const declare = `API_${api.name}`
    const method = api.type.toLowerCase()
    let params = api.request ? `, params?: ${declare}.REQ` : ''
    const response = api.response ? `${declare}.RES` : `null`
    let func = `/**
       * ${api.group.replace(/\n/g, '')}
       * ${api.sub.replace(/\n/g, '')}
       * @see ${api.see}
       */\n`
    if (method === 'post') {
      if (isDynamicPath) {
        const dynamicParams = decodeURIComponent(pathname)
          .match(MatchDynamicPath)
          ?.map((v) => v.trim().replace(/[{}]/g, ''))
        func += [
          `export const req${name} = async function (this: AxiosRequestConfig | void${params}): Promise<${response}> {`,
          `const { ${dynamicParams.join(',')} } = params || {}`,
          `return (this?.instance || ChatAPI).post(\`${decodeURIComponent(pathname).replace(/\{/g, '${').replace(/\/$/, '')}\`${params ? ', params' : ', null'}, this || undefined);`,
          `}\n`,
        ].join('\n')
      } else {
        func += [
          `export const req${name} = async function (this: AxiosRequestConfig | void${params}): Promise<${response}> {`,
          `return (this?.instance || ChatAPI).post("${pathname.replace(/\/$/, '')}"${params ? ', params' : ', null'}, this || undefined);`,
          `}\n`,
        ].join('\n')
      }
    } else if (method === 'get') {
      if (isDynamicPath) {
        const dynamicParams = decodeURIComponent(pathname)
          .match(MatchDynamicPath)
          ?.map((v) => v.trim().replace(/[{}]/g, ''))
        func += [
          `export const req${name} = async function (this: AxiosRequestConfig | void${params}): Promise<${response}> {`,
          `const { ${dynamicParams.join(',')} } = params || {}`,
          `return (this?.instance || ChatAPI).get(\`${decodeURIComponent(pathname).replace(/\{/g, '${').replace(/\/$/, '')}\`, ${params ? '{ ...this, params }' : 'this || undefined'});`,
          `}\n`,
        ].join('\n')
      } else {
        func += [
          `export const req${name} = async function (this: AxiosRequestConfig | void${params}): Promise<${response}> {`,
          `return (this?.instance || ChatAPI).get("${pathname.replace(/\/$/, '')}", ${params ? '{ ...this, params }' : 'this || undefined'});`,
          `}\n`,
        ].join('\n')
      }
    }
    result.push(func)
  })
  // 保存
  await fs.promises.writeFile(OPT.METHODS_PATH, result.join('\n'))
  // 排版
  await prettier(OPT.METHODS_PATH)
}

/** IIFE */
try {
  // 下載
  const data = await runFetchSheets()
  // 解析
  const apis = await parseData(data)
  // 受 eleven 啟發：自動產出所有 api method 逐個 export，Webpack 會按需加載
  await createMethods(apis)
  // 結束
  console.log('chat-apis.d.ts 建構完成')
} catch (error) {
  console.error('ERROR', String(error))
}
