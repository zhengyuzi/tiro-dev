import type { App } from 'vue'
import Checkbox from './checkbox'

Checkbox.install = function (app: App) {
  app.component('TiCheckbox', Checkbox)
}

export const TiCheckbox = Checkbox

export default Checkbox
