import { defineComponent, inject, onMounted, PropType } from 'vue'
import { ComponentSize, ComponentType, ExtractPublicPropTypes } from '../_utils'
import style from './style/index.cssr'

const props = {
  name: {
    type: String,
    default: ''
  },
  value: {
    type: [String, Number, Boolean],
    default: ''
  },
  label: String,
  size: String as PropType<ComponentSize>,
  type: String as PropType<ComponentType>,
  disabled: Boolean,
  checked: Boolean
}

export type CheckboxProps = ExtractPublicPropTypes<typeof props>

export type TCheckboxInject = {
  size: ComponentSize
  disabled: boolean
  name: string
  type: ComponentType
  value: Array<string | number | boolean | undefined>
  Change: ((checked: boolean, value: string | number | boolean) => void) | null
}

const Checkbox = defineComponent({
  props,
  setup(props) {
    onMounted(() => {
      style.mount({
        id: 'ti-checkbox'
      })
    })

    const CheckboxInject: TCheckboxInject = inject('checkbox', {
      size: 'medium',
      type: 'default',
      disabled: false,
      name: '',
      value: [],
      Change: null
    })

    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      if (CheckboxInject.Change)
        CheckboxInject.Change(target.checked, props.value)
    }

    return () => (
      <label
        class={[
          'ti-checkbox',
          `is-${props.type || CheckboxInject.type}`,
          `is-${props.size || CheckboxInject.size}`,
          props.disabled || CheckboxInject.disabled ? 'is-disabled' : ''
        ]}
      >
        <input
          type="checkbox"
          name={CheckboxInject.name || props.name}
          class="ti-checkbox__input"
          disabled={props.disabled || CheckboxInject.disabled}
          value={props.value}
          checked={props.checked || CheckboxInject.value?.includes(props.value)}
          onChange={handleChange}
        />
        <div class="ti-checkbox__inner"></div>
        <span class="ti-checkbox__text">{props.label}</span>
      </label>
    )
  }
})

export default Checkbox
