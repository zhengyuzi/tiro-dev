import { defineComponent, PropType, provide } from 'vue'
import { ComponentSize, ComponentType, ExtractPublicPropTypes } from '../_utils'

const props = {
  modelValue: [String, Number, Boolean],
  size: {
    type: String as PropType<ComponentSize>,
    default: 'medium'
  },
  type: {
    type: String as PropType<ComponentType>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  name: String
}

export type RadioGroupProps = ExtractPublicPropTypes<typeof props>

const RadioGroup = defineComponent({
  props,
  setup(props, { slots, emit }) {
    const Change = (value: string | number | boolean) => {
      emit('update:modelValue', value)
    }

    provide('radio', {
      size: props.size,
      disabled: props.disabled,
      name: props.name,
      value: props.modelValue,
      type: props.type,
      Change
    })

    return () => (
      <div class="ti-radio-group">{slots.default && slots.default()}</div>
    )
  }
})

export default RadioGroup
