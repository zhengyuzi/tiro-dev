<script setup>
import { ref } from 'vue'

const demo1 = ref(['BeiJing', 'GuangZhou'])
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
    .ti-checkbox {
      flex: 1;
    }
}
</style>
# Checkbox 复选框

## 基础用法
::: show
<ti-checkbox name="demo" value="value1" label="BeiJing"></ti-checkbox>
<ti-checkbox name="demo" value="value2" label="ShangHai"></ti-checkbox>
<ti-checkbox name="demo" value="value3" label="GuangZhou"></ti-checkbox>

``` vue
<template>
  <ti-checkbox name="demo" value="value1" label="BeiJing" />
  <ti-checkbox name="demo" value="value2" label="ShangHai" />
  <ti-checkbox name="demo" value="value3" label="GuangZhou" />
</template>
```
:::

## 尺寸
::: show
<div class="ti-example-item">
    <label>small</label>
    <ti-checkbox name="demo2" value="value1" size="small" label="BeiJing" checked></ti-checkbox>
</div>
<div class="ti-example-item">
    <label>medium</label>
    <ti-checkbox name="demo2" value="value2" label="ShangHai" checked></ti-checkbox>
</div>
<div class="ti-example-item">
    <label>large</label>
    <ti-checkbox name="demo2" value="value3" size="large" label="GuangZhou" checked></ti-checkbox>
</div>

``` vue
<template>
  <ti-checkbox name="demo" value="value1" size="small" label="BeiJing" checked />
  <ti-checkbox name="demo" value="value2" label="ShangHai" checked />
  <ti-checkbox name="demo" value="value3" size="large" label="GuangZhou" checked />
</template>
```
:::

## 禁用
::: show
<ti-checkbox name="demo1" value="value1" label="BeiJing"></ti-checkbox>
<ti-checkbox name="demo1" value="value2" disabled label="ShangHai"></ti-checkbox>
<ti-checkbox name="demo1" value="value3" label="GuangZhou"></ti-checkbox>

``` vue
<template>
  <ti-checkbox name="demo" value="value1" label="BeiJing">
  <ti-checkbox name="demo" value="value2" disabled label="ShangHai">
  <ti-checkbox name="demo" value="value3" label="GuangZhou">
</template>
```
:::

## 主题
::: show
<ti-checkbox name="success" value="1" checked type="success" label="Success"></ti-checkbox>
<ti-checkbox name="info" value="2" checked type="info" label="Info"></ti-checkbox>
<ti-checkbox name="danger" value="3" checked type="danger" label="Danger"></ti-checkbox>
<ti-checkbox name="warning" value="4" checked type="warning" label="Warning"></ti-checkbox>
<ti-checkbox name="bright" value="5" checked type="bright" label="Bright"></ti-checkbox>

``` vue
<template>
  <ti-checkbox name="success" value="1" checked type="success" label="Success" />
  <ti-checkbox name="info" value="2" checked type="info" label="Info" />
  <ti-checkbox name="danger" value="3" checked type="danger" label="Danger" />
  <ti-checkbox name="warning" value="4" checked type="warning" label="Warning" />
  <ti-checkbox name="bright" value="5" checked type="bright" label="Bright" />
</template>
```
:::

## Checkbox Group
将 `name` 、 `size` 、 `type` 等属性集成到Checkbox Group上统一管理。
::: show
<ti-checkbox-group v-model="demo1" name="demo-group" type="bright">
  <ti-checkbox value="BeiJing" label="BeiJing" />
  <ti-checkbox value="ShangHai" label="ShangHai" />
  <ti-checkbox value="GuangZhou" label="GuangZhou" />
</ti-checkbox-group>
<ti-checkbox-group v-model="demo1" name="demo-group1" type="success">
  <ti-checkbox value="BeiJing" label="BeiJing" />
  <ti-checkbox value="ShangHai" label="ShangHai" />
  <ti-checkbox value="GuangZhou" label="GuangZhou" />
</ti-checkbox-group>
<ti-checkbox-group v-model="demo1" name="demo-group2" disabled>
  <ti-checkbox value="BeiJing" label="BeiJing" />
  <ti-checkbox value="ShangHai" label="ShangHai" />
  <ti-checkbox value="GuangZhou" label="GuangZhou" />
</ti-checkbox-group>

``` vue
<template>
  <ti-checkbox-group v-model="demo" name="demo-group" type="bright">
    <ti-checkbox value="BeiJing" label="BeiJing" />
    <ti-checkbox value="ShangHai" label="ShangHai" />
    <ti-checkbox value="GuangZhou" label="GuangZhou" />
  </ti-checkbox-group>
    <ti-checkbox-group v-model="demo" name="demo-group1" type="success">
    <ti-checkbox value="BeiJing" label="BeiJing" />
    <ti-checkbox value="ShangHai" label="ShangHai" />
    <ti-checkbox value="GuangZhou" label="GuangZhou" />
  </ti-checkbox-group>
    <ti-checkbox-group v-model="demo" name="demo-group2" disabled>
    <ti-checkbox value="BeiJing" label="BeiJing" />
    <ti-checkbox value="ShangHai" label="ShangHai" />
    <ti-checkbox value="GuangZhou" label="GuangZhou" />
  </ti-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const demo = ref(['BeiJing', 'GuangZhou'])
</script>
```
:::

## Checkbox 属性
::: table

| 属性名  | 说明  | 类型 | 可选值 | 默认值 |
| :----: | :----: | :----: | :----: | :----: |
| name | 原生name属性 | string | —— | —— |
| size | 尺寸 | string | small / medium / large | medium |
| type | 主题 | string | default / success / info / danger / warning / bright | default |
| disabled | 是否禁用 | boolean | —— | false |
| value | 单选框对应的值 | string / number / boolean | —— | —— |
| label | 单选框对应的标签 | string | —— | —— |
| checked | 是否选中 | boolean | —— | false |

:::

## Checkbox 事件
::: table

| 事件名  | 说明  | 参数 |
| :----: | :----: | :----: |
| change | 选中状态变化时触发的事件 | (e: Event) |

:::

## Checkbox Group 属性
::: table

| 属性名  | 说明  | 类型 | 可选值 | 默认值 |
| :----: | :----: | :----: | :----: | :----: |
| v-model | 选中的value值 | Array<string \| number \| boolean> | —— | —— |
| name | 原生name属性 | string | —— | —— |
| size | 尺寸 | string | small / medium / large | medium |
| type | 主题 | string | default / success / info / danger / warning / bright | default |
| disabled | 是否禁用 | boolean | —— | false |

:::

## Checkbox Group 事件
::: table

| 事件名  | 说明  | 参数 |
| :----: | :----: | :----: |
| update:model-value | 选中值变化时触发的事件 | (value: Array<string \| number \| boolean>) |

:::