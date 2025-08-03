<template>
    <footer class="footer bg-wfp-blue text-white py-12 px-4">
        <div class="container mx-auto">
        <div class="footer-grid grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <!-- Column 1: Logo and Newsletter -->
            <div class="footer-column">
            <!-- Newsletter Signup Form -->
            <div class="newsletter mt-6 ">
                <h3 class="text-lg font-semibold mb-3 text-white">Stay Updated</h3>
                <form @submit.prevent="handleNewsletterSubmit" class="space-y-3">
                    <label for="newsletter-email" class="sr-only">Email address</label>
                    <div  class="flex">
                        <input v-model="newsletterEmail" id="newsletter-email"
                        type="email" placeholder="Your email address"
                        class="w-full px-4 py-2 rounded bg-white bg-opacity-10 border border-gray-600 focus:border-wfp-orange focus:ring-1 focus:ring-wfp-orange text-light-gray placeholder-gray-400 transition duration-300"
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
        </div>
    </footer>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();

const currentYear = computed(() => new Date().getFullYear());
const newsletterEmail = ref('');
const newsletterError = ref('');
const newsletterSuccess = ref('');
const isSubmitting = ref(false);

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const handleNewsletterSubmit = async () => {
  newsletterError.value = '';
  newsletterSuccess.value = '';
  
  // Validate email
  if (!newsletterEmail.value) {
    newsletterError.value = 'Email is required';
    return;
  }
  
  if (!validateEmail(newsletterEmail.value)) {
    newsletterError.value = 'Please enter a valid email address';
    return;
  }

  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // On success
    newsletterSuccess.value = 'Thank you for subscribing!';
    newsletterEmail.value = '';
    toast.success("You've been subscribed to our newsletter!");
  } catch (error) {
    newsletterError.value = 'Subscription failed. Please try again.';
    toast.error("Subscription failed. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};


</script>

<style scoped>
.newsletter input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(232, 78, 16, 0.5);
}


</style>