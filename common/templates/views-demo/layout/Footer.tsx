import { cn } from '@common/style'
import { Platform, useCommon } from '@model'
import { memo } from 'react'

/** Footer */
const DemoFooter = memo(({ className }: { className?: string }) => {
  const { t } = useCommon()

  return (
    <footer data-sid="1877237351" className={cn('flex flex-col items-center justify-center gap-12 bg-card py-32 md:flex-row', className)}>
      <div className="uppercase">{t('v2.common_187', { n: Platform.PLATFORM })}</div>
    </footer>
  )
})

DemoFooter.displayName = 'DemoFooter'

export default DemoFooter
