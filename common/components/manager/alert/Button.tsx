import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@common/style'
import { useRef, useState } from 'react'
import { Loader2 } from 'lucide-react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-8 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
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
  // 防連點間隔
  debounce?: number
  // 加載
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false)
  const debounceRef = useRef(0)
  const debounce = props?.debounce || 333

  /** 事件等待 */
  const onButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    if (props?.disabled || props?.loading || isLoading) return
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
    <button data-sid="156404968" className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} onClick={onButtonClick}>
      {isLoading || props?.loading ? <Loader2 className="h-16 w-16 animate-spin" /> : props.children}
    </button>
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
