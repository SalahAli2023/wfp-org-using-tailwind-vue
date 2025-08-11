<template>
    <MainLayout>
        <div class="about-page py-8" >
            <div class="container mx-auto px-4">
                <h1 class="text-4xl font-bold mb-8 text-center">About WFP</h1>
                
                <div class="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                    <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p class="mb-4">The World Food Programme (WFP) is the leading humanitarian organization saving lives and changing lives, delivering food assistance in emergencies and working with communities to improve nutrition and build resilience.</p>
                    <p>As the international community has committed to end hunger, achieve food security and improved nutrition by 2030, one in nine people worldwide still do not have enough to eat. Food and food-related assistance lie at the heart of the struggle to break the cycle of hunger and poverty.</p>
                    </div>
                    <img src="@/assets/images/about.webp" alt="Our Mission" class="rounded-lg shadow-lg">
                </div>

                <div class="values-section bg-light-gray p-8 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-6 text-center">Our Core Values</h2>
                    <div class="grid md:grid-cols-3 gap-6">
                        <div 
                            v-for="(value, index) in coreValues"
                            :key="index"
                            class="value-card bg-card-bg p-6 rounded-lg shadow"
                        >
                            <h3 class="text-xl font-semibold mb-3 text-wfp-blue">{{ value.title }}</h3>
                            <p>{{ value.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>

    import { ref } from 'vue'
    import MainLayout from './MainLayout.vue';
    
    
            const coreValues = ref([
            {
                title: 'Integrity',
                description: 'We uphold the highest standards of honesty and transparency in all our actions.'
            },
            {
                title: 'Humanity',
                description: 'We are committed to saving lives and alleviating suffering with dignity.'
            },
            {
                title: 'Inclusion',
                description: 'We respect and value diversity, ensuring equal opportunities for all.'
            },
            {
                title: 'Collaboration',
                description: 'We work in partnership with others to maximize our collective impact.'
            },
            {
                title: 'Commitment',
                description: 'We are dedicated to achieving Zero Hunger and serving those in need.'
            },
            {
                title: 'Accountability',
                description: 'We take responsibility for our actions and their consequences.'
            }
            ])
        
</script>

