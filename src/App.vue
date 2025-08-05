<template>
  <div class="app text-text-color transition-colors duration-300">
    <!-- <Header/> -->
    <main><router-view /></main>
    <!-- <Footer/> -->
    <BackToTop />
  </div>
</template>

<script setup>
  import BackToTop from '@/components/common/BackToTop.vue';
</script>