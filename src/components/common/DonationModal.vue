<template>
  <div v-if="isOpen" class="modal fixed inset-0 z-[901] bg-black bg-opacity-40 pt-20 overflow-auto">
    <div class="modal-content bg-gray-200 mx-auto p-6 rounded-lg w-full max-w-2xl">
      <span 
        class="close float-right text-gray-600 text-2xl font-bold cursor-pointer hover:text-black"
        @click="closeModal"
      >&times;</span>
      
      <div class="donation-form-wrapper bg-bg-secondary rounded-lg shadow-lg p-8 max-w-full opacity-100">
        <div class="form-header text-center mb-8">
          <img src="@/assets/images/Donate.png" alt="Donation icon" class="h-16 mx-auto mb-4">
          <h2 class="text-2xl font-bold text-wfp-dark-blue">Make a Difference Today</h2>
        </div>
        
        <form @submit.prevent="handleDonation" class="donation-form">
          <div class="form-group mb-6">
            <label class="block mb-2 font-semibold text-wfp-dark-blue">Select Amount (USD)</label>
            <div class="amount-options grid grid-cols-2 gap-3 mb-3">
              <button 
                v-for="amount in presetAmounts" 
                :key="amount"
                type="button"
                class="amount-option bg-light-gray border border-gray-300 rounded px-4 py-3 font-semibold hover:bg-gray-200 transition duration-300"
                :class="{ 'bg-wfp-blue text-white': selectedAmount === amount }"
                @click="selectAmount(amount)"
              >
                ${{ amount }}
              </button>
              <input 
                v-model="customAmount"
                type="number" 
                placeholder="Other" 
                class="col-span-2 w-full px-4 py-3 border border-gray-300 rounded font-main"
                @focus="selectCustomAmount"
              >
            </div>
          </div>
          
          <div class="form-group mb-6">
            <label for="frequency" class="block mb-2 font-semibold text-wfp-dark-blue">Frequency</label>
            <select 
              v-model="frequency"
              id="frequency" 
              class="w-full px-4 py-3 border border-gray-300 rounded font-main"
            >
              <option value="one-time">One-time donation</option>
              <option value="monthly">Monthly donation</option>
            </select>
          </div>
          
          <button 
            type="submit" 
            class="btn btn-primary btn-block w-full bg-wfp-orange text-bg-color px-6 py-3 rounded font-bold hover:bg-wfp-orange-hover transition duration-300"
          >
            Donate Now
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close']);

const presetAmounts = [25, 50, 100, 250];
const selectedAmount = ref(null);
const customAmount = ref('');
const frequency = ref('one-time');

const selectAmount = (amount) => {
  selectedAmount.value = amount;
  customAmount.value = '';
};

const selectCustomAmount = () => {
  selectedAmount.value = null;
};

const closeModal = () => {
  emit('close');
};

const handleDonation = () => {
  const amount = selectedAmount.value || customAmount.value;
  if (!amount) return;
  
  alert(`Thank you for your donation of $${amount} (${frequency.value})!`);
  closeModal();
  
  // Reset form
  selectedAmount.value = null;
  customAmount.value = '';
  frequency.value = 'one-time';
};
</script>