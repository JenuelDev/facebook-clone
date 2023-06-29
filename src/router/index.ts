import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue"
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'login',
			component: LoginView
		},
		{
			path: '/home',
			component: () => import("@/views/Pages/Home/HomeView.vue"),
			children: [
				{
					path: 'main',
					name: 'home',
					component: () => import("@/views/Pages/Home/Screens/TimeLine/TimeLineScreen.vue")
				},
				{
					path: 'me',
					component: () => import("@/views/Pages/Home/Screens/MyProfile/MyProfile.vue"),
					children: [
						{
							path: '',
							name: 'me',
							component: () => import("@/views/Pages/Home/Screens/MyProfile/Pages/ProfileTimeline.vue")
						},
						{
							path: "about",
							name: 'about-me',
							component: () => import("@/views/Pages/Home/Screens/MyProfile/Pages/ProfileAbout.vue")
						},
						{
							path: 'photos',
							name: 'about-photos',
							component: () => import("@/views/Pages/Home/Screens/MyProfile/Pages/ProfilePhotos.vue")
						},
						{
							path: 'videos',
							name: 'about-videos',
							component: () => import("@/views/Pages/Home/Screens/MyProfile/Pages/ProfileVideos.vue")
						},
						{
							path: 'groups',
							name: 'about-groups',
							component: () => import("@/views/Pages/Home/Screens/MyProfile/Pages/ProfileGroups.vue")
						},
						{
							path: 'more',
							name: 'about-more',
							component: () => import("@/views/Pages/Home/Screens/MyProfile/Pages/ProfileMore.vue")
						}
					]
				}
			]
		}
	]
})

export default router
