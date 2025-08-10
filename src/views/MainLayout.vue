<script setup lang="ts">
import Footer from '@/components/common/Footer.vue';
import Header from '@/components/common/Header.vue';

</script>

<template>
    <Header/>
    <div class="bg-bg-secondary">
    <slot></slot></div>
    <Footer/>
</template>