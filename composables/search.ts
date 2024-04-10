export const useSearch = () => {
  const store = useMovieStore();
  const input: Ref<string> = ref("");

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
  watch(
    () => input.value,
    async (newValue, _) => {
      await search(newValue);
    }
  );
  onMounted(async () => {
    await search(input.value);
  });
  return {
    input,
    movies: computed(() => store.movies.results),
    pages: computed(() => store.movies.page),
    totalResults: computed(() => store.movies.total_results),
    totalPages: computed(() => store.movies.total_pages),
  };
};
