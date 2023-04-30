import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGates from 'vue-gates'
import App from './App.vue'
import router from './router'
import './styles/styles.scss'
import 'remixicon/fonts/remixicon.css'
import 'splitpanes/dist/splitpanes.css'

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

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()
const app = createApp(App)

app.use(VueGates as any)
app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(i18n)
app.mount('#app')
