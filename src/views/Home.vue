<script setup>
import HeroSection from '@/components/home/HeroSection.vue';
import AboutSection from '@/components/home/AboutSection.vue';
import ImpactStats from '@/components/home/ImpactStats.vue';
import ProjectsSection from '@/components/home/ProjectsSection.vue';
import MainLayout from './MainLayout.vue';
</script>

<template>
    <MainLayout>
        <main >
            <HeroSection />
            <AboutSection />
            <ImpactStats />
            <ProjectsSection />
        </main>
    </MainLayout>
</template>
