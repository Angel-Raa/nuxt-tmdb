import { defineStore } from "pinia";

export const useMovieStore = defineStore("movie", () => {
  const pending: Ref<boolean> = ref(false);
  const credits: Ref<Credits> = ref({
    id: 0,
    cast: [],
  });
  const details: Ref<Details> = ref({
    adult: false,
    backdrop_path: "",
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: new Date(),
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  });

  const movies: Ref<Movies> = ref({
    dates: { maximum: new Date(), minimum: new Date() },
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const getMovies = async () => {
    const res = await $fetch<Movies>("/api/movies/movie");
    movies.value = res;
  };

  const searchMovies = async (input: string) => {
    const res = await $fetch<Movies>(`/api/movies/search/${input.trim}`);
    movies.value = res;
  };

  const getMovieById = async (movieId: string | number) => {
    const res = await $fetch<Details>(`/api/${movieId}`);
    details.value = res;
  };

  const getCredits = async (movieId: string | number) => {
    const res = await $fetch<Credits>(`/api/movies/credits/${movieId}`);
    credits.value = res;
  };

  return {
    getMovies,
    searchMovies,
    getMovieById,
    movies,
    details,
    pending,
    credits,
    getCredits,
  };
});
