<script setup lang="ts">
const options = [
    {
        label: '苹果',
        value: 'Apple'
    },
    {
        label: '火龙果',
        value: 'Pitaya'
    },
    {
        label: '菠萝',
        value: 'Pineapple'
    },
    {
        label: '西瓜',
        value: 'Watermelon'
    },
    {
        label: '橙子',
        value: 'Orange'
    },
    {
        label: '香蕉',
        value: 'Banana'
    },
    {
        label: '榴莲',
        value: 'Durian'
    }
]

const optionsDisable = [
    {
        label: '苹果',
        value: 'Apple'
    },
    {
        label: '火龙果',
        value: 'Pitaya'
    },
    {
        label: '菠萝',
        value: 'Pineapple',
        disabled: true
    },
    {
        label: '西瓜',
        value: 'Watermelon'
    },
    {
        label: '橙子',
        value: 'Orange',
        disabled: true
    },
    {
        label: '香蕉',
        value: 'Banana'
    },
    {
        label: '榴莲',
        value: 'Durian',
        disabled: true
    }
]
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
}
</style>

# Select 选择器

## 基础用法
::: show
<ti-select style="width: 200px" :options="options" />

``` vue
<template>
  <ti-select style="width: 200px" :options="options" />
</template>

<script setup lang="ts">
const options = [
    {
        label: '苹果',
        value: 'Apple'
    },
    {
        label: '火龙果',
        value: 'Pitaya'
    },
    {
        label: '菠萝',
        value: 'Pineapple'
    },
    {
        label: '西瓜',
        value: 'Watermelon'
    },
    {
        label: '橙子',
        value: 'Orange'
    },
    {
        label: '香蕉',
        value: 'Banana'
    },
    {
        label: '榴莲',
        value: 'Durian'
    }
]
</script>
```
:::

## 尺寸
::: show
<div class="ti-example-item">
    <label>small</label>
    <ti-select :options="options" size="small" style="width: 200px"></ti-select>
</div>
<div class="ti-example-item">
    <label>medium</label>
    <ti-select :options="options" style="width: 200px"></ti-select>
</div>
<div class="ti-example-item">
    <label>large</label>
    <ti-select :options="options" size="large" style="width: 200px"></ti-select>
</div>

``` vue
<template>
  <ti-select :options="options" size="small" style="width: 200px"></ti-select>
  <ti-select :options="options" style="width: 200px"></ti-select>
  <ti-select :options="options" size="large" style="width: 200px"></ti-select>
</template>

<script setup lang="ts">
const options = [
    {
        label: '苹果',
        value: 'Apple'
    },
    {
        label: '火龙果',
        value: 'Pitaya'
    },
    {
        label: '菠萝',
        value: 'Pineapple'
    },
    {
        label: '西瓜',
        value: 'Watermelon'
    },
    {
        label: '橙子',
        value: 'Orange'
    },
    {
        label: '香蕉',
        value: 'Banana'
    },
    {
        label: '榴莲',
        value: 'Durian'
    }
]
</script>
```
:::

## 禁用
Select组件禁用与Select选项禁用
::: show
<div class="ti-example-item">
    <ti-select style="width: 200px" disabled />
</div>
<div class="ti-example-item">
    <ti-select :options="optionsDisable" style="width: 200px" />
</div>

``` vue
<template>
  <ti-select style="width: 200px" disabled />
  <ti-select :options="options" style="width: 200px" />
</template>

<script setup lang="ts">
const options = [
    {
        label: '苹果',
        value: 'Apple'
    },
    {
        label: '火龙果',
        value: 'Pitaya'
    },
    {
        label: '菠萝',
        value: 'Pineapple',
        disabled: true
    },
    {
        label: '西瓜',
        value: 'Watermelon'
    },
    {
        label: '橙子',
        value: 'Orange',
        disabled: true
    },
    {
        label: '香蕉',
        value: 'Banana'
    },
    {
        label: '榴莲',
        value: 'Durian',
        disabled: true
    }
]
</script>
```
:::

## 多选
::: show
<ti-select :options="options" multiple style="width: 250px" />

``` vue
<template>
  <ti-select :options="options" multiple style="width: 250px" />
</template>

<script setup lang="ts">
const options = [
    {
        label: '苹果',
        value: 'Apple'
    },
    {
        label: '火龙果',
        value: 'Pitaya'
    },
    {
        label: '菠萝',
        value: 'Pineapple'
    },
    {
        label: '西瓜',
        value: 'Watermelon'
    },
    {
        label: '橙子',
        value: 'Orange'
    },
    {
        label: '香蕉',
        value: 'Banana'
    },
    {
        label: '榴莲',
        value: 'Durian'
    }
]
</script>
```
:::

## 可清空
::: show
<div class="ti-example-item">
    <ti-select :options="options" clearable style="width: 250px" />
</div>
<div class="ti-example-item">
    <ti-select :options="options" clearable multiple style="width: 250px" />
</div>

``` vue
<template>
  <ti-select :options="options" clearable style="width: 250px" />
  <ti-select :options="options" clearable multiple style="width: 250px" />
</template>

<script setup lang="ts">
const options = [
    {
        label: '苹果',
        value: 'Apple'
    },
    {
        label: '火龙果',
        value: 'Pitaya'
    },
    {
        label: '菠萝',
        value: 'Pineapple'
    },
    {
        label: '西瓜',
        value: 'Watermelon'
    },
    {
        label: '橙子',
        value: 'Orange'
    },
    {
        label: '香蕉',
        value: 'Banana'
    },
    {
        label: '榴莲',
        value: 'Durian'
    }
]
</script>
```
:::

## 空选项
::: show
<div class="ti-example-item">
    <label>默认</label>
    <ti-select style="width: 200px"></ti-select>
</div>
<div class="ti-example-item">
    <label>自定义</label>
    <ti-select style="width: 200px">
        <template #empty>
            empty
        </template>
    </ti-select>
</div>

``` vue
<template>
  <ti-select style="width: 200px" />
  <ti-select style="width: 200px">
    <template #empty>
        empty
    </template>
  </ti-select>
</template>
```
:::

## 主题
::: show
<div class="ti-example-item">
    <label>success</label>
    <ti-select :options="options" type="success" style="width: 200px"></ti-select>
</div>
<div class="ti-example-item">
    <label>info</label>
    <ti-select :options="options" type="info" style="width: 200px"></ti-select>
</div>
<div class="ti-example-item">
    <label>danger</label>
    <ti-select :options="options" type="danger" style="width: 200px"></ti-select>
</div>
<div class="ti-example-item">
    <label>warning</label>
    <ti-select :options="options" type="warning" style="width: 200px"></ti-select>
</div>
<div class="ti-example-item">
    <label>bright</label>
    <ti-select :options="options" type="bright" style="width: 200px"></ti-select>
</div>

``` vue
<template>
    <ti-select :options="options" type="success" style="width: 200px"></ti-select>
    <ti-select :options="options" type="info" style="width: 200px"></ti-select>
    <ti-select :options="options" type="danger" style="width: 200px"></ti-select>
    <ti-select :options="options" type="warning" style="width: 200px"></ti-select>
    <ti-select :options="options" type="bright" style="width: 200px"></ti-select>
</template>

<script setup lang="ts">
const options = [
    {
        label: '苹果',
        value: 'Apple'
    },
    {
        label: '火龙果',
        value: 'Pitaya'
    },
    {
        label: '菠萝',
        value: 'Pineapple'
    },
    {
        label: '西瓜',
        value: 'Watermelon'
    },
    {
        label: '橙子',
        value: 'Orange'
    },
    {
        label: '香蕉',
        value: 'Banana'
    },
    {
        label: '榴莲',
        value: 'Durian'
    }
]
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
| placeholder | 占位符 | string | —— | 请选择 |
| disabled | 是否禁用 | boolean | —— | false |
| clearable | 是否显示清空按钮 | boolean | —— | false |
| multiple | 可多选 | boolean | —— | false |

:::

## 事件
::: table

| 事件名  | 说明  | 参数 |
| :----: | :----: | :----: |
| select | 选择选项后触发 | (value: string \| number \| boolean) |
| change | 当 Select 失去焦点时触发 | (value: string \| number) |
| focus | 在 Select 获得焦点时触发 | (event: Event) |
| blur | 在 Select 失去焦点时触发 | (event: Event) |
| clear | 点击清空图标时触发 | —— |

:::

## Options

::: table

| 参数  | 类型  | 说明 |
| :----: | :----: | :----: |
| label | string | 必填，展示的选项 |
| value | string / number / boolean | 必填，选择后的值 |
| disabled | boolean | 选填，是否禁用 |

:::