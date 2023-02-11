import { defineComponent, inject, onMounted, PropType } from 'vue'
import { ExtractPublicPropTypes } from '../_utils'
import style, { theme } from './style/index.cssr'

type CardShadow = 'always' | 'hover'

const props = {
  bodyStyle: String,
  headerStyle: String,
  bordered: {
    type: Boolean,
    default: true
  },
  shadow: String as PropType<CardShadow>
}

export type CardProps = ExtractPublicPropTypes<typeof props>

const Card = defineComponent({
  props,
  setup(props, { slots }) {
    const Theme = inject('theme', {
      value: 'light'
    })

    onMounted(() => {
      style.mount({
        id: 'ti-card'
      })
    })

    return () => (
      <div
        class={[
          'ti-card',
          props.bordered ? 'ti-card__bordered' : '',
          props.shadow ? `is-${props.shadow}` : ''
        ]}
        style={Theme?.value && theme[Theme.value]}
      >
        {slots.header && (
          <div class="ti-card__header" style={props.headerStyle}>
            {slots.header()}
          </div>
        )}
        <div class="ti-card__body" style={props.bodyStyle}>
          {slots.default && slots.default()}
        </div>
      </div>
    )
  }
})

export default Card
