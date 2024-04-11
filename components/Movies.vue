<template>
  <section class="flex flex-wrap justify-center gap-4">
    <div
      v-for="movie in movies"
      :key="movie.id"
      class="w-full md:w-1/3 lg:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md"
    >
      <NuxtImg
        :src="`${TMDB_IMAGE_BASE}/${movie.poster_path}`"
        :alt="movie.original_title"
        loading="lazy"
        class="w-full h-auto object-cover rounded-lg"
        :fallback="'/fallback-image.jpg'"
      />
      <div class="flex items-center justify-between mt-4">
        <p class="text-lg font-semibold"> {{ movie.vote_average }}</p>
        <NuxtLink
          class="text-blue-500 hover:underline"
          :to="`/movies/${movie.id}`"
        >
          Get More Info
        </NuxtLink>
      </div>
      <div class="mt-2">
        <p class="text-base font-medium">{{ movie.original_title }}</p>
        <p class="text-sm text-gray-500">
          Released:
          {{
            new Date(movie.release_date).toLocaleString("en-us", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useSearch } from "~/composables/search";
import { TMDB_IMAGE_BASE } from "@/constants/images";
const { movies } = useSearch();

</script>
