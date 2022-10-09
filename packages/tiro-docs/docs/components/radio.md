<script setup>
import { ref } from 'vue'

const demo1 = ref('value1')
</script>

<style lang="scss">
.ti-example-item {
    margin: 15px 0;
    display: flex;
    align-items: center;
    label {
      font-size: 14px;
      width: 80px;
    }
    .ti-radio {
      flex: 1;
    }
}
</style>
# Radio 单选

## 基础用法
::: show
<ti-radio name="demo" value="value1"> Option 1 </ti-radio>
<ti-radio name="demo" value="value2"> Option 2 </ti-radio>
<ti-radio name="demo" value="value3"> Option 3 </ti-radio>

``` vue
<template>
  <ti-radio name="demo" value="value1"> Option 1 </ti-radio>
  <ti-radio name="demo" value="value2"> Option 2 </ti-radio>
  <ti-radio name="demo" value="value3"> Option 3 </ti-radio>
</template>
```
:::

## 尺寸
::: show
<div class="ti-example-item">
    <label>small</label>
    <ti-radio name="demo2" value="value1" size="small"> Option 1 </ti-radio>
</div>
<div class="ti-example-item">
    <label>medium</label>
    <ti-radio name="demo2" value="value2"> Option 2 </ti-radio>
</div>
<div class="ti-example-item">
    <label>large</label>
    <ti-radio name="demo2" value="value3" size="large"> Option 3 </ti-radio>
</div>

``` vue
<template>
  <ti-radio name="demo" value="value1" size="small"> Option 1 </ti-radio>
  <ti-radio name="demo" value="value2"> Option 2 </ti-radio>
  <ti-radio name="demo" value="value3" size="large"> Option 3 </ti-radio>
</template>
```
:::

## 禁用
::: show
<ti-radio name="demo1" value="value1"> Option 1 </ti-radio>
<ti-radio name="demo1" value="value2" disabled> Option 2 </ti-radio>
<ti-radio name="demo1" value="value3"> Option 3 </ti-radio>

``` vue
<template>
  <ti-radio name="demo" value="value1"> Option 1 </ti-radio>
  <ti-radio name="demo" value="value2" disabled> Option 2 </ti-radio>
  <ti-radio name="demo" value="value3"> Option 3 </ti-radio>
</template>
```
:::

## 主题
::: show
<ti-radio name="success" value="1" checked type="success"> Option Success </ti-radio>
<ti-radio name="info" value="2" checked type="info"> Option Info </ti-radio>
<ti-radio name="danger" value="3" checked type="danger"> Option Danger </ti-radio>
<ti-radio name="warning" value="4" checked type="warning"> Option Warning </ti-radio>
<ti-radio name="bright" value="5" checked type="bright"> Option Bright </ti-radio>

``` vue
<template>
  <ti-radio name="success" value="1" checked type="success"> Option Success </ti-radio>
  <ti-radio name="info" value="2" checked type="info"> Option Info </ti-radio>
  <ti-radio name="danger" value="3" checked type="danger"> Option Danger </ti-radio>
  <ti-radio name="warning" value="4" checked type="warning"> Option Warning </ti-radio>
  <ti-radio name="bright" value="5" checked type="bright"> Option Bright </ti-radio>
</template>
```
:::

## Radio Group
将 `name` 、 `size` 、 `type` 等属性集成到Radio Group上统一管理。
::: show
<ti-radio-group v-model="demo1" name="demo-group">
  <ti-radio value="value1"> Option 1 </ti-radio>
  <ti-radio value="value2"> Option 2 </ti-radio>
  <ti-radio value="value3"> Option 3 </ti-radio>
</ti-radio-group>
<ti-radio-group v-model="demo1" name="demo-group1" type="success">
  <ti-radio value="value1"> Option 1 </ti-radio>
  <ti-radio value="value2"> Option 2 </ti-radio>
  <ti-radio value="value3"> Option 3 </ti-radio>
</ti-radio-group>
<ti-radio-group v-model="demo1" name="demo-group2" disabled>
  <ti-radio value="value1"> Option 1 </ti-radio>
  <ti-radio value="value2"> Option 2 </ti-radio>
  <ti-radio value="value3"> Option 3 </ti-radio>
</ti-radio-group>

``` vue
<template>
  <ti-radio-group v-model="isChecked" name="demo-group">
    <ti-radio value="value1"> Option 1 </ti-radio>
    <ti-radio value="value2"> Option 2 </ti-radio>
    <ti-radio value="value3"> Option 3 </ti-radio>
  </ti-radio-group>
  <ti-radio-group v-model="isChecked" name="demo-group1" type="success">
    <ti-radio value="value1"> Option 1 </ti-radio>
    <ti-radio value="value2"> Option 2 </ti-radio>
    <ti-radio value="value3"> Option 3 </ti-radio>
  </ti-radio-group>
  <ti-radio-group v-model="isChecked" name="demo-group2" disabled>
    <ti-radio value="value1"> Option 1 </ti-radio>
    <ti-radio value="value2"> Option 2 </ti-radio>
    <ti-radio value="value3"> Option 3 </ti-radio>
  </ti-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isChecked = ref('value1')
</script>
```
:::

## Radio 属性
::: table

| 属性名  | 说明  | 类型 | 可选值 | 默认值 |
| :----: | :----: | :----: | :----: | :----: |
| name | 原生name属性 | string | —— | —— |
| size | 尺寸 | string | small / medium / large | medium |
| type | 主题 | string | default / success / info / danger / warning / bright | default |
| disabled | 是否禁用 | boolean | —— | false |
| value | 单选框对应的值 | string / number / boolean | —— | —— |
| checked | 是否选中 | boolean | —— | false |

:::

## Radio 事件
::: table

| 事件名  | 说明  | 参数 |
| :----: | :----: | :----: |
| change | 选中状态变化时触发的事件 | (e: Event) |

:::

## Radio Group 属性
::: table

| 属性名  | 说明  | 类型 | 可选值 | 默认值 |
| :----: | :----: | :----: | :----: | :----: |
| v-model | 选中的value值 | string / number / boolean | —— | —— |
| name | 原生name属性 | string | —— | —— |
| size | 尺寸 | string | small / medium / large | medium |
| type | 主题 | string | default / success / info / danger / warning / bright | default |
| disabled | 是否禁用 | boolean | —— | false |

:::

## Radio Group 事件
::: table

| 事件名  | 说明  | 参数 |
| :----: | :----: | :----: |
| change | 选中状态变化时触发的事件 | (e: Event) |

:::