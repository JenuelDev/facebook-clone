import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LoginView
    },
    {
      path: '/timeline',
      component: () => import("@/views/Pages/TimeLine/TimeLineView.vue")
    }
  ]
})

export default router
