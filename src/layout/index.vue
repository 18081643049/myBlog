<template>
  <Header />
  <div class="w-full pt-[54px] md:pt-16">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'
</script>

<style scoped>

</style>