import pako from 'pako'

/** 物件轉 gzip */
export const toGzip = (data: Record<any, any>) => {
  return Buffer.from(pako.gzip(JSON.stringify(data))).toString('base64')
}

/** gzip 轉回物件 */
export const parseGzip = <T = any>(data: string) => {
  try {
    return JSON.parse(pako.ungzip(Buffer.from(data, 'base64'), { to: 'string' })) as T
  } catch {
    return undefined
  }
}
