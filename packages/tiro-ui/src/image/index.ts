import type { App } from 'vue'
import Image from './image'

Image.install = function (app: App) {
  app.component('TiImage', Image)
}

export const TiImage = Image

export default Image
