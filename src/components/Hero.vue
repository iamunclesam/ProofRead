<template>
    <div>
        <div class="relative">
            <header class="absolute inset-x-0 top-0 z-10 w-full">
                <div class="px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16 lg:h-20">
                        <div class="flex-shrink-0">
                            <a href="#" title="" class="flex">
                                <h1 class="text-black font-bold md:text-white text-xl">AceStyle</h1>
                            </a>
                        </div>

                        <button @click="toggleMenu" type="button"
                            class="inline-flex p-2 text-gray-700 transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">

                            <!-- Menu Icon -->
                            <svg v-if="!isMenuOpen" class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>

                            <!-- Close Icon -->
                            <svg v-else class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>


                        <div class="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            <a href="#" title=""
                                class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
                                Home</a>

                            <a href="#about" title=""
                                class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
                                About</a>

                            <a href="#pricing" title=""
                                class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
                                Pricing</a>

                            <a href="#contact" title=""
                                class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
                                Contact</a>

                            <a href="/upload" title=""
                                class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-600"
                                role="button">Upload Document</a>
                        </div>
                    </div>
                    <!-- Mobile Menu -->
                    <div v-if="isMenuOpen" class="lg:hidden py-4 mt-4 bg-white rounded-lg shadow-lg">
                        <a href="#" title=""
                            class="block px-4 py-2 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-200">
                            Home
                        </a>
                        <a href="#about" title=""
                            class="block px-4 py-2 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-200">
                            About
                        </a>
                        <a href="#pricing" title=""
                            class="block px-4 py-2 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-200">
                            Pricing
                        </a>
                        <a href="#contact" title=""
                            class="block px-4 py-2 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-200">
                            Contact
                        </a>
                        <!-- 
                        <a href="#" title=""
                            class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-600"
                            role="button">Upload Document</a> -->
                    </div>
                </div>
            </header>
            <section class="bg-yellow-50 overflow-hidden">
                <div class="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
                    <div class="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                        <div class="absolute bottom-0 right-0 hidden lg:block">
                            <img class="object-contain w-auto h-48"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                                alt="" />
                        </div>

                        <div
                            class="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                            <h1 class="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
                                Get it done.<br />
                                Fast, Easy.
                            </h1>
                            <p class="mt-8 text-xl text-black">We help make your writing polished and professional.
                                Elevate your manuscripts with thorough proofreading and expert review.</p>


                            <form action="#" method="POST"
                                class="max-w-xl mx-auto mt-8 lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
                                <div
                                    class="p-4 sm:p-2 sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                                    <div class="flex flex-col items-start sm:flex-row">
                                        <!-- <div class="flex-1 w-full min-w-0">
                                            <div class="relative text-gray-400 focus-within:text-gray-600">
                                                <label for="email" class="sr-only"></label>
                                                <input type="email" name="email" id="email"
                                                    placeholder="Enter email to get started"
                                                    class="block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500"
                                                    required="" />
                                            </div>
                                        </div> -->

                                        <a href="/upload"
                                            class="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent z-50 rounded-full sm:w-auto sm:ml-0 sm:mt-0 hover:bg-blue-600 focus:bg-blue-600">
                                            Upload document
                                        </a>


                                    </div>
                                </div>
                            </form>
                            <p class="mt-5 text-base text-black">Get started instantly with no signup barriers.</p>

                        </div>

                        <div class="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                            <!-- <img class="w-32 h-32 md:w-40 md:h-40"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png"
                                alt="" /> -->
                        </div>
                    </div>

                    <div class="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                        <div class="absolute inset-0">
                            <img class="object-cover w-full h-full scale-150" src="../assets/img/heero.jpg" alt="" />
                        </div>

                        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        <div class="absolute bottom-0 left-0">
                            <div class="p-4 sm:p-6 lg:p-8">
                                <div class="flex items-center">
                                    <svg class="w-10 h-10 text-blue-500" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <h2 class="font-bold text-white text-7xl ml-2.5">395</h2>
                                </div>
                                <p class="max-w-xs mt-1.5 text-xl text-white">Authors have refined their manuscripts
                                    with Acestyle.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>
</template>

<script>
// import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
</script>

<style></style>