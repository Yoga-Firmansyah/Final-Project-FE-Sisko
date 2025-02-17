<template>
  <section class="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto py-8 px-6">
    <div
      class="md:col-span-2 bg-gray-100 px-6 border-2 border-black flex items-center"
    >
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div class="md:col-span-6">
          <h1 class="text-4xl font-bold mb-4">
            Purchase Limitless Game Console
          </h1>
          <p class="text-lg mb-6">
            Explore your game experience to be more realistic with All Brand New
            PlayStation 5
          </p>
          <button
            class="bg-black text-white py-2 px-4 rounded slow-hover hover:bg-white hover:text-black border border-black"
          >
            Shop Now
          </button>
        </div>
        <div class="md:col-span-6 flex justify-center">
          <img
            alt="Sony DualSense Wireless Controller"
            class="h-80"
            src="/assets/img/asset-image-1.png"
          />
        </div>
      </div>
    </div>
    <div class="space-y-6">
      <div
        class="bg-gradient p-6 border border-gray-300 flex flex-col items-center justify-center text-center"
      >
        <img
          alt="Sony DualSense Wireless Controller"
          class="h-30"
          src="/assets/img/asset-image-2.png"
        />
        <h2 class="text-xl font-bold mb-2">
          Sony DualSense Wireless Controller
        </h2>
        <button class="bg-black text-white px-6 py-3">Shop Now</button>
      </div>
      <div
        class="bg-gradient p-6 border border-gray-300 flex flex-col items-center justify-center text-center"
      >
        <img
          alt="Sony DualSense Wireless Controller"
          class="h-30"
          src="/assets/img/asset-image-3.png"
        />
        <h2 class="text-xl font-bold mb-2">Sony VR2 Sense</h2>
        <button class="bg-black text-white px-6 py-3">Shop Now</button>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.bg-gradient2 {
  background: linear-gradient(to bottom right, #f2eded, #ffffff);
}
</style>
