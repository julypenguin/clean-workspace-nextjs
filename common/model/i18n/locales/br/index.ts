import { CombineLazyLoad } from '@model/i18n'
import v2 from './v2.json'
import tmp from './tmp.json'

const locale = 'br'

export const messages = {
  locale,
  ...v2,
  ...tmp,
}

export default CombineLazyLoad(locale, messages)
