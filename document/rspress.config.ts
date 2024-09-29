import * as path from 'path'
import { defineConfig } from 'rspress/config'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '123Go 專案說明文件',
  description: '放置簡單說明用',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
        activeMatch: '/index',
      },
      {
        text: 'Link',
        link: '/link',
        activeMatch: '/link',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Getting Started',
          items: [
            {
              text: 'Introduction',
              link: '/',
            },
            {
              text: 'Features',
              link: '/features',
            },
            {
              text: 'Commands',
              link: '/commands',
            },
          ],
        },
        {
          text: 'Development',
          items: [
            {
              text: 'Structure',
              link: '/development/structure',
            },
            {
              text: 'API',
              link: '/development/api',
            },
            {
              text: 'i18n',
              link: '/development/i18n',
            },
            {
              text: 'Model',
              link: '/development/model',
            },
            {
              text: 'Style',
              link: '/development/style',
            },
            {
              text: 'Utils',
              link: '/development/utils',
            },
            {
              text: 'Platform',
              link: '/development/platform',
            },
            {
              text: 'SEO',
              link: '/development/seo',
            },
            {
              text: 'Types',
              link: '/development/types',
            },
            {
              text: 'FAQ',
              link: '/development/faq',
            },
          ],
        },
        {
          text: 'Component',
          items: [
            {
              text: 'Modal',
              link: '/component/modal',
            },
            {
              text: 'Alerts',
              link: '/component/alerts',
            },
            {
              text: 'Toast',
              link: '/component/toast',
            },
          ],
        },
        {
          text: 'Tools',
          items: [
            {
              text: 'ESLint',
              link: '/development/eslint',
            },
            {
              text: 'DevTools',
              link: '/tools/dev-tools',
            },
            {
              text: 'IDE',
              link: '/tools/ide',
            },
            {
              text: 'RS Press',
              link: '/tools/rs-press',
            },
          ],
        },
      ],
    },
  },
})
