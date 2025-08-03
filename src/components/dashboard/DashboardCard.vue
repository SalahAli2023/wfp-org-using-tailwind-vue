<template>
    <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
        <div>
            <p class="text-sm font-medium text-gray-500">{{ title }}</p>
            <p class="text-3xl font-bold" :class="textColor">{{ value }}</p>
        </div>
        <div class="p-3 rounded-full" :class="iconBgColor">
            <i :class="['fas', `fa-${icon}`, 'text-xl']" class="iconColor"></i>
        </div>
        </div>
        <p class="mt-2 text-sm" :class="trendTextColor">
        <i :class="trendIcon"></i> {{ trend }}
        </p>
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    const props = defineProps({
    title: String,
    value: String,
    icon: String,
    trend: String,
    trendDirection: {
        type: String,
        validator: value => ['up', 'down'].includes(value)
    },
    color: {
        type: String,
        default: 'blue'
    }
    });

    const colorClasses = {
    blue: {
        text: 'text-wfp-blue',
        bg: 'bg-blue-100',
        icon: 'text-wfp-blue'
    },
    orange: {
        text: 'text-wfp-orange',
        bg: 'bg-orange-100',
        icon: 'text-wfp-orange'
    },
    green: {
        text: 'text-green-600',
        bg: 'bg-green-100',
        icon: 'text-green-600'
    },
    purple: {
        text: 'text-purple-600',
        bg: 'bg-purple-100',
        icon: 'text-purple-600'
    }
    };

    const textColor = computed(() => colorClasses[props.color].text);
    const iconBgColor = computed(() => colorClasses[props.color].bg);
    const iconColor = computed(() => colorClasses[props.color].icon);

    const trendIcon = computed(() => [
    'fas',
    props.trendDirection === 'up' ? 'fa-arrow-up' : 'fa-arrow-down',
    'mr-1'
    ]);

    const trendTextColor = computed(() => 
    props.trendDirection === 'up' ? 'text-green-600' : 'text-red-600'
    );
</script>