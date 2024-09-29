import { ReactNode, useEffect, useState } from 'react'
import { useWebsiteStore } from '@model'

/**
 * 一定要等初始 useEffect
 */
export const useClientOnly = () => {
  const webInit = useWebsiteStore((state) => state.init)
  const [initialized, setInitialized] = useState(webInit)
  useEffect(() => void setInitialized(true), [])
  return { initialized }
}

/**
 * 到前端才顯示 Server 端為 null
 */
export default function ClientOnly({ children }: { children: ReactNode }) {
  const { initialized } = useClientOnly()
  if (!initialized) return null
  return <>{children}</>
}
