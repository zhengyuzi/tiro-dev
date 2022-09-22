<script setup>
import { ref, h } from 'vue'
import { TiIcon } from '@tiro/ui'

const baseValue = ref('')
const placeholderValue = ref('')
const sizeValue = ref('')
const sizeValue1 = ref('')
const sizeValue2 = ref('')
const clearableValue = ref('')
const passwordValue = ref('')
const styleType = ref('')
const iconValue = ref('')

const Search = h(TiIcon, { name: 'search', size: 18, color: '#aaa' })
const Ashbin = h(TiIcon, { name: 'ashbin', size: 20, color: '#aaa' })
</script>

<style lang="scss">
.ti-example-item {
    margin: 15px 0;
    label {
      font-size: 14px;
    }
}
</style>

# Input 输入框
你知道的，输入文本的框

## 基础用法
::: show
<ti-input v-model='baseValue' />

``` vue
<template>
  <ti-input v-model="value" />
</template>

<script setup lang="ts">
import { ref } from "vue"
const value = ref("")
</script>
```
:::

## 禁用
添加 `disabled` 可禁用输入框
::: show
<ti-input disabled />

``` vue
<template>
  <ti-input v-model="value" disabled />
</template>

<script setup lang="ts">
import { ref } from "vue"
const value = ref("")
</script>
```
:::

## Placeholder
通过 `placeholder` 属性设置占位文本
::: show
<ti-input v-model='placeholderValue' placeholder='说点儿什么~' />

``` vue
<template>
  <ti-input v-model="value" placeholder="说点儿什么~" />
</template>

<script setup lang="ts">
import { ref } from "vue"
const value = ref("")
</script>
```
:::

## 尺寸
改变 `size` 属性调整输入框大小, 内置有三个尺寸 `default`  `small` `large`
::: show
<div class="ti-example-item">
    <label>small</label>
    <ti-input v-model='sizeValue' style="width: 300px" size="small" />
</div>
<div class="ti-example-item">
    <label>default</label>
    <ti-input v-model='sizeValue1' style="width: 300px" />
</div>
<div class="ti-example-item">
    <label>large</label>
    <ti-input v-model='sizeValue2' style="width: 300px" size="large" />
</div>

``` vue
<template>
  <ti-input v-model="value" size="small" />
  <ti-input v-model="value" />
  <ti-input v-model="value" size="large" />
</template>

<script setup lang="ts">
import { ref } from "vue"
const value = ref("")
</script>
```
:::

## 清空
通过 `clearable` 属性设置清空按钮
::: show
<ti-input v-model='clearableValue' clearable />

``` vue
<template>
  <ti-input v-model="value" clearable />
</template>

<script setup lang="ts">
import { ref } from "vue"
const value = ref("")
</script>
```
:::

## 密码框
将 `type` 设置为 `password` , 文本输入框将转为密码框

`show-password = false` 可以隐藏控制显隐密码的按钮
::: show
<div class="ti-example-item">
  <ti-input v-model='passwordValue' type="password" />
</div>
<div class="ti-example-item">
  <ti-input v-model='passwordValue' type="password" :show-password="false" />
</div>

``` vue
<template>
  <ti-input v-model="value" type="password"  />
  <ti-input v-model="value" type="password" :show-password="false" />
</template>

<script setup lang="ts">
import { ref } from "vue"
const value = ref("")
</script>
```
:::

## 主题
属性 `style-type` 多种主题可选 `default` 、 `success` 、 `info` 、 `danger` 、 `warning`
::: show
<div class="ti-example-item">
    <label>success</label>
    <ti-input v-model='styleType' style="width: 300px" style-type="success" />
</div>
<div class="ti-example-item">
    <label>info</label>
    <ti-input v-model='styleType' style="width: 300px" style-type="info" />
</div>
<div class="ti-example-item">
    <label>danger</label>
    <ti-input v-model='styleType' style="width: 300px" style-type="danger" />
</div>
<div class="ti-example-item">
    <label>warning</label>
    <ti-input v-model='styleType' style="width: 300px" style-type="warning" />
</div>

``` vue
<template>
  <ti-input v-model="value" style-type="success" />
  <ti-input v-model="value" style-type="info" />
  <ti-input v-model="value" style-type="danger" />
  <ti-input v-model="value" style-type="warning" />
</template>

<script setup lang="ts">
import { ref } from "vue"
const value = ref("")
</script>
```
:::

## 插入Icon
在输入框中添加图标 `prefixIcon` 和 `suffixIcon`
::: show
<div class="ti-example-item">
  <ti-input v-model='iconValue' :prefixIcon="Ashbin" />
</div>
<div class="ti-example-item">
  <ti-input v-model='iconValue' :suffixIcon="Search" />
</div>

``` vue
<template>
  <ti-input v-model="value" :prefixIcon="Ashbin" />
  <ti-input v-model="value" :suffixIcon="Search" />
</template>

<script setup lang="ts">
import { ref, h } from "vue"
import { TiIcon } from '@tiro/ui'

const value = ref("")

const Search = h(TiIcon, { name: 'search', size: 18, color: '#aaa' })
const Ashbin = h(TiIcon, { name: 'ashbin', size: 20, color: '#aaa' })
</script>
```
:::

## 属性

::: table

| 属性名  | 说明  | 类型 | 可选值 | 默认值 |
| :----: | :----: | :----: | :----: | :----: |
| type  | input类型 | string | `text` , `password` | `text` |
| size  | input大小 | number | `large` , `default` , `small` | `default` |
| v-model | 绑定值 | string / number | —— | —— |
| placeholder | 占位符 | string | —— | 请输入内容 |
| disabled | 是否禁用 | boolean | —— | false |
| clearable | 是否可清空 | boolean | —— | false |
| show-password | 是否显示切换密码图标 | boolean | —— | true |
| show-word-limit | 是否显示限制文本长度 | boolean | —— | false |
| style-type | 颜色主题 | string | `default` , `success` , `info` , `danger` , `warning` | `default` |
| prefixIcon | 前置图标 | Component , VNode | —— | —— |
| suffixIcon | 后置图标 | Component , VNode | —— | —— |
| name | 原生属性name | string | —— | —— |
| maxlength | 原生属性， 最大输入长度 | number | —— | —— |
| readonly | 原生属性，是否只读 | boolean | ——| false |
| autofocus | 原生属性， 自动聚焦 | boolean | —— | false |

:::

## 事件
::: table

| 事件名  | 说明  | 参数 |
| :----: | :----: | :----: |
| input | 输入时值发生改变时 | (value: string | number) |
| change | 当输入框失去焦点或按下回车时触发 | (value: string | number) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| clear | 点击清空图标时触发 | —— |

:::

## 方法

::: table

| 方法名  | 说明  | —— |
| :----: | :----: | :----: |
| focus | 使Input聚焦 | —— |
| blur | 使Input失焦 | —— |
| select | 使Input选中 | —— |

:::