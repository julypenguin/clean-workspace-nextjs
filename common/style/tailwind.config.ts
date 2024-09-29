import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { truncateToDecimals } from '@app/common/utils'
import { merge } from '@app/common/utils/merge'
import { cssVariablesToStyleString } from '@app/common/style'

/** Rem 倍率 */
const ROOT_FONTSIZE = 1

/** root font size to pixel */
const rem = (px: string | number, suffix = 'rem') => {
  const unit = truncateToDecimals(Number(px) / ROOT_FONTSIZE, 2)
  return (unit + suffix).replace(/^0rem$/, '0')
}

/** 目前各版型的路徑 */
export const TemplateViewsDemo = ['../common/templates/views-demo/**/*.{js,ts,jsx,tsx,mdx,scss}']

/** 合併 config 用 */
export const withConfig = (variable: TailwindVariable | undefined, config: Partial<Config>): Config & { cssVariablesInnerHTML: string } => {
  const colors = Object.keys(variable?.root || {})
    .filter((key) => key.startsWith('--vd'))
    .reduce((res, key) => ({ ...res, [key.replace('--vd', 'vd')]: `var(${key})` }), {})

  /** 擴充響應屬性 */
  const spacing = Object.keys(variable?.responsive || {}).reduce(
    (res, key) => {
      const name = variable?.responsive?.[key] as RecordItem<TailwindVariable['responsive']>
      if (!name) return res
      const cssVariable = `--${key}`
      if (name?.sm) res.sm[cssVariable] = name.sm
      if (name?.md) res.md[cssVariable] = name.md
      if (name?.lg) res.lg[cssVariable] = name.lg
      if (name?.xl) res.xl[cssVariable] = name.xl
      res.names[key] = `var(${cssVariable})`
      return res
    },
    { sm: {}, md: {}, lg: {}, xl: {}, names: {} } as Record<string, Record<string, any>>,
  )

  /**  Theme 色碼轉 HTML */
  const cssVariablesInnerHTML = cssVariablesToStyleString(variable)

  return merge(
    {
      darkMode: ['class'],
      content: [
        // pages router
        './pages/**/*.{ts,tsx}',
        // components
        './components/**/*.{ts,tsx}',
        // common
        '../common/model/website/**/*.{ts,tsx}',
        '../common/components/**/*.{ts,tsx}',
        '../common/style/global.scss',
      ],
      theme: {
        container: {
          center: true,
          padding: '2rem',
          screens: {
            '2xl': '1400px',
          },
        },
        extend: {
          // 1: 0 ~ 40
          fontSize: {
            ...Array.from({ length: 96 })
              .map((_, i) => i)
              .reduce((res, n) => ({ ...res, [n]: rem(n) }), {}),
            xs: rem(12),
            sm: rem(14),
            base: rem(16),
            lg: rem(18),
            xl: rem(20),
            '2xl': rem(24),
            '3xl': rem(30),
          },
          // 1 為單位: 0 ~ 40 = 0 ~ 40px
          lineHeight: {
            ...Array.from({ length: 40 })
              .map((_, i) => i)
              .reduce((res, n) => ({ ...res, [n]: rem(n) }), {}),
            0: '0',
          },
          // 0.5 為單位: 0 ~ 100 = 0 ~ 100px
          borderRadius: {
            ...Array.from({ length: 200 })
              .map((_, i) => (i * 0.5).toFixed(1))
              .reduce((res, n) => ({ ...res, [parseFloat(n)]: rem(n) }), {}),
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2rem)',
            sm: 'calc(var(--radius) - 4rem)',
          },
          // 0.5 為單位: 0 ~ 60 = 0 ~ 60px
          borderWidth: {
            ...Array.from({ length: 120 })
              .map((_, i) => (i * 0.5).toFixed(1))
              .reduce((res, n) => ({ ...res, [parseFloat(n)]: rem(n) }), {}),
          },
          // 10 為單位: 0 ~ 200
          zIndex: {
            ...Array.from({ length: 15 })
              .map((_, i) => (i + 1) * 10 + 50)
              .reduce((res, n) => ({ ...res, [n]: n }), {}),
          },
          maxWidth: {
            sm: '384rem',
            md: '448rem',
            lg: '512rem',
          },
          minHeight: {
            screen: 'var(--svh)',
          },
          height: {
            svh: 'var(--svh)',
          },
          // 寬度高度等單位
          spacing: {
            // 1: 0 ~ 1000
            ...Array.from({ length: 1000 })
              .map((_, i) => i)
              .reduce((res, n) => ({ ...res, [n]: rem(n) }), {}),
            // 0.5: 0 ~ 200
            ...Array.from({ length: 200 })
              .map((_, i) => (i / 2).toFixed(1))
              .reduce((res, n) => ({ ...res, [parseFloat(n)]: rem(n) }), {}),
            // viewport height 100%
            svh: 'var(--svh);',
            // viewport width 100%
            svw: 'var(--svw);',
            // safe area
            'safe-top': 'var(--safe-top);',
            'safe-bottom': 'var(--safe-bottom);',
            'safe-left': 'var(--safe-left);',
            'safe-right': 'var(--safe-right);',
            // 擴充
            ...spacing.names,
          },
          colors: {
            border: 'var(--border)',
            input: 'var(--input)',
            ring: 'var(--ring)',
            background: 'var(--background)',
            foreground: 'var(--foreground)',
            primary: {
              DEFAULT: 'var(--primary)',
              foreground: 'var(--primary-foreground)',
            },
            secondary: {
              DEFAULT: 'var(--secondary)',
              foreground: 'var(--secondary-foreground)',
            },
            destructive: {
              DEFAULT: 'var(--destructive)',
              foreground: 'var(--destructive-foreground)',
            },
            muted: {
              DEFAULT: 'var(--muted)',
              foreground: 'var(--muted-foreground)',
            },
            accent: {
              DEFAULT: 'var(--accent)',
              foreground: 'var(--accent-foreground)',
            },
            popover: {
              DEFAULT: 'var(--popover)',
              foreground: 'var(--popover-foreground)',
            },
            card: {
              DEFAULT: 'var(--card)',
              foreground: 'var(--card-foreground)',
            },
            ...colors,
          },
          keyframes: {
            'accordion-down': {
              from: { height: '0' },
              to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
              from: { height: 'var(--radix-accordion-content-height)' },
              to: { height: '0' },
            },
            'caret-blink': {
              '0%,70%,100%': { opacity: '1' },
              '20%,50%': { opacity: '0' },
            },
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'caret-blink': 'caret-blink 1.25s ease-out infinite',
          },
        },
      },
      plugins: [
        require('tailwindcss-animate'),
        /**
         * @note @layer utilities 開發模式正常，編譯出錯，所以放在這
         */
        plugin(function ({ addUtilities, addBase }) {
          const newUtilities = {
            '.break-words': {
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
            },
          }
          addUtilities(newUtilities)
          addBase({
            ':root': {
              ...spacing.sm,
            },
            '@screen md': {
              ':root': {
                ...spacing.md,
              },
            },
            '@screen lg': {
              ':root': {
                ...spacing.lg,
              },
            },
            '@screen xl': {
              ':root': {
                ...spacing.xl,
              },
            },
          })
        }),
      ],
      cssVariablesInnerHTML,
    },
    config,
  ) as Config & { cssVariablesInnerHTML: string }
}
