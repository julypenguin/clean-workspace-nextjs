import React, { ComponentType, memo, ReactNode } from 'react'

type ComponentProps<T extends ComponentType<any> | ReactNode = ComponentType<any> | ReactNode> = Omit<React.HTMLAttributes<HTMLElement>, 'is'> & {
  is?: T
} & (T extends ComponentType<infer P> ? P : Record<string, any>)

/**
 * 懶人封裝，條件式組件，不用在 const 一層
 */
export const Component = memo(({ is, ...props }: ComponentProps) => {
  if (!is) return null
  if (typeof is === 'function') {
    const Component = is as ComponentType<any>
    return <Component {...props} />
  }
  return is
})

Component.displayName = 'Component'
