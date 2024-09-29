# Commands

> 本專案所有指令

## 啟動不同商戶

```sh
yarn dev {PLATFORM}
```

## 編譯不同商戶

```sh
yarn build {PLATFORM}
```

## 啟動服務

```sh
# 需要先編譯
yarn start {PLATFORM}
```

## 代碼規範檢測

```sh
yarn lint
```

## 單元測試

```sh
yarn test
```

## 分析編譯 chunks 大小

```sh
ANALYZE=true yarn build {PLATFORM}
```

## 解析後端 `API` 文件

### 體育 API

```sh
yarn api
```

### 聊天室 API

```sh
yarn chat
```

### 體育 Socket Event.proto

```sh
yarn proto
```

## 更新語系資訊

```sh
yarn i18n
```

### 新增語系

1. `/common/model/i18n/locales` 新增語系資料夾

2. `common/components/core/CommonProvide.tsx` 配置 `LocaleImport` `LocaleMap`

3. `env` 中配置 `NEXT_PUBLIC_LOCALES`

## 新增商戶

- 指令，樣式需要看情況更新 `{PLATFORM}/tailwind.config.ts`

```sh
yarn platform
```

## 新增頁面

> 單純新增一個 page 範例

```sh
# 到要新增的 templates/{THEME} 模版中下指令
cd ./common/templates/{THEME}
yarn page
```

## SpriteSheet 產生器

> 會把指定目錄下的所有圖檔合併成一張 `SpriteSheet`，並且產生對應的 `sprite-sheets.tsx` 檔

```sh
yarn sprite {ASSETS_PATH}
```

## Spacing 單位 `w-10` => `w-40`

為了配合 `UI` 設計搞中的單位，例如 `100px` 就是 `w-100`，特地把所有單位都改為 `1:1`

但是 `Shadcn` 的組件都是 `1:4` 所以寫了一個自動 `x 4` 的工具

```sh
yarn rem {FILE_PATH}
```

## 解析 @common/model 所有檔案

> output: ./document/docs/model.md

```sh
yarn model
```
