<script setup lang="ts">

</script>

<style lang="scss" scoped>
.example-button {
    display: flex;
    flex-wrap: wrap;
    & > * {
        margin-right: 10px;
        margin-bottom: 10px;
    }
}
</style>

# Button 按钮
## 基础用法
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

``` vue
<template>
    <ti-button>默认</ti-button>
    <ti-button type="success">success</ti-button>
    <ti-button type="warning">warning</ti-button>
    <ti-button type="danger">danger</ti-button>
    <ti-button type="info">info</ti-button>
    <ti-button type="bright">bright</ti-button>
    
    <ti-button fill>默认</ti-button>
    <ti-button type="success" fill>success</ti-button>
    <ti-button type="warning" fill>warning</ti-button>
    <ti-button type="danger" fill>danger</ti-button>
    <ti-button type="info" fill>info</ti-button>
    <ti-button type="bright" fill>bright</ti-button>
</template>
```
:::