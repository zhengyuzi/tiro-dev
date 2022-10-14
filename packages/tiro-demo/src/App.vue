<script setup lang="ts">
import { h, ref, watchEffect } from 'vue'
import {
  TiSelect,
  TiButton,
  TiCard,
  TiRadio,
  TiRadioGroup,
  TiCheckbox,
  TiCheckboxGroup,
  TiImage
} from '@tiro/ui'
</script>

<template>
  <div class="example">
    <div id="example-box" style="overflow: auto; height: 500px; width: 500px">
      <ti-image
        src="https://s1.ax1x.com/2022/10/13/xagB8S.jpg"
        class="1"
        style="width: 100%; height: auto"
        fit="cover"
        preview
        :intersection-observer-options="{
          root: '#example-box'
        }"
      />
      <ti-image
        class="2"
        src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
        style="width: 100%; height: auto"
        fit="cover"
        preview
        lazy
        :intersection-observer-options="{
          root: '#example-box'
        }"
      />
      <ti-image
        class="3"
        src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
        style="width: 100%; height: auto"
        fit="cover"
        preview
        lazy
        :intersection-observer-options="{
          root: '#example-box'
        }"
      />
      <ti-image
        class="4"
        src="https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
        style="width: 100%; height: auto"
        fit="cover"
        preview
        lazy
        :intersection-observer-options="{
          root: '#example-box'
        }"
      />
      <ti-image
        class="5"
        src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
        style="width: 100%; height: auto"
        fit="cover"
        preview
        lazy
        :intersection-observer-options="{
          root: '#example-box'
        }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}

.example {
  // width: 100%;
  // height: 100%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  // margin-top: 20%;

  // & > * {
  //   margin: 10px 0;
  // }

  .ti-image {
    display: block;
  }
}
</style>
