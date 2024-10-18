<script>
import Navbar from '@/components/Layout/navbar.vue'

import { Icon } from '@iconify/vue'
import footerVue from '@/components/Layout/footer.vue'
import Collage from '@/components/collage.vue';
import WhyChooseUs from '@/components/whyChooseUs.vue';
import EditingProcess from '@/components/EditingProcess.vue';
import Testimonials from '@/components/Testimonials.vue';
import Trail from '@/components/Trail.vue';



export default {
  components: {
    Navbar, Icon, footerVue, Collage, WhyChooseUs, EditingProcess, Testimonials, Trail
  },

}

</script>

<template>
  <main>

    <div class="hero md:p-20 px-4 md:mt-28 mt-16">
      <Navbar class="z-50" />

      <div class="text-center gap-8 bg-hero">
        <div class="text-center">
          <img src="../assets/img/rb_81905.png" class="md:hidden" />
          <h1 class="md:text-8xl md:font-extrabold font-bold text-4xl">Welcome to <br /> <span
              class="text-blue-600">Acestyle</span>
            Editing
          </h1>
          <p class="md:text-lg text-md mt-6 line-clamp-3 md:w-[800px] mx-auto">Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Hic
            laboriosam nisi, dolor, qui minima incidunt nam commodi facere eaque pariatur, voluptas dolores.</p>

          <button class="bg-blue-700 font-medium text-white text-xs rounded-md py-4 px-6 my-4 md:my-10">
            TRY NOW
          </button>
        </div>




      </div>
    </div>

    <div class="md:px-28 px-4 my-10 h-screen flex items-center overflow-hidden">
      <div class="grid md:grid-cols-2 items-center gap-12">
        <div class="col order-2">
          <!-- <h1 class="text-xl text-blue-700">About Us</h1> -->
          <h1 class="md:text-6xl text-4xl">Transforming Your Words, Enhancing Your Voice</h1>
          <p class="text-gray-600 text-sm pt-4">At AceStyle Editing, we understand the importance of clear, concise, and
            compelling content. Our expert editors help academics, researchers, and writers refine their work, ensuring
            precision, clarity, and impact. Let us help you express yourself better!
          </p>


          <button class="bg-blue-600 text-white text-xs rounded-full py-3 px-6 my-4">
            CONTACT US
          </button>
        </div>
        <div class="col order-1">
          <img src="../assets/img/44938.jpg" class="w-full rounded-lg" alt="" srcset="">
        </div>
      </div>
    </div>


    <div class="md:px-28 px-4 my-10 flex items-center">
      <div class="grid md:grid-cols-2 gap-12">
        <div class="col">
          <Collage />
        </div>
        <div class="col md:pt-16">
          <!-- <h1 class="text-xl text-blue-700">About Us</h1> -->
          <h1 class="md:text-6xl text-4xl">Your Partner in Academic Excellence</h1>
          <p class="text-gray-600 text-sm pt-4">
            As a leading proofreading and editing service, we cater to students, researchers, and professionals across
            various fields. Our mission is to help you communicate your ideas effectively, meet academic standards, and
            achieve publishing success.

          </p>


          <button class="bg-blue-600 text-white text-xs rounded-full py-3 px-6 my-4">
            CONTACT US
          </button>
        </div>
      </div>
    </div>

    <div class="">
      <WhyChooseUs />
    </div>

    <div class="md:my-20">
      <EditingProcess />
    </div>

    <div class="trial">
      <Trail />
    </div>
    <div class="testimonial mb-12">
      <Testimonials />
    </div>



    <footerVue />

  </main>
</template>

<style scoped>
.hero {
  background: url('../assets/img/heroo.jpg');
}

@media (max-width: 480px) {
  .hero {
    background: none !important;
  }
}

.award {
  position: relative;
  height: 100vh;
  background-image: url('../assets/img/hero.jpg');
  background-size: cover;
  height: 100vh;
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
