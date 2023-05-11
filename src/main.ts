import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
const app = createApp(App)
import 'virtual:windi.css'
import "./assets/main.scss"

app.use(createPinia())
app.use(router)

app.mount('#app')
