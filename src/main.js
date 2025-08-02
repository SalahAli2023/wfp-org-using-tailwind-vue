import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.toggle('dark');
}
