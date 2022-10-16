import type { App } from 'vue'
import Carousel from './carousel'

Carousel.install = function (app: App) {
  app.component('TiCarousel', Carousel)
}

export const TiCarousel = Carousel

export default Carousel
