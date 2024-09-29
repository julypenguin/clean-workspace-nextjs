import { cn } from '@common/style'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-sid="-1747984019" className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />
}

export { Skeleton }
