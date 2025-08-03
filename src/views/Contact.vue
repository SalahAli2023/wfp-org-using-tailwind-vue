<template>
  <MainLayout>
    <section class="contact-section py-12 bg-bg-color">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-3xl text-center mb-8">Contact Us</h2>
        
        <form @submit.prevent="handleSubmit" class="contact-form bg-card-bg p-8 rounded-lg shadow-md">
          <div class="form-group mb-6">
            <label for="name" class="block mb-2 font-medium">Full Name</label>
            <input 
              v-model="form.name"
              type="text" 
              id="name" 
              class="w-full px-4 py-3 border border-border-color rounded"
              @blur="validateField('name')"
            >
            <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
          </div>
          
          <div class="form-group mb-6">
            <label for="email" class="block mb-2 font-medium">Email</label>
            <input 
              v-model="form.email"
              type="email" 
              id="email" 
              class="w-full px-4 py-3 border border-border-color rounded"
              @blur="validateField('email')"
            >
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>
          
          <div class="form-group mb-6">
            <label for="subject" class="block mb-2 font-medium">Subject</label>
            <input 
              v-model="form.subject"
              type="text" 
              id="subject" 
              class="w-full px-4 py-3 border border-border-color rounded"
              @blur="validateField('subject')"
            >
            <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
          </div>
          
          <div class="form-group mb-6">
            <label for="message" class="block mb-2 font-medium">Message</label>
            <textarea 
              v-model="form.message"
              id="message" 
              rows="5"
              class="w-full px-4 py-3 border border-border-color rounded"
              @blur="validateField('message')"
            ></textarea>
            <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
          </div>
          
          <button 
            type="submit" 
            class="btn-primary bg-wfp-orange text-bg-color px-6 py-3 rounded font-bold hover:bg-wfp-orange-hover transition duration-300 w-full"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </button>
        </form>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import { reactive, ref } from 'vue';
import MainLayout from './mainLayout.vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);

// Validation patterns
const patterns = {
  name: /^[a-zA-Z\s]{3,60}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  subject: /^[a-zA-Z\s]{5,350}$/,
  message: /^[a-zA-Z\s]{10,350}$/
};

const errorMessages = {
  name: {
    required: 'Name is required',
    invalid: 'Please enter a valid name (3-60 characters)'
  },
  email: {
    required: 'Email is required',
    invalid: 'Please enter a valid email address'
  },
  subject: {
    required: 'Subject is required',
    invalid: 'Subject must be 5-350 characters'
  },
  message: {
    required: 'Message is required',
    invalid: 'Message must be 10-350 characters'
  }
};

const validateField = (field) => {
  if (!form[field]) {
    errors[field] = errorMessages[field].required;
    return false;
  }
  
  if (!patterns[field].test(form[field])) {
    errors[field] = errorMessages[field].invalid;
    return false;
  }
  
  errors[field] = '';
  return true;
};

const validateForm = () => {
  let isValid = true;
  Object.keys(form).forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });
  return isValid;
};

const handleSubmit = () => {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  
  // Simulate form submission
  setTimeout(() => {
    alert('Your message has been sent successfully!');
    Object.keys(form).forEach(field => {
      form[field] = '';
    });
    isSubmitting.value = false;
  }, 1500);
};
</script>