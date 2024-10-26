<template>
    <div>
        <!-- Your content here -->

        <!-- Scroll Up Button -->
        <button v-if="showButton" @click="scrollToTop"
            class="fixed bottom-5 right-5 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-all duration-300">
            <Icon icon="mingcute:up-fill" width="2.5em" height="2.5em" />
        </button>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon
    },
    data() {
        return {
            showButton: false,
        };
    },
    methods: {
        checkScroll() {
            this.showButton = window.scrollY > 200; // Change 200 to your preferred threshold
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
    },
    mounted() {
        window.addEventListener('scroll', this.checkScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.checkScroll);
    },
};
</script>
