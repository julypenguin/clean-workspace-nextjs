import prettierPlugin from 'eslint-plugin-prettier'
import js from '@eslint/js'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'
import { Basic, DataSid } from './common/script/rules/custom-rules.mjs'
import ESLintComments from 'eslint-plugin-eslint-comments'
import EslintImport from 'eslint-plugin-import'

export default [
  {
    ignores: ['ecosystem.config.js', '**/.next/*', '**/node_modules/*', '**/out/*', '**/public/*', '**/script/**/*.mjs', '**/*.d.ts', '*.mjs', '**/__tests__/*'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      // 預設 globals
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      react: reactPlugin,
      prettier: prettierPlugin,
      'eslint-comments': ESLintComments,
      'eslint-import': EslintImport,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      'react/jsx-key': 'error', // 需要 key
      'react/self-closing-comp': 'error', // 自閉合
      'react/react-in-jsx-scope': 'off', // 排除 React import 誤判
      'no-undef': 'off', // TypeScript 已經有檢查
      '@typescript-eslint/no-explicit-any': 'off', // 啟用 any
      '@typescript-eslint/no-this-alias': 'off', // 啟用 this
      'react/no-unescaped-entities': 'off', // 允許字元
      'react/prop-types': 'off', // TypeScript 已經有檢查
      'react/no-unknown-property': 'off', // 啟用自訂屬性
      'no-import-assign': 'off', // TypeScript 已經有檢查
      'no-redeclare': 'off', // TypeScript 已經有檢查
      '@typescript-eslint/ban-types': 'off', // 關閉空物件
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off', // 啟用 optional chain
      '@typescript-eslint/no-unused-vars': 'off', // 未使用過於煩人
      '@typescript-eslint/ban-ts-comment': 'off', // 啟用 ts-ignore
      'eslint-comments/no-use': ['error', { allow: [] }], // 禁止使用所有 ESLint 註釋
      'eslint-import/order': ['error', { groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'] }], // 排序 import
      '@typescript-eslint/no-floating-promises': 'error', // 禁止未處理的 Promise
      'no-extra-boolean-cast': 'off', // 關閉多餘的布林轉換
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './common/tsconfig.json',
      },
    },
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      custom: Basic,
    },
    rules: {
      'custom/rule-custom-common': 'error',
    },
  },
  {
    ignores: ['**/components/ui/**/*.tsx', '**/components/core/**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './common/tsconfig.json',
      },
    },
    files: ['**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      sid: DataSid,
    },
    rules: {
      'sid/export-component-data-sid': 'error',
    },
  },
]
