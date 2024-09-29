import * as React from 'react'

import { cn } from '@common/style'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      data-sid="1074692445"
      type={type}
      autoCapitalize="false"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      className={cn(
        'flex h-40 w-full rounded-md border border-input bg-background px-12 py-8 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
