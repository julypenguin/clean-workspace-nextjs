import { cn } from '@common/style'
import { motion, MotionProps } from 'framer-motion'
import { useRWD } from '@model/website/useWebsiteStore'
import { useClientOnly } from '@core/ClientOnly'

/**
 * 包著每一個 page 的容器
 * 每一个页面都套用这一层，就能做到切页动画，但是 mobile 效能不好，不建议开
 */
export default function PageContainer(props: React.HTMLAttributes<HTMLDivElement> & MotionProps) {
  const { is } = useRWD()
  const { initialized } = useClientOnly()
  return (
    <motion.main
      initial={is.lt_md || !initialized ? undefined : { opacity: 0, x: '-30%' }}
      animate={is.lt_md || !initialized ? undefined : { opacity: 1, x: '0' }}
      exit={is.lt_md || !initialized ? undefined : { opacity: 1, x: '30%' }}
      className={cn('flex w-full flex-col items-center space-y-16 p-16', props.className)}
      {...props}
      data-sid="-1559649835">
      {props.children}
    </motion.main>
  )
}
