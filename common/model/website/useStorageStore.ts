import { defineStore } from '@model/utils'

export type StorageState = {
  // 三方遊戲裝置暫存 string = userId
  gameHistory: Record<string, Array<{ id: string | number; expired: number }>>
  // 三方轉出標記
  autoTransferThirdGame?: API_THIRDAPI_INPLAT_AUTOTRANSFER.REQ
  // 紅包雨跳過
  redPackageIgnore?: string | number
  // TODO，因該是在 pc 就被 set，react 專案有 get 但沒 set
  agentPrefix: string
}

/** 存放 localStorage */
export const [useStorageStore, setStorageState] = defineStore<StorageState>(
  {
    gameHistory: {},
    agentPrefix: '',
  },
  {
    name: 'STORAGE',
  },
)

/** 刪除指定的 storage key */
export const deleteStorageItem = (key: string) => {
  try {
    window?.localStorage?.removeItem(key.toUpperCase())
  } catch {
    // ignore
  }
}
