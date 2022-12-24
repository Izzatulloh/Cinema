import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/movie", name: "movie", component: () => import("@/pages/Films.vue") },
    { path: "/tv", name: "tv", component: () => import("@/pages/Serials.vue") },
    { path: "/search", name: "search", component: () => import("@/pages/Search.vue") },
    { path: "/movie/:id", name: "movieid", component: () => import("@/pages/FilmsId.vue") },
    { path: "/tv/:id", name: "tvid", component: () => import("@/pages/SerialsId.vue") },
  ],
  scrollBehavior () {
    return {
      top:0
    }
  }
  
})

export default router
