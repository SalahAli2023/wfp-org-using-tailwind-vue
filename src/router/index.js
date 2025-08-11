import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
    history: createWebHashHistory('/wfp-org-using-tailwind-vue/'),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/dashboard', name: 'dashboard', component: Dashboard },
        { path: '/about', name: 'about', component: About },
        { path: '/projects', name: 'projects', component: Projects },
        { path: '/contact', name: 'contact', component: Contact },
    ]
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.length === 0) {
//         next('/')
//     } else {
//         next()
//     }
// })

export default router