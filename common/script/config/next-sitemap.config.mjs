const locale = process.env.NEXT_PUBLIC_LOCALE
const locales = process.env.NEXT_PUBLIC_LOCALES.split(',').filter((l) => l !== locale)

export default {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  changefreq: 'daily',
  priority: 0.7,
  generateRobotsTxt: true, // 生成 robots.txt 文件
  transform: async (config, url) => {
    if (locales.some((locale) => url.startsWith(`/${locale}`))) return
    return {
      loc: `${config.siteUrl}${url}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
      alternateRefs: locales.map((locale) => ({
        href: `${config.siteUrl}/${locale}${url}`,
        hreflang: locale,
        hrefIsAbsolute: true,
      })),
    }
  },
  // 忽略
  exclude: ['/profile/setting/*', '/profile/funds-detail/*'],
  hrefIsAbsolute: true,
}
