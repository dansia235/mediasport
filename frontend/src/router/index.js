import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

// Pas besoin d'importer Vue ou d'utiliser Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Définissez d'autres routes ici
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
