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

  const getMovies = async (url: URL) => {
    try {
      const response = await fetch(url, {
        headers: {
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
    pending.value = true;
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=bc1d80b6495d7fd0ed617c32637e095f&language=en-US&page=1&query=${input}`
    )
      .then((res) => res.json())
      .then((res) => (movies.value = res))
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => (pending.value = false));
  };

  const getMovieById = async (movieId: string | number) => {
    pending.value = true;
    await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzFkODBiNjQ5NWQ3ZmQwZWQ2MTdjMzI2MzdlMDk1ZiIsInN1YiI6IjY2MTM0OGM1OTQwOGVjMDE2MzJhMmE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JY7JepRVeXPq8DqzPSm6UgyMt0zwq098ID33jGKMLS0`,
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => (details.value = res))
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => (pending.value = false));
  };

  const getCredits = async (movieId: string | number) => {
    pending.value = true;
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzFkODBiNjQ5NWQ3ZmQwZWQ2MTdjMzI2MzdlMDk1ZiIsInN1YiI6IjY2MTM0OGM1OTQwOGVjMDE2MzJhMmE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JY7JepRVeXPq8DqzPSm6UgyMt0zwq098ID33jGKMLS0`,
          Accept: "application/json",
        },
      }
    );

    try {
      if (res.ok) {
        const data = await res.json();
        credits.value = data;
      } else {
        throw new Error("Los datos recibidos no son válidos.");
      }
    } catch (error: any) {
      console.error("Error al obtener los datos:", error);
    } finally {
      pending.value = false;
    }
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
