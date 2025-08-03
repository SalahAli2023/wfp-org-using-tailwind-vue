<template>
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-800">Recent Activities</h2>
        </div>
        
        <div class="divide-y divide-gray-200">
        <div 
            v-for="activity in activities" 
            :key="activity.title"
            class="p-6 hover:bg-gray-50"
        >
            <div class="flex items-start">
            <div 
                class="flex-shrink-0 p-2 rounded-full"
                :class="iconBgColor(activity.color)"
            >
                <i :class="['fas', `fa-${activity.icon}`]"></i>
            </div>
            <div class="ml-4">
                <p class="text-sm font-medium text-gray-900">{{ activity.title }}</p>
                <p class="text-sm text-gray-500">{{ activity.description }}</p>
                <p class="mt-1 text-xs text-gray-400">{{ activity.time }}</p>
            </div>
            </div>
        </div>
        </div>
        
        <div class="px-6 py-4 border-t border-gray-200 text-center">
        <router-link 
            to="/activities" 
            class="text-sm font-medium text-wfp-blue hover:text-wfp-dark-blue"
        >
            View all activities
        </router-link>
        </div>
    </div>
</template>

<script setup>
    defineProps({
    activities: {
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