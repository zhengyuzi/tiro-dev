import { defineComponent, onMounted, PropType, Ref, ref } from 'vue'
import { ExtractPublicPropTypes } from '../_utils'
import style from './style/index.cssr'

const props = {
  modelValue: [Boolean, String, Number],
  activeValue: {
    type: [Boolean, String, Number],
    default: true
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium'
  },
  type: {
    type: String as PropType<
      'default' | 'success' | 'info' | 'danger' | 'warning' | 'bright'
    >,
    default: 'default'
  },
  disabled: Boolean
}

export type SwitchProps = ExtractPublicPropTypes<typeof props>

const Switch = defineComponent({
  props,
  setup(props, { emit }) {
    onMounted(() => {
      style.mount({
        id: 'ti-switch'
      })
    })

    const handleChecked = () => {
      if (props.disabled) return
      const value =
        props.modelValue === props.activeValue
          ? props.inactiveValue
          : props.activeValue
      emit('update:modelValue', value)
    }

    return () => (
      <div class="ti-switch">
        <div
          class={[
            'ti-switch__inner',
            `is-${props.size}`,
            `is-${props.type}`,
            `${props.modelValue === props.activeValue ? 'is-checked' : ''}`,
            `${props.disabled ? 'is-disabled' : ''}`
          ]}
          onClick={handleChecked}
        >
          <div class="ti-switch__action"></div>
        </div>
      </div>
    )
  }
})

export default Switch
