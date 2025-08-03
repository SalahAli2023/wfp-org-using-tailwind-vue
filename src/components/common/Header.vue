<template>
    <header class="navbar bg-nav-bg shadow-sm border-b border-border-color py-4 sticky top-0 z-[1000]">
        <nav class="container mx-auto px-4">
        <div class="flex justify-between items-center">
            <router-link to="/" class="logo-img flex items-center">
            <img src="@/assets/images/wfp-logo.svg" alt="WFP Logo" class="logo h-20 bg-wfp-blue">
            <h2 class="ml-4"><span class="brand font-bold text-xl">WFP<span class="text-wfp-orange">Organization</span></span></h2>
            </router-link>

            <div class="nav-theme flex items-center"> 

                <button @click="toggleDarkMode" class="bg-light-gray mx-4 p-1 rounded-full cursor-pointer">
                    <span v-if="isDark" class="text-xxl">🌞</span>
                    <span v-else class="text-xxl">🌙</span>
                </button>

                <button @click="toggleMobileMenu" class="menu-toggle md:hidden flex flex-col justify-between w-6 h-5 bg-transparent border-none cursor-pointer p-0">
                    <span class="block w-full h-0.5 bg-text-color"></span>
                    <span class="block w-full h-0.5 bg-text-color"></span>
                    <span class="block w-full h-0.5 bg-text-color"></span>
                </button>
                
                <div class="nav-links hidden md:flex gap-4 items-center">
                    <router-link to="/" class="font-medium hover:text-primary-color transition-colors duration-300">Home</router-link>
                    <router-link to="/dashboard" class="font-medium hover:text-primary-color transition-colors duration-300">Dashboard</router-link>
                    <router-link to="/about" class="font-medium hover:text-primary-color transition-colors duration-300">About</router-link>
                    <router-link to="/projects" class="font-medium hover:text-primary-color transition-colors duration-300">Projects</router-link>
                    <router-link to="/contact" class="font-medium hover:text-primary-color transition-colors duration-300">Contact</router-link>    
                </div>
            </div>
        </div>
        
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="nav-links-mobile flex items-center absolute top-full left-0 right-0 bg-nav-bg flex-col p-4 shadow-md md:hidden">
            <router-link to="/" class="py-2 font-medium hover:text-primary-color transition-colors duration-300">Home</router-link>
            <router-link to="/dashboard" class="py-2 font-medium hover:text-primary-color transition-colors duration-300">Dashboard</router-link>
            <router-link to="/about" class="py-2 font-medium hover:text-primary-color transition-colors duration-300">About</router-link>
            <router-link to="/projects" class="py-2 font-medium hover:text-primary-color transition-colors duration-300">Projects</router-link>
            <router-link to="/contact" class="py-2 font-medium hover:text-primary-color transition-colors duration-300">Contact</router-link>
        </div>
        </nav>
    </header>
</template>

<script setup>
    import { ref } from 'vue';

    const mobileMenuOpen = ref(false);
    const isDark = ref(false);

    const toggleMobileMenu = () => {
        mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    const toggleDarkMode = () => {
        isDark.value = !isDark.value;
        document.body.classList.toggle('dark', isDark.value);
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    };
</script>