<template>
    <section class="hero bg-[linear-gradient(rgba(0,0,0,0.6)),url('@/assets/images/hero.jpg')] bg-cover bg-center min-h-[60vh] flex items-end text-light-gray" id="home">
        <div class="container mx-auto px-4 py-8">
        <div class="hero-content max-w-3xl">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Saving Lives Changing Lives</h1>
            <p class="text-xl mb-8">UN report: Hunger worsening in 13 hotspots, starvation imminent in five.</p>
            <div class="flex flex-wrap gap-4">
            <button @click="$router.push('/about')" class="btn-secondary inline-block px-6 py-3 font-bold border border-border-color rounded hover:bg-wfp-blue hover:text-bg-color transition duration-300">Learn More</button>
            <button @click="openDonationModal" class="btn-primary inline-block px-6 py-3 bg-wfp-orange text-bg-color font-bold rounded hover:bg-wfp-orange-hover transition duration-300">Donate Now</button>
            </div>
        </div>
        </div>
    </section>
    <DonationModal v-if="showDonationModal" @close="closeDonationModal" />
</template>

<script>
    import { ref } from 'vue'
    import DonationModal from '@/components/common/DonationModal.vue'

    export default {
        components: { DonationModal },
        setup() {
            const showDonationModal = ref(false)
            
            const openDonationModal = () => {
            showDonationModal.value = true
            }
            
            const closeDonationModal = () => {
            showDonationModal.value = false
            }
            
            return {
                showDonationModal,
                openDonationModal,
                closeDonationModal
            }
        }
    }
</script>