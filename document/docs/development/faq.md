# FQA

> 常見問題

## 數值單位, 千分位, 小數點

> 都在 `/common/utils` 目錄下

- `truncateToDecimals` 取到 N 小數，不進也不退位
- `floorToNDecimals` 無條件捨去到 N 小數
- `ceilToNDecimals` 無條件進位到 N 小數
- `roundToNDecimals` 四捨五入到 N 小數
- `calculate` 相當於 `PC` 版的 `mathWrapper`
- `formatThousandths` 千分位 + N 小數點，有 `round floor ceil` 可選，預設不進也不退位

## 商戶條件判斷

商戶條件判斷統一寫在 `/common/model/platform/custom.ts`，方便新增商戶時，只需在此處新增判斷條件即可

## 登入來源

> 登录来源（0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS）

遇到需要登入來源的使用以下方式獲取，不僅限於 `loginSrc`，`clientType` 也是，只要有 `0: Web` 的說明通常都可直接套用

```ts
useConfigStore.getState().loginSrc
```
