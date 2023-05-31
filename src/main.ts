import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGates from 'vue-gates'
import App from './App.vue'
import router from './router'
import './styles/styles.scss'
import 'remixicon/fonts/remixicon.css'
import 'splitpanes/dist/splitpanes.css'
// Global Components
import InputLabel from '@/components/InputLabel/InputLabel.vue'
import SpanLink from '@/components/Links/SpanLink.vue'
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Change the default locale momentjs
import moment from 'moment'
import 'moment/dist/locale/es'
moment.locale('es')

// Locales
import i18n from '@/plugins/i18n'

// Global
declare global {
  interface Window { electron: any; }
}

// Toastify
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()
const app = createApp(App)

// Global Components
app.component('InputLabel', InputLabel)
app.component('SpanLink', SpanLink)
app.component('LocaleSwitcher', LocaleSwitcher)

app.use(VueGates as any)
app.use(Vue3Toastify)
app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(i18n)
app.mount('#app')
