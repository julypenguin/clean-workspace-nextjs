# Types

> 基本型別

## 注意事項

- `/common/model/*` 位置下的所有 `ts` 不允許 `any` 屬性

## 包裝型別

> 多使用，習慣後會很好追問題

### OptionItem\<META>

選項類型都用這個為基底，用於 `select` `tabs` 被選中時，可以反推 `API` 原始物件

```ts
const options: OptionItem<API_SPORT_COUPON_MENU.RES['rows'][0]>[] = [
  {
    label: 'UI 文字',
    value: '唯一值',
    meta: {
      /* API 數據 */
      /* 也能用拿判斷選項要顯示的 icon，不用再額外定義屬性，直接塞 API 原始數據 */
    },
  },
]
const value = options.find((item) => item.value === '唯一值') // 這樣就能統一 UI 格式，又能各自有各自的 API 數據
```

### Field\<META>

欄位類型統一使用這個，用於表單處理

位置 `import { Field, FORM_TYPE } from '@model/user/form/constants'`

版型只要依型別實作出所有 `FORM_TYPE` 組件，就能直接套用

需要擴充時使用 `meta` 屬性

```tsx
const fields = useMemo<Field</* 擴充型別 */>[]>(() => {
  return [
    {
      name: 'account',
      type: FORM_TYPE.INPUT,
      inputAttr: {
        maxLength: 5,
      },
      meta: {
        // ... 隨意擴充
      },
    },
    {
      name: 'password',
      type: FORM_TYPE.PASSWORD,
      inputAttr: {
        maxLength: 5,
      } as Extract<Field, { type: FORM_TYPE.PASSWORD }>, // 也可強制指定欄位類型
      meta: {
        // ... 隨意擴充
      },
    },
  ]
}, [])

fields.map((field) => {
  return <Component is={FiledComponents.get(field.type)} key={field.name} form={form} field={field} />
})
```

### InfiniteItem\<TYPE, META>

列表複雜的無限捲動都用這個為基底

無限滾動通常渲染的都是扁平化數據，所以包裝一層 `__infinity` 可以用於判斷渲染類型

用 `OptionItem` 包也可以 😅

- 範例

  ```ts
  /** 聯賽無限捲動類型 */
  export type InfiniteList = Array<
    // 聯賽標題
    | InfiniteItem<'league', Partial<API_MATCH_ODDS_SIMPLE_LIST.RES['t']['leagueOdds'][0]>>
    // 聯賽賽事 | 推薦賽事 | 推薦賽事 V2
    | InfiniteItem<'match', Partial<API_MATCH_ODDS_SIMPLE_LIST.RES['t']['leagueOdds'][0]['matchOdds'][0]>>
  >
  ```

  ```tsx
  <Virtuoso
    useWindowScroll
    totalCount={rows?.length}
    overscan={1024}
    itemContent={(index: number) => {
      const item: Array<InfiniteList[0]> = rows[index]
      return (
        <div data-sid="85044044">
          {item.__infinity === 'league' && <h1>{item?.league?.name || ''}</h1>}
          {item.__infinity === 'match' && <Match key={item?.matchInfo?.id} id={String(item?.matchInfo?.id)} />}
        </div>
      )
    }}
  />
  ```

:::tip
這一篇挺難，允許跳過 😅
:::

## 全域型別

檔案位置：`/common/@types`

## 工具型別

> 常用分享

### Pick

抽出屬性

```ts
type Type = { a: number; b: string }
type A = Pick<Type, 'a'>
// A = { a: number }
```

### Omit

刪除屬性

```ts
type Type = { a: number; b: string }
type A = Omit<Type, 'a'>
// A = { b: string }
```

### Partial

讓所有屬性變成可選

```ts
type Type = { a: number; b: string }
type A = Partial<Type>
// A = { a?: number, b?: string }
```

### Required

讓所有屬性變成必填

```ts
type Type = { a?: number; b?: string }
type A = Required<Type>
// A = { a: number, b: string }
```

### Readonly

讓所有屬性變成唯讀

```ts
type Type = { a: number; b: string }
type A = Readonly<Type>
// A = { readonly a: number; readonly b: string }
```

### Record

創建物件類型型別

```ts
type A = Record<'a' | 'b', number>
// A = { a: number; b: number }
type B = Record<string, number>
// B = { [key: string]: number }
type B = Record<string, number | string>
// B = { [key: string]: number | string }
```

### Exclude

排除屬性

```ts
type Type = { type: 'a' } | { type: 'b' }
type A = Exclude<Type, 'a'>
// A = { type: 'b' }
```

### Extract

提取屬性

```ts
type Type = { type: 'a' } | { type: 'b' }
type A = Extract<Type, { type: 'a' }>
// A = { type: 'a' }
```

### NonNullable

排除 `null` `undefined`

```ts
type Type = number | null | undefined
type A = NonNullable<Type> // 等同 Exclude<Type, null | undefined>
// A = number
```

### ReturnType

取得函數返回值

```ts
function fn() {
  return 1
}
type A = ReturnType<typeof fn>
// A = number
```

### Parameters

取得函數參數

```ts
function fn(a: number, b: string) {
  return 1
}
type A = Parameters<typeof fn>
// A = [number, string]
```
