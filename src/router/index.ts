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
					component: () => import("@/views/Pages/Home/Screens/MyProfile/MyProfile.vue"),
					children: [
						{
							path: '',
							component: () => import("@/views/Pages/Home/Screens/MyProfile/Pages/ProfileTimeline.vue")
						},
						{
							path: "about",
							component: () => import("@/views/Pages/Home/Screens/MyProfile/Pages/ProfileAbout.vue")
						},
						{
							path: 'photos',
							component: () => import("@/views/Pages/Home/Screens/MyProfile/Pages/ProfilePhotos.vue")
						},
						{
							path: 'videos',
							component: () => import("@/views/Pages/Home/Screens/MyProfile/Pages/ProfileVideos.vue")
						},
						{
							path: 'groups',
							component: () => import("@/views/Pages/Home/Screens/MyProfile/Pages/ProfileGroups.vue")
						},
						{
							path: 'more',
							component: () => import("@/views/Pages/Home/Screens/MyProfile/Pages/ProfileMore.vue")
						}
					]
				}
			]
		}
	]
})

export default router
