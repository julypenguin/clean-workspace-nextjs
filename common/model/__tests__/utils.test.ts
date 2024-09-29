import { renderHook, act } from '@testing-library/react'
import { defineStore, useHydrateStores, useRenderCount, useShallow, waitStore } from '@app/common/model/utils'
import { describe } from '@jest/globals'

describe('StoreUtils', () => {
  /** defineStore */
  test('defineStore', () => {
    const [useStore, setState] = defineStore({ value: 0 }, 'DEMO')
    // 要有一個 update 屬性
    expect(useStore.getState()).toEqual({ value: 0, update: expect.any(Function) })
    // 更新值
    setState({ value: 1 })
    expect(useStore.getState().value).toBe(1)
    // 更新值
    useStore.setState({ value: 2 })
    expect(useStore.getState().value).toBe(2)
    // storage
    const [useStorageStore, setStorageState] = defineStore({ value: 0 }, { name: 'STORAGE' })
    setStorageState({ value: 999 })
    expect(localStorage.getItem('STORAGE')).toBe(`{"state":{"value":999},"version":0}`)
    expect(useStorageStore.getState().value).toBe(999)
  })

  /** useHydrateStores */
  test('useHydrateStores', () => {
    const [useStore, setState] = defineStore({ value: { a: 0, b: 0, c: 0 } }, 'DEMO')
    const serverData = { a: 1, b: 2, c: 3 }
    const { result, rerender } = renderHook(() =>
      useHydrateStores(
        useStore,
        (state) => state,
        () => ({ value: serverData }),
        () => ({ value: serverData }),
      ),
    )
    expect(result.current.value).toBe(serverData)
    // 更新測試
    act(() => setState((state) => void (state.value.a = 999)))
    expect(result.current.value).not.toBe(serverData)
    expect(result.current.value.a).toBe(999)
  })

  /** waitStore */
  test('waitStore', async () => {
    const [useStore, setState] = defineStore({ value: 0 }, 'DEMO')
    const next = async () => {
      await new Promise(requestAnimationFrame)
      setState((state) => void (state.value = state.value + 1))
      if (useStore.getState().value < 20) next().catch(console.warn)
    }
    next().catch(console.warn)
    const { value } = await waitStore(useStore, (state) => state.value === 10)
    expect(value).toBe(10)
  })

  /** useShallow */
  test('useShallow', () => {
    const initialProps = { value: 0 }
    const { result, rerender } = renderHook(
      (initialProps) => {
        const shallow = useShallow(initialProps)
        const renderCount = useRenderCount([shallow])
        return { shallow, renderCount }
      },
      {
        initialProps,
      },
    )
    // 值一樣所以記憶體不變
    rerender({ value: 0 })
    expect(result.current.shallow).toBe(initialProps)
    // 值改變所以記憶體改變
    rerender({ value: 1 })
    expect(result.current.shallow).toEqual({ value: 1 })
    expect(result.current.shallow).not.toBe(initialProps)
    // 直接改參照值
    rerender(initialProps)
    initialProps.value = 2
    expect(result.current.shallow).toEqual({ value: 2 })
    expect(result.current.shallow).toBe(initialProps)
    // 渲染次數比對
    Array.from({ length: 5 }, () => rerender({ value: 2 }))
    expect(result.current.renderCount.current).toBe(3)
    Array.from({ length: 5 }, () => rerender({ value: 3 }))
    expect(result.current.renderCount.current).toBe(4)
  })

  /** useRenderCount */
  test('useRenderCount', () => {
    const { result, rerender } = renderHook((initialProps) => useRenderCount(initialProps), { initialProps: [1, 2, 3] })
    expect(result.current.current).toBe(1)
    Array.from({ length: 5 }, (_, index) => rerender([1, 2, index]))
    expect(result.current.current).toBe(6)
    Array.from({ length: 5 }, () => rerender([1, 2, 3]))
    expect(result.current.current).toBe(7)
  })
})
