<template>
  <button
    :class="[
      'ti-button',
      `is-${size}`,
      `is-${type}`,
      dashed ? 'is-dashed' : '',
      fill ? 'is-fill' : '',
      text ? 'is-text' : '',
      disabled ? 'is-disabled' : '',
      circle ? 'is-circle' : ''
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  size?: 'small' | 'medium' | 'large'
  type?: 'default' | 'success' | 'info' | 'danger' | 'warning' | 'bright'
  dashed?: boolean
  fill?: boolean
  text?: boolean
  disabled?: boolean
  circle?: boolean
}

withDefaults(defineProps<IProps>(), {
  size: 'medium',
  type: 'default',
  dashed: false,
  fill: false,
  text: false,
  disabled: false,
  circle: false
})
</script>

<style lang="scss" scoped>
@import '../../style/base.scss';
@import './button.scss';
</style>
