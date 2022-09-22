<script setup lang="ts">
import { h, ref } from 'vue'
import { TiIcon, TiInput } from '@tiro/ui'

const a = ref('')

const handleInput = (e: Event) => {
  // console.log(e)
}

const handleBlur = () => {
  // console.log('blur')
}

const handleChange = (value: string) => {
  // console.log(value)
}

const handleClear = () => {
  // console.log(1111)
}

const Search = h(TiIcon, { name: 'search', size: 20, color: '#aaa' })

const Input = ref()
</script>

<template>
  <div class="example">
    <ti-input
      ref="Input"
      v-model="a"
      style="width: 200px"
      size="small"
      clearable
      @input="handleInput"
      @blur="handleBlur"
      @change="handleChange"
      @clear="handleClear"
    ></ti-input>
    <ti-input
      v-model="a"
      style="width: 200px"
      type="password"
      clearable
      :suffix-icon="Search"
    ></ti-input>
    <ti-input
      v-model="a"
      style="width: 200px"
      size="large"
      clearable
      type="password"
      style-type="success"
    ></ti-input>
  </div>
</template>

<style scoped lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}
.example {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > * {
    margin: 10px 0;
  }
}
</style>
