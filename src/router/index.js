import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { auth, signInWithRedirect, getRedirectResult } from '@/firebase';
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

// Handle the redirect result after the user is redirected back
async function handleRedirect() {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      console.log('User signed in via redirect:', result.user);
    } else {
      console.log('No user signed in');
    }
  } catch (error) {
    console.error('Error during redirect sign-in:', error);
  }
}

// Navigation guard
router.beforeEach(async (to, from, next) => {
  const user = auth.currentUser;

  // First, handle the redirect result (if applicable)
  if (!user) {
    await handleRedirect(); // Check if user signed in via redirect
  }

  // Now check if the route requires authentication
  if (to.meta.requiresAuth) {
    if (!auth.currentUser) {
      try {
        // If the user is not logged in, initiate Google sign-in redirect
        const provider = new GoogleAuthProvider();
        await signInWithRedirect(auth, provider); // Redirect to Google sign-in page
      } catch (error) {
        console.error('Authentication error:', error);
        next({ name: 'home' }); // Redirect to home if authentication fails
      }
    } else {
      next(); // If user is already signed in, proceed to the next route
    }
  } else {
    next(); // Proceed without authentication check
  }
});

export default router;
