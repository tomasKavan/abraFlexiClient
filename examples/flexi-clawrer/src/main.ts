import "./assets/styles.css"

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

import { ThemePreset } from './themePreset'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: ThemePreset,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue'
      }
    }
  }
})

app.mount('#app')
