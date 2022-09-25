<script setup lang="ts">
import { h, ref } from 'vue'
import { TiIcon, TiButton, TiInput } from '@tiro/ui'

const value = ref('')
const Input = ref()

const handleInput = (v: any) => {
  // console.log(v)
}

const handleFocus = () => {
  Input.value.focus()
}

const icon = h(TiIcon, { name: 'ti-icon-good', size: 20, color: '#aaa' })
</script>

<template>
  <div class="example">
    <!-- <ti-button size="small">click</ti-button>
    <ti-button>click</ti-button>
    <ti-button size="large">click</ti-button>
    <ti-button type="success">click</ti-button>
    <ti-button type="warning">click</ti-button>
    <ti-button type="danger">click</ti-button>
    <ti-button type="info">click</ti-button>
    <ti-button type="bright">click</ti-button>
    <ti-button dashed>click</ti-button>
    <ti-button type="success" dashed>click</ti-button>
    <ti-button type="warning" dashed>click</ti-button>
    <ti-button type="danger" dashed>click</ti-button>
    <ti-button type="info" dashed>click</ti-button>
    <ti-button type="bright" dashed>click</ti-button>
    <ti-button fill>click</ti-button>
    <ti-button type="success" fill circle>
      <ti-icon name="ti-icon-search" />
    </ti-button>
    <ti-button type="warning" fill>click</ti-button>
    <ti-button type="danger" fill>click</ti-button>
    <ti-button type="info" fill>click</ti-button>
    <ti-button type="bright" fill>click</ti-button>
    <ti-button text>click</ti-button>
    <ti-button type="success" text>click</ti-button>
    <ti-button type="warning" text>click</ti-button>
    <ti-button type="danger" text>click</ti-button>
    <ti-button type="info" text>click</ti-button>
    <ti-button type="bright" text>
      <ti-icon name="ti-icon-search" />
      点击
    </ti-button> -->
    <ti-input
      ref="Input"
      v-model="value"
      style="width: 250px"
      :prefix-icon="icon"
    ></ti-input>
    <ti-button @click="handleFocus">click</ti-button>
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
