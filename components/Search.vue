<template>
  <section class="max-w-md mx-auto">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only"
      >Search</label
    >
    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          class="w-4 h-4 text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        v-model="input"
        id="default-search"
        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search Mockups, Logos..."
        required
      />
      <button
        v-show="input !== ''"
        @click="search(input)"
        class="absolute inset-y-0 right-0 flex items-center px-4 bg-blue-700 text-white rounded-lg text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Search
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { input, search } = useSearch();

useHead({
  title: computed(() => `Explorar ${input.value}`),
});
</script>
