# Utils

> 一個專案很難避免重複建立，盡可能的列出常用且已經存在的，避免重複

:::danger
這裡只放非常常用，或是在 `model` 中沒有相關分類的
:::

位置: `/common/utils/*`

## getTimeDataBySeconds 秒數轉物件

> 帶入時間秒數，回傳時間格式

```ts
/**
 * 秒數轉時間物件
 */
type getTimeDataBySeconds = (
  sec: number, // 總秒數
  normal = false, // 是否要正常時間化，hh 不會超過 24, mm ss 不會超過 60
) => {
  value: number // 剩餘秒數
  DDhhmmss: string // 格式化字串 00:00:00:00 依照 normal 選項決定突破值
  hhmmss: string // 格式化字串 00:00:00 依照 normal 選項決定突破值
  mmss: string // 格式化字串 00:00 依照 normal 選項決定突破值
  day: number // 日
  hour: number // 時
  minute: number // 分
  second: number // 秒
}
```

第二個參數決定是否突破時間格式，例如 `hh:mm:ss` 會顯示 `06:56:07`，而不是 `342:56:07`

```ts
getTimeDataBySeconds(1234567).hhmmss // 342:56:07
getTimeDataBySeconds(1234567, true).hhmmss // 06:56:07
```

## formatThousandths 數值加上千分位

> 有單元測試

```ts
/**
 * 金額格式化千分位
 * @param {number | string} amount 金額
 * @param {number} decimals 小數點位數
 * @param {boolean} trimZero 是否去除小數點後多餘的 0
 * @param {undefined | 'round' | 'floor' | 'ceil'} mode 取整模式，不給就是不做任何進位退位，單純刪除尾數
 */
type formatThousandths = (amount: number | string, decimals = 2, trimZero = true, mode?: 'round' | 'floor' | 'ceil') => string
```

```ts
expect(formatThousandths(0.9, 2)).toBe('0.9')
expect(formatThousandths(0.9, 2, false)).toBe('0.90')
expect(formatThousandths(1999999.99, 2)).toBe('1,999,999.99')
expect(formatThousandths(999.0000199, 5, false)).toBe('999.00001')
// round
expect(formatThousandths(0.005, 2, false, 'round')).toBe('0.01')
// floor
expect(formatThousandths(99999.1, 0, true, 'floor')).toBe('99,999')
// ceil
expect(formatThousandths(99999.1, 0, true, 'ceil')).toBe('100,000')
```

## 取到小數 N 位

- `truncateToDecimals` 不進不退

- `floorToNDecimals` 退位

- `ceilToNDecimals` 進位

- `roundToNDecimals` 四捨五入

以上四種用法一樣

```ts
/**
 * 取到小數 N 位
 * @param {number} num 數字
 * @param {number} N 小數位數
 * @param {boolean} trimZero 是否去除小數點後多餘的 0
 */
type format = (num: number, N: number, trimZero = false) => string
```

## copyText 複製訊息

```ts
/**
 * @return {boolean} 是否複製成功
 */
type copyText = (content: string) => boolean
```

## getDevice 當前裝置

```ts
type getDevice = () => 'PC' | 'iOS' | 'Android'
```

## createUUID 亂數 UUID

標準 `8-4-4-4-12` 碼格式

```ts
type createUUID = () => string
```

## GZIP

### toGzip

> 物件轉 `gzip`

```ts
type toGzip = (data: Record<any, any>) => string
```

### parseGzip

> `gzip` 轉回物件

```ts
type parseGzip = (data: string) => Record<any, any>
```

## 圖片壓縮

> 使用 `compressorjs` 壓縮圖片

```ts
type compressorImageFile = (file: File | Blob, options: Compressor.Options = {}) => Promise<File | Blob>
```

## 一些已經包 try catch 的函式

### getUserAgent

> `navigator.userAgent` 不怕報錯

### createUrl

> `new URL` 不怕報錯

### parseJson

> `JSON.parse` 不怕報錯
