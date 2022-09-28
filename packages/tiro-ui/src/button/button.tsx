import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { ExtractPublicPropTypes, ComponentType, ComponentSize } from '../_utils'
import style from './style/index.cssr'

style.mount({
  id: 'ti-button'
})

const props = {
  size: {
    type: String as PropType<ComponentSize>,
    default: 'medium'
  },
  type: {
    type: String as PropType<ComponentType>,
    default: 'default'
  },
  dashed: {
    type: Boolean,
    default: false
  },
  fill: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  }
}

export type ButtonProps = ExtractPublicPropTypes<typeof props>

const Button = defineComponent({
  props,
  setup(props, { slots }) {
    const { disabled, size, type, dashed, fill, text, circle, plain, round } =
      props
    return () => (
      <button
        disabled={disabled}
        class={[
          'ti-button',
          `is-${size || 'medium'}`,
          `is-${type || 'default'}`,
          !dashed || 'is-dashed',
          !fill || 'is-fill',
          !text || 'is-text',
          !disabled || 'is-disabled',
          !circle || 'is-circle',
          !plain || 'is-plain',
          !round || 'is-round'
        ]}
      >
        {slots.default && slots.default()}
      </button>
    )
  }
})

export default Button
