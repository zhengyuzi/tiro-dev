import { defineComponent, onMounted } from 'vue'
import style from './style/index.cssr'

const CarouselItem = defineComponent({
  setup(props, { slots }) {
    onMounted(() => {
      style.mount({
        id: 'ti-carousel-item'
      })
    })

    return () => (
      <div class="ti-carousel-item">{slots.default && slots.default()}</div>
    )
  }
})

export default CarouselItem
