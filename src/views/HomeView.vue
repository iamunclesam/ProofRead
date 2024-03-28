<script>
import Navbar from '@/components/Layout/navbar.vue'
import { Icon } from '@iconify/vue'

export default {
  components: { Navbar, Icon },

}

</script>

<template>
  <main>

    <div class="hero md:h-screen md:p-20 px-4 mt-28">
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
        <div class="col order-2 md:order-1 text-center md:text-left" data-aos="fade-right" data-aos-duration="1000">
          <h1 class="md:text-6xl text-4xl">Welcome to ProofReaders</h1>
          <p class="md:text-lg text-md mt-6 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde maiores animi, sit
            eum aspernatur delectus voluptas. Sit dolor ea nisi temporibus, maxime magni corrupti cum aperiam aliquam
            commodi vero!</p>

          <button class="bg-blue-600 text-white text-xs rounded-full py-3 px-6 my-4 md:my-10">
            CONTACT US
          </button>
        </div>

        <div class="col order-1 md:order-2" data-aos="fade-left" data-aos-duration="1000">
          <img src="../assets/img/hero-svg.png" class="w-full" alt="" srcset="">
        </div>
      </div>
    </div>


    <div class="md:px-28 px-8 my-10">
      <div class="grid md:grid-cols-2 gap-12">
        <div class="col hidden md:block" data-aos="fade-right" data-aos-duration="1000">
          <img src="../assets/img/hero-svg.png" class="w-full" alt="" srcset="">
        </div>

        <div class="col pt-16" data-aos="fade-left" data-aos-duration="1000">
          <h1 class="text-5xl">Lorem, ipsum dolor.</h1>
          <p class="text-gray-600 text-md py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
            nesciunt necessitatibus aperiam deserunt, cum quaerat laudantium obcaecati accusantium nemo eos?</p>

          <button class="bg-blue-600 text-white text-xs rounded-full py-3 px-6 my-4 md:my-10">
            CONTACT US
          </button>
        </div>
      </div>
    </div>

    <div class="md:px-28 px-4 my-28">
      <section class="bg-white dark:bg-gray-900 mt-10" data-aos="fade-in" data-aos-duration="1000">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:pt-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto">
            <h2 class="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">Modified Solutions</h2>
            <p class="text-gray-500 text-sm sm:text-md dark:text-gray-400">Here at Flowbite we focus on markets
              where
              technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          </div>
          <div class="space-y-8 md:my-28 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div class="text-center mx-auto py-8 pt-8 md:pb-2" data-aos="fade-up" data-aos-duration="1000">
              <div
                class="flex text-center mx-auto justify-center items-center mb-4 w-8 h-8 rounded-full lg:h-16 lg:w-16 dark:bg-primary-900">
                <Icon icon="cil:school" width="70px" height="70px" class="text-blue-700 mb-10" />
              </div>
              <h3 class="mb-2 text-xl font-medium dark:text-white">Academy</h3>
              <p class="text-gray-500 text-sm dark:text-gray-400 pt-6">Ignite your potential with a journey into
                transformative and elightening journey of Trading Education.</p>
            </div>
            <div class="text-center mx-auto py-8 md:pb-2 md:border-x md:border-gray-300" data-aos="fade-up"
              data-aos-duration="1000">
              <div
                class=" text-center mx-auto flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-16 lg:w-16 dark:bg-primary-900">
                <Icon icon="carbon:bot" width="70px" height="70px" class="text-blue-700 mb-10" />
              </div>
              <h3 class="mb-2 text-xl font-medium dark:text-white">Ai-Powered Trading</h3>
              <p class="text-gray-500 text-sm dark:text-gray-400 pt-6 p-2">Experience cutting-edge trading
                strategies
                with our Ai-powered solutions for optimal result</p>
            </div>
            <div class="text-center mx-auto py-8 md:pb-2" data-aos="fade-up" data-aos-duration="1000">
              <div
                class="flex text-center mx-auto justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-16 lg:w-16 dark:bg-primary-900">
                <Icon icon="ph:traffic-signal-light" width="70px" height="70px" class="text-blue-700 mb-10" />
              </div>
              <h3 class="mb-2 text-xl font-medium dark:text-white">Trade Signals</h3>
              <p class="text-gray-500 text-sm dark:text-gray-400 pt-6">Recieve timely trade signals on synthetic
                market to guide your decisions effectively</p>
            </div>

          </div>
        </div>
      </section>



    </div>

    <div class="md:px-28 px-4 my-28 award">
      <div class="overlay"></div> 
      <div class="grid md:grid-cols-2">
        <div class="col">
          <div class="hero-text text-left">
            <div class="grid md:grid-cols-2">
              <div class="col">
                <h1 class="text-6xl">Welcome to Our Website</h1>
                <p class="text-lg mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde maiores
                  animi, sit eum aspernatur delectus voluptas. Sit dolor ea nisi temporibus, maxime magni corrupti cum
                  aperiam aliquam commodi vero!</p>

                <button class="bg-blue-600 text-white text-xs rounded-full py-3 px-6 my-10">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

.hero {

}

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
