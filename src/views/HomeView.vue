<script>
import Navbar from '@/components/Layout/navbar.vue'

import { Icon } from '@iconify/vue'
import footerVue from '@/components/Layout/footer.vue'
import Collage from '@/components/collage.vue';
import WhyChooseUs from '@/components/whyChooseUs.vue';
import EditingProcess from '@/components/EditingProcess.vue';
import Testimonials from '@/components/Testimonials.vue';
import Trail from '@/components/Trail.vue';
import ContactUs from '@/components/ContactUs.vue';
import Pricing from '@/components/Pricing.vue';
import Hero from '@/components/Hero.vue';
import ScrollUp from '@/components/ScrollUp.vue';


export default {
  components: {
    Navbar, Icon, footerVue, Collage, WhyChooseUs, EditingProcess, Testimonials, Trail, ContactUs, Pricing, Hero, ScrollUp
  },

}

</script>

<template>
  <main>

    <!-- <div class="hero md:p-20 px-4 md:mt-28 mt-16">
      <Navbar class="z-50" />

      <div class="text-center gap-8 bg-hero">
        <div class="text-center">
          <img src="../assets/img/rb_81905.png" class="md:w-[400px] h-[400px] md:hidden" />
          <h1 class="md:text-8xl md:font-extrabold font-bold text-4xl">Welcome to <br /> <span
              class="text-blue-600">Acestyle</span>
            Editing
          </h1>
          <p class="md:text-lg mb-10 text-md mt-6 line-clamp-3 lg:w-[800px] mx-auto">Lorem ipsum dolor sit amet,
            consectetur
            adipisicing elit. Hic
            laboriosam nisi, dolor, qui minima incidunt nam commodi facere eaque pariatur, voluptas dolores.</p>

          <router-link to="/upload"
            class="bg-blue-700 font-medium text-white text-xs rounded-md py-4 px-6 my-4 md:my-10 mt-12">
            TRY NOW
          </router-link>
        </div>




      </div>
    </div> -->

    <Hero />

    <!-- <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
          <div class="pr-12 sm:pr-0">
            <div class="relative max-w-xs mb-12">
              <img class="object-bottom rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg"
                alt="" />

              <img class="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg"
                alt="" />
            </div>
          </div>

          <div>
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"></h2>
            <p class="mt-4 text-base leading-relaxed text-gray-600"></p>
          </div>
        </div>
      </div>
    </section> -->

    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
          <div class="">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Transforming Your Words,
              Enhancing Your Voice.</h2>
            <p class="mt-4 text-base leading-relaxed text-gray-600">At AceStyle Editing, we understand the
              importance of clear, concise, and
              compelling content. Our expert editors help academics, researchers, and writers refine their work,
              ensuring
              precision, clarity, and impact. Let us help you express yourself better!</p>
          </div>

          <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
            <div class="relative w-full max-w-xs mt-4 mb-10 ml-auto">
              <img class="ml-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                alt="" />

              <img class="absolute -top-4 -left-12"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg" alt="" />

              <div class="absolute -bottom-10 -left-16">
                <div class="bg-blue-400">
                  <div class="px-8 py-10">
                    <span class="block text-4xl font-bold text-black lg:text-5xl"> 100% </span>
                    <span class="block mt-2 text-base leading-tight text-black">Improved Readability<br />Enhanced
                      Quality</span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <div id="about" class="md:px-16 lg:px-28 px-4 my-10 flex items-center">
      <div class="grid lg:grid-cols-2 gap-12">
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
        </div>
      </div>
    </div>

    <div id="service" class="mt-8 sm:mt-20">
      <WhyChooseUs />
    </div>


    <div class="md:my-20">
      <EditingProcess />
    </div>

    <div id="trynow" class="trial">
      <Trail />
    </div>

    <div id="pricing" class="pricing">
      <Pricing />
    </div>


    <div class="testimonial mb-12">
      <Testimonials />
    </div>

    <div id="contact" class="contact">
      <ContactUs />
    </div>


    <footerVue />
    <ScrollUp />

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
