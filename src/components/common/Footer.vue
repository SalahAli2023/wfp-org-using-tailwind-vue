<template>
    <footer class=" bg-wfp-blue text-bg-color py-12 px-auto">
        <div class="container mx-auto">
            <div class="footer-grid grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div class="footer-column">
                    <router-link to="/" class="flex items-center mb-4">
                        <img 
                        src="@/assets/images/wfp-logo.svg" 
                        alt="WFP Logo" 
                        class="footer-logo h-12"
                        />
                        <span class="ml-3 text-xl font-bold">
                        WFP<span class="text-wfp-orange">Organization</span>
                        </span>
                    </router-link>
                    <!-- <img src="@/assets/images/wfp-logo.svg" alt="WFP Logo" class="footer-logo h-12 mb-4" /> -->
                    <p>Working to end hunger and deliver food assistance where it's needed most.</p>
                </div>

                <div class="footer-column">
                    <h3 class="text-xl mb-2">Quick Links</h3>
                    <ul class="space-y-2">
                        <li v-for="link in quickLinks" :key="link.name">
                            <router-link to="/contact" class="hover:text-wfp-orange-hover cursor-pointer hover:underline transition duration-300">{{ link.name }}</router-link></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h3 class="text-xl mb-2">Contact Us</h3>
                    <ul class="space-y-2">
                        <li>Email: <a href="mailto:info@wfp.org" class="hover:text-wfp-orange-hover hover:underline transition duration-300">info@wfp.org</a></li>
                        <li>Phone: <a href="tel:+1234567890" class="hover:text-wfp-orange-hover hover:underline transition duration-300">+1 234 567 890</a></li>
                        <li>Address: Rome, Italy</li>
                    </ul>
                    
                    <div class="social-links flex gap-4 mt-4">
                        <a v-for="social in socialLinks" 
                            :key="social.name"
                            :href="social.url" 
                            target="_blank" 
                            rel="noopener noreferrer" class="text-2xl hover:text-wfp-orange-hover hover:-translate-y-1 transition duration-300":aria-label="social.name">
                            <i :class="social.icon"></i>
                        </a>
                    </div>
                </div>

                <div class="footer-column">
                    <h3 class="text-xl mb-2">Legal</h3>
                    <ul class="space-y-2">
                        <li v-for="legal in legalLinks" :key="legal.name">
                            <router-link :to="legal.path" class="hover:text-wfp-orange-hover hover:underline transition duration-300">{{ legal.name }} 
                            </router-link>
                        </li>
                    </ul>
                    <div class="newsletter mt-3">
                    <form @submit.prevent="handleNewsletterSubmit" class="space-y-3">
                        <label for="newsletter-email" class="sr-only">Email address</label>
                        <div  class="flex">
                            <input v-model="newsletterEmail" id="newsletter-email"
                            type="email" placeholder="Your email address"
                            class="w-full px-4 py-2 rounded bg-white bg-opacity-10 border border-gray-600 focus:border-wfp-orange focus:ring-1 focus:ring-wfp-orange text-text-color placeholder-gray-400 transition duration-300"
                            :class="{ 'border-red-500': newsletterError }"
                            >
                            <button type="submit" class="w-s bg-wfp-orange hover:bg-wfp-orange-hover text-white font-medium py-2 px-4 rounded transition duration-300 flex items-center justify-center"
                            :disabled="isSubmitting">
                                <span v-if="!isSubmitting">Subscribe</span>
                                <span v-else class="flex items-center">
                                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </span>
                            </button>
                        </div>
                    </form>
                    <p v-if="newsletterError" class="text-red-400 text-sm mt">{{ newsletterError }}</p>
                    <p v-if="newsletterSuccess" class=" text-green-400 text-sm">
                    {{ newsletterSuccess }}
                    </p>
                </div>
                </div>
            </div>
            
            <div class="footer-bottom border-t border-border-color pt-4 text-center text-sm">
                <p>&copy; {{ currentYear }} World Food Programme. All rights reserved.</p>
            </div>  
        </div>
    </footer>
</template>

<script setup>
    import { computed } from 'vue';

    const currentYear = computed(() => new Date().getFullYear());

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
        { name: 'Dashboard', path: '/dashboard' }
    ];

    const socialLinks = [
        { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com' },
        { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://facebook.com' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com' },
        { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com' }
    ];

    const legalLinks = [
        { name: 'Terms of Use', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Financial Reports', path: '/financials' }
        ];
</script>


