import { defineComponent, PropType, provide, reactive } from 'vue'
import { ComponentSize, ComponentType, ExtractPublicPropTypes } from '../_utils'

const props = {
  modelValue: Array as PropType<Array<string | number | boolean>>,
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

export type CheckboxGroupProps = ExtractPublicPropTypes<typeof props>

const CheckboxGroup = defineComponent({
  props,
  setup(props, { slots, emit }) {
    const isChecked: Array<string | number | boolean> = reactive([])

    const Change = (checked: boolean, value: string | number | boolean) => {
      if (checked) {
        isChecked.push(value)
      } else {
        const index = isChecked.indexOf(value)
        isChecked.splice(index, 1)
      }
      emit('update:modelValue', isChecked)
    }

    provide('checkbox', {
      size: props.size,
      disabled: props.disabled,
      name: props.name,
      value: props.modelValue,
      type: props.type,
      Change
    })

    return () => (
      <div class="ti-checkbox-group">{slots.default && slots.default()}</div>
    )
  }
})

export default CheckboxGroup
