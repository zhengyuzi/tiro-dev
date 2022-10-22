import { defineComponent } from 'vue'

const CarouselItem = defineComponent({
  setup(props, { slots }) {
    return () => (
      <div class="ti-carousel__item-inner">
        {slots.default && slots.default()}
      </div>
    )
  }
})

export default CarouselItem
