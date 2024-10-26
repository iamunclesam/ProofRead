<template>
    <section class="lg:max-w-8xl w-full mx-auto lg:px-28 bg-white">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <!-- Left column with image -->
            <div class="relative">
                <img src="../assets/img/why-us.jpg" alt="Why Choose Us Image"
                    class="w-full h-auto object-cover rounded-md" />
                <!-- Overlay on image for readability -->
                <div class="absolute "></div>
            </div>

            <!-- Right column with text content overlapping the image -->
            <div class="col mt-4">
                <div class="relative z-10 md:m-6 lg:m-0 md:-mt-16 lg:-ml-16 p-6 py-12 pt:-8 bg-white rounded-lg shadow-lg">
                    <h2 class="text-3xl font-bold text-gray-800 mb-8">Why Choose Us</h2>
                    <ul class="space-y-6">
                        <li class="flex items-start space-x-4">
                            <div class="text-green-500">
                                <Icon icon="mingcute:check-2-fill" width="1.5em" height="1.5em"  style="color: #2309ec" />
                            </div>
                            <div>
                                <h3 class="text-xl font-medium text-gray-700">
                                    Experienced editors with academic expertise
                                </h3>
                            </div>
                        </li>
                        <li class="flex items-start space-x-4">
                            <div class="text-green-500">
                                <Icon icon="mingcute:check-2-fill" width="1.5em" height="1.5em"  style="color: #2309ec" />
                            </div>
                            <div>
                                <h3 class="text-xl font-medium text-gray-700">Rigorous quality control and attention to
                                    detail</h3>
                            </div>
                        </li>
                        <li class="flex items-start space-x-4">
                            <div class="text-green-500">
                                <Icon icon="mingcute:check-2-fill" width="1.5em" height="1.5em"  style="color: #2309ec" />
                            </div>
                            <div>
                                <h3 class="text-xl font-medium text-gray-700">Fast turnaround times without compromising
                                    quality</h3>
                            </div>
                        </li>
                        <li class="flex items-start space-x-4">
                            <div class="text-green-500">
                                <Icon icon="mingcute:check-2-fill" width="1.5em" height="1.5em"  style="color: #2309ec" />
                            </div>
                            <div>
                                <h3 class="text-xl font-medium text-gray-700">Confidential and secure document handling
                                </h3>
                            </div>
                        </li>
                        <li class="flex items-start space-x-4">
                            <div class="text-green-500">
                                <Icon icon="mingcute:check-2-fill" width="1.5em" height="1.5em"  style="color: #2309ec" />
                            </div>
                            <div>
                                <h3 class="text-xl font-medium text-gray-700">Competitive pricing and flexible packages
                                </h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    name: 'WhyChooseUs',
    components: {
        Icon,
    },
};
</script>

<style scoped></style>