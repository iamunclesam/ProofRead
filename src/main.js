import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
AOS.init()

import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { getAuth, onAuthStateChanged } from 'firebase/auth'

// Initialize the app after checking auth state
const auth = getAuth()

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is signed in:', user) // Add user to global state if needed
  } else {
    console.log('No user signed in')
  }

  // Create and mount Vue app only after auth check
  const app = createApp(App)

  app.use(router)
  app.use(
    Vue3Toastify,
    {
      autoClose: 3000,
      // ...
    }
  )

  app.mount('#app')
})
