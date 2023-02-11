<style>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.ti-example-item {
    padding: 5px 0px;
}
</style>

# Card 卡片

## 基础用法
::: show
<ti-card style="width: 350px">
  Card内容
</ti-card>

``` vue
<template>
  <ti-card style="width: 350px">
    Card内容
  </ti-card>
</template>
```
:::

## 卡片标题
::: show
<ti-card style="width: 350px">
  <template #header>
    <div class="card-header">
        <strong>卡片标题</strong>
        <ti-icon name="ti-icon-close" />
    </div>
  </template>
  Card内容
</ti-card>

``` vue
<template>
  <ti-card style="width: 350px">
    <template #header>
      <div class="card-header">
          <strong>header</strong>
          <ti-icon name="ti-icon-close" />
      </div>
    </template>
    Card内容
  </ti-card>
</template>

<style>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
```
:::

## 自定义样式
::: show
<ti-card
  style="width: 350px"
  header-style="padding: 15px 30px; background-color: rgb(37, 120, 181); color: #fff;"
  body-style="padding: 30px;"
>
  <template #header>
    <div class="card-header">
        <strong>卡片标题</strong>
        <ti-icon name="ti-icon-close" />
    </div>
  </template>
  Card内容
</ti-card>

``` vue
<template>
  <ti-card 
    style="width: 350px" 
    header-style="padding: 15px 30px; background-color: rgb(37, 120, 181); color: #fff;"
    body-style="padding: 30px;"
  >
    <template #header>
      <div class="card-header">
          <strong>header</strong>
          <ti-icon name="ti-icon-close" />
      </div>
    </template>
    Card内容
  </ti-card>
</template>

<style>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
```
:::

## 无边框
::: show
<ti-card style="width: 350px" :bordered="false">
  <template #header>
    <div class="card-header">
        <strong>卡片标题</strong>
    </div>
  </template>
  Card内容
</ti-card>

``` vue
<template>
  <ti-card style="width: 350px" :bordered="false">
    <template #header>
      <div class="card-header">
          <strong>header</strong>
      </div>
    </template>
    Card内容
  </ti-card>
</template>
```
:::

## 悬浮
::: show
<div class="ti-example-item">
    <ti-card style="width: 250px">默认</ti-card>
</div>
<div class="ti-example-item">
    <ti-card style="width: 250px" shadow="always">always</ti-card>
</div>
<div class="ti-example-item">
    <ti-card style="width: 250px" shadow="hover">hover</ti-card>
</div>

``` vue
<template>
  <ti-card style="width: 250px">默认</ti-card>
  <ti-card style="width: 250px" shadow="always">always</ti-card>
  <ti-card style="width: 250px" shadow="hover">hover</ti-card>
</template>
```
:::

## 插槽
::: table

| 插槽名  | 说明  |
| :----: | :----: |
| header | card标题 |

:::

## 属性
::: table

| 属性名  | 说明  | 类型 | 可选值 | 默认值 |
| :----: | :----: | :----: | :----: | :----: |
| body-style | 自定义card内容样式 | string | —— | —— |
| header-style | 自定义card头部样式 | string | —— | —— |
| bordered | 是否有边框 | boolean | —— | true |
| shadow | 是否悬浮 | string | `null`  `always`  `hover` | `null` |

:::