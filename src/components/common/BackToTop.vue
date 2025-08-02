<template>
    <button 
        v-show="isVisible"
        @click="scrollToTop"
        class="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-wfp-orange text-white shadow-lg hover:bg-wfp-orange-hover transition-all duration-300 z-[999] flex items-center justify-center"
        aria-label="Back to top">
        <i class="fas fa-arrow-up text-white"></i>
    </button>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    const isVisible = ref(false);

    const handleScroll = () => {
        isVisible.value = window.scrollY > 150;
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>