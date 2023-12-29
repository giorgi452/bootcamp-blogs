import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add-blog',
      name: 'AddBlog',
      component: () => import('../views/AddBlogView.vue')
    },
    {
      path: '/inner/:id',
      name: 'Inner',
      component: () => import('../views/InnerView.vue')
    }
  ]
})

export default router
