<style lang="scss" scoped>
.example-button {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    & > * {
        margin-right: 10px;
        margin-bottom: 10px;
    }
}
</style>

# Button 按钮
用来点击的按钮

注意：属性 `plain` 、 `fill` 、 `text` 不要同时使用，优先级 `fill` > `plain` > `text`

## 基础用法
基础多种样式的按钮， `默认` 、 `plain` 、 `fill` 、 `round` 、 `circle`
::: show
<div class="example-button">
    <div>
        <ti-button>默认</ti-button>
    </div>
    <div>
        <ti-button type="success">success</ti-button>
    </div>
    <div>
        <ti-button type="warning">warning</ti-button>
    </div>
    <div>
        <ti-button type="danger">danger</ti-button>
    </div>
    <div>
        <ti-button type="info">info</ti-button>
    </div>
    <div>
        <ti-button type="bright">bright</ti-button>
    </div>
</div>

<div class="example-button">
    <div>
        <ti-button plain>默认</ti-button>
    </div>
    <div>
        <ti-button type="success" plain>success</ti-button>
    </div>
    <div>
        <ti-button type="warning" plain>warning</ti-button>
    </div>
    <div>
        <ti-button type="danger" plain>danger</ti-button>
    </div>
    <div>
        <ti-button type="info" plain>info</ti-button>
    </div>
    <div>
        <ti-button type="bright" plain>bright</ti-button>
    </div>
</div>

<div class="example-button">
    <div>
        <ti-button fill>默认</ti-button>
    </div>
    <div>
        <ti-button type="success" fill>success</ti-button>
    </div>
    <div>
        <ti-button type="warning" fill>warning</ti-button>
    </div>
    <div>
        <ti-button type="danger" fill>danger</ti-button>
    </div>
    <div>
        <ti-button type="info" fill>info</ti-button>
    </div>
    <div>
        <ti-button type="bright" fill>bright</ti-button>
    </div>
</div>

<div class="example-button">
    <div>
        <ti-button round>round</ti-button>
    </div>
    <div>
        <ti-button round plain>round</ti-button>
    </div>
    <div>
        <ti-button round fill>round</ti-button>
    </div>
</div>

<div class="example-button">
    <div>
        <ti-button circle><ti-icon name="ti-icon-search" /></ti-button>
    </div>
    <div>
        <ti-button circle plain><ti-icon name="ti-icon-search" /></ti-button>
    </div>
    <div>
        <ti-button circle fill><ti-icon name="ti-icon-search" /></ti-button>
    </div>
</div>

``` vue
<template>
    <ti-button>默认</ti-button>
    <ti-button type="success">success</ti-button>
    <ti-button type="warning">warning</ti-button>
    <ti-button type="danger">danger</ti-button>
    <ti-button type="info">info</ti-button>
    <ti-button type="bright">bright</ti-button>

    <ti-button plain>默认</ti-button>
    <ti-button type="success" plain>success</ti-button>
    <ti-button type="warning" plain>warning</ti-button>
    <ti-button type="danger" plain>danger</ti-button>
    <ti-button type="info" plain>info</ti-button>
    <ti-button type="bright" plain>bright</ti-button>
    
    <ti-button fill>默认</ti-button>
    <ti-button type="success" fill>success</ti-button>
    <ti-button type="warning" fill>warning</ti-button>
    <ti-button type="danger" fill>danger</ti-button>
    <ti-button type="info" fill>info</ti-button>
    <ti-button type="bright" fill>bright</ti-button>

    <ti-button round>round</ti-button>
    <ti-button round plain>round</ti-button>
    <ti-button round fill>round</ti-button>

    <ti-button circle><ti-icon name="ti-icon-search" /></ti-button>
    <ti-button circle plain><ti-icon name="ti-icon-search" /></ti-button>
    <ti-button circle fill><ti-icon name="ti-icon-search" /></ti-button>
</template>
```
:::

## 禁用
添加 `disabled` 属性禁用
::: show

<div class="example-button">
    <div>
        <ti-button disabled>默认</ti-button>
    </div>
    <div>
        <ti-button disabled plain>默认</ti-button>
    </div>
    <div>
        <ti-button disabled fill>默认</ti-button>
    </div>
</div>

``` vue
<template>
    <ti-button disabled>默认</ti-button>
    <ti-button disabled plain>默认</ti-button>
    <ti-button disabled fill>默认</ti-button>
</template>
```
:::

## 尺寸
提供 `small` 、 `default` 、 `large` 三个尺寸， 也可通过行内样式自定义大小
::: show

<div class="example-button">
    <div>
        <ti-button size="small">默认</ti-button>
    </div>
    <div>
        <ti-button>默认</ti-button>
    </div>
    <div>
        <ti-button size="large">默认</ti-button>
    </div>
    <div>
        <ti-button style="height: 45px; font-size: 18px;">自定义</ti-button>
    </div>
</div>

``` vue
<template>
    <ti-button size="small">默认</ti-button>
    <ti-button>默认</ti-button>
    <ti-button size="large">默认</ti-button>
    <ti-button style="height: 45px; font-size: 18px;">自定义</ti-button>
</template>
```
:::

## 文字按钮
添加 `text` 属性切换为文字按钮

::: show

<div class="example-button">
    <div>
        <ti-button text>默认</ti-button>
    </div>
    <div>
        <ti-button type="success" text>success</ti-button>
    </div>
    <div>
        <ti-button type="warning" text>warning</ti-button>
    </div>
    <div>
        <ti-button type="danger" text>danger</ti-button>
    </div>
    <div>
        <ti-button type="info" text>info</ti-button>
    </div>
    <div>
        <ti-button type="bright" text>bright</ti-button>
    </div>
</div>

``` vue
<template>
    <ti-button text>默认</ti-button>
    <ti-button type="success" text>success</ti-button>
    <ti-button type="warning" text>warning</ti-button>
    <ti-button type="danger" text>danger</ti-button>
    <ti-button type="info" text>info</ti-button>
    <ti-button type="bright" text>bright</ti-button>
</template>
```
:::

## 虚线按钮
添加 `dashed` 属性边框切换成虚线

::: show

<div class="example-button">
    <div>
        <ti-button dashed>默认</ti-button>
    </div>
    <div>
        <ti-button type="success" dashed>success</ti-button>
    </div>
    <div>
        <ti-button type="warning" dashed>warning</ti-button>
    </div>
    <div>
        <ti-button type="danger" dashed>danger</ti-button>
    </div>
    <div>
        <ti-button type="info" dashed>info</ti-button>
    </div>
    <div>
        <ti-button type="bright" dashed>bright</ti-button>
    </div>
</div>

``` vue
<template>
    <ti-button dashed>默认</ti-button>
    <ti-button type="success" dashed>success</ti-button>
    <ti-button type="warning" dashed>warning</ti-button>
    <ti-button type="danger" dashed>danger</ti-button>
    <ti-button type="info" dashed>info</ti-button>
    <ti-button type="bright" dashed>bright</ti-button>
</template>
```
:::

## 属性
::: table

| 属性名  | 说明  | 类型 | 可选值 | 默认值 |
| :----: | :----: | :----: | :----: | :----: |
| type  | 主题类型 | string | `default, success, info , danger, warning, bright` | `default` |
| size  | 尺寸 | string |  `small, medium, large` | `medium` |
| disabled | 是否禁用 | boolean | —— | false |
| fill | fill样式 | boolean| —— | false |
| plain | plain样式 | boolean | —— | false |
| dashed | 虚线边框 | boolean | —— | false |
| text | text样式 | boolean | —— | false |
| round | 圆角 | boolean | —— | false |
| circle | 圆形 | boolean | —— | false |