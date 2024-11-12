<template>
    <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Simple Pricing</h2>
                <!-- <p class="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">Try free for 30 Days</p> -->
            </div>

            <div class="grid grid-cols-1 gap-6 mx-auto mt-8 text-center md:max-w-8xl sm:grid-cols-4 md:gap-8 sm:mt-16">

                <!-- One-Off Package -->
                <div class="relative overflow-hidden bg-transparent border-2 border-gray-100 rounded-md">
                    <div class="px-4 py-5 lg:p-8">
                        <p class="text-lg font-medium text-gray-500">One-Off Package</p>
                        <p class="mt-4 text-6xl font-bold text-black">$30</p>
                        <ul class="flex flex-col mt-8 space-y-1">
                            <li class="text-base font-medium text-left text-gray-900 lg:text-md">Per 1000 words</li>
                            <ul class="mt-4 text-left text-gray-600 text-sm">
                                <li class="flex items-center gap-2">
                                    <Icon icon="lets-icons:check-fill" class="text-2xl" style="color: #1e3385" /> Express (24 hours): 25%
                                    surcharge
                                </li>
                                <li class="flex items-center gap-2">
                                    <Icon icon="lets-icons:check-fill" class="text-2xl" style="color: #1e3385" /> Standard (3-5 days): No
                                    additional fee
                                </li>
                                <li class="flex items-center gap-2">
                                    <Icon icon="lets-icons:check-fill" class="text-2xl" style="color: #1e3385" />Extended (7-10 days):
                                    10% discount
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>

                <!-- Starter Package -->
                <div class="relative overflow-hidden bg-transparent border-2 border-gray-100 rounded-md">
                    <div class="px-4 py-5 lg:p-8">
                        <p class="text-lg font-medium text-gray-500">Starter Package</p>
                        <p class="mt-4 text-6xl font-bold text-black">$500</p>
                        <ul class="flex flex-col mt-8 space-y-1">
                            <li class="text-base font-medium text-gray-900 lg:text-md text-left">Includes 5 pages of
                                editing and proofreading</li>
                            <ul class="mt-4 text-left text-gray-600 text-sm">
                                <li class="flex items-center gap-2">
                                    <Icon icon="lets-icons:check-fill" class="text-2xl" style="color: #1e3385" />
                                    Express (24 hours): 25%
                                    surcharge
                                </li>
                                <li class="flex items-center gap-2">
                                    <Icon icon="lets-icons:check-fill" class="text-2xl" style="color: #1e3385" />
                                    Standard (3-5 days): No
                                    additional fee
                                </li>
                                <li class="flex items-center gap-2">
                                    <Icon icon="lets-icons:check-fill" class="text-2xl" style="color: #1e3385" />
                                    Extended (7-10 days):
                                    10% discount
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>

                <!-- Premium Package -->
                <div class="relative overflow-hidden bg-transparent border-2 border-gray-100 rounded-md">
                    <div class="px-4 py-5 lg:p-8">
                        <p class="text-lg font-medium text-gray-500">Premium Package</p>
                        <p class="mt-4 text-6xl font-bold text-black">$1,500</p>
                        <ul class="flex flex-col mt-8 space-y-1">
                            <li class="text-base font-medium text-gray-900 lg:text-md text-left">Includes 20 pages of
                                editing and proofreading</li>
                            <ul class="mt-4 text-left text-gray-600 text-sm">
                                <li class="flex items-center gap-2">
                                    <Icon icon="lets-icons:check-fill" class="text-2xl" style="color: #1e3385" />
                                    Express (24 hours): 25%
                                    surcharge
                                </li>
                                <li class="flex items-center gap-2">
                                    <Icon icon="lets-icons:check-fill" class="text-2xl" style="color: #1e3385" />
                                    Standard (3-5 days): No
                                    additional fee
                                </li>
                                <li class="flex items-center gap-2">
                                    <Icon icon="lets-icons:check-fill" class="text-2xl" style="color: #1e3385" />
                                    Extended (7-10 days):
                                    10% discount
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>

                <!-- Elite Package -->
                <div class="relative overflow-hidden bg-white border-2 border-gray-900 rounded-md shadow">

                    <div class="px-4 py-5 lg:p-8">
                        <p class="text-lg font-medium text-gray-500">Elite Package</p>
                        <p class="mt-4 text-6xl font-bold text-black">$3,000</p>
                        <ul class="flex flex-col mt-8 space-y-1">
                            <li class="text-base font-medium text-gray-900 lg:text-md text-left">Includes 50 pages of
                                editing and proofreading</li>
                            <ul class="mt-4 text-left text-gray-600 text-sm">
                                <li class="flex items-center gap-2">
                                    <Icon icon="lets-icons:check-fill" class="text-2xl" style="color: #1e3385" />
                                    Express (24 hours): 25%
                                    surcharge
                                </li>
                                <li class="flex items-center gap-2">
                                    <Icon icon="lets-icons:check-fill" class="text-2xl" style="color: #1e3385" />
                                    Standard (3-5 days): No
                                    additional fee
                                </li>
                                <li class="flex items-center gap-2">
                                    <Icon icon="lets-icons:check-fill" class="text-2xl" style="color: #1e3385" />
                                    Extended (7-10 days):
                                    10% discount
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="text-center">
                <a href="/upload" title=""
                    class="inline-flex items-center justify-center px-10 py-4 mt-6 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:opacity-80 hover:opacity-80"
                    role="button"> Start Now </a>
                <p class="mt-4 text-sm text-gray-700">No Credit Card Required</p>
            </div>
        </div>
    </section>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    name: "Pricing",
    data() {
        return {}
    },
    components: {
        Icon
    },
    methods: {}
}
</script>

<style scoped></style>
