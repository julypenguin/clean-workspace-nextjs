import { md5 as JsMD5 } from 'js-md5'
import { add, type BigNumber, bignumber, ceil, divide, floor, isNumber, multiply, number, pow, round, subtract } from 'mathjs'

/**
 * 獲取裝置
 * @test 有單元測試
 */
export const getUserAgent = () => {
  try {
    return 'userAgent' in navigator ? navigator?.userAgent || 'Unknown' : 'Unknown'
  } catch (e) {
    return ''
  }
}

/**
 * 裝置類型
 * @test 有單元測試
 */
export const getDevice = (): 'PC' | 'iOS' | 'Android' => {
  const u = getUserAgent()
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // 判断是否是 android终端
  const isIOS = !!RegExp(/iPhone|iPad|iPod/).exec(u) // 判断是否是 iOS终端
  if (isAndroid) {
    return 'Android'
  } else if (isIOS) {
    return 'iOS'
  } else {
    return 'PC'
  }
}

/**
 * 複製
 * @test 有單元測試
 */
export const copyText = (text: string) => {
  const selectRange = (textarea: HTMLTextAreaElement) => {
    try {
      const range = document.createRange()
      range.selectNodeContents(textarea)
      const selection = window.getSelection()
      selection?.removeAllRanges()
      selection?.addRange(range)
      textarea?.setSelectionRange(0, 999999)
    } catch {
      textarea.select()
    }
  }
  try {
    /** 新版裝置 */
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(console.warn)
    } else {
      /** 舊版裝置 */
      const iOS = navigator?.userAgent?.match(/ipad|iphone/i)
      // create textarea
      const textarea = document.createElement('textarea')
      textarea.classList.add('fixed', 'top-0', 'opacity-0')
      textarea.value = text
      document.body.appendChild(textarea)
      // select range
      if (iOS) {
        selectRange(textarea)
      } else {
        textarea.select()
      }
      // copy and destroyed
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    // 成功
    return true
  } catch {
    // 失敗
    return false
  }
}

/**
 * new URL 格式錯誤會中斷，避免中斷
 * @test 有單元測試
 */
export const createUrl = (path: string, origin?: string) => {
  try {
    if (!path) return undefined
    if (origin) return new URL(path, origin)
    return new URL(path)
  } catch {
    return undefined
  }
}

/**
 * JSON 解析防呆
 * @test 有單元測試
 */
export const parseJson = <T = any>(jsonString: string, _default?: T) => {
  try {
    if (!jsonString) return _default
    return JSON.parse(jsonString)
  } catch {
    return _default
  }
}

/**
 * 生成 UUID
 * @test 有單元測試
 */
export const createUUID = () => {
  const rand = (n: number) => (Math.random().toString(36) + Math.random().toString(36).substring(2)).slice(2, n + 2)
  return `${rand(8)}-${rand(4)}-${rand(4)}-${rand(4)}-${rand(12)}`
}

/**
 * 返回到小數 N 位，不退位也不進位
 * @test 有單元測試
 */
export const truncateToDecimals = (
  // 數值
  number: number | string,
  // 保留位數
  decimals = 2,
  // 刪除尾數 0
  trimZero = true,
): string => {
  const factor = Math.pow(10, decimals)
  if (trimZero) return String(Math.trunc(Number(number) * factor) / factor)
  return (Math.trunc(Number(number) * factor) / factor).toFixed(decimals)
}

/** floor 到小數點 N 位 */
export const floorToNDecimals = (num: number, N: number, trimZero = false): string => {
  if (!isNumber(num)) num = 0
  if (trimZero) return String(floor(number(num), N))
  return floor(number(num), N).toFixed(N)
}

/** ceil 到小數點 N 位 */
export const ceilToNDecimals = (num: number, N: number, trimZero = false): string => {
  if (!isNumber(num)) num = 0
  if (trimZero) return String(ceil(number(num), N))
  return ceil(number(num), N).toFixed(N)
}

/** round 到小數點 N 位 */
export const roundToNDecimals = (num: number, N: number, trimZero = false): string => {
  if (!isNumber(num)) num = 0
  if (trimZero) return String(round(number(num), N))
  return round(number(num), N).toFixed(N)
}

/** 數值計算: PC 版的 mathWrapper */
export const calculate = (type: 'add' | 'subtract' | 'multiply' | 'divide', ...args: Array<string | number>) => {
  const numbers = args.map((num) => bignumber(num))
  switch (type) {
    case 'add':
      return add(...numbers).toNumber()
    case 'subtract':
      return subtract(numbers[0], numbers[1]).toNumber()
    case 'multiply':
      return multiply(...numbers).toNumber()
    case 'divide':
      return number(divide(numbers[0], numbers[1]) as BigNumber)
  }
}

/**
 * 金額格式化千分位
 * @test 有單元測試
 */
export const formatThousandths = (
  // 金額
  amount: number | string,
  // 保留位數
  decimals = 0,
  // 刪除尾數 0
  trimZero = true,
  // 模式
  mode?: 'round' | 'floor' | 'ceil',
): string => {
  let amountStr = ''
  // 模式
  if (mode === 'round') amountStr = roundToNDecimals(Number(amount), decimals, trimZero)
  else if (mode === 'floor') amountStr = floorToNDecimals(Number(amount), decimals, trimZero)
  else if (mode === 'ceil') amountStr = ceilToNDecimals(Number(amount), decimals, trimZero)
  else amountStr = truncateToDecimals(amount, decimals, trimZero)
  // 數值千分位
  const split = amountStr.split('.')
  split[0] = split[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return split.join('.')
}

/**
 * md5 封裝一層，以後才好換套件
 */
export const md5 = (str: string) => {
  return JsMD5(str)
}

/**
 * 統計: 階層
 * @return n!
 */
export const getFactorial = function (n: number): number {
  return Array.from(Array(n).keys())
    .map((item) => ++item)
    .reduce((a, b) => a * b)
}

/**
 * 組合 N 取 M
 * @return n!/(n-m)!m!
 */
export const getCombination = function (n: number, m: number): number {
  if (n < m) return 0
  if (n === m || m === 0) return 1
  return Math.floor(getFactorial(n) / (getFactorial(n - m) * getFactorial(m)))
}

/**
 * 生成一個陣列的所有組合
 * @return 陣列所有組合的陣列
 * @example
 * getCombinations([1, 2, 3], 2) // [[1,2], [1,3], [2,3]]
 */
export const getCombinationByArray = function <T>(arr: T[], m: number): T[][] {
  if (m === 0) return [[]]
  if (arr.length < m) return []
  return arr.flatMap((item, index) => getCombinationByArray(arr.slice(index + 1), m - 1).map((combination) => [item, ...combination]))
}

/** 產生 url.search 字串 */
export const createQueryString = (record: Record<string, string | number | null | undefined>, prefix = '?') => {
  const url = createUrl(document.URL)
  const params = url?.searchParams || new URLSearchParams()
  for (const [name, value] of Object.entries(record)) {
    if (value !== null && value !== undefined) params.set(name, String(value))
    else params.delete(name)
  }
  return `${prefix}${params.toString()}`
}
