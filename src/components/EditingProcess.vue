<template>
    <section class="md:p-6 p-4 md:py-20 py-10 bg-gray-50">
        <div class="md:max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
                Our Editing Process
            </h2>
            <ol class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Submission -->
                <li class="flex items-start space-x-4 p-4 bg-white shadow-lg rounded-md">
                    <div class="text-blue-500">
                        <Icon icon="mdi:numeric-1-circle" width="2em" height="2em" />
                    </div>
                    <div>
                        <h3 class="text-xl font-medium text-gray-700">Submission</h3>
                        <p class="text-gray-600">Send us your document.</p>
                    </div>
                </li>

                <!-- Review -->
                <li class="flex items-start space-x-4 p-4 bg-white shadow-lg rounded-md">
                    <div class="text-blue-500">
                        <Icon icon="mdi:numeric-2-circle" width="2em" height="2em" />
                    </div>
                    <div>
                        <h3 class="text-xl font-medium text-gray-700">Review</h3>
                        <p class="text-gray-600">Our editors assess your work.</p>
                    </div>
                </li>

                <!-- Editing -->
                <li class="flex items-start space-x-4 p-4 bg-white shadow-lg rounded-md">
                    <div class="text-blue-500">
                        <Icon icon="mdi:numeric-3-circle" width="2em" height="2em" />
                    </div>
                    <div>
                        <h3 class="text-xl font-medium text-gray-700">Editing</h3>
                        <p class="text-gray-600">We refine your content.</p>
                    </div>
                </li>

                <!-- Quality Check -->
                <li class="flex items-start space-x-4 p-4 bg-white shadow-lg rounded-md">
                    <div class="text-blue-500">
                        <Icon icon="mdi:numeric-4-circle" width="2em" height="2em" />
                    </div>
                    <div>
                        <h3 class="text-xl font-medium text-gray-700">Quality Check</h3>
                        <p class="text-gray-600">Thorough review.</p>
                    </div>
                </li>

                <!-- Delivery -->
                <li class="flex items-start space-x-4 p-4 bg-white shadow-lg rounded-md">
                    <div class="text-blue-500">
                        <Icon icon="mdi:numeric-5-circle" width="2em" height="2em" />
                    </div>
                    <div>
                        <h3 class="text-xl font-medium text-gray-700">Delivery</h3>
                        <p class="text-gray-600">Receive your edited document.</p>
                    </div>
                </li>
            </ol>
        </div>
    </section>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    name: 'EditingProcess',
    components: {
        Icon,
    },
};
</script>

<style scoped></style>