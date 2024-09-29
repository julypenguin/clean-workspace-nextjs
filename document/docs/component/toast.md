# Toast

與 `UI` 是分離的，要套版型時，直接套 `model` 即可

## 使用範例

- 一般使用

```ts
toast('Toast')
```

- 設定隱藏秒數

```ts
toast('Toast', 1000)
```

## 樣式修改

- 參考初版

  ```tsx title="common/components/manager/toast/index.tsx"
  /** 全域 Toast 管理 */
  const ToastManager = memo(() => {
    const toasts = useToastStore((state) => state.toasts)
    useToastClear(toasts.length)
    /** 沒有訊息 */
    if (!toasts.length) return null
    /** 自訂樣式 */
    return <div>...</div>
  })
  ```

  掛載到需要客製的專案上

  ```tsx title="onbet/pages/_app.tsx"
  const GlobalComponent = () => {
    return (
      <>
        {/*Global Manager*/}
        <ToastManager />
      </>
    )
  }
  ```
