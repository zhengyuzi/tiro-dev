<script setup>
import { h } from 'vue'
import { TiMessage, TiIcon } from '@tiro/ui'

const handleInfo = () => {
  TiMessage({
    type: 'info',
    message: '这是一条提示信息'
  })
}

const handleSuccess = () => {
  TiMessage({
    type: 'success',
    message: '这是一条成功信息'
  })
}

const handleWarning = () => {
  TiMessage({
    type: 'warning',
    message: '这是一条警告信息'
  })
}

const handleError = () => {
  TiMessage({
    type: 'error',
    message: '这是一条错误信息'
  })
}

const handleClearable = () => {
  TiMessage({
    type: 'info',
    clearable: true,
    message: '这是一条可以关闭的信息'
  })
}

const handleIcon = () => {
  TiMessage({
    icon: () => h(TiIcon, { name: 'ti-icon-loading', size: 19 }),
    message: '这是一条自定义图标的信息'
  })
}

const handleTime = () => {
  TiMessage({
    type: 'info',
    duration: 5000,
    message: '这是一条持续5s的信息'
  })
}

const handleNoIcon = () => {
  TiMessage({
    message: '这是一条没有图标的信息'
  })
}
</script>

<style lang="scss" scoped>
.message-demo {
    & > * {
        margin-right: 10px;
    }
}
</style>

# Message 信息

## 基础用法

::: show
<div class="message-demo">
  <ti-button @click="handleInfo">提示</ti-button>
  <ti-button @click="handleSuccess">成功</ti-button>
  <ti-button @click="handleWarning">警告</ti-button>
  <ti-button @click="handleError">错误</ti-button>
</div>

``` vue
<template>
  <ti-button @click="handleInfo">提示</ti-button>
  <ti-button @click="handleSuccess">成功</ti-button>
  <ti-button @click="handleWarning">警告</ti-button>
  <ti-button @click="handleError">错误</ti-button>
</template>

<script setup lang="ts">
import { TiMessage } from '@tiro/ui'

const handleInfo = () => {
  TiMessage({
    type: 'info',
    message: '这是一条提示信息'
  })
}

const handleSuccess = () => {
  TiMessage({
    type: 'success',
    message: '这是一条成功信息'
  })
}

const handleWarning = () => {
  TiMessage({
    type: 'warning',
    message: '这是一条警告信息'
  })
}

const handleError = () => {
  TiMessage({
    type: 'error',
    message: '这是一条错误信息'
  })
}
</script>
```
:::

## 可关闭
添加 `clearable` 属性为 `true`，message出现可关闭按钮
::: show
<ti-button @click="handleClearable">可关闭的信息</ti-button>

``` vue
<template>
  <ti-button @click="handleClearable">可关闭的信息</ti-button>
</template>

<script setup lang="ts">
import { TiMessage } from '@tiro/ui'

const handleClearable = () => {
  TiMessage({
    type: 'info',
    clearable: true,
    message: '这是一条可以关闭的信息'
  })
}
</script>
```
:::

## 自定义图标
::: show
<ti-button @click="handleIcon">自定义图标的信息</ti-button>

``` vue
<template>
  <ti-button @click="handleIcon">自定义图标的信息</ti-button>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { TiMessage, TiIcon } from '@tiro/ui'

const handleIcon = () => {
  TiMessage({
    icon: () => h(TiIcon, { name: 'ti-icon-loading', size: 19 }),
    message: '这是一条自定义图标的信息'
  })
}
</script>
```
:::

## 自定义持续时间
设置 `duration` 属性，自定义message持续时间
::: show
<ti-button @click="handleTime">持续5s的信息</ti-button>

``` vue
<template>
  <ti-button @click="handleTime">持续5s的信息</ti-button>
</template>

<script setup lang="ts">
import { TiMessage } from '@tiro/ui'

const handleTime = () => {
  TiMessage({
    type: 'info',
    duration: 5000,
    message: '这是一条持续5s的信息'
  })
}
</script>
```
:::

## 无图标
不设置 `type` 属性与 `icon` 属性就不会显示图标
::: show
<ti-button @click="handleNoIcon">没有图标的信息</ti-button>

``` vue
<template>
  <ti-button @click="handleNoIcon">没有图标的信息</ti-button>
</template>

<script setup lang="ts">
import { TiMessage } from '@tiro/ui'

const handleNoIcon = () => {
  TiMessage({
    message: '这是一条没有图标的信息'
  })
}
</script>
```
:::

## Radio 属性
::: table

| 属性名  | 说明  | 类型 | 可选值 | 默认值 |
| :----: | :----: | :----: | :----: | :----: |
| type | 主题 | string | 'info' / 'error' / 'warning' / 'success' | —— |
| message | 信息内容 | string | —— | —— |
| duration | 持续时长 | number | —— | —— |
| clearable | 是否可关闭 | boolean | —— | false |
| icon | 自定义图标 | () => VNode | —— | —— |

:::