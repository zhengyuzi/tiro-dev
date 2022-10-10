import type { App } from 'vue'
import CheckboxGroup from './checkboxGroup'

CheckboxGroup.install = function (app: App) {
  app.component('TiCheckboxGroup', CheckboxGroup)
}

export const TiCheckboxGroup = CheckboxGroup

export default CheckboxGroup
