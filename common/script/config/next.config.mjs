import createBundleAnalyzer from '@next/bundle-analyzer'
import fs from 'node:fs'
import path from 'node:path'

/** 環境變數 */
const { GIT_HASH, NEXT_PUBLIC_LOCALES, NEXT_PUBLIC_LOCALE, NEXT_PUBLIC_PLATFORM, NEXT_PUBLIC_SSG } = process.env
if (process.argv.includes('dev') || process.argv.includes('build')) {
  console.log(
    'Next Config',
    Object.keys(process.env)
      .filter((key) => key.startsWith('NEXT_PUBLIC_'))
      .reduce((acc, key) => ({ ...acc, [key]: process.env[key] }), { GIT_HASH }),
  )
}

/** 編譯分析 */
const withBundleAnalyzer = createBundleAnalyzer({ enabled: process.env.ANALYZE === 'true', analyzerMode: 'static' })

/** 獲取資料夾列表 */
const getOtherPlatforms = async () => {
  const projectRoot = path.resolve(path.dirname('.'), '../')
  const readdir = await fs.promises.readdir(projectRoot)
  const filter = new RegExp(`^\\.|^(node_modules|${NEXT_PUBLIC_PLATFORM}|common)$`)
  return readdir.filter((name) => !filter.test(name) && fs.statSync(path.join(projectRoot, name)).isDirectory())
}

/** 避免重複印訊息 */
let init = 0

/** @param {import('next').NextConfig & { replacement?: Map<RegExp,string> }} config */
export default async (config = {}) => {
  const otherPlatforms = await getOtherPlatforms()
  const originConfig = { ...config }
  delete originConfig.replacement

  /** Custom Replacement */
  const replacement = new Map(config?.replacement || [])

  return withBundleAnalyzer({
    output: NEXT_PUBLIC_SSG ? 'export' : undefined,
    /** 嚴格模式 */
    reactStrictMode: false, // 後端太常觸發請求頻率過高，暫時關閉
    /** 自訂了一套 eslint v9，所以禁用預設 lint */
    eslint: {
      ignoreDuringBuilds: true,
    },

    /** 語系配置 */
    i18n: NEXT_PUBLIC_SSG
      ? undefined
      : {
          locales: NEXT_PUBLIC_LOCALES.split(','),
          defaultLocale: NEXT_PUBLIC_LOCALE,
          localeDetection: false, // 禁用根据浏览器语言自动重定向
        },
    /** 語系導出 /index.html */
    trailingSlash: true,

    /** 合併商戶 */
    ...originConfig,

    /** 需要一起 compile 的套件 */
    transpilePackages: ['@tanstack', ...(originConfig?.transpilePackages || [])],

    /** Webpack Options */
    webpack(webpackConfig, options) {
      webpackConfig.resolve.fallback = { fs: false, path: false }

      /** 合併商戶 */
      if (config.webpack) webpackConfig = config.webpack(webpackConfig, options)

      // 添加对 .proto 文件的支持
      webpackConfig.module.rules.push({
        test: /\.proto$/,
        type: 'asset/source',
      })

      /** Null Loader 避免引用到其他商戶 */
      if (otherPlatforms.length) {
        const reg = new RegExp(`/(${otherPlatforms.join('|')})/`)
        webpackConfig.module.rules.push({
          test: (res) => !/common/.test(res) && reg.test(res),
          use: `⨯ ERROR[Rules] ⨯ 不可以 import 其他商戶資訊 ${String(reg)}`,
        })
      }

      /** 攔截在 common 中 import 其他商戶資訊 */
      webpackConfig.plugins.push(
        new options.webpack.NormalModuleReplacementPlugin(new RegExp(`@app/${NEXT_PUBLIC_PLATFORM}|/${NEXT_PUBLIC_PLATFORM}/`), function (resource) {
          if (!/\/common/.test(resource.context)) return
          resource.request = `⨯ ERROR [NormalReplacement] ⨯ 不可以 import 其他商戶資訊`
        }),
      )

      /** 攔截在 import @types */
      webpackConfig.plugins.push(
        new options.webpack.NormalModuleReplacementPlugin(/@types/, function (resource) {
          resource.request = `⨯ ERROR [NormalReplacement] ⨯ 不可以 import @types`
        }),
      )

      /** 商戶自訂 Replacement */
      if (replacement?.size) {
        if (init === 0) console.log('-------- 注意 Replacement 模組異動 --------')
        replacement.forEach((request, regex) => {
          if (init === 0) console.log(regex, '=>', request)
          webpackConfig.plugins.push(
            new options.webpack.NormalModuleReplacementPlugin(regex, function (resource) {
              resource.request = request
              // TODO ignore resource.context
            }),
          )
        })
        if (init === 0) console.log('-------------------------------------------')
      }

      /** SVG React Component */
      const fileLoaderRule = webpackConfig.module.rules.find((rule) => rule.test?.test?.('.svg'))
      webpackConfig.module.rules.push(
        // 預設
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
          use: [{ loader: '@svgr/webpack', options: { dimensions: false } }],
        },
      )
      fileLoaderRule.exclude = /\.svg$/i

      // 避免重複印訊息
      init++

      return webpackConfig
    },
  })
}
