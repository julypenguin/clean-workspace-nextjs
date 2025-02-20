import { CombineLazyLoad } from '@model/i18n'
import v2 from './v2.json'

const locale = 'zh'

export const messages = {
  locale,
  ...v2,
}

export default CombineLazyLoad(locale, messages)
