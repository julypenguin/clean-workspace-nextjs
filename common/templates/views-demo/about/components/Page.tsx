import { Card } from '@templates/views-demo/components/ui/card'
import { useCommon } from '@model'
import { Button } from '@templates/views-demo/components/ui/button'
import { ROUTES } from '@model/platform/routes'
import PageContainer from '../../layout/Page'

/** About */
export default function AboutPage() {
  const { t, back } = useCommon()

  return (
    <PageContainer data-sid="1025412621">
      <Card className="w-full p-16">
        <h1 className="mb-20 w-full text-center text-20 font-black">{t('v2.A088')}</h1>
        <hr className="mb-20" />
        <div className="flex w-full items-center gap-12">
          <Button onClick={() => back()}>{t('v2.A010')}</Button>
        </div>
      </Card>
    </PageContainer>
  )
}
