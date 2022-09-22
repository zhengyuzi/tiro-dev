<template>
  <i :class="['ti', `${name}`]" :style="iconStyle"></i>
</template>

<script setup lang="ts">
export interface IProps {
  name: string
  size?: number
  color?: string
}

const props = withDefaults(defineProps<IProps>(), {
  name: '',
  size: undefined,
  color: undefined
})

const iconStyle = {
  fontSize: `${props.size}px`,
  color: props.color
}
</script>

<style lang="scss" scoped>
@import '../../style/icon.scss';
</style>
