<template>
  <section class="">
    <Hero />
    <Search />
    <Loading />
    <Movies
      v-for="movie of movies.results"
      :key="movie.id"
      :overview="movie.overview"
      :voteAverage="movie.vote_average"
      :porterPath="movie.poster_path"
      :originalTitle="movie.original_title"
      :releaseDate="movie.release_date"
      :id="movie.id"
    />
  </section>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
const minDate = ref("");
const maxDate = ref("");
const url = new URL(
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${minDate}&release_date.lte=${maxDate}'`
);

const input: Ref<string> = ref("");
const movies: Ref<Movies> = ref({
  dates: { maximum: new Date(), minimum: new Date() },
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
});
const getMovies = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${config.apiToken}`,
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }
    const data = await response.json();
    movies.value = data as Movies;
  } catch (error: any) {
    console.error("Error fetching movies:", error);
  }
};

onMounted(async () => {
  await getMovies();
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  minDate.value = `${year}-01-01`; // 1 de enero del año actual
  maxDate.value = `${year}-12-31`; // 31 de diciembre del año actual
});
</script>

<style scoped >

</style>
