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
    <ti-image
      src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
      style="width: 100px; height: 100px"
      fit="cover"
      preview
    />
  </div>
</template>

<style scoped lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}

.example {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20%;

  & > * {
    margin: 10px 0;
  }
}
</style>
