import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import axios from 'axios'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives
})

axios.defaults.headers.common['Authorization'] =
  `Bearer d3d07a07fd9024bab9ddd7059a01cb412a6c1f364789fad2c693c4fab7c1b6e5`
axios.defaults.headers.get['Authorization'] =
  `Bearer d3d07a07fd9024bab9ddd7059a01cb412a6c1f364789fad2c693c4fab7c1b6e5`
axios.defaults.headers.post['Authorization'] =
  `Bearer d3d07a07fd9024bab9ddd7059a01cb412a6c1f364789fad2c693c4fab7c1b6e5`
axios.defaults.baseURL = 'https://api.blog.redberryinternship.ge'

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
