<template>
    <main>
      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">Forgot Password</h2>
            <router-link to="/login" class="text-orange-600 mt-4">Back to Login</router-link>
          </div>
  
          <div class="relative max-w-md mx-auto mt-8 md:mt-8">
            <div class="overflow-hidden bg-white rounded-md shadow-md">
              <div class="px-4 py-6 sm:px-8 sm:py-7">
                <form>
                  <div class="space-y-5">
                    <div>
                      <label for="email" class="text-base font-medium text-gray-900"> Email address </label>
                      <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                          </svg>
                        </div>
  
                        <input
                          v-model="email"
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                          class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          required
                        />
                      </div>
                    </div>
  
                    <div>
                      <button
                        @click.prevent="handleForgotPassword"
                        class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        <span v-if="isLoading">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <g fill="currentColor">
                              <circle cx="12" cy="3.5" r="1.5">
                                <animateTransform
                                  attributeName="transform"
                                  calcMode="discrete"
                                  dur="2.4s"
                                  repeatCount="indefinite"
                                  type="rotate"
                                  values="0 12 12;90 12 12;180 12 12;270 12 12"
                                />
                                <animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0" />
                              </circle>
                              <circle
                                cx="12"
                                cy="3.5"
                                r="1.5"
                                transform="rotate(30 12 12)"
                              >
                                <animateTransform
                                  attributeName="transform"
                                  begin="0.2s"
                                  calcMode="discrete"
                                  dur="2.4s"
                                  repeatCount="indefinite"
                                  type="rotate"
                                  values="30 12 12;120 12 12;210 12 12;300 12 12"
                                />
                                <animate attributeName="opacity" begin="0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0" />
                              </circle>
                              <circle
                                cx="12"
                                cy="3.5"
                                r="1.5"
                                transform="rotate(60 12 12)"
                              >
                                <animateTransform
                                  attributeName="transform"
                                  begin="0.4s"
                                  calcMode="discrete"
                                  dur="2.4s"
                                  repeatCount="indefinite"
                                  type="rotate"
                                  values="60 12 12;150 12 12;240 12 12;330 12 12"
                                />
                                <animate attributeName="opacity" begin="0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0" />
                              </circle>
                            </g>
                          </svg>
                        </span>
                        <span v-else>Send Reset Link</span>
                      </button>
                    </div>
  
                    <div class="text-center">
                      <p class="text-base text-gray-600">
                        Remember your password? 
                        <router-link to="/signin" class="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline">Log in</router-link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import { sendPasswordResetEmail, auth } from "@/firebase"; // Firebase auth import
  
  export default {
    data() {
      return {
        email: "",
        isLoading: false,
        errorMessage: "",
      };
    },
    methods: {
      async handleForgotPassword() {
        this.isLoading = true;
        this.errorMessage = ""; // Clear previous error message
  
        try {
          await sendPasswordResetEmail(auth, this.email);
          alert("Password reset link has been sent to your email.");
          this.$router.push("/signin"); // Redirect to login after success
        } catch (error) {
          console.error("Error sending password reset email:", error);
          this.errorMessage = error.message;
        } finally {
          this.isLoading = false; // Stop loading spinner
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  