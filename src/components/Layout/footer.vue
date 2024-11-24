<template>
    <footer class="bg-black text-white py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                <!-- Company Information -->
                <div>
                    <h3 class="text-2xl font-semibold mb-4">AceStyle Editing</h3>
                    <p class="text-gray-400">
                        Delivering top-quality editing services to help you excel in your academic journey. Our editors
                        ensure precision and clarity in every document.
                    </p>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition">About Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Our Services</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Contact Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div>
                    <h4 class="text-xl font-semibold mb-4">Contact Information</h4>
                    <ul class="space-y-2">
                        <li class="text-gray-400">1712 Pioneer Ave, Cheyenne, WY 82001</li>
                        <li class="text-gray-400">+123 456 7890</li>
                        <li><a href="mailto:info@acestyle.com"
                                class="text-gray-400 hover:text-white transition">info@acestyle.com</a></li>
                    </ul>

                    <!-- Social Media Icons -->
                    <div class="mt-6 flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <Icon icon="akar-icons:facebook-fill" width="24" height="24" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <Icon icon="akar-icons:twitter-fill" width="24" height="24" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <Icon icon="akar-icons:linkedin-box-fill" width="24" height="24" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <Icon icon="akar-icons:instagram-fill" width="24" height="24" />
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom Footer (Copyright) -->
            <div class="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
                <p>&copy; 2024 AceStyle Editing. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    name: 'Footer',
    components: {
        Icon,
    },
};
</script>

<style scoped></style>