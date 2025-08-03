import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/dashboard', name: 'dashboard', component: Dashboard },
        { path: '/about', name: 'about', component: About },
        { path: '/projects', name: 'projects', component: Projects },
        { path: '/contact', name: 'contact', component: Contact },
    ]
})

export default router