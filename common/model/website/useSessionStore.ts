import { defineStore } from '@model/utils'
import { createJSONStorage } from 'zustand/middleware'

export type SessionState = {
  // 邀請好友
  inviteFriend?: {
    // 邀請碼
    inviteStr: string
    // 國碼
    nationCode: string
    // 幣種
    currency: string
  }
  // 暫存語系
  locale?: string
  // 往下擴充
}

/** 存放 sessionStorage */
export const [useSessionStore, setSessionState] = defineStore<SessionState>(
  {
    // ignore
  },
  {
    name: 'SESSION',
    storage: createJSONStorage(() => sessionStorage),
  },
)

/** 刪除指定的 storage key */
export const deleteSessionItem = (key: string) => {
  try {
    window?.localStorage?.removeItem(key.toUpperCase())
  } catch {
    // ignore
  }
}
