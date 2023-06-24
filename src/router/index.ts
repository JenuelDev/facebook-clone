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
			path: '/home',
			component: () => import("@/views/Pages/Home/HomeView.vue"),
			children: [
				{
					path: '',
					component: () => import("@/views/Pages/Home/Screens/TimeLine/TimeLineScreen.vue")
				},
				{
					path: 'me',
					component: () => import("@/views/Pages/Home/Screens/MyProfile/MyProfile.vue")
				}
			]
		}
	]
})

export default router
