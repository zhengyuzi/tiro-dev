import { defineComponent, onMounted, ref } from 'vue'
import type { PropType, Component, VNode, Ref } from 'vue'
import { ExtractPublicPropTypes } from '../_utils'
import style from './style/index.cssr'
import { TiIcon } from '../icon'

const props = {
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as PropType<'text' | 'password'>,
    default: 'text'
  },
  name: String,
  maxlength: Number,
  placeholder: {
    type: String,
    default: '请输入内容'
  },
  modelValue: {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<'large' | 'medium' | 'small'>,
    default: 'medium'
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  prefixIcon: {
    type: Object as PropType<Component | VNode>,
    default: undefined
  },
  suffixIcon: {
    type: Object as PropType<Component | VNode>,
    default: undefined
  },
  clearable: {
    type: Boolean,
    default: false
  },
  styleType: {
    type: String as PropType<
      'default' | 'success' | 'info' | 'danger' | 'warning' | 'bright'
    >,
    default: 'default'
  },
  showPassword: {
    type: Boolean,
    default: true
  },
  showWordLimit: {
    type: Boolean,
    default: false
  }
}

export type InputProps = ExtractPublicPropTypes<typeof props>

const Button = defineComponent({
  props,
  setup(props, { emit, expose }) {
    onMounted(() => {
      style.mount({
        id: 'ti-input'
      })
    })

    const {
      disabled,
      size,
      styleType,
      suffixIcon,
      prefixIcon,
      name,
      type,
      maxlength,
      placeholder,
      autofocus,
      readonly,
      clearable,
      showWordLimit,
      showPassword
    } = props

    const isFocus = ref(false)
    const isPassword = ref(false)
    const Input = ref(null) as unknown as Ref<HTMLInputElement>

    const handleInput = (e: Event) => {
      const h = e.target as HTMLInputElement
      emit('update:modelValue', h?.value)
      emit('input', e)
    }

    const handleFocus = (e: Event) => {
      isFocus.value = true
      emit('focus', e)
    }

    const handleBlur = (e: Event) => {
      isFocus.value = false
      if (isPassword.value) isPassword.value = false
      emit('blur', e)
    }

    const handleChange = (e: Event) => {
      const h = e.target as HTMLInputElement
      emit('change', h?.value)
    }

    const handlePassword = () => {
      isPassword.value = !isPassword.value
    }

    const handleClear = () => {
      emit('update:modelValue', '')
      emit('clear')
    }

    const handleFix = (e: Event) => {
      e.preventDefault()
      Input.value.focus()
    }

    const focus = () => {
      Input.value.focus()
    }

    const blur = () => {
      Input.value.blur()
    }

    const select = () => {
      Input.value.select()
    }

    expose({
      focus,
      blur,
      select
    })

    return () => (
      <div
        class={[
          'ti-input',
          disabled ? 'is-disabled' : null,
          isFocus.value ? 'is-focus' : null,
          `is-${size}`
        ]}
      >
        <div class={['ti-input__wrapper', `is-style-type-${styleType}`]}>
          <div class="ti-input__prefix" onMousedown={handleFix}>
            {prefixIcon && <div class="prefix-icon">{prefixIcon}</div>}
          </div>
          <input
            ref={Input}
            class="ti-input__inner"
            name={name}
            type={
              type === 'text' ? 'text' : isPassword.value ? 'text' : 'password'
            }
            disabled={disabled}
            maxlength={maxlength}
            placeholder={placeholder}
            value={props.modelValue}
            autofocus={autofocus}
            readonly={readonly}
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div class="ti-input__suffix" onMousedown={handleFix}>
            {suffixIcon && <div class="suffix-icon">{suffixIcon}</div>}
            {clearable && props.modelValue && (
              <div class="clearable" onMousedown={handleClear}>
                <TiIcon name="ti-icon-close" />
              </div>
            )}
            {showWordLimit && (
              <div class="word-limit">
                <span class="word-limit__inner">
                  {props.modelValue.length}/{maxlength}
                </span>
              </div>
            )}
            {showPassword && type === 'password' && props.modelValue && (
              <div onMousedown={handlePassword}>
                <TiIcon
                  class="password"
                  name={isPassword.value ? 'ti-icon-eye' : 'ti-icon-eye-close'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
})

export default Button
