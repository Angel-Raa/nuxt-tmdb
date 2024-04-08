<template>
  <section class="container movies">
    <div id="movie-grid" class="movie-grid">
      <div class="movie">
        <div class="movie-img">
          <img :src="`https://image.tmdb.org/t/p/w500/${porterPath}`" :alt="originalTitle"  loading="lazy"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  overview: string;
  voteAverage: number;
  porterPath: string;
  originalTitle: string;
}>();
</script>

<style>
@import url("~/assets/css/main.css");
</style>
