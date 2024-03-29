import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import { store } from './services/store'
import { Apis } from './services/api'

import 'agnostic-vue/dist/common.min.css'
import 'agnostic-vue/dist/index.css'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

Apis.getLocations().then((data) => {
  store.setLocationAction(data?.data)
})
Apis.getAllBooks().then((data) => {
  store.setBooksAction(data?.data)
})

console.log(store)

app.use(router)
app.mount('#app')
