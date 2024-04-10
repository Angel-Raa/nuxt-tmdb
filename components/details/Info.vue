<template>
  <section class="">
    <NuxtImg
      :src="`https://image.tmdb.org/t/p/w500/${poster}`"
      alt="size of the film"
    />
    <h3 class="">Duration:</h3>
    <span>{{ runtime }} minutes</span>
    <article class="m">
      <h2 class="">Overview:</h2>
      <span>{{ overview }}</span>
      <p class="">
        Status: <span class="">{{ status }}</span>
      </p>
      <p class="">
        Popularity: <span class="">{{ popularity }}</span>
      </p>
    </article>
    <footer class="">
      <p>
        Count: <span class="">{{ count }}</span>
      </p>
      <p>
        Average: <span class="">{{ average }}</span>
      </p>
    </footer>
  </section>
</template>

<script lang="ts" setup>
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
