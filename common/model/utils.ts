import { create, type StoreApi, type UseBoundStore } from 'zustand'
import { devtools, persist, type PersistOptions } from 'zustand/middleware'
import produce from 'immer'
import { useEffect, useMemo, useRef, useState } from 'react'
import { isEqual } from 'lodash'
import pako from 'pako'

const isDev = process.env.NODE_ENV === 'development'

type StoreReturn<T> = [
  // useStore
  UseBoundStore<StoreApi<T>>,
  // setState
  setState: (state: Partial<T> | ((state: T) => Partial<T> | void)) => void,
]

/** 登出回調佇列 */
export const logoutCallMap = new Map<string, UseBoundStore<StoreApi<any>>>()

/** 一般 */
const createBaseStore = <T = Record<string, any>>(initialState: T, name: string): StoreReturn<T> => {
  type Callback = (state: State) => Partial<State> | void
  type State = T & { update: (state: Partial<State> | Callback) => void }
  const store = create<State>((set, get: () => State, api: StoreApi<State>) => {
    /** 開發模式 */
    if (isDev) {
      return devtools<State>(
        (set) => ({
          ...initialState,
          update: (state: Partial<State> | Callback) => {
            if (typeof state === 'function') set(produce(state) as State, false, { type: `${name?.toUpperCase()}-set-produce` })
            else set(state, false, { type: `${name?.toUpperCase()}-set-[${Object.keys(state).join('-')}]`, payload: state })
          },
        }),
        {
          name,
        },
      )(set, get, api)
    }
    /** 線上 */
    return {
      ...initialState,
      update: (state: Partial<State> | Callback) => (typeof state === 'function' ? set(produce(state) as State) : set(state)),
    }
  })
  const setState = (state: Partial<State> | Callback) => store.getState().update(state)
  if (typeof (initialState as { logout?: () => T })?.['logout'] !== 'undefined') logoutCallMap.set(name, store)
  return [store as UseBoundStore<StoreApi<State>>, setState as (state: Partial<T> | ((state: T) => Partial<T> | void)) => void]
}

/** 持久化 */
const createPersistStore = <T = Record<string, any>>(initialState: T, options: PersistOptions<T>): StoreReturn<T> => {
  type Callback = (state: State) => Partial<State> | void
  type State = T & { update: (state: Partial<State> | Callback) => void }
  const store = create(
    persist<State>((set, get: () => State, api: StoreApi<State>) => {
      /** 開發模式 */
      if (isDev) {
        return devtools<State>(
          (set) => ({
            ...initialState,
            update: (state: Partial<State> | Callback) => {
              if (typeof state === 'function') set(produce(state) as State, false, { type: `${options.name?.toUpperCase()}-set-produce` })
              else set(state, false, { type: `${options.name?.toUpperCase()}-set-[${Object.keys(state).join('-')}]`, payload: state })
            },
          }),
          { name: options.name },
        )(set, get, api)
      }
      /** 線上 */
      return {
        ...initialState,
        update: (state: Partial<State> | Callback) => (typeof state === 'function' ? set(produce(state) as State) : set(state)),
      }
    }, options as PersistOptions<State>),
  )
  // 登出處理
  if (typeof (initialState as { logout?: () => T })?.['logout'] !== 'undefined') logoutCallMap.set(options.name, store)
  const setState = (state: Partial<State> | Callback) => store.getState().update(state)
  return [store as UseBoundStore<StoreApi<State>>, setState as (state: Partial<T> | ((state: T) => Partial<T> | void)) => void]
}

/**
 * 生成 useStore
 * @test 有單元測試
 * @example
 *
 * // 登出處理
 * createStore({ logout: () => initialData() }, "DEMO"); // 返回一個登出後要覆蓋的數據，登出時自動呼叫
 *
 * // 一般 store + 四種用法
 * const [useDemo, setState] = createStore({ demo: 0 }, "DEMO");
 * setState({ demo: 1 });
 * setState((state) => void state.demo++);
 * setState((state) => ({ demo: state.demo + 1 }));
 * setState((state) => {
 *   state.demo = 0;
 * });
 *
 * // 持久化，且指定屬性存進 storage
 * const [useDemo, setState] = createStore(
 *   { demo: 0, demo2: 0 },
 *   {
 *     name: "DEMO",
 *     partialize: (state) => ({ demo2: state.demo2 }) as typeof state,
 *     // storage: createJSONStorage(() => sessionStorage) // 預設是 localStorage
 *   },
 * );
 */
export const defineStore = <T = Record<string, any>>(initialState: T, options: string | PersistOptions<T>) => {
  /** 一般 */
  if (typeof options === 'string') return createBaseStore<T>(initialState, options)
  /** 持久化 */
  return createPersistStore<T>(initialState, options)
}

/**
 * 解決水合階段 zustand 無數據問題
 * @example
 * const { matchInfo } = useHydrateStores(
 *   // store
 *   useMatchStore,
 *   // 初始化後才會使用 state callback 因為沒有數據
 *   (state) => state.match?.[matchId], // state callback
 *   // 初始化時會使用這個函式返回的值
 *   (set) => {
 *     set({ matchInfo }) // 更新 store 數據
 *     return { matchInfo } // 需要返回跟 state callback 一樣的格式
 *   },
 * )
 */
export const useHydrateStores = <State, Res = any>(
  useStore: UseBoundStore<StoreApi<State>>,
  call: Parameters<UseBoundStore<StoreApi<State>>>[0],
  // 初始階段
  initial: () => Res,
  // 更新階段
  clientUpdate: (state: State, initialized?: Res) => Partial<State> | void,
  // deps
  deps?: any[],
): Res => {
  const initialized = useRef<{ state?: Res; init: boolean }>({ state: undefined, init: false })
  const state = useStore(call)
  /** 前端更新 */
  useEffect(() => {
    const { update } = useStore.getState() as { update: (state: Partial<State> | ((state: State) => Partial<State> | void)) => void }
    update?.((state) => clientUpdate(state, initialized.current.init ? initial() : initialized.current.state))
    initialized.current.init = true
  }, deps || [])
  /** 水合階段過後 */
  if (initialized?.current.init) return (state || initialized.current.state) as Res
  /** 水合階段 */
  initialized.current.state = initial()
  return initialized.current.state
}

/**
 * 等待 zustand store 數據
 * @test 有單元測試
 * @param {UseBoundStore<StoreApi<State>>} useStore defineStore 實體
 * @param {(state: State) => boolean} callback 等待條件，條件達到就返回所有 state 屬性
 * @example const { games } = await waitStore(useThirdGames, (state) => !!state?.games);
 */
export const waitStore = async <State>(useStore: UseBoundStore<StoreApi<State>>, callback: (state: State) => boolean): Promise<State> => {
  return new Promise((resolve) => {
    const state = useStore.getState()
    const condition = callback(state)
    if (condition) return resolve(state)
    const unSubscribe = useStore.subscribe((state: State) => {
      const condition = callback(state)
      if (!condition) return
      unSubscribe()
      return resolve(state)
    })
  })
}

/**
 * interval 等待數據，不會失敗，但是會 timeout
 * @example
 * await waitInterval(() => !!router?.pathname) // 等到 router pathname 有值為止
 */
export const waitInterval = async (callback: () => boolean, time = 500, timeout = 20 * 1000) => {
  let timeoutRemain = timeout
  await new Promise((resolve) => {
    if (callback?.()) {
      resolve(true)
      return
    }
    const interval: NodeJS.Timeout = setInterval(() => {
      timeoutRemain -= time
      if (timeoutRemain <= 0) {
        clearInterval(interval)
        resolve(false)
        return
      }
      if (!callback?.()) return
      resolve(true)
      clearInterval(interval)
    }, time)
  })
}

/** 等待秒數 */
export const waitTime = async (time: number) => new Promise((resolve) => setTimeout(resolve, time))

/**
 * 淺比較
 * @test 有單元測試
 */
export const useShallow = <T = any>(params: T) => {
  const ref = useRef<T | undefined>(params)
  return useMemo(() => {
    ref.current = isEqual(ref.current, params) ? ref.current : params
    return ref.current
  }, [params])
}

/** 渲染次數檢測 */
export const useRenderCount = (deps: Parameters<typeof useEffect>[1]) => {
  const ref = useRef(0)
  useEffect(() => void ref.current++, deps)
  return ref
}

/** 確實需要全部 state 的情況才使用 */
export const getAll = <T>(state: T) => state

/** GZIP 版本的 storage */
export const createStorageGZIP = <State = any>(initialData: () => State) => {
  return () => ({
    getItem: (name: string): string => {
      try {
        const data = window.localStorage.getItem(name) || JSON.stringify(initialData)
        if (data.startsWith('{')) return data
        return pako.ungzip(Buffer.from(data, 'base64'), { to: 'string' })
      } catch {
        return JSON.stringify(initialData)
      }
    },
    setItem: (name: string, value: string): void => {
      try {
        window.localStorage.setItem(name, Buffer.from(pako.gzip(value)).toString('base64'))
      } catch {
        window.localStorage.setItem(name, value)
      }
    },
    removeItem: (name: string): void => {
      window?.localStorage?.removeItem(name)
    },
  })
}
