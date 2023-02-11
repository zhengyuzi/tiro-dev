import { defineComponent, inject, onMounted } from 'vue'
import type { PropType } from 'vue'
import { ExtractPublicPropTypes, ComponentType, ComponentSize } from '../_utils'
import style, { theme } from './style/index.cssr'

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
    const Theme = inject('theme', {
      value: 'light'
    })

    onMounted(() => {
      style.mount({
        id: 'ti-button'
      })
    })

    return () => (
      <button
        disabled={props.disabled}
        class={[
          'ti-button',
          `is-${props.size || 'medium'}`,
          `is-${props.type || 'default'}`,
          !props.dashed || 'is-dashed',
          !props.fill || 'is-fill',
          !props.text || 'is-text',
          !props.disabled || 'is-disabled',
          !props.circle || 'is-circle',
          !props.plain || 'is-plain',
          !props.round || 'is-round'
        ]}
        style={Theme?.value && theme[Theme.value]}
      >
        {slots.default && slots.default()}
      </button>
    )
  }
})

export default Button
