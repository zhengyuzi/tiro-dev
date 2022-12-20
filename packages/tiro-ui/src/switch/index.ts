import type { App } from 'vue'
import Switch from './switch'

Switch.install = function (app: App) {
  app.component('TiSwitch', Switch)
}

export const TiSwitch = Switch

export default Switch
