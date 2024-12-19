import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import Upload from "../views/Upload.vue";


import { auth } from "@/firebase";
import ThankYou from "@/views/ThankYou.vue";
import ForgotPassword from "@/views/Forgot-password.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/signup", name: "signup", component: SignUp },
    { path: "/signin", name: "signin", component: SignIn },
    { path: "/forgot-password", name: "forgotPassword", component: ForgotPassword},
    {
      path: "/upload",
      name: "upload",
      component: Upload,
      meta: { requiresAuth: true },
    },
    {
      path: "/thank-you",
      name: "thankYou",
      component: ThankYou,
    
    },
  ],
});

// Navigation guard to protect routes
router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  if (to.meta.requiresAuth && !user) {
    next({ name: "signin" }); // Redirect to sign-in if not authenticated
  } else {
    next();
  }
});

export default router;
