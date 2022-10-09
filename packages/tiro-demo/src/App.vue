<script setup lang="ts">
import { h, ref, watchEffect } from 'vue'
import { TiSelect, TiButton, TiCard, TiRadio, TiRadioGroup } from '@tiro/ui'

const radio1 = ref('1')
</script>

<template>
  <div class="example">
    <ti-radio-group v-model="radio1" name="demo2" type="success">
      <ti-radio value="1"> Definitely Maybe </ti-radio>
      <ti-radio disabled>Definitely Maybe</ti-radio>
      <ti-radio value="3"> Definitely Maybe </ti-radio>
    </ti-radio-group>
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
