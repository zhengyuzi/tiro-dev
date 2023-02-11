import { defineComponent, inject, onMounted, ref, Transition } from 'vue'
import type { PropType, Ref } from 'vue'
import { ExtractPublicPropTypes, ComponentType, ComponentSize } from '../_utils'
import TiIcon from '../icon'
import style, { theme } from './style/index.cssr'

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
    default: '请选择'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => []
  },
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: ''
  },
  multiple: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  }
}

export type SelectProps = ExtractPublicPropTypes<typeof props>

const Select = defineComponent({
  props,
  setup(props, { emit, slots }) {
    const isFocus = ref(false)
    const isExpand = ref(false)
    const Input = ref(null) as unknown as Ref<HTMLInputElement>
    const Menu = ref(null) as unknown as Ref<HTMLInputElement>
    const currentIndexs: Ref<number[]> = ref([])
    const currentScroll = ref(0)

    const Theme = inject('theme', {
      value: 'light'
    })

    onMounted(() => {
      style.mount({
        id: 'ti-select'
      })
    })

    const blur = (e: Event) => {
      isFocus.value = false
      isExpand.value = false
      emit('blur', e)
    }

    const focus = (e: Event) => {
      emit('focus', e)
    }

    const handleFocus = () => {
      isFocus.value = true
      Input.value.focus()
    }

    const change = (e: Event) => {
      e.preventDefault()
      if (props.disabled) return
      handleFocus()
      isExpand.value = !isExpand.value
      if (isExpand.value) handleScrollTop()
    }

    const handleScrollTop = () => {
      const MenuBoxHeight = Menu.value.offsetHeight
      const isOverHeight = currentScroll.value > MenuBoxHeight
      setTimeout(() => {
        Menu.value.scrollTop = isOverHeight
          ? currentScroll.value - MenuBoxHeight
          : currentScroll.value
      }, 0)
    }

    const handleMenu = (e: Event) => {
      e.preventDefault()
      isExpand.value = true
    }

    const currentValue = () => {
      return currentIndexs.value.map((item) => {
        return props.options[item].value
      })
    }

    const handleSelect = (index: number) => {
      if (props.multiple) {
        // 多选
        const isExist = currentIndexs.value.indexOf(index)

        isExist === -1
          ? currentIndexs.value.push(index)
          : currentIndexs.value.splice(isExist, 1)

        emit('update:modelValue', currentValue())
        emit('select', currentValue())
        emit('change', currentValue())
      } else {
        // 单选
        const selectItem = props.options[index]
        currentIndexs.value[0] = index
        emit('update:modelValue', selectItem.value)
        emit('select', selectItem.value)
        emit('change', selectItem.value)
        isExpand.value = false
      }
    }

    const getElTop = (e: Event) => {
      const el = e.target as HTMLElement
      currentScroll.value = el.offsetTop
    }

    const removeMultipleItem = (e: Event, index: number) => {
      e.stopPropagation()
      e.preventDefault()
      currentIndexs.value.splice(index, 1)
      emit('change', currentValue())
      emit('update:modelValue', currentValue())
      handleFocus()
    }

    const handleClear = (e: Event) => {
      e.stopPropagation()
      e.preventDefault()
      emit('clear')
      currentIndexs.value = []
      currentScroll.value = 0
      handleFocus()
    }

    return () => (
      <div
        class={[
          'ti-select',
          `is-${props.type}`,
          `is-${props.size}`,
          props.disabled ? 'is-disabled' : '',
          isFocus.value ? 'is-focus' : ''
        ]}
        style={Theme?.value && theme[Theme.value]}
      >
        <div class="ti-select__inner" onMousedown={change}>
          {props.multiple && (
            <div class="ti-select__multiple">
              {currentIndexs.value.map((item, index) => {
                return (
                  <div class="ti-select__multiple__item">
                    {props.options[item].label}
                    <span
                      onMousedown={(e) => {
                        removeMultipleItem(e, index)
                      }}
                    >
                      <TiIcon name="ti-icon-close" />
                    </span>
                  </div>
                )
              })}
            </div>
          )}
          <input
            ref={Input}
            class="ti-select__inner__box"
            readonly
            type="text"
            placeholder={currentIndexs.value.length ? '' : props.placeholder}
            onBlur={blur}
            onFocus={focus}
            disabled={props.disabled}
            value={
              props.multiple ? '' : props.options[currentIndexs.value[0]]?.label
            }
          />
          <div class="ti-select__inner__icons">
            {props.clearable && currentIndexs.value.length ? (
              <span
                class="ti-select__inner__icons__close"
                onMousedown={handleClear}
              >
                <TiIcon name="ti-icon-close" />
              </span>
            ) : (
              <TiIcon
                name={
                  isExpand.value
                    ? 'ti-icon-arrow-down is-reserve'
                    : 'ti-icon-arrow-down'
                }
              />
            )}
          </div>
        </div>
        <Transition name="ti-expand">
          <div
            v-show={isExpand.value}
            class="ti-select__menu"
            onMousedown={handleMenu}
            ref={Menu}
          >
            <div class="ti-select__menu__inner">
              {props.options.length ? (
                props.options.map((item, index) => {
                  return (
                    <div
                      class={[
                        'ti-select__menu__item',
                        currentIndexs.value.includes(index) ? 'is-select' : '',
                        item.disabled ? 'is-disabled' : ''
                      ]}
                      onClick={(e) => {
                        handleSelect(index)
                        getElTop(e)
                      }}
                      key={index}
                    >
                      {item.label}
                    </div>
                  )
                })
              ) : (
                <div class="ti-select__menu__empty">
                  {slots.empty ? (
                    slots.empty()
                  ) : (
                    <>
                      <TiIcon name="ti-icon-empty" size={30} />
                      <span>内容为空</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </Transition>
      </div>
    )
  }
})

export default Select
