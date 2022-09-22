<template>
  <div class="ti-example">
    <section class="example-box">
      <div class="example-show">
        <slot name="component"></slot>
      </div>
      <div class="example-handle">
        <ti-icon
          name="ti-icon-code"
          :size="24"
          @click="codeShow"
          :class="[isShow ? 'is-show' : '']"
        />
      </div>
      <div class="example-code" v-show="isShow">
        <slot></slot>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(false)

const codeShow = () => {
  isShow.value = !isShow.value
}
</script>

<style lang="scss" scoped>
.ti-example {
  margin: 20px 0px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-font);
  .example-box {
    border: 1px dashed var(--vp-c-gray-border);
    border-radius: 2px;
    .example-show {
      padding: 30px;
    }
  }
  .example-handle {
    width: 100%;
    height: 30px;
    border-top: 1px dashed var(--vp-c-gray-border);
    display: flex;
    justify-content: center;
    align-items: center;
    & > * {
      cursor: pointer;
      user-select: none;
      padding: 0 5px;
      color: var(--vp-c-text-3);
      &:hover {
        color: var(--vp-c-indigo-soft);
      }
    }
    .is-show {
      color: var(--vp-c-indigo-soft);
    }
  }
  .example-code {
    border-top: 1px dashed var(--vp-c-bg-mute);
  }
}
</style>
