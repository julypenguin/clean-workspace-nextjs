/** 只有常用或必須使用的才預設導出 */

export { defineStore, waitStore, useHydrateStores, useShallow } from './utils'
export { Platform } from './platform'
export { useCommon, useUrl } from './website/useCommon'
export { useSessionStore, setSessionState } from './website/useSessionStore'
export { useStorageStore, setStorageState } from './website/useStorageStore'
export { initWebSite, useWebsiteStore } from './website/useWebsiteStore'
export { i18n, router, ProvideRouter, CombineLazyLoad, setLocale } from './i18n'
export { useConfigStore } from './platform/useConfigStore'

// API 預設使用
export { toast, errorToast } from './website/useToastStore'
export { alerts, errorAlert, closeAlert } from './website/useAlertStore'
