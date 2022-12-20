<script setup lang="ts">
import { h, ref, watch } from 'vue'

const isChecked = ref()

watch(
  () => {
    return isChecked.value
  },
  (val) => {
    console.log(val)
  }
)
</script>

<template>
  <div class="example">
    <ti-switch v-model="isChecked" type="bright"></ti-switch>
  </div>
</template>

<style scoped lang="scss">
.example {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //margin-top: 20%;

  & > * {
    margin: 10px 0;
  }

  .ti-image {
    display: block;
  }
}
</style>
