<template>
    <section class="py-12 sm:py-16 lg:py-20">
        <div class="max-w-6xl mx-auto px-4">
            <!-- Heading -->
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center">
                Trusted by Academics Worldwide
            </h2>
            <p class="text-base sm:text-lg text-gray-600 mb-8 text-center">
                Don't just take our word for it:
            </p>

            <!-- Testimonials Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Testimonial 1 -->
                <div class="flex p-6 bg-white shadow-lg rounded-md items-center">
                    <!-- Image -->
                    <img src="../assets/img/test-1.jpg" alt="Dr. Jane Smith"
                        class="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mr-4 flex-grow-1 border" />

                    <!-- Text Content -->
                    <div>
                        <p class="text-gray-700 italic text-sm sm:text-base lg:text-lg">
                            "AceStyle Editing helped me refine my dissertation, ensuring error-free and polished
                            content."
                        </p>
                        <p class="mt-4 text-gray-800 font-semibold text-sm sm:text-base lg:text-lg">- Dr. Jane Smith</p>
                    </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="flex p-6 bg-white shadow-lg rounded-md items-center">
                    <!-- Image -->
                    <img src="../assets/img/test-2.jpg" alt="John Doe"
                        class="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex-grow-1 object-cover mr-4" />

                    <!-- Text Content -->
                    <div>
                        <p class="text-gray-700 italic text-sm sm:text-base lg:text-lg">
                            "I was impressed by the prompt service and meticulous editing."
                        </p>
                        <p class="mt-4 text-gray-800 font-semibold text-sm sm:text-base lg:text-lg">- John Doe, Researcher</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Testimonials',
};
</script>

<style scoped></style>
