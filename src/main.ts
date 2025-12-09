import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/globals.css'
import feather from 'feather-icons'

const app = createApp(App)

app.use(router)
app.mount('#app')

// replace icons once after mount
feather.replace()

// re-run replace after each route (DOM updated)
router.afterEach(() => {
  // ensure DOM updated first
  setTimeout(() => feather.replace(), 0)
})
