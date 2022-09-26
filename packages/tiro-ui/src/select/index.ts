import type { App } from 'vue'
import Select from './select'

Select.install = function (app: App) {
  app.component('TiSelect', Select)
}

export const TiSelect = Select

export default Select
