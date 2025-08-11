<template>
    <header class="navbar bg-nav-bg shadow-sm border-b border-border-color py-4 sticky top-0 z-[1000]">
        <nav class="container mx-auto px-4">
        <div class="flex justify-between items-center">
            <router-link to="/" class="logo-img flex items-center">
            <img src="@/assets/images/wfp-logo.svg" alt="WFP Logo" class="logo h-20 bg-wfp-blue">
            <h2 class="ml-4"><span class="brand font-bold text-xl">WFP<span class="text-wfp-orange">Organization</span></span></h2>
            </router-link>

            <div class="nav-theme flex items-center"> 

                <!-- <label class="theme-switch relative inline-block w-7 h-7 cursor-pointer">
                    <input type="checkbox" id="theme-toggle" class="opacity-0 w-0 h-0">
                    <span class="slider absolute inset-0">
                        <img class="icon sun-icon absolute w-4 h-4 top-1/2 -translate-y-1/2 z-10 left-0 opacity-100 dark:opacity-0" src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.7.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202025%20Fonticons,%20Inc.--%3e%3cpath%20d='M361.5%201.2c5%202.1%208.6%206.6%209.6%2011.9L391%20121l107.9%2019.8c5.3%201%209.8%204.6%2011.9%209.6s1.5%2010.7-1.6%2015.2L446.9%20256l62.3%2090.3c3.1%204.5%203.7%2010.2%201.6%2015.2s-6.6%208.6-11.9%209.6L391%20391%20371.1%20498.9c-1%205.3-4.6%209.8-9.6%2011.9s-10.7%201.5-15.2-1.6L256%20446.9l-90.3%2062.3c-4.5%203.1-10.2%203.7-15.2%201.6s-8.6-6.6-9.6-11.9L121%20391%2013.1%20371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7%201.6-15.2L65.1%20256%202.8%20165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6%2011.9-9.6L121%20121%20140.9%2013.1c1-5.3%204.6-9.8%209.6-11.9s10.7-1.5%2015.2%201.6L256%2065.1%20346.3%202.8c4.5-3.1%2010.2-3.7%2015.2-1.6zM160%20256a96%2096%200%201%201%20192%200%2096%2096%200%201%201%20-192%200zm224%200a128%20128%200%201%200%20-256%200%20128%20128%200%201%200%20256%200z'/%3e%3c/svg%3e" alt="light_mode" style="filter: brightness(0) saturate(100%) invert(100%) sepia(97%) saturate(13%) hue-rotate(237deg) brightness(104%) contrast(104%);">
                        <img class="icon moon-icon absolute w-4 h-4 top-1/2 -translate-y-1/2 z-10 left-0 opacity-0 dark:opacity-100" src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20384%20512'%3e%3c!--!Font%20Awesome%20Free%206.7.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202025%20Fonticons,%20Inc.--%3e%3cpath%20d='M223.5%2032C100%2032%200%20132.3%200%20256S100%20480%20223.5%20480c60.6%200%20115.5-24.2%20155.8-63.4c5-4.9%206.3-12.5%203.1-18.7s-10.1-9.7-17-8.5c-9.8%201.7-19.8%202.6-30.1%202.6c-96.9%200-175.5-78.8-175.5-176c0-65.8%2036-123.1%2089.3-153.3c6.1-3.5%209.2-10.5%207.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z'/%3e%3c/svg%3e" alt="dark_mode" style="filter: brightness(0) saturate(100%) invert(100%) sepia(97%) saturate(13%) hue-rotate(237deg) brightness(104%) contrast(104%);">
                    </span> 
                </label>-->
                <button @click="darkMode.toggleDarkMode()" class="bg-light-gray mx-4 p-1 rounded-full cursor-pointer">
                    <!-- {{ darkMode.isDark ? '☀️' : '🌙' }} -->
                    <span v-if="darkMode.isDark" class="text-xxl">🌞</span>
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
    import { useDarkMode } from '@/composables/useDarkMode';

    const mobileMenuOpen = ref(false);
    const darkMode = ref(useDarkMode());

    const toggleMobileMenu = () => {
        mobileMenuOpen.value = !mobileMenuOpen.value;
    };
</script>