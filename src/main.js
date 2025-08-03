import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import router from './router';
const app = createApp(App)


if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.toggle('dark');
}

app.use(router)
app.mount('#app')

app.use(Toast, {
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
});
