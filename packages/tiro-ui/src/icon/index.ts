import { App } from 'vue'
import Icon from './icon'

Icon.install = function (app: App) {
  app.component('TiIcon', Icon)
}

export const TiIcon = Icon

export default Icon
