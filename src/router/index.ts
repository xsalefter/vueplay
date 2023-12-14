import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import piniaRouter from '@/router/piniaRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...piniaRouter
  ]
})

export default router
