<template>
  <section class="relative h-screen flex items-center justify-center">
    <img
      src="~/assets/img/hero.jpg"
      alt="image de fondo"
      loading="lazy"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <article class="text-container text-center text-white z-10">
      <span class="text-lg font-semibold">Now Streaming</span>
      <h2 class="text-4xl font-bold">
        <span class="text-yellow-400">Now</span> Streaming
      </h2>
      <NuxtLink
        to="/"
        class="mt-4 inline-block px-6 py-3 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-colors duration-300"
        >View Movies</NuxtLink
      >
    </article>
  </section>
</template>

<script lang="ts" setup></script>
