<template>
    <header class="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
        <div class="flex items-center">
        <button 
            class="md:hidden text-gray-500 focus:outline-none"
            @click="$emit('toggle-sidebar')"
        >
            <i class="fas fa-bars"></i>
        </button>
        <h1 class="ml-4 text-xl font-semibold text-gray-800">Dashboard</h1>
        </div>
        
        <div class="flex items-center space-x-4">
        <router-link 
            to="/" 
            class="p-2 text-gray-500 rounded-full hover:bg-gray-100"
            title="Home"
        >
            <i class="fas fa-home"></i>
        </router-link>
        
        <button class="p-2 text-gray-500 rounded-full hover:bg-gray-100" title="Notifications">
            <i class="fas fa-bell"></i>
        </button>
        
        <button class="p-2 text-gray-500 rounded-full hover:bg-gray-100" title="Messages">
            <i class="fas fa-envelope"></i>
        </button>
        
        <UserMenu />
        </div>
    </header>
</template>

<script setup>
    import UserMenu from './UserMenu.vue';
</script>