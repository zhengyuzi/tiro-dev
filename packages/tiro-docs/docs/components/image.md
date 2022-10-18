<script setup>
const Src = "https://pic.jitudisk.com/public/2022/10/13/6e80843c89569.jpg"

const imgList = [
  {
    src: Src
  },
  {
    src: "https://pic.jitudisk.com/public/2022/10/14/68ebefa9903f9.webp"
  },
  {
    src: "https://pic.jitudisk.com/public/2022/10/13/01b1e3acadfd2.webp"
  },
  {
    src: "https://pic.jitudisk.com/public/2022/10/13/20336a754d567.webp"
  }
]
</script>

<style scoped lang="scss">
.ti-image-example {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .ti-image-example-item {
    text-align: center;
    span {
      font-size: 14px;
      display: block;
    }
  }
}
</style>

# Image 图片

## 基础用法
::: show
<div class="ti-image-example">
  <div class="ti-image-example-item">
    <ti-image
      :src="Src"
      style="width: 100px; height: 100px"
      fit="cover"
    />
    <span>cover</span>
  </div>
  <div class="ti-image-example-item">
    <ti-image
      :src="Src"
      style="width: 100px; height: 100px"
      fit="fill"
    />
    <span>fill</span>
  </div>
  <div class="ti-image-example-item">
    <ti-image
      :src="Src"
      style="width: 100px; height: 100px"
      fit="contain"
    />
    <span>contain</span>
  </div>
  <div class="ti-image-example-item">
    <ti-image
      :src="Src"
      style="width: 100px; height: 100px"
      fit="scale-down"
    />
    <span>scale-down</span>
  </div>
  <div class="ti-image-example-item">
    <ti-image
      :src="Src"
      style="width: 100px; height: 100px"
      fit="none"
    />
    <span>none</span>
  </div>
</div>

``` vue
<template>
    <ti-image
      src="src"
      style="width: 100px; height: 100px"
      fit="cover"
    />
    <ti-image
      src="src"
      style="width: 100px; height: 100px"
      fit="fill"
    />
    <ti-image
      src="src"
      style="width: 100px; height: 100px"
      fit="contain"
    />
    <ti-image
      src="src"
      style="width: 100px; height: 100px"
      fit="scale-down"
    />
    <ti-image
      src="src"
      style="width: 100px; height: 100px"
      fit="none"
    />
</template>
```
:::

## 图片预览
添加 `preview` 属性开启图片预览
::: show
<ti-image
  :src="Src"
  style="width: 100px; height: 100px"
  fit="cover"
  preview
/>

``` vue
<template>
  <ti-image
    src="src"
    style="width: 100px; height: 100px"
    fit="cover"
    preview
  />
</template>
```
:::

## 加载失败
::: show
<div class="ti-image-example">
  <div class="ti-image-example-item">
    <ti-image
      src="#"
      style="width: 100px; height: 100px"
      fit="cover"
    />
    <span>默认</span>
  </div>
  <div class="ti-image-example-item">
    <ti-image
      src="#"
      style="width: 100px; height: 100px"
      fit="cover"
    >
      <template #error>
        <div>
          <ti-icon name="ti-icon-empty" :size="22" />
          <span style="font-size: 12px">图片加载失败</span>
        </div>
      </template>
    </ti-image>
    <span>自定义</span>
  </div>
</div>

``` vue
<template>
  <ti-image
    src="src"
    style="width: 100px; height: 100px"
    fit="cover"
  />
  <ti-image
    src="src"
    style="width: 100px; height: 100px"
    fit="cover"
  >
    <template #error>
      <div>
        <ti-icon name="ti-icon-empty" :size="22" />
        <span style="font-size: 12px">图片加载失败</span>
      </div>
    </template>
  </ti-image>
</template>
```
:::

## 懒加载
::: show
<div style="overflow: auto; height: 300px; width: 100%">
<ti-image
  v-for="item in imgList"
  :key="item.src"
  :src="item.src"
  style="width: 100%"
  fit="cover"
  lazy
/>
</div>

``` vue
<template>
  <div style="overflow: auto; height: 300px; width: 100%">
    <ti-image
      v-for="item in imgList"
      :key="item.src"
      :src="item.src"
      style="width: 100%"
      fit="cover"
      lazy
    />
  </div>
</template>
```
:::

## 属性

::: table

| 属性名  | 说明  | 类型 | 可选值 | 默认值 |
| :----: | :----: | :----: | :----: | :----: |
| src | 图片地址 | string | —— | —— |
| alt | 同原生 alt | string | —— | —— |
| fit | 同原生 object-fit | string | fill \| contain \| cover \| none \| scale-down | —— |
| preview | 图片预览 | boolean | —— | false |
| lazy | 是否开启懒加载 | boolean | —— | false |
| close-on-press-escape | 是否可以通过按下 ESC 关闭  | boolean | —— | true |
| z-index | 设置图片预览的 z-index	 | number | —— | 2000 |

:::

## 插槽

::: table

| 插槽名  | 说明  |
| :----: | :----: |
| error | 图片加载失败显示的内容 |
| loading | 图片加载时显示的内容 |

:::

## 事件
::: table

| 事件名  | 说明  | 参数 |
| :----: | :----: | :----: |
| load | 图片加载成功的回调 | (e: Event) |
| error | 图片加载失败的回调 | (e: Event) |
| preview-open | 图片预览打开后的回调 | —— |
| preview-close | 图片预览关闭后的回调 | —— |

:::