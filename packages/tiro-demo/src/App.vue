<script setup lang="ts">
import {
  TiMessage,
  TiIcon,
  TiButton,
  TiConfigProvider,
  TiCard,
  TiCheckbox,
  TiCheckboxGroup
} from '@tiro/ui'
import { h, Ref, ref } from 'vue'

const handleClick = () => {
  TiMessage({
    type: 'success',
    message: 'Once upon a time you dressed so fine'
  })
}

const handleClick2 = () => {
  TiMessage({
    type: 'info',
    message:
      'If I were you, I will realize that I love you more than any other guy'
  })
}

const handleClick3 = () => {
  TiMessage({
    message: '66666',
    icon: () => h(TiIcon, { name: 'ti-icon-loading', size: 19 })
  })
}

const handleClick4 = () => {
  TiMessage({
    message: '您尚未绑定手机号，可能会影响账号的正常使用，请立即进行绑定！',
    type: 'error',
    clearable: true
  })
}

const Theme: Ref<'light' | 'dark'> = ref('light')

const handleClick5 = () => {
  Theme.value = Theme.value === 'light' ? 'dark' : 'light'
}

const demo1 = ref(['BeiJing', 'GuangZhou'])
</script>

<template>
  <ti-config-provider :theme="Theme">
    <ti-card style="width: 500px">
      <div class="example">
        <ti-button @click="handleClick">click</ti-button>
        <ti-button @click="handleClick2">click</ti-button>
        <ti-button @click="handleClick3">click</ti-button>
        <ti-button @click="handleClick4">click</ti-button>
        <ti-button fill @click="handleClick5">黑暗模式</ti-button>
      </div>
    </ti-card>
  </ti-config-provider>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  justify-content: center;
}

.ti-card {
  margin-top: 20vh;
}

.example > * {
  margin-right: 10px;
}
</style>
