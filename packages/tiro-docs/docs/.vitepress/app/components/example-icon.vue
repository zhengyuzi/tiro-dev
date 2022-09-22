<template>
  <div class="ti-example-icon">
    <div class="ti-example-icon-item" v-for="item in icons" :key="item">
      <ti-icon :name="item" :size="30" class="ti-icon"></ti-icon>
      <span class="ti-example-icon-name">{{ item }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  icons: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.ti-example-icon {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  margin-top: 50px;
  .ti-example-icon-item {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    line-height: 14px;
    color: var(--vp-c-font);
    .ti-example-icon-name {
      margin-top: 20px;
      flex: 1;
      word-break: break-all;
      text-align: center;
    }
  }
}
</style>
