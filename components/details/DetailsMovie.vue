<template>
  <section class="flex flex-wrap">
    <div class="w-full md:w-1/2 lg:w-3/5 p-4">
      <NuxtImg
        :src="`${TMDB_IMAGE_BASE}/${details.backdrop_path}`"
        :alt="details.title"
        class="w-full h-auto object-cover rounded-lg shadow-md"
      />
      <Credit :id="details.id" />
    </div>
    <div class="w-full md:w-1/2 lg:w-2/5 p-4 flex flex-col justify-between">
      <div>
        <Card
          :title="details.title"
          :tagline="details.tagline"
          :released="details.release_date"
          :revenue="details.revenue"
          class="mb-4"
        />
        <Info
          :runtime="details.runtime"
          :overview="details.overview"
          :status="details.status"
          :count="details.vote_count"
          :average="details.vote_average"
          :popularity="details.popularity"
          :poster="details.poster_path"
        />
      </div>
      <div class="flex flex-wrap mt-4">
        <Genres
          v-for="genre in details.genres"
          :key="genre.id"
          :name="genre.name"
          class="mr-4 mb-2 px-2 rounded-lg bg-gray-200 text-gray-700"
        />
        <Countries
          v-for="countrie in details.production_countries"
          :key="countrie.iso_3166_1"
          :name="countrie.name"
          class="mr-4 mb-2 px-2 rounded-lg bg-gray-200 text-gray-700"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { TMDB_IMAGE_BASE } from "@/constants/images";
import Countries from "./Countries.vue";
import Genres from "./Genres.vue";
import Info from "./Info.vue";
import Card from "./Card.vue";
import Credit from "./Credit.vue";
defineProps<{
  details: Details;
}>();
</script>

<style></style>
