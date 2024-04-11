export const useSearch = () => {
  const input = ref("");
  const store = useMovieStore();
  const search = async (values: string) => {
    try {
      if (values === "") {
        await store.getMovies();
      } else {
        await store.searchMovies(values);
      }
    } catch (error: any) {
      console.error("Error fetching movies:", error);
    }
  };

  watch(input, async (newValue, oldValue) => {
    if (newValue !== oldValue) {
      await search(newValue);
    }
  });

  onMounted(async () => {
    await search(input.value);
  });

  return {
    search,
    input,
    movies: computed(() => store.movies.results),
    pages: computed(() => store.movies.page),
    totalResults: computed(() => store.movies.total_results),
    totalPages: computed(() => store.movies.total_pages),
  };
};
