<script>
import Navbar from '@/components/Layout/navbar.vue'

import { Icon } from '@iconify/vue'
import footerVue from '@/components/Layout/footer.vue'

export default {
  components: { Navbar, Icon, footerVue },

}

</script>

<template>
  <main>

    <div class="hero md:p-20 px-4 mt-28">
      <Navbar class="z-50" />
      <!-- <div class="overlay"></div> 
      <div class="hero-text text-left">
       <div class="grid md:grid-cols-2">
        <div class="col">
          <h1 class="text-6xl">Welcome to Our Website</h1>
        <p class="text-lg mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde maiores animi, sit eum aspernatur delectus voluptas. Sit dolor ea nisi temporibus, maxime magni corrupti cum aperiam aliquam commodi vero!</p>

        <button class="bg-blue-600 text-white text-xs rounded-full py-3 px-6 my-10">
          CONTACT US
        </button>
        </div>
       </div>
      </div> -->

      <div class="grid md:grid-cols-2 gap-8">
        <div class="col order-2 md:order-1 text-center md:text-left md:mt-8" data-aos="fade-right"
          data-aos-duration="1000">
          <h1 class="md:text-7xl text-4xl">Proof reading made easy!</h1>
          <p class="md:text-lg text-md mt-6 line-clamp-3">Let the professionals get one more look into your document and
            make the neccesary changes before publishing.</p>

          <button class="bg-blue-600 text-white text-xs rounded-full py-3 px-6 my-4 md:my-10">
            CONTACT US
          </button>
        </div>

        <div class="col order-1 md:order-2" data-aos="fade-left" data-aos-duration="1000">
          <img src="../assets/img/hero-svg.png" class="w-full" alt="" srcset="">
        </div>
      </div>
    </div>


    <div class="py-12 px-2">
      <div class="max-w-4xl mx-auto text-center">
        <div class="md:flex md:justify-between justify-center items-center md:space-x-8 space-y-12">
          <!-- Achievement 1 -->
          <div class="flex flex-col items-center">
            <span class="text-5xl  font-semibold text-blue-600">10k+</span>
            <span class="text-gray-600">Happy Users</span>
          </div>
          <!-- Achievement 2 -->
          <div class="flex flex-col items-center">
            <span class="text-5xl font-semibold text-blue-600">500+</span>
            <span class="text-gray-600 ">Positive Reviews</span>
          </div>
          <!-- Achievement 3 -->
          <div class="flex flex-col items-center">
            <span class="text-5xl font-semibold text-blue-600">500k+</span>
            <span class="text-gray-600">Downloads</span>
          </div>
          <!-- Add more achievements as needed -->
        </div>
      </div>
    </div>



    <div class="md:px-28 px-8 my-10">
      <div class="md:grid md:grid-cols-2 gap-12">
        <div class="col hidden md:block" data-aos="fade-right" data-aos-duration="1000">
          <img src="../assets/img/hero-svg.png" class="w-full" alt="" srcset="">
        </div>

        <div class="col pt-16" data-aos="fade-left" data-aos-duration="1000">
          <h1 class="text-xl text-blue-700">About Us</h1>
          <h1 class="md:text-6xl text-5xl">Lorem, ipsum dolor.</h1>
          <p class="text-gray-600 text-sm pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at
            recusandae necessitatibus, quibusdam laborum dolor ea, consequuntur similique exercitationem doloribus
            commodi labore placeat dicta beatae obcaecati aspernatur voluptate velit eius id quaerat numquam ut.</p>


          <button class="bg-blue-600 text-white text-xs rounded-full py-3 px-6 my-4">
            CONTACT US
          </button>
        </div>
      </div>
    </div>

    <div class="md:px-28 px-4 my-28 bg-blue-500">
      <section class=" dark:bg-gray-900 mt-10" data-aos="fade-in" data-aos-duration="1000">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:pt-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto">
            <h2 class="mb-2 md:text-xl text-md tracking-tight font-medium text-white dark:text-white">Modified Solutions</h2>
            <p class="bg-white h-1 rounded-full w-28 mx-auto mb-2"></p>
            <p class="text-white md:text-5xl text-4xl dark:text-gray-400">Lorem ipsum dolor sit amet</p>
          </div>
          <div class="space-y-8 md:my-20 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div class="text-center bg-white mx-auto py-8 pt-8 px-4 rounded" data-aos="fade-up" data-aos-duration="1000">
              <div
                class="flex text-center mx-auto justify-center items-center bg-blue-500 rounded-full h-16 w-16 dark:bg-primary-900">
                <Icon icon="cil:school" class="text-white text-5xl" />
              </div>
              <h3 class="mb-2 text-xl font-medium dark:text-white">Academy</h3>
              <p class="text-gray-500 text-sm dark:text-gray-400 pt-6">Ignite your potential with a journey into
                transformative and elightening journey of Trading Education.</p>
            </div>
            <div class="text-center mx-auto bg-white px-4 py-8 md:border-gray-300 rounded" data-aos="fade-up"
              data-aos-duration="1000">
              <div
                class=" text-center mx-auto flex justify-center items-center bg-blue-500 mb-4 rounded-full h-16 w-16 dark:bg-primary-900">
                <Icon icon="carbon:bot" class="text-white text-5xl " />
              </div>
              <h3 class="mb-2 text-xl font-medium dark:text-white">Ai-Powered Trading</h3>
              <p class="text-gray-500 text-sm dark:text-gray-400 pt-6">Experience cutting-edge trading
                strategies
                with our Ai-powered solutions for optimal result</p>
            </div>
            <div class="text-center mx-auto py-8 bg-white px-4 rounded" data-aos="fade-up" data-aos-duration="1000">
              <div
                class="flex text-center mx-auto justify-center items-center bg-blue-500 mb-4 rounded-full h-16 w-16 dark:bg-primary-900">
                <Icon icon="ph:traffic-signal-light" class="text-white text-5xl" />
              </div>
              <h3 class="mb-2 text-xl font-medium dark:text-white">Trade Signals</h3>
              <p class="text-gray-500 text-sm dark:text-gray-400 pt-6">Recieve timely trade signals on synthetic
                market to guide your decisions effectively</p>
            </div>

          </div>
        </div>
      </section>
    </div>


    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-20">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-2 text-xl tracking-tight font-medium dark:text-white">Pricing Designed for you</h2>
          <p class="bg-blue-500 h-1 rounded-full w-28 mx-auto mb-2"></p>
          <p class="text-5xl sm:text-md dark:text-gray-400">Lorem ipsum dolor sit amet</p>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <!-- Pricing Card -->
          <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your
              next project.</p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$29</span>
              <span class="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>Team size: <span class="font-semibold">1 developer</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>Premium support: <span class="font-semibold">6 months</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>Free updates: <span class="font-semibold">6 months</span></span>
              </li>
            </ul>
            <a href="#"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get
              started</a>
          </div>
          <!-- Pricing Card -->
          <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-4 text-2xl font-semibold">Company</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended &
              premium support.</p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$99</span>
              <span class="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>Team size: <span class="font-semibold">10 developers</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>Premium support: <span class="font-semibold">24 months</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>Free updates: <span class="font-semibold">24 months</span></span>
              </li>
            </ul>
            <a href="#"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get
              started</a>
          </div>
          <!-- Pricing Card -->
          <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-4 text-2xl font-semibold">Enterprise</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended
              redistribution rights.</p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$499</span>
              <span class="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>Team size: <span class="font-semibold">100+ developers</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>Premium support: <span class="font-semibold">36 months</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>Free updates: <span class="font-semibold">36 months</span></span>
              </li>
            </ul>
            <a href="#"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get
              started</a>
          </div>
        </div>
      </div>
    </section>


    <section class="bg-white dark:bg-gray-900 my-16">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 class="mb-2 text-xl tracking-tight font-medium dark:text-white">User's Experience </h2>
        <p class="bg-blue-500 h-1 rounded-full w-28 mx-auto mb-2"></p>
        <p class="text-5xl sm:text-md dark:text-gray-400">See what our customers say</p>
      </div>
      <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-12 lg:px-6">
        <figure class="max-w-screen-md mx-auto">
          <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor" />
          </svg>
          <blockquote>
            <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of
              predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your
              next SaaS application."</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <img class="w-6 h-6 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
              alt="profile picture">
            <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
              <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>



    <footerVue />

  </main>
</template>

<style scoped>
.award {
  position: relative;
  height: 100vh;
  background-image: url('../assets/img/hero.jpg');
  background-size: cover;
  height: 100vh;
}

.hero {}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.834);
  /* Adjust opacity as needed */
}

.hero-text {
  position: absolute;
  top: 30%;
  left: 5%;
  /* transform: translate(-50%, -50%); */
  color: white;
  z-index: 1;
  /* Ensure hero text is above the overlay */
}
</style>
