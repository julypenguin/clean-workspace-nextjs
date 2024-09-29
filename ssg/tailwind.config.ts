import { TemplateViewsDemo, withConfig } from '@app/common/style/tailwind.config'

// 這是調過色碼的版本
// import variable from './style/variable'

// 這是預設
import variable from '@app/common/templates/views-demo/variable'

export default withConfig(variable, {
  content: [...TemplateViewsDemo],
})
