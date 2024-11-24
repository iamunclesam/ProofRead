<template>
    <a
      v-if="!user"
      href="/signin"
      title="Login"
      class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-600"
      role="button"
    >
      Login
    </a>
    
    <button
      v-if="user"
      @click="handleLogout"
      class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-red-600 text-white hover:bg-red-700 focus:bg-red-600"
      role="button"
    >
      Logout
    </button>
  </template>
  
  <script>
  import { signOut } from "firebase/auth";
  import { auth } from "@/firebase"; // Ensure you have Firebase setup
  
  export default {
    name: "AuthButton",
    data() {
      return {
        user: null,
      };
    },
    created() {
      // Check the authentication state on component creation
      this.user = auth.currentUser;
  
      // Set up a listener to react to authentication state changes
      auth.onAuthStateChanged((currentUser) => {
        this.user = currentUser;
      });
    },
    methods: {
      async handleLogout() {
        try {
          await signOut(auth);
          this.user = null; // Update the state to reflect the logout
          console.log("User signed out");
        } catch (error) {
          console.error("Error during logout:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here if needed */
  </style>
  