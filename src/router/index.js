import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { auth, googleProvider, signInWithPopup } from '@/firebase';
import { GoogleAuthProvider } from 'firebase/auth';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/Upload.vue'),
      meta: { requiresAuth: true }, // Add meta field for authentication
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
  ],
});

// Navigation guard
router.beforeEach(async (to, from, next) => {
  const user = auth.currentUser;

  // Check if the route requires authentication
  if (to.meta.requiresAuth) {
    // If the user is not logged in, attempt to sign them in
    if (!user) {
      try {
        // Initiate the Google sign-in only if the user is not signed in
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        console.log('User signed in:', result.user); 
        next();
      } catch (error) {
        console.error('Authentication error:', error);
        next({ name: 'home' }); // Redirect to home if authentication fails
      }
    } else {
      // If user is already signed in, just proceed to the next route
      next();
    }
  } else {
    next(); // Proceed without authentication check
  }
});

export default router;
