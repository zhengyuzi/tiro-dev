<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
const value1 = ref(false)
const value2 = ref(true)
const value3 = ref('未选中')
</script>

<style lang="scss" scoped>
.example-switch {
    display: flex;
    align-items: center;
    & > * {
        margin-right: 10px;
    }
}
</style>

# Switch 开关

## 基础用法
::: show
<div class="example-switch">
  <ti-switch v-model="value" />
  <ti-switch v-model="value" disabled />
</div>

``` vue
<template>
  <ti-switch v-model="value" />
  <ti-switch v-model="value" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
</script>
```
:::

## 尺寸
::: show
<div class="example-switch">
  <ti-switch v-model="value1" size="small" />
  <ti-switch v-model="value1" />
  <ti-switch v-model="value1" size="large" />
</div>

``` vue
<template>
  <ti-switch v-model="value" size="small" />
  <ti-switch v-model="value" />
  <ti-switch v-model="value" size="large" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
</script>
```
:::

## 主题

::: show
<div class="example-switch">
  <ti-switch v-model="value2" type="success" />
  <ti-switch v-model="value2" type="info" />
  <ti-switch v-model="value2" type="danger" />
  <ti-switch v-model="value2" type="warning" />
  <ti-switch v-model="value2" type="bright" />
</div>

``` vue
<template>
  <ti-switch v-model="value" type="success" />
  <ti-switch v-model="value" type="info" />
  <ti-switch v-model="value" type="danger" />
  <ti-switch v-model="value" type="warning" />
  <ti-switch v-model="value" type="bright" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>
```
:::

## 自定义value类型
你可以设置 `active-value` 和 `inactive-value` 属性来自定义选中与未选中状态的值。

::: show
<div class="example-switch">
  <ti-switch v-model="value3" active-value="选中" inactive-value="未选中" />
  {{ value3 }}
</div>

``` vue
<template>
  <ti-switch v-model="value" active-value="选中" inactive-value="未选中" />
  {{ value }}
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('未选中')
</script>
```
:::

## 属性

::: table

| 属性名  | 说明  | 类型 | 可选值 | 默认值 |
| :----: | :----: | :----: | :----: | :----: |
| type  | 颜色主题 | string | `default` , `success` , `info` , `danger` , `warning` , `bright` | `default` |
| size  | 尺寸大小 | string | `large` , `medium` , `small` | `medium` |
| v-model | 绑定值 | string / number / boolean | —— | —— |
| disabled | 是否禁用 | boolean | —— | false |
| active-value | switch 状态为 `on` 时的值 | string / number / boolean | —— | true |
| inactive-value | switch的状态为 `off` 时的值 | string / number / boolean | —— | false |

:::