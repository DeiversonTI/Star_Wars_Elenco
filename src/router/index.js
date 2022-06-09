import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import HeaderView from '../components/header.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/header',
      name: 'HeaderView',
      component: HeaderView
    },    
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    }
  ]
})

export default router
