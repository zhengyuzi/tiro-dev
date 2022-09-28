<script setup lang="ts">
import { h, ref } from 'vue'
import { TiSelect, TiButton } from '@tiro/ui'

const options = [
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: "You Won't See",
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  }
]
</script>

<template>
  <div class="example">
    <ti-select style="width: 200px" :options="options"></ti-select>
    <ti-button>点击</ti-button>
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
