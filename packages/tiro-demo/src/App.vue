<script setup lang="ts">
import { h, ref, watchEffect } from 'vue'
import { TiSelect, TiButton, TiCard } from '@tiro/ui'

const options = [
  {
    label: 'Drive',
    value: 'song1'
  },
  {
    label: 'Wood',
    value: 'song2'
  },
  {
    label: 'You',
    value: 'song3',
    disabled: true
  },
  {
    label: 'Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Think For Yourself',
    value: 'song7'
  },
  {
    label: 'The Word',
    value: 'song8'
  },
  {
    label: 'Think For Yourself',
    value: 'song9'
  },
  {
    label: 'The Word',
    value: 'song10'
  }
]
</script>

<template>
  <div class="example">
    <ti-card style="width: 200px">
      <template #header>
        <div class="card-header">header</div>
      </template>
      1111
    </ti-card>
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
