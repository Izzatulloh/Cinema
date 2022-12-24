import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/style/main.scss'

import VueLazyload from 'vue-lazyload'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, fab, far)

import Btn from '@/components/UI/Btn.vue'
import Actors from '@/components/UI/Actors.vue'

import erorImage from "@/assets/images/no_photo.jpg"

const app = createApp(App)
app.use(VueLazyload, {
    eror: erorImage
})
app.component('fa', FontAwesomeIcon)
app.component('Btn', Btn)
app.component('Actors', Actors)

const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')
