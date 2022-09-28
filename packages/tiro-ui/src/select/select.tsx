import { defineComponent, ref, toRefs, Transition } from 'vue'
import type { PropType, Ref } from 'vue'
import { ExtractPublicPropTypes, ComponentType, ComponentSize } from '../_utils'
import TiIcon from '../icon'
import style from './style/index.cssr'

style.mount({
  id: 'ti-select'
})

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
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
    const { options, disabled } = toRefs(props)

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
      if (disabled.value) return
      isFocus.value = true
      Input.value.focus()
      isExpand.value = !isExpand.value
    }

    const handleMenu = (e: Event) => {
      e.preventDefault()
      isExpand.value = true
    }

    const handleSelect = (index: number) => {
      isExpand.value = false
    }

    return () => (
      <div
        class={[
          'ti-select',
          `is-${type}`,
          `is-${size}`,
          disabled.value ? 'is-disabled' : '',
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
            disabled={disabled.value}
          />
          <div class="ti-select__inner__icons">
            <TiIcon
              name={
                isExpand.value
                  ? 'ti-icon-arrow-down is-reserve'
                  : 'ti-icon-arrow-down'
              }
            />
          </div>
        </div>
        <Transition name="ti-expand">
          {isExpand.value && (
            <div class="ti-select__menu" onMousedown={handleMenu}>
              <div class="ti-select__menu__inner">
                {options.value.length ? (
                  options.value.map((item, index) => {
                    return (
                      <div
                        class="ti-select__menu__item"
                        onClick={() => handleSelect(index)}
                        key={item.value}
                      >
                        {item.label}
                      </div>
                    )
                  })
                ) : (
                  <div class="ti-select__menu__empty">111</div>
                )}
              </div>
            </div>
          )}
        </Transition>
      </div>
    )
  }
})

export default Select
