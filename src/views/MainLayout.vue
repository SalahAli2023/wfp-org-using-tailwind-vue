<script setup lang="ts">
import Footer from '@/components/common/Footer.vue';
import Header from '@/components/common/Header.vue';

</script>

<template>
    <Header/>
    <slot></slot>
    <Footer/>
</template>