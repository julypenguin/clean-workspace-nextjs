# SEO

> SEO 處理機制

## Next SEO

> 使用 [next-seo](https://github.com/garmeeh/next-seo)

- 頁面配置 `SEO`，配置在 `/common/components/core/SEO.tsx

  ```ts
  const { getStaticPaths, getStaticProps, getServerSideProps } = GenerateSideProps({
    props: {
      // 配置的是 key 不是值
      seo: { title: 'v2.A001', description: 'v2.A001' },
    },
  })
  ```

:::warning
暫不提供 `server` 階段獲取翻譯的方式，會過於複雜，只配置 `key` 讓 `Provider` 自動獲取翻譯
:::

## sitemap

> 使用 [next-sitemap](https://www.npmjs.com/package/next-sitemap)

- 自動生成 `sitemap`，配置在 `{PLATFORM}/next-sitemap.config.mjs`

- 已經掛在 `postbuild`，該指令是 `build` 結束後會自動執行的指令

```json
{
  "script": {
    "postbuild": "npx next-sitemap --config next-sitemap.config.mjs"
  }
}
```

- `SSG` 編譯注意事項，編譯需要多一個複製 `public/*` 到 `out/` 的步驟

```json
{
  "scripts": {
    "postbuild": "npx next-sitemap --config next-sitemap.config.mjs && cp -r ./public/* ./out/"
  }
}
```
