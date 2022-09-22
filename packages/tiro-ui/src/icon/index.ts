import { App, h } from 'vue'
import Icon from './icon.vue'

Icon.install = function (app: App) {
  app.component('TiIcon', Icon)
}

export const TiIcon = Icon

export default Icon
