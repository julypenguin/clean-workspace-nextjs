import { renderHook, act, cleanup } from '@testing-library/react'
import { describe } from '@jest/globals'
import { useWebsiteStore, setWebsiteState, initWebSite } from '@model/website/useWebsiteStore'
import { NextIntlClientProvider } from 'next-intl'
import { useCommon } from '@model/website/useCommon'
import { useRenderCount } from '@model/utils'
import { createElement, type ReactNode } from 'react'
import { bindRef } from '@model/i18n'
import { setSessionState, useSessionStore } from '@model/website/useSessionStore'
import { setStorageState, useStorageStore } from '@model/website/useStorageStore'

describe('WebsiteStore', () => {
  /** useCommon */
  test('useCommon', () => {
    let currentLocale = 'zh'
    const localeMap = new Map([
      ['zh', { locale: 'zh', test: '測試' }],
      ['en', { locale: 'en', test: 'Test' }],
    ])
    const wrapper = ({ children, locale, messages }: { children: ReactNode; locale: string; messages: Record<string, any> }) => createElement(NextIntlClientProvider, { locale, messages, children })

    const { result, rerender } = renderHook(
      () => {
        const common = useCommon()
        const renderCount = useRenderCount([common])
        return { common, renderCount }
      },
      {
        wrapper: (props) => {
          const locale = { locale: currentLocale, messages: localeMap.get(currentLocale)! }
          bindRef(locale)
          return wrapper({ ...props, ...locale })
        },
      },
    )
    // 語系判斷
    expect(result.current.common.t('locale')).toBe('zh')
    expect(result.current.common.t('test')).toBe('測試')
    expect(result.current.common.te('test')).toBe(true)
    expect(result.current.common.te('test2')).toBe(false)
    // 切語系
    currentLocale = 'en'
    rerender()
    expect(result.current.common.t('locale')).toBe('en')
    expect(result.current.common.t('test')).toBe('Test')
    // 檢測渲染次數
    Array.from({ length: 5 }, rerender)
    expect(result.current.renderCount.current).toBe(2) // zh 一次 en 一次
  })

  /** useSessionStore */
  test('useSessionStore', () => {
    const { result } = renderHook(() => useSessionStore())
    act(() => setSessionState({ inviteFriend: { inviteStr: '', currency: '', nationCode: '' } }))
    // 新增
    expect(result.current.inviteFriend).toEqual({ inviteStr: '', currency: '', nationCode: '' })
    expect(sessionStorage.getItem('SESSION')).toBe(`{"state":{"inviteFriend":{"inviteStr":"","currency":"","nationCode":""}},"version":0}`)
    expect(useSessionStore.getState().inviteFriend).toEqual({ inviteStr: '', currency: '', nationCode: '' })
    // 修改
    act(() => setSessionState({ inviteFriend: { inviteStr: '1', currency: '2', nationCode: '3' } }))
    expect(result.current.inviteFriend).toEqual({ inviteStr: '1', currency: '2', nationCode: '3' })
    expect(sessionStorage.getItem('SESSION')).toBe(`{"state":{"inviteFriend":{"inviteStr":"1","currency":"2","nationCode":"3"}},"version":0}`)
    expect(useSessionStore.getState().inviteFriend).toEqual({ inviteStr: '1', currency: '2', nationCode: '3' })
    // 刪除
    act(() => setSessionState({ inviteFriend: undefined }))
    expect(result.current.inviteFriend).toBe(undefined)
    expect(sessionStorage.getItem('SESSION')).toBe(`{"state":{},"version":0}`)
    expect(useSessionStore.getState().inviteFriend).toEqual(undefined)
  })

  /** useStorageStore */
  test('useStorageStore', () => {
    const { result } = renderHook(() => useStorageStore())
    act(() => setStorageState({ storage: 'create' } as any))
    // 新增
    expect((result.current as any).storage).toEqual('create')
    expect(localStorage.getItem('STORAGE')).toContain('storage')
    expect((useStorageStore.getState() as any).storage).toBe('create')
    // 修改
    act(() => setStorageState({ storage: 'update' } as any))
    expect((result.current as any).storage).toContain('update')
    expect((useStorageStore.getState() as any).storage).toBe('update')
    // 刪除
    act(() => setStorageState({ storage: undefined } as any))
    expect((result.current as any).storage).toBe(undefined)
    expect(localStorage.getItem('STORAGE')).not.toContain('storage')
    expect((useStorageStore.getState() as any).storage).toBe(undefined)
  })

  /** useWebsiteStore */
  test('useWebsiteStore', async () => {
    cleanup()
    initWebSite()
    const { result, rerender } = renderHook(() => useWebsiteStore())
    // 寬高判斷 1024x768
    expect(result.current.size).toEqual({ width: 1024, height: 768 })
    // 判斷是否為嵌入或三方
    expect(result.current.isWebview).toBe(false)
    expect(result.current.isThirdMode).toBe(false)
    // 設為三方與內嵌
    act(() => setWebsiteState({ isWebview: true, isThirdMode: true }))
    expect(localStorage.getItem('WEBSITE')).toBe(`{"state":{"isWebview":true,"isThirdMode":true},"version":0}`)
    // 觸發 resize
    await act(async () => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1440 })
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 900 })
      document.body.style.setProperty('--area-top', `32px`)
      document.body.style.setProperty('--area-bottom', `40px`)
      window.dispatchEvent(new Event('resize'))
      await new Promise((resolve) => setTimeout(resolve, 150)) // resize 有 throttle 100 毫秒
    })
    expect(result.current.size).toEqual({ width: 1440, height: 900 })
    // 檢測安全範圍
    expect(result.current.safeArea).toEqual({ top: 32, bottom: 40, left: 0, right: 0 })
    // 檢測 css 屬性
    const style = getComputedStyle(document.body)
    expect(style.getPropertyValue('--svw')).toBe('1440px')
    expect(style.getPropertyValue('--svh')).toBe('900px')
  })
})
