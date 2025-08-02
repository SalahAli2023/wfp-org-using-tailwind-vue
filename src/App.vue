<template>
  <div class="app text-text-color transition-colors duration-300">
    <Header/>
    <router-view />
    <Footer/>
    <BackToTop />
  </div>
</template>

<script setup>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import BackToTop from '@/components/common/BackToTop.vue';
</script>