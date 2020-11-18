import { createApp } from 'vue'
import App2 from './App2.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App2)
app.use(router, VueAxios, axios)
app.mount('#app')

