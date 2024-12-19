<template>
    <div class="thank-you-page p-4">
        <div class="message-container m-4 md:m-0 max-w-screen-sm mx-auto pb-8">
            <h1>Thank You!</h1>
            <p class="mb-8">Thank you for submitting your document. A member of our team will review your submission and
                contact you within 24 hours to discuss further details and payment processing.</p>

            <RouterLink to="/upload" class="py-4 px-8 rounded bg-blue-600 text-white my-4">Upload Another</RouterLink>
        </div>
        <div id="confetti"></div>
    </div>
</template>


<script setup>

import confetti from "canvas-confetti";
import { onMounted } from "vue";

// Trigger confetti on page load
const launchConfetti = () => {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
    });
};

onMounted(() => {
    launchConfetti();
});
</script>

<style scoped>
.thank-you-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background: linear-gradient(to right, #f8f9fa, #e9ecef);
}

.message-container {
    background: white;
    padding: 2.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 3rem;
    color: #0b4fd7;
    margin-bottom: 1rem;
}

p {
    font-size: 1rem;
    color: #6c757d;
}

#confetti {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1000;
}
</style>
