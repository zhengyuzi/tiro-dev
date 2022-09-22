import type { App } from 'vue'
import Input from './input.vue'

Input.install = function (app: App) {
  app.component('TiInput', Input)
}

export const TiInput = Input

export default Input
