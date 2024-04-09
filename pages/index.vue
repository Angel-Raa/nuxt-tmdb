<template>
  <section>
    <Hero />
    <Search class="mt-4" />
    <Loading />
    <section v-for="movie of movies" :key="movie.id">
      <Movies
        :overview="movie.overview"
        :voteAverage="movie.vote_average"
        :posterPath="movie.poster_path"
        :originalTitle="movie.original_title"
        :releaseDate="movie.release_date"
        :id="movie.id"
      />
    </section>

    <Pagination class="flex justify-center mb-10" />
  </section>
</template>

<script lang="ts" setup>
import { useSearch } from "~/composables/search";
const minDate = ref("");
const maxDate = ref("");
const { movies } = useSearch();

onMounted(async () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  minDate.value = `${year}-01-01`; // 1 de enero del año actual
  maxDate.value = `${year}-12-31`; // 31 de diciembre del año actual
});
</script>

<style scoped></style>
