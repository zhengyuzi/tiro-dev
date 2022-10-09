import type { App } from 'vue'
import Radio from './radio'

Radio.install = function (app: App) {
  app.component('TiRadio', Radio)
}

export const TiRadio = Radio

export default Radio
