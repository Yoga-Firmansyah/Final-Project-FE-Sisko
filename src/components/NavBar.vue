<template>
  <div class="bg-black text-white text-center py-2 text-sm">
    <span class="blinking-text"
      >Free Delivery on orders over
      <span class="font-bold">IDR 100.000</span> Don't miss it!</span
    >
  </div>
  <header class="bg-white sticky top-0 z-10">
    <div class="container mx-auto flex justify-between items-center py-2 px-6">
      <div class="flex items-center space-x-4">
        <div class="py-1.5 pr-4 border-r-3">
          <img src="/assets/img/asset-logo.png" alt="Logo" class="h-8" />
        </div>
        <nav class="hidden md:flex space-x-4">
          <div class="dropdown pr-2">
            <button
              class="flex items-center space-x-1 text-black hover:text-black"
            >
              <span> Categories </span>
              <i class="fas fa-chevron-down fa-xs"> </i>
            </button>
            <div
              class="absolute right-0 z-10 mt-4 rounded-md shadow-lg bg-white dropdown-content"
            >
              <div class="border-black top-border"></div>

              <div
                class="py-1 bg-white"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Laptop</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Camera</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Tablet</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Headphone</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Smartwatch</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Console</a
                >
              </div>
            </div>
          </div>
          <div class="dropdown pr-2">
            <button
              class="flex items-center space-x-1 text-black hover:text-black"
            >
              <span> Shop </span>
              <i class="fas fa-chevron-down fa-xs"> </i>
            </button>
            <div
              class="absolute right-0 z-10 mt-4 rounded-md shadow-lg bg-white dropdown-content"
            >
              <div class="border-black top-border"></div>

              <div
                class="py-1 bg-white"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Simple</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Variable</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Grouped</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Image</a
                >
              </div>
            </div>
          </div>
          <div class="dropdown pr-2">
            <button
              class="flex items-center space-x-1 text-black hover:text-black"
            >
              <span> Pages </span>
              <i class="fas fa-chevron-down fa-xs"> </i>
            </button>
            <div
              class="absolute right-0 z-10 mt-4 rounded-md shadow-lg bg-white dropdown-content"
            >
              <div class="border-black top-border"></div>
              <div
                class="py-1 bg-white"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >About</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Contact</a
                >
              </div>
            </div>
          </div>
          <div class="dropdown pr-2">
            <button
              class="flex items-center space-x-1 text-black hover:text-black"
            >
              <span> Blog </span>
              <i class="fas fa-chevron-down fa-xs"> </i>
            </button>
            <div
              class="absolute right-0 z-10 mt-4 rounded-md shadow-lg bg-white dropdown-content"
            >
              <div class="border-black top-border"></div>
              <div
                class="py-1 bg-white"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Main</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Column</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Grid</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  role="menuitem"
                  >Basic</a
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="flex items-center space-x-4">
        <img src="/assets/img/asset-icon-1.png" alt="" class="w-6 h-6" />
        <img src="/assets/img/asset-icon-2.png" alt="" class="w-6 h-6" />
        <input
          type="text"
          placeholder="Search..."
          class="border border-gray-800 h-8 w-72 py-2 px-2 focus:outline-none rounded-sm"
        />
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.blinking-text {
  animation: blink 5s infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
