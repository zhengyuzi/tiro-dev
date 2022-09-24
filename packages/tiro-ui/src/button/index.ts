import type { App } from 'vue'
import Button from './button'

Button.install = function (app: App) {
  app.component('TiButton', Button)
}

export const TiButton = Button

export default Button
