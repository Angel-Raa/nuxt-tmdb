<template>
  <div class="flex items-center gap-4 bg-white" v-if="totalPages > 1">
    <button
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        ></path>
      </svg>
      Previous
    </button>
    <template v-for="page in totalPages" :key="page">
      <button
        @click="goToPage(page)"
        :class="{
          'bg-gray-900': currentPage === page,
          'bg-white': currentPage !== page,
        }"
        class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <span
          class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          {{ page }}
        </span>
      </button>
    </template>
    <div class="flex items-center gap-2"></div>

    <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
        class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Next
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        class="w-4 h-4"
      ></svg>
      </button>
  </div>
</template>

<script lang="ts" setup>
const { totalPages, pages, totalResults, currentPage, goToPage, loading } =
  useSearch();
</script>

<style></style>
