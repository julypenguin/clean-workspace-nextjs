/** 單純示範在該版型下配置 variable.ts */
import ShadcnVariable from '@app/common/style/shadcn-variable'

/** CSS Root Variable */
const root = {
  ...ShadcnVariable.root,
}

/** Dark Mode Variable */
const night: typeof root = {
  ...ShadcnVariable.night,
}

/** Header 高度 */
const responsive = {
  header: {
    sm: '40rem',
    md: '50rem',
    lg: '60rem',
  },
}

export default {
  root,
  night,
  responsive,
}
