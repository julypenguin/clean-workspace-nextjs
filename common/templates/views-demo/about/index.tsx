import { GenerateSideProps } from '@model/i18n/utils'
import AboutPage from './components/Page'

const { getStaticPaths, getStaticProps } = GenerateSideProps({
  props: {
    seo: { title: 'SEO', description: 'SEO' },
  },
  // ISR 才需要設定，緩存時間
  // revalidate: 30,
})
export { getStaticPaths, getStaticProps }

/** Page About */
export default AboutPage
