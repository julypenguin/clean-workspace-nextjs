import { Platform, useCommon } from '@model'
import Link from 'next/link'
import { ROUTES } from '@model/platform/routes'
import { GenerateSideProps } from '@model/i18n/utils'

const { getStaticPaths, getStaticProps, getServerSideProps } = GenerateSideProps({
  props: {
    seo: { title: '404', description: '404' },
  },
})
export { getStaticPaths, getStaticProps, getServerSideProps }

/** Page 404 */
export default function Custom404() {
  const { t } = useCommon()

  return (
    <main data-sid="883800710" className="flex w-full flex-col items-center justify-center p-32 pt-48">
      <h1 className="animate-bounce text-48 font-black">{'404'}</h1>
      <h2 className="animate-bounce text-32 font-medium">{t('v2.A026')}</h2>
      <Link href={ROUTES.HOME} className="text-blue-500">
        {t('v2.A010')}
      </Link>
    </main>
  )
}
