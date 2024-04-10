<template>
  <section class="p-4 rounded-lg shadow-md">
    <NuxtImg
      :src="`${TMDB_IMAGE_BASE}/${poster}`"
      alt="size of the film"
      class="w-full h-auto object-cover rounded-lg mb-4"
    />
    <h3 class="text-lg font-semibold mb-2">Duration:</h3>
    <span>{{ runtime }} minutes</span>
    <article class="mb-4">
      <h2 class="text-lg font-semibold mb-2">Overview:</h2>
      <span>{{ overview }}</span>
      <p class="text-base mt-2">
        Status: <span class="font-medium">{{ status }}</span>
      </p>
      <p class="text-base mt-2">
        Popularity: <span class="font-medium">{{ popularity }}</span>
      </p>
    </article>
    <footer class="flex justify-between">
      <p class="text-base">
        Count: <span class="font-medium">{{ count }}</span>
      </p>
      <p class="text-base">
        Average: <span class="font-medium">{{ average }}</span>
      </p>
    </footer>
  </section>
</template>

<script lang="ts" setup>
import { TMDB_IMAGE_BASE } from "@/constants/images";
defineProps<{
  runtime: number;
  overview: string;
  status: string;
  popularity: number;
  count: number;
  average: number;
  poster: string;
}>();
</script>

<style></style>
