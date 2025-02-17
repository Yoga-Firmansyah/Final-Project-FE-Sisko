<template>
  <!-- New Coming Section -->
  <section class="text-center container mx-auto py-8 px-6">
    <h2 class="text-3xl font-bold">New Coming</h2>
    <p class="mt-2 text-gray-600">
      Explore our latest arrivals and discover the newest products
    </p>
    <p class="text-gray-600">
      Stay ahead with fresh picks and trendy additions, find your next favorite
      here!
    </p>
    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div
        class="max-w-sm rounded overflow-hidden bg-white"
        v-for="product in productsNew"
        :key="product.id"
      >
        <!-- Bagian Atas -->
        <div
          class="h-68 flex flex-col items-center justify-center hover-border transition-colors bg-neutral-300 hover:bg-white"
        >
          <span></span>
          <img class="h-40" :src="product.image" alt="Gambar Card" />
        </div>
        <!-- Bagian Bawah -->
        <div class="text-start">
          <h3 class="mt-4 text-lg font-semibold">{{ product.name }}</h3>
          <p class="mt-2 text-sm">IDR {{ moneyFormat(product.price) }}</p>
          <button
            class="mt-2 bg-black text-white text-xs py-2 px-4 rounded slow-hover hover:bg-white hover:text-black border border-black"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
    <button
      class="mt-8 hover:bg-black hover:text-white py-2 px-4 rounded slow-hover bg-white text-black border border-black"
    >
      Expand
    </button>
    <div class="mt-2">
      <i class="fas fa-chevron-down text-black"> </i>
    </div>
  </section>
  <!-- New Generation Smartphone with AI Section -->
  <section class="bg-neutral-100 mb-12">
    <div class="container mx-auto py-8 px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col justify-center">
          <h2 class="text-4xl font-bold mb-4 w-86">
            New Generation Smartphone with AI
          </h2>
          <p class="text-xl mb-6 text-justify">
            Samsung Galaxy S24 Ultra is a powerful smartphone which is equipped
            with AI that makes things easier. Stay tuned for official
            announcements and reviews for more details
          </p>
          <button
            class="text-xl w-fit bg-black text-white py-2 px-4 rounded slow-hover hover:bg-white hover:text-black border border-black"
          >
            Book Now
          </button>
        </div>
        <div class="flex flex-col justify-center">
          <img
            alt="Samsung Galaxy S24 Ultra"
            class="h-100 mx-auto"
            src="/assets/img/asset-image-8.png"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- Special Offer Section -->
  <section class="text-center container mx-auto py-8 px-6">
    <h2 class="text-3xl font-bold">Special Offer</h2>
    <p class="mt-2 text-gray-600">
      Unlock exclusive offers for you and discover amazing savings on a variety
      of products.
    </p>
    <p class="text-gray-600">
      Don't miss out on fantastic opportunities, start exploring now!
    </p>
    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div
        class="max-w-sm rounded overflow-hidden bg-white"
        v-for="product in productsSpecial"
        :key="product.id"
      >
        <!-- Bagian Atas -->
        <div
          class="h-68 flex flex-col items-center justify-center hover-border transition-colors bg-neutral-300 hover:bg-neutral-100"
        >
          <span></span>
          <div
            class="absolute top-2 right-0 bg-black text-white px-2 py-1 w-16 text-sm"
          >
            {{ Math.round(((product.price - product.discPrice) / product.price) * 100) }}%
          </div>
          <img class="h-40" :src="product.image" alt="Gambar Card" />
        </div>
        <!-- Bagian Bawah -->
        <div class="text-start">
          <h3 class="mt-4 text-lg font-semibold">{{ product.name }}</h3>
          <p class="mt-2 text-sm">
            <span class="line-through">
              IDR {{ moneyFormat(product.price) }}
            </span>
            &nbsp;
            <span> IDR {{ moneyFormat(product.discPrice) }} </span>
          </p>
          <button
            class="mt-2 bg-black text-white text-xs py-2 px-4 rounded slow-hover hover:bg-white hover:text-black border border-black"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
    <button
      class="mt-8 hover:bg-black hover:text-white py-2 px-4 rounded slow-hover bg-white text-black border border-black"
    >
      Expand
    </button>
    <div class="mt-2">
      <i class="fas fa-chevron-down text-black"> </i>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
const productsNew = ref([]);
const productsSpecial = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch("/data.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    productsNew.value = data.new;
    productsSpecial.value = data.special;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped></style>
