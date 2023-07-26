import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/HomePage.vue'
import FAQs from '../views/pages/FAQsPage.vue'
import Career from '../views/pages/CareerPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/faqs',
    name: "fFAQs",
    component: FAQs,
  },
  {
    path: '/career',
    name: "Career",
    component: Career
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes
})

export default router
