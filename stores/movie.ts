import { defineStore } from "pinia";

export const useMovieStore = defineStore("movie", () => {
  const config = useRuntimeConfig();
  const movies: Ref<Movies> = ref({
    dates: { maximum: new Date(), minimum: new Date() },
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const getMovies = async (url: URL) => {
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

  const searchMovies = async (input: string | URL) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=bc1d80b6495d7fd0ed617c32637e095f&language=en-US&page=1&query=${input}`
    )
      .then((res) => res.json())
      .then((res) => (movies.value = res))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return {
    getMovies,
    searchMovies,
    movies,
  };
});
