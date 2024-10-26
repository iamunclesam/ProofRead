<template>
    <div class="image-collage grid grid-cols-2 gap-4 md:grid-cols-4">
        <!-- Image 1 -->
        <div class="col-span-2 row-span-2">
            <img src="../assets/img/main.jpg" alt="Image 1"
                class="w-full h-full object-cover rounded-lg" />
        </div>
        <!-- Image 2 -->
        <div class="col-span-1 hidden md:block">
            <img src="../assets/img/hori.jpg" alt="Image 2"
                class="w-full h-full object-cover rounded-lg" />
        </div>
        <!-- Image 3 -->
        <div class="col-span-1 hidden md:block">
            <img src="../assets/img/hori-2.jpg" alt="Image 3"
                class="w-full h-full object-cover rounded-lg" />
        </div>
        <!-- Image 4 (optional) -->
        <div class="col-span-2 hidden md:block">
            <img src="../assets/img/down.jpg" alt="Image 4"
                class="w-full h-full object-cover rounded-lg" />
        </div>
    </div>
</template>

<script>
export default {};
</script>