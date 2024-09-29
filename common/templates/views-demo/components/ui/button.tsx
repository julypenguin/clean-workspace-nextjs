import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@common/style'
import { Loader2 } from 'lucide-react'
import { useRef, useState } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-8 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'flex items-center bg-primary text-primary-foreground hover:opacity-90',
        destructive: 'flex items-center bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'flex items-center border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'flex items-center bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'flex items-center hover:bg-accent hover:text-accent-foreground',
        link: 'flex items-center text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-40 px-16 py-8 rounded-8',
        sm: 'h-36 rounded-8 px-12',
        lg: 'h-44 rounded-8 px-32',
        icon: 'h-40 w-40',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  // loading
  spin?: boolean
  // 防連點，毫秒
  debounce?: number
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ spin, className, variant, size, asChild = false, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false)
  const debounceRef = useRef(0)
  const debounce = props?.debounce ?? 333

  /** 事件等待 */
  const onButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    if (props?.disabled || spin || isLoading) return
    if (debounceRef.current > Date.now()) return
    debounceRef.current = Date.now() + debounce
    try {
      setIsLoading(true)
      await Promise.all([props.onClick?.(event)])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} onClick={onButtonClick}>
      {!!(isLoading || spin) && <Loader2 className="mr-6 h-16 w-16 animate-spin" />}
      {props.children}
    </button>
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
