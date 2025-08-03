<template>
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 class="text-lg font-semibold text-gray-800">Projects Overview</h2>
        <router-link 
            to="/projects" 
            class="text-sm font-medium text-wfp-blue hover:text-wfp-dark-blue"
        >
            View all projects
        </router-link>
        </div>
        
        <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
                <th 
                v-for="header in headers" 
                :key="header.key"
                scope="col" 
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                {{ header.label }}
                </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr 
                v-for="project in projects" 
                :key="project.name"
                class="hover:bg-gray-50"
            >
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                    <img 
                        class="h-10 w-10 rounded-full" 
                        :src="require(`@/assets/images/${project.image}`)" 
                        :alt="project.name"
                    >
                    </div>
                    <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{ project.name }}</div>
                    <div class="text-sm text-gray-500">{{ project.category }}</div>
                    </div>
                </div>
                </td>
                
                <td class="px-6 py-4 whitespace-nowrap">
                <span 
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    :class="statusClass(project.status)"
                >
                    {{ project.status }}
                </span>
                </td>
                
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ project.beneficiaries }}
                </td>
                
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ project.budget }}
                </td>
                
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                    class="bg-wfp-blue h-2.5 rounded-full" 
                    :style="`width: ${project.progress}%`"
                    ></div>
                </div>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script setup>
    defineProps({
    projects: {
        type: Array,
        required: true
    }
    });

    const headers = [
    { key: 'name', label: 'Project' },
    { key: 'status', label: 'Status' },
    { key: 'beneficiaries', label: 'Beneficiaries' },
    { key: 'budget', label: 'Budget' },
    { key: 'progress', label: 'Progress' }
    ];

    const statusClass = (status) => {
    switch (status) {
        case 'Active':
        return 'bg-green-100 text-green-800';
        case 'Planning':
        return 'bg-yellow-100 text-yellow-800';
        case 'Completed':
        return 'bg-blue-100 text-blue-800';
        default:
        return 'bg-gray-100 text-gray-800';
    }
};
</script>