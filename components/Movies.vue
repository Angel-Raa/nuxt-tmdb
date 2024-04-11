<template>
  <section class="flex flex-wrap justify-center gap-4">
    <Loading v-if="loading" />
    <div
      v-else
      v-for="movie in movies"
      :key="movie.id"
      class="w-full md:w-1/3 lg:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md"
    >
      <NuxtLink :to="`/movies/${movie.id}`" >
        <NuxtImg
          :src="`${TMDB_IMAGE_BASE}/${movie.poster_path}`"
          :alt="movie.original_title"
          loading="lazy"
          class="w-full h-auto object-cover rounded-lg transition duration-300 ease-in-out hover:opacity-75 "
          :fallback="'/fallback-image.jpg'"
        />
      </NuxtLink>

      <div class="flex items-center justify-between mt-4">
        <p class="text-lg font-semibold"><span class="text-gray-500">{{ movie.vote_average }} </span> </p>
      
      </div>
      <div class="mt-2">
        <p class="text-base font-medium">{{ movie.original_title }}</p>
        <p class="text-sm text-gray-500">
          Released: {{ formatDate(movie.release_date) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { formatDate } from "@/composables/standardization";
import { useSearch } from "~/composables/search";
import { TMDB_IMAGE_BASE } from "@/constants/images";
import Loading from "./Loading.vue";
const { movies, loading } = useSearch();
</script>
