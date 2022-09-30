import type { App } from 'vue'
import Card from './card'

Card.install = function (app: App) {
  app.component('TiCard', Card)
}

export const TiCard = Card

export default Card
