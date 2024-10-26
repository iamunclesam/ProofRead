<template>
    <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-2xl mx-auto text-center">
                <div class="flex items-center justify-center">
                    <div class="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
                        <img class="object-cover w-full h-full" :src="avatar1" alt="" />
                    </div>

                    <div class="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
                        <img class="object-cover w-full h-full" :src="avatar2" alt="" />
                    </div>

                    <div class="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
                        <img class="object-cover w-full h-full" :src="avatar3" alt="" />
                    </div>
                </div>

                <h2 class="mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl">Join <span
                        class="border-b-8 border-blue-300">100+</span> Authors</h2>
                <p class="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10">Refine your writing with expert feedback
                    and meticulous proofreading. Achieve clarity and quality with Acestyle.</p>


                <a href="/upload" title=""
                    class="inline-flex items-center justify-center px-8 py-4 mt-8 font-semibold text-white text-xl transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:mt-12 hover:bg-blue-700 focus:bg-blue-700"
                    role="button">
                 
                    Try now
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            avatar1: 'https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg',
            avatar2: 'https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg',
            avatar3: 'https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg'
        }
    }
}
</script>
