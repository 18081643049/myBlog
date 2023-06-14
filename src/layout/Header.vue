<template>
  <header class="h-[88px] md:h-16 flex items-center justify-center md:justify-between px-4 bg-mobile-bg md:bg-white md:shadow-header fixed top-0 z-10 inset-x-0 shadow-lg">
    <div class="flex justify-between w-full items-center container">
      <div @click="handledOpen" class="btn font-bold xl:mr-[80px] xl:mr-[0px] bg-[#3CA0E7] w-[90px] h-[40px] text-center leading-[40px] text-white sm:text-[14px] sm: w-[70px] sm:h-[36px] sm:leading-[36px]">DONATE</div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from "vue-router"
const router = useRouter()
const goToIndex = () => {
  router.push('/index')
}
const handledOpen = () => {
  router.push('/donate')
}
</script>

<style lang="less" scoped>
.btn {
  &:hover {
    cursor: pointer;
  }
}
</style>