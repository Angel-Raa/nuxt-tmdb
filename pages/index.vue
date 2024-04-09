<template>
  <section>
    <Hero />
    <Search class="mt-4" />
    <section v-for="movie of movies" :key="movie.id" >
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
const { movies } = useSearch();


</script>

<style scoped></style>
