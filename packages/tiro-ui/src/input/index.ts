import type { App } from 'vue'
import Input from './input'

Input.install = function (app: App) {
  app.component('TiInput', Input)
}

export const TiInput = Input

export default Input
