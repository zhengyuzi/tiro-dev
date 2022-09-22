<template>
  <div
    :class="[
      'ti-input',
      disabled ? 'is-disabled' : null,
      isFocus ? 'is-focus' : null
    ]"
  >
    <div
      :class="['ti-input__wrapper', `is-${size}`, `is-style-type-${styleType}`]"
    >
      <div class="ti-input__prefix">
        <div v-if="prefixIcon" class="prefix-icon">
          <component :is="prefixIcon"></component>
        </div>
      </div>
      <input
        ref="Input"
        class="ti-input__inner"
        :name="name"
        :type="
          props.type === 'text' ? 'text' : isPassword ? 'text' : 'password'
        "
        :disabled="disabled"
        :maxlength="maxlength"
        :placeholder="placeholder"
        :value="modelValue"
        :autofocus="autofocus"
        :readonly="readonly"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />
      <div class="ti-input__suffix">
        <div v-if="suffixIcon" class="suffix-icon">
          <component :is="suffixIcon"></component>
        </div>
        <div
          v-if="clearable && modelValue"
          class="clearable"
          @mousedown.prevent="handleClear"
        >
          <i class="ti icon-close"></i>
        </div>
        <div v-if="showWordLimit" class="word-limit">
          <span class="word-limit__inner"
            >{{ modelValue.length }}/{{ maxlength }}</span
          >
        </div>
        <div
          v-if="showPassword && type === 'password' && modelValue"
          @mousedown.prevent="handlePassword"
        >
          <i
            :class="[
              'ti',
              isPassword ? 'icon-browse' : 'icon-eye-close',
              'password'
            ]"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'
import type { Component, VNode } from 'vue'

export interface IProps {
  disabled?: boolean
  type?: 'text' | 'password'
  name?: string
  maxlength?: number
  placeholder?: string
  modelValue?: string
  size?: 'large' | 'default' | 'small'
  autofocus?: boolean
  readonly?: boolean
  prefixIcon?: Component | VNode
  suffixIcon?: Component | VNode
  clearable?: boolean
  styleType?: 'default' | 'success' | 'info' | 'danger' | 'warning'
  showPassword?: boolean
  showWordLimit?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  disabled: false,
  type: 'text',
  name: undefined,
  maxlength: undefined,
  placeholder: '请输入内容',
  modelValue: '',
  size: 'default',
  autofocus: false,
  readonly: false,
  prefixIcon: undefined,
  suffixIcon: undefined,
  clearable: false,
  styleType: 'default',
  showPassword: true,
  showWordLimit: false
})

const emit = defineEmits([
  'input',
  'change',
  'focus',
  'blur',
  'clear',
  'update:modelValue'
])

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

const handleClickWrapper = () => {
  if (!isFocus.value && !props.disabled && !isFocus.value) {
    focus()
    isFocus.value = true
  }
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('clear')
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

defineExpose({
  focus,
  blur,
  select
})
</script>

<style lang="scss" scoped>
@import '../../style/base.scss';
@import './Input.scss';
</style>
