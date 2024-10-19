<template>
    <section id="contact-us" class="py-12 sm:py-16 lg:py-20 bg-gray-100">
        <div class="max-w-6xl mx-auto px-4">
            <!-- Heading -->
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 text-center">
                Contact Us
            </h2>
            <p class="text-lg text-gray-600 mb-8 text-center">
                We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <!-- Contact Form -->
            <form class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <!-- Name Field -->
                <div class="mb-4">
                    <label for="name" class="block text-gray-700 font-medium">Full Name</label>
                    <input type="text" id="name" name="name"
                        class="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your full name" required />
                </div>

                <!-- Email Field -->
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 font-medium">Email Address</label>
                    <input type="email" id="email" name="email"
                        class="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your email address" required />
                </div>

                <!-- Message Field -->
                <div class="mb-6">
                    <label for="message" class="block text-gray-700 font-medium">Message</label>
                    <textarea id="message" name="message" rows="5"
                        class="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Write your message here" required></textarea>
                </div>

                <!-- Submit Button -->
                <button type="submit"
                    class="w-full bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-red-800">
                    Send Message
                </button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactUs',
};
</script>

<style scoped></style>
