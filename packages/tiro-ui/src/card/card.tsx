import { defineComponent, onMounted, PropType } from 'vue'
import style from './style/index.cssr'

type CardShadow = 'always' | 'hover'

const props = {
  bodyStyle: Object,
  shadow: String as PropType<CardShadow>
}

const Card = defineComponent({
  props,
  setup(props, { slots }) {
    onMounted(() => {
      style.mount({
        id: 'ti-card'
      })
    })
    return () => (
      <div class="ti-card">
        {slots.header && <div class="ti-card__header">{slots.header()}</div>}
        <div class="ti-card__body" style={props.bodyStyle}>
          {slots.default && slots.default()}
        </div>
      </div>
    )
  }
})

export default Card
