<script setup lang="ts">
const icons = [
"ti-icon-top",
"ti-icon-direction-down",
"ti-icon-copy",
"ti-icon-direction-right",
"ti-icon-direction-up",
"ti-icon-direction-left",
"ti-icon-menu",
"ti-icon-loading",
"ti-icon-select",
"ti-icon-zoom-in",
"ti-icon-zoom-out",
"ti-icon-add",
"ti-icon-bad",
"ti-icon-calendar",
"ti-icon-comment",
"ti-icon-elipsis",
"ti-icon-file",
"ti-icon-folder-close",
"ti-icon-filter",
"ti-icon-good",
"ti-icon-home",
"ti-icon-file-open",
"ti-icon-link",
"ti-icon-help",
"ti-icon-notification",
"ti-icon-more",
"ti-icon-print",
"ti-icon-navigation",
"ti-icon-refresh",
"ti-icon-setting",
"ti-icon-survey",
"ti-icon-user",
"ti-icon-code",
"ti-icon-arrow-down",
"ti-icon-ashbin",
"ti-icon-arrow-right",
"ti-icon-eye",
"ti-icon-bottom",
"ti-icon-attachment",
"ti-icon-close",
"ti-icon-download",
"ti-icon-eye-close",
"ti-icon-favorite",
"ti-icon-label",
"ti-icon-heart",
"ti-icon-hide",
"ti-icon-picture",
"ti-icon-search",
"ti-icon-empty",
"ti-icon-restore"
]
</script>

# Icon 图标

## 基础用法
::: show
<ti-icon name="ti-icon-search" />
<ti-icon name="ti-icon-heart" style="margin: 0px 10px" />
<ti-icon name="ti-icon-loading" />

``` vue
<template>
  <ti-icon name="ti-icon-search" />
  <ti-icon name="ti-icon-heart" />
  <ti-icon name="ti-icon-loading" />
</template>
```
:::

## 图标大小
使用 `size` 属性调整大小
::: show
<ti-icon name="ti-icon-search" />
<ti-icon name="ti-icon-search" :size="24" style="margin: 0px 10px" />
<ti-icon name="ti-icon-search" :size="30" />

``` vue
<template>
  <ti-icon name="ti-icon-search" />
  <ti-icon name="ti-icon-search" :size="24" />
  <ti-icon name="ti-icon-search" :size="30" />
</template>
```
:::

## 图标颜色
使用 `color` 属性调整颜色
::: show
<ti-icon name="ti-icon-search" />
<ti-icon name="ti-icon-search" color="green" style="margin: 0px 10px" />
<ti-icon name="ti-icon-search" color="red" />

``` vue
<template>
  <ti-icon name="ti-icon-search" />
  <ti-icon name="ti-icon-search" color="green" />
  <ti-icon name="ti-icon-search" color="red" />
</template>
```
:::

## 图标集合

<ti-example-icon :icons="icons" />