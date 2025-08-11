import { fileURLToPath, URL } from 'node:url'
// import { createWebHistory } from 'vue-router'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// const router = createRouter({
//   history: createWebHistory('/wfp-org-using-tailwind-vue/'),  
// })

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
    
  base: '/wfp-org-using-tailwind-vue/',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
