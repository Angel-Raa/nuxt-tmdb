<template>
  <section class="">
    <div v-for="movie in movies" :key="movie.id" class="n">
      <div class="">
        <!-- Contenedor centrado horizontalmente -->
        <div class="">
          <div class="">
            <NuxtImg
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              :alt="movie.original_title"
              loading="lazy"
              class="w-20 h-auto object-cover shadow-md rounded-lg"
            />
            <p class="text-lg font-semibold">{{ movie.vote_average }}</p>
          </div>
          <div>
            <p class="">{{ movie.original_title }}</p>
            <p class="">
              Released:
              {{
                new Date(movie.release_date).toLocaleString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              }}
            </p>
            <NuxtLink class="" :to="`/movies/${movie.id}`">
              Get More Info
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useSearch } from "~/composables/search";
const { movies } = useSearch();
</script>
