import { alerts, toast, useCommon } from '@model'
import PageContainer from '@templates/views-demo/layout/Page'
import { Card } from '@templates/views-demo/components/ui/card'
import { Button } from '@templates/views-demo/components/ui/button'
import { ROUTES } from '@model/platform/routes'
import Link from 'next/link'
import NiceModal from '@ebay/nice-modal-react'
import { defineModal } from '@model/website/useModal'
import { useState } from 'react'
import { Input } from '@templates/views-demo/components/ui/input'

const ModelDemo = defineModal(({ Dialog, onModalClose }) => {
  const [input, setInput] = useState('')
  return (
    <Dialog data-sid="348738855" className="flex flex-col items-center rounded-8 bg-background p-12">
      <h1 className="mb-12 text-16 font-black">输入</h1>
      <Input placeholder="Please input something" value={input} onChange={(e) => setInput(e.target?.value)} className="mb-12" />
      <Button onClick={() => onModalClose(input)}>确认</Button>
    </Dialog>
  )
})

/** HOME */
export default function HomePage() {
  const { t, push } = useCommon()

  return (
    <PageContainer data-sid="-825842637">
      <Card className="w-full p-16">
        <h1 className="mb-20 w-full text-center text-20 font-black">{t('v2.A010')}</h1>
        <hr className="mb-20" />
        <div className="flex w-full items-center gap-12">
          <a className="cursor-pointer text-blue-500 underline underline-offset-2" onClick={() => push(ROUTES.ABOUT)}>
            手动控制跳转
          </a>
          <Link className="text-blue-500 underline underline-offset-2" href={ROUTES.ABOUT}>
            SEO加分的跳转
          </Link>
        </div>
        <hr className="my-20" />
        <div className="flex flex-wrap gap-12">
          <Button debounce={0} onClick={() => toast(t('v2.A010'))}>
            Toast
          </Button>
          <Button onClick={() => toast(t('v2.A010'))}>防连点的Toast</Button>
          <Button onClick={() => alerts({ message: t('v2.A010') })}>Alert</Button>
        </div>
        <hr className="my-20" />
        <div className="flex flex-wrap gap-12">
          <Button
            onClick={async () => {
              const data = (await NiceModal.show(ModelDemo)) as ModalResolve<string>
              data?.meta && alerts({ message: data.meta })
            }}>
            Nice Modal 的弹窗
          </Button>
        </div>
      </Card>
    </PageContainer>
  )
}
