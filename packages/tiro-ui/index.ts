import type { App } from 'vue'
import * as component from './src/index'

export * from './src/index'

export default {
  install: (app: App) => {
    for (const key in component) {
      app.component(key, (component as any)[key])
    }
  }
}
