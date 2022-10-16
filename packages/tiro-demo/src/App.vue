<script setup lang="ts">
import { h, ref, watchEffect } from 'vue'

const imgList = [
  {
    src: 'https://pic.jitudisk.com/public/2022/10/13/6e80843c89569.jpg'
  },
  {
    src: 'https://pic.jitudisk.com/public/2022/10/14/68ebefa9903f9.webp'
  },
  {
    src: 'https://pic.jitudisk.com/public/2022/10/13/01b1e3acadfd2.webp'
  },
  {
    src: 'https://pic.jitudisk.com/public/2022/10/13/20336a754d567.webp'
  }
]
</script>

<template>
  <div class="example">
    <div>
      <ti-carousel style="width: 800px" autoplay>
        <ti-carousel-item v-for="item in imgList" :key="item.src">
          <img :src="item.src" style="height: 400px; object-fit: cover" />
        </ti-carousel-item>
      </ti-carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
.example {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
