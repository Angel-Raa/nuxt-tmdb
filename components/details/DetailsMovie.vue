<template>
  <section class="">
    <div class="">
      <div class="">
        <NuxtImg
          :src="`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`"
          :alt="details.title"
       
        />
      </div>
      <div>
        <Card
          :title="details.title"
          :tagline="details.tagline"
          :released="details.release_date"
          :revenue="details.revenue"
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
        <Genres
          v-for="genre in details.genres"
          :key="genre.id"
          :name="genre.name"
        />
        <Countries
          v-for="countrie in details.production_countries"
          :key="countrie.iso_3166_1"
          :name="countrie.name"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Countries from "./Countries.vue";
import Genres from "./Genres.vue";
import Info from "./Info.vue";
import Card from "./Card.vue";
defineProps<{
  details: Details;
}>();
</script>

<style></style>
