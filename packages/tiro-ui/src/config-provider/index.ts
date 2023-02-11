import type { App } from 'vue'
import ConfigProvider from './configProvider'

ConfigProvider.install = function (app: App) {
  app.component('TiConfigProvider', ConfigProvider)
}

export const TiConfigProvider = ConfigProvider

export default ConfigProvider
