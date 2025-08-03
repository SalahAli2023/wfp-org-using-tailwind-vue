<template>
    <MainLayout>
        <section id="projects" class="projects-section py-8 bg-bg-color">
            <div class="container mx-auto px-4">
            <h2 class="text-3xl text-center mb-8">Our Projects</h2>
            
            <div class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article 
                v-for="project in projects"
                :key="project.id"
                class="project-card bg-card-bg rounded-xl overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                >
                <router-link :to="`/projects/${project.id}`">
                    <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
                    <div class="p-4">
                    <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
                    <p class="text-border-color">{{ project.description }}</p>
                    </div>
                </router-link>
                </article>
            </div>
            </div>
        </section>
    </MainLayout>
</template>

<script setup>
import MainLayout from './mainLayout.vue';

    const projects = [
        {
            id: 1,
            title: 'Food Security Project',
            description: 'Supporting needy families with basic food in conflict-affected areas.',
            image: new URL('@/assets/images/proj1.jpg', import.meta.url).href
        },
        {
            id: 2,
            title: "Women's Empowerment Project",
            description: 'We work to train and qualify women to enable them to earn an independent income.',
            image: new URL('@/assets/images/proj2.jpg', import.meta.url).href
        },
        {
            id: 3,
            title: 'School feeding program',
            description: 'Provide school meals for children to improve education and nutrition together.',
            image: new URL('@/assets/images/proj3.jpg', import.meta.url).href
        },
        {
            id: 4,
            title: 'Emergency Relief',
            description: 'Rapid response to natural disasters and humanitarian crises.',
            image: new URL('@/assets/images/proj1.jpg', import.meta.url).href
        },
        {
            id: 5,
            title: 'Agricultural Development',
            description: 'Helping communities grow their own sustainable food sources.',
            image: new URL('@/assets/images/proj2.jpg', import.meta.url).href
        },
        {
            id: 6,
            title: 'Nutrition Programs',
            description: 'Specialized nutrition support for mothers and children.',
            image: new URL('@/assets/images/proj3.jpg', import.meta.url).href
        }
    ];
</script>