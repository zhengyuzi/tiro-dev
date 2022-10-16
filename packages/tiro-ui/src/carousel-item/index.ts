import type { App } from 'vue'
import CarouselItem from './carousel-item'

CarouselItem.install = function (app: App) {
  app.component('TiCarouselItem', CarouselItem)
}

export const TiCarouselItem = CarouselItem

export default CarouselItem
