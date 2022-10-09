import { defineComponent, inject, onMounted, PropType, ref } from 'vue'
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
  size: String as PropType<ComponentSize>,
  type: String as PropType<ComponentType>,
  disabled: Boolean,
  checked: Boolean
}

export type RadioProps = ExtractPublicPropTypes<typeof props>

export type TRadioInject = {
  size: ComponentSize
  disabled: boolean
  name: string
  type: ComponentType
  value: string | number
  Change: ((value: string | number | boolean) => void) | null
}

const Radio = defineComponent({
  props,
  setup(props, { slots, emit }) {
    onMounted(() => {
      style.mount({
        id: 'ti-radio'
      })
    })

    const RadioInject: TRadioInject = inject('radio', {
      size: 'medium',
      type: 'default',
      disabled: false,
      name: '',
      value: '',
      Change: null
    })

    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      if (RadioInject.Change) RadioInject.Change(target.value)
    }

    return () => (
      <label
        class={[
          'ti-radio',
          `is-${props.type || RadioInject.type}`,
          `is-${props.size || RadioInject.size}`,
          props.disabled || RadioInject.disabled ? 'is-disabled' : ''
        ]}
      >
        <input
          type="radio"
          name={RadioInject.name || props.name}
          class="ti-radio__input"
          disabled={props.disabled || RadioInject.disabled}
          value={props.value}
          checked={props.checked || RadioInject.value === props.value}
          onChange={handleChange}
        />
        <div class="ti-radio__circle"></div>
        <span class="ti-radio__text">{slots.default && slots.default()}</span>
      </label>
    )
  }
})

export default Radio
