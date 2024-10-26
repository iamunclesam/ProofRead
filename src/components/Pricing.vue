<template>
    <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Simple Pricing</h2>
                <!-- <p class="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">Try free for 30 Days</p> -->
            </div>

            <div class="grid grid-cols-1 gap-6 mx-auto mt-8 text-center md:max-w-5xl sm:grid-cols-3 md:gap-8 sm:mt-16">

                <!-- Starter Package -->
                <div class="relative overflow-hidden bg-transparent border-2 border-gray-100 rounded-md">
                    <div class="absolute hidden top-3 right-3">
                        <svg class="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="px-4 py-5 lg:p-8">
                        <p class="text-lg font-medium text-gray-500">Starter Package</p>
                        <p class="mt-4 text-6xl font-bold text-black">$500</p>
                        <ul class="flex flex-col mt-8 space-y-1">
                            <li class="text-base font-medium text-gray-900 lg:text-xl">Includes 5 pages of editing and
                                proofreading</li>
                        </ul>
                    </div>
                </div>

                <!-- Premium Package -->
                <div class="relative overflow-hidden bg-transparent border-2 border-gray-100 rounded-md">
                    <div class="absolute hidden top-3 right-3">
                        <svg class="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="px-4 py-5 lg:p-8">
                        <p class="text-lg font-medium text-gray-500">Premium Package</p>
                        <p class="mt-4 text-6xl font-bold text-black">$1,500</p>
                        <ul class="flex flex-col mt-8 space-y-1">
                            <li class="text-base font-medium text-gray-900 lg:text-xl">Includes 20 pages of editing and
                                proofreading</li>
                        </ul>
                    </div>
                </div>

                <!-- Elite Package -->
                <div class="relative overflow-hidden bg-white border-2 border-gray-900 rounded-md shadow">
                    <div class="absolute top-3 right-3">
                        <svg class="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="px-4 py-5 lg:p-8">
                        <p class="text-lg font-medium text-gray-500">Elite Package</p>
                        <p class="mt-4 text-6xl font-bold text-black">$3,000</p>
                        <ul class="flex flex-col mt-8 space-y-1">
                            <li class="text-base font-medium text-gray-900 lg:text-xl">Includes 50 pages of editing and
                                proofreading</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mt-8 text-left md:mt-16 md:max-w-5xl md:ml-24">
                <p class="text-lg font-medium text-gray-500">One-off: $30 per 1000 words</p>
                <h3 class="mt-4 text-lg font-semibold text-gray-800">Turnaround Times</h3>
                <ul class="mt-2 text-base text-gray-600">
                    <li>Express (24 hours): 25% surcharge</li>
                    <li>Standard (3-5 days): No additional fee</li>
                    <li>Extended (7-10 days): 10% discount</li>
                </ul>
            </div>
            <div class="text-center">
                <a href="/upload" title=""
                    class="inline-flex items-center justify-center px-10 py-4 mt-6 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:opacity-80 hover:opacity-80"
                    role="button"> Start Trial Now </a>
                <p class="mt-4 text-sm text-gray-700">No Credit Card Required</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Pricing",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped></style>
