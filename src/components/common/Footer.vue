<template>
    <footer class=" bg-wfp-blue text-bg-color py-12 px-auto">
        <div class="container mx-auto">
            <div class="footer-grid grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div class="footer-column">
                    <img src="@/assets/images/wfp-logo.svg" alt="WFP Logo" class="footer-logo h-12 mb-4" />
                    <p>Working to end hunger and deliver food assistance where it's needed most.</p>
                </div>

                <div class="footer-column">
                    <h3 class="text-xl mb-2">Quick Links</h3>
                    <ul class="space-y-2">
                        <li v-for="link in quickLinks" :key="link.name">
                            <router-link to="/contact" class="hover:text-wfp-orange-hover  hover:underline transition duration-300">{{ link.name }}</router-link></li>
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


