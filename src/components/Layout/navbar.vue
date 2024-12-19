<template>
    <main>
        <nav class="bg-white dark:bg-gray-900 mb-10 fixed w-full z-20 top-0 start-0 shadow-lg dark:border-gray-600">
            <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4 lg:px-24">
                <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-xl font-medium whitespace-nowrap dark:text-white">AceStyle</span>
                </a>
                <div class="flex items-center space-x-4 md:space-x-6 rtl:space-x-reverse">
                </div>

                <div @click="goBack" class="back-icon bg-blue-50 w-12 h-12 rounded-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1 1 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1 1 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23a1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2" />
                    </svg>
                </div>
            </div>
        </nav>
    </main>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        goToUpload() {
            this.$router.push('/upload');
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        goBack() {
            this.$router.push('/')
        }
    },
};
</script>

<style scoped>
/* Add any custom styling if needed */
</style>
