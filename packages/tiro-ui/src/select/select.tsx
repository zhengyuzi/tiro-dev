import { defineComponent, ref, Transition } from 'vue'
import type { PropType, Ref } from 'vue'
import { ExtractPublicPropTypes, ComponentType, ComponentSize } from '../_utils'
import './select.scss'

export interface SelectOption {
  label: string
  value: string | number
  disabled: boolean
}

const props = {
  size: {
    type: String as PropType<ComponentSize>,
    default: 'medium'
  },
  type: {
    type: String as PropType<ComponentType>,
    default: 'default'
  },
  placeholder: {
    type: String,
    default: '选择'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => []
  }
}

export type SelectProps = ExtractPublicPropTypes<typeof props>

const Select = defineComponent({
  props,
  setup(props) {
    const { size, type, placeholder } = props

    const isFocus = ref(false)
    const isExpand = ref(false)
    const Input = ref(null) as unknown as Ref<HTMLInputElement>

    const handleBlur = () => {
      isFocus.value = false
      isExpand.value = false
    }

    const handleFocus = () => {
      isFocus.value = true
    }

    const change = (e: Event) => {
      e.preventDefault()
      if (props.disabled) return
      isFocus.value = true
      Input.value.focus()
      isExpand.value = !isExpand.value
    }

    const handleMenu = (e: Event) => {
      e.preventDefault()
      isExpand.value = true
    }

    return () => (
      <div
        class={[
          'ti-select',
          `is-${type}`,
          `is-${size}`,
          props.disabled ? 'is-disabled' : '',
          isFocus.value ? 'is-focus' : ''
        ]}
      >
        <div class="ti-select__inner" onMousedown={change}>
          <input
            ref={Input}
            class="ti-select__inner__box"
            readonly
            type="text"
            placeholder={placeholder}
            onBlur={handleBlur}
            onFocus={handleFocus}
            disabled={props.disabled}
          />
          <div class="ti-select__inner__icons">
            <i
              class={[
                'ti',
                'ti-icon-arrow-down',
                isExpand.value ? 'is-reserve' : ''
              ]}
            ></i>
          </div>
        </div>
        <Transition name="ti-expand">
          {isExpand.value && (
            <div class="ti-select__menu" onMousedown={handleMenu}>
              <div></div>
            </div>
          )}
        </Transition>
      </div>
    )
  }
})

export default Select
