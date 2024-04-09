<template>
  <section class="bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center justify-between mb-4">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${posterPath}`"
          :alt="originalTitle"
          loading="lazy"
          class="w-32 h-auto shadow-md"
        />
        <p class="text-xl font-semibold">{{ voteAverage }}</p>
      </div>
      <p class="text-gray-700 mb-2">{{ overview }}</p>
      <div>
        <p class="text-lg font-semibold">{{ originalTitle }}</p>
        <p class="text-sm text-gray-500 mb-2">
          Released:
          {{
            releaseDate.toLocaleString("en-us", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          }}
        </p>
        <NuxtLink
          class="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          :to="`/movies/${id}`"
        >
          Get More Info
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  overview: string;
  voteAverage: number;
  posterPath: string;
  originalTitle: string;
  releaseDate: Date;
  id: number;
}>();
</script>
