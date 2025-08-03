<template>
    <div class="relative">
        <button 
        class="flex items-center space-x-2 focus:outline-none"
        @click="toggleMenu"
        id="user-menu-button"
        aria-expanded="false"
        :aria-expanded="isOpen.toString()"
        >
        <img class="w-8 h-8 rounded-full" src="@/assets/images/salah.jpg" alt="Admin">
        <span class="text-sm font-medium">Admin User</span>
        </button>
        
        <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
        >
        <div 
            v-show="isOpen"
            class="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
        >
            <div class="py-1" role="none">
            <router-link 
                to="/profile" 
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                @click="closeMenu"
            >
                Your Profile
            </router-link>
            <router-link 
                to="/settings" 
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                @click="closeMenu"
            >
                Settings
            </router-link>
            <button 
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                @click="logout"
            >
                Sign out
            </button>
            </div>
        </div>
        </transition>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    const isOpen = ref(false);

    const toggleMenu = () => {
    isOpen.value = !isOpen.value;
    };

    const closeMenu = () => {
    isOpen.value = false;
    };

    const logout = () => {
    // Handle logout logic
    closeMenu();
    };

    const handleClickOutside = (event) => {
    const menuButton = document.getElementById('user-menu-button');
    if (menuButton && !menuButton.contains(event.target)) {
        closeMenu();
    }
    };

    onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    });
</script>