import type { App } from 'vue'
import RadioGroup from './radioGroup'

RadioGroup.install = function (app: App) {
  app.component('TiRadioGroup', RadioGroup)
}

export const TiRadioGroup = RadioGroup

export default RadioGroup
