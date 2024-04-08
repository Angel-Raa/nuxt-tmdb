<template>
  <section class="">
    <div class="">
      <div class="">
        <div class="">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${porterPath}`"
            :alt="originalTitle"
            loading="lazy"
          />
        </div>
        <p class="">{{ voteAverage }}</p>
        <p class="">{{ overview }}</p>

        <div class="">
          <p class="">
            {{ originalTitle }}
          </p>
          <p class="release">
            Released:
            {{
              releaseDate.toLocaleString("en-us", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            }}
          </p>
          <NuxtLink class="" :to="`/movies/${id}`">
            Get More Info
          </NuxtLink>
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
  releaseDate: Date;
  id: number;
}>();
</script>
<style>

</style>