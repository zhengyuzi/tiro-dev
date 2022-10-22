<script setup lang="ts">
import { ref } from 'vue'
const imgList = [
    'http://1.15.247.77/api/image/demo_1.jpg',
    'http://1.15.247.77/api/image/demo.jpg',
    'http://1.15.247.77/api/image/demo_2.jpg',
    'http://1.15.247.77/api/image/demo_3.jpg'
]
const dotPlacement = ref('bottom')
const dotType = ref('dot')
const effect = ref('slide')
const trigger = ref('click')
</script>
<style lang="scss">
.ti-example-item {
    margin: 15px 0;
    display: flex;
    align-items: center;
    .label-text {
      font-size: 14px;
      width: 80px;
    }
}
</style>

# Carousel 轮播图

## 基础用法
::: show
<ti-carousel style="width: 400px; height: 250px" show-arrow>
  <ti-carousel-item v-for="item in imgList" :key="item">
    <img
      :src="item"
      style="width: 100%; height: 100%; object-fit: cover"
    />
  </ti-carousel-item>
</ti-carousel>

``` vue
<template>
  <ti-carousel style="width: 400px; height: 250px" show-arrow>
    <ti-carousel-item v-for="item in imgList" :key="item">
      <img
        :src="item"
        style="width: 100%; height: 100%; object-fit: cover"
      />
    </ti-carousel-item>
  </ti-carousel>
</template>

<script setup lang="ts">
const imgList = ['image1', 'image2', 'image3', 'image4']
</script>
```
:::

## 自动播放
自动播放时间间隔默认3000ms，可通过 `interval` 属性自定义间隔时长。
::: show
<ti-carousel style="width: 400px; height: 250px" show-arrow autoplay>
  <ti-carousel-item v-for="item in imgList" :key="item">
    <img
      :src="item"
      style="width: 100%; height: 100%; object-fit: cover"
    />
  </ti-carousel-item>
</ti-carousel>

``` vue
<template>
  <ti-carousel style="width: 400px; height: 250px" show-arrow autoplay>
    <ti-carousel-item v-for="item in imgList" :key="item">
      <img
        :src="item"
        style="width: 100%; height: 100%; object-fit: cover"
      />
    </ti-carousel-item>
  </ti-carousel>
</template>

<script setup lang="ts">
const imgList = ['image1', 'image2', 'image3', 'image4']
</script>
```
:::

## 指示器

::: show
<div class="ti-example-item">
  <span class="label-text">方向</span>
  <ti-radio-group v-model="dotPlacement" name="dotPlacement">
    <ti-radio value="bottom"> bottom </ti-radio>
    <ti-radio value="top"> top </ti-radio>
    <ti-radio value="left"> left </ti-radio>
    <ti-radio value="right"> right </ti-radio>
  </ti-radio-group>
</div>
<div class="ti-example-item">
  <span class="label-text">类型</span>
  <ti-radio-group v-model="dotType" name="dotType">
    <ti-radio value="dot"> dot </ti-radio>
    <ti-radio value="line"> line </ti-radio>
  </ti-radio-group>
</div>
<div class="ti-example-item">
  <span class="label-text">触发方式</span>
  <ti-radio-group v-model="trigger" name="trigger">
    <ti-radio value="click"> click </ti-radio>
    <ti-radio value="hover"> hover </ti-radio>
  </ti-radio-group>
</div>
<ti-carousel style="width: 400px; height: 250px" :dot-placement="dotPlacement" :dot-type="dotType" :trigger="trigger">
  <ti-carousel-item v-for="item in imgList" :key="item">
    <img
      :src="item"
      style="width: 100%; height: 100%; object-fit: cover"
    />
  </ti-carousel-item>
</ti-carousel>

``` vue
<template>
  <div>
    <span>指示器方向</span>
    <ti-radio-group v-model="dotPlacement" name="dotPlacement">
      <ti-radio value="bottom"> bottom </ti-radio>
      <ti-radio value="top"> top </ti-radio>
      <ti-radio value="left"> left </ti-radio>
      <ti-radio value="right"> right </ti-radio>
    </ti-radio-group>
  </div>
  <div>
    <span>指示器类型</span>
    <ti-radio-group v-model="dotType" name="dotType">
      <ti-radio value="dot"> dot </ti-radio>
      <ti-radio value="line"> line </ti-radio>
    </ti-radio-group>
  </div>
  <div>
    <span>触发方式</span>
    <ti-radio-group v-model="trigger" name="trigger">
      <ti-radio value="click"> click </ti-radio>
      <ti-radio value="hover"> hover </ti-radio>
    </ti-radio-group>
  </div>
  <ti-carousel style="width: 400px; height: 250px" :dot-placement="dotPlacement" :dot-type="dotType">
    <ti-carousel-item v-for="item in imgList" :key="item">
      <img
        :src="item"
        style="width: 100%; height: 100%; object-fit: cover"
      />
    </ti-carousel-item>
  </ti-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const imgList = ['image1', 'image2', 'image3', 'image4']

const dotPlacement = ref('bottom')
const dotType = ref('dot')
const trigger = ref('click')
</script>
```
:::

## 垂直方向
默认切换方向为横向，`direction` 属性为 horizontal。当 `direction` 属性为 vertical 时切换方向为垂直方向。
::: show
<ti-carousel style="width: 400px; height: 250px" direction="vertical" dot-placement="right">
  <ti-carousel-item v-for="item in imgList" :key="item">
    <img
      :src="item"
      style="width: 100%; height: 100%; object-fit: cover"
    />
  </ti-carousel-item>
</ti-carousel>

``` vue
<template>
  <ti-carousel style="width: 400px; height: 250px" direction="vertical" dot-placement="right">
    <ti-carousel-item v-for="item in imgList" :key="item">
      <img
        :src="item"
        style="width: 100%; height: 100%; object-fit: cover"
      />
    </ti-carousel-item>
  </ti-carousel>
</template>

<script setup lang="ts">
const imgList = ['image1', 'image2', 'image3', 'image4']
</script>
```
:::

## 鼠标滚轮切换
设置 `mousewheel` 属性为true，可通过鼠标滚轮滚动控制轮播图切换。
::: show
<ti-carousel style="width: 400px; height: 250px" mousewheel>
  <ti-carousel-item v-for="item in imgList" :key="item">
    <img
      :src="item"
      style="width: 100%; height: 100%; object-fit: cover"
    />
  </ti-carousel-item>
</ti-carousel>

``` vue
<template>
  <ti-carousel style="width: 400px; height: 250px" mousewheel>
    <ti-carousel-item v-for="item in imgList" :key="item">
      <img
        :src="item"
        style="width: 100%; height: 100%; object-fit: cover"
      />
    </ti-carousel-item>
  </ti-carousel>
</template>

<script setup lang="ts">
const imgList = ['image1', 'image2', 'image3', 'image4']
</script>
```
:::

## 过渡效果
::: show
<div class="ti-example-item">
  <span class="label-text">过渡效果</span>
  <ti-radio-group v-model="effect" name="effect">
    <ti-radio value="slide"> slide </ti-radio>
    <ti-radio value="fade"> fade </ti-radio>
  </ti-radio-group>
</div>
<ti-carousel style="width: 400px; height: 250px" :effect="effect">
  <ti-carousel-item v-for="item in imgList" :key="item">
    <img
      :src="item"
      style="width: 100%; height: 100%; object-fit: cover"
    />
  </ti-carousel-item>
</ti-carousel>

``` vue
<template>
  <div>
    <span>过渡效果</span>
    <ti-radio-group v-model="effect" name="effect">
      <ti-radio value="slide"> slide </ti-radio>
      <ti-radio value="fade"> fade </ti-radio>
    </ti-radio-group>
  </div>
  <ti-carousel style="width: 400px; height: 250px" :effect="effect">
    <ti-carousel-item v-for="item in imgList" :key="item">
      <img
        :src="item"
        style="width: 100%; height: 100%; object-fit: cover"
      />
    </ti-carousel-item>
  </ti-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const imgList = ['image1', 'image2', 'image3', 'image4']
const effect = ref('slide')
</script>
```
:::

## 模拟拖拽
使用 `draggable` 属性开启鼠标拖拽进行切换。
::: show
<ti-carousel style="width: 400px; height: 250px" draggable>
  <ti-carousel-item v-for="item in imgList" :key="item">
    <img
      :src="item"
      style="width: 100%; height: 100%; object-fit: cover"
    />
  </ti-carousel-item>
</ti-carousel>

``` vue
<template>
  <ti-carousel style="width: 400px; height: 250px" draggable>
    <ti-carousel-item v-for="item in imgList" :key="item">
      <img
        :src="item"
        style="width: 100%; height: 100%; object-fit: cover"
      />
    </ti-carousel-item>
  </ti-carousel>
</template>

<script setup lang="ts">
const imgList = ['image1', 'image2', 'image3', 'image4']
</script>
```
:::


## 属性
::: table

| 属性名  | 说明  | 类型 | 默认值 |
| :----: | :----: | :----: | :----: |
| current-index | 当前页 | number | 0 |
| autoplay | 是否自动播放 | boolean | false |
| interval | 自动播放的间隔（ms） | number | 3000 |
| show-dots | 是否显示指示器 | boolean | true |
| show-arrow | 	是否显示箭头按钮 | boolean | false |
| direction | 轮播图显示的方向 | 'horizontal' \| 'vertical' | 'horizontal' |
| dot-type | 是否自动播放 | 'dot' \| 'line' | 'dot' |
| mousewheel | 是否通过鼠标滚轮切换轮播图 | boolean | false |
| draggable | 是否通过鼠标拖拽切换轮播图 | boolean | false |
| trigger | 指示器触发切换的方式 | 'click' \| 'hover' | 'click' |
| dot-placement | 指示器位置 | 'top' \| 'bottom' \| 'left' \| 'right' | 'bottom' |
| effect | 轮播图切换时的过渡效果 | 'slide' \| 'fade' | 'slide' |

:::

## 事件
::: table

| 事件名  | 说明  | 参数 |
| :----: | :----: | :----: |
| change | 切换时触发 | 轮播图索引 |

:::

## 方法

::: table

| 方法名  | 说明  | —— |
| :----: | :----: | :----: |
| prev | 切换至上一页 | —— |
| next | 切换至下一页 | —— |

:::