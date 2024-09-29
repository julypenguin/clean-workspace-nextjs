import { GenerateSideProps } from '@model/i18n/utils'
import HomePage from './components/Page'

const { getStaticPaths, getStaticProps } = GenerateSideProps({
  props: {
    hideFooter: true,
    seo: { title: 'Home', description: 'Home' },
  },
})
export { getStaticPaths, getStaticProps }

/** Page 首頁 */
export default HomePage
