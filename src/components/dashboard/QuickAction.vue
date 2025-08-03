<template>
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-800">Quick Actions</h2>
        </div>
        
        <div class="p-6 grid grid-cols-2 gap-4">
        <router-link 
            v-for="action in actions" 
            :key="action.title"
            to="#"
            class="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
            <div 
            class="p-3 mb-2 rounded-full"
            :class="iconBgColor(action.color)"
            >
            <i :class="['fas', `fa-${action.icon}`]"></i>
            </div>
            <span class="text-sm font-medium text-gray-700">{{ action.title }}</span>
        </router-link>
        </div>
    </div>
</template>

<script setup>
    defineProps({
    actions: {
        type: Array,
        required: true
    }
    });

    const iconBgColor = (color) => {
    const colors = {
        blue: 'bg-blue-100 text-wfp-blue',
        orange: 'bg-orange-100 text-wfp-orange',
        green: 'bg-green-100 text-green-600',
        purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color] || 'bg-gray-100 text-gray-600';
    };
</script>