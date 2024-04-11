export const useSearch = () => {
  const input = ref("");
  const loading = ref(false);
  const store = useMovieStore();
  const search = async (values: string) => {
    loading.value = true;

    try {
      if (values === "") {
        await store.getMovies();
      } else {
        await store.searchMovies(values);
      }
    } catch (error: any) {
      console.error("Error fetching movies:", error);
    }finally {
      loading.value = false;
    }
  };

 

  watch(input, async (newValue, oldValue) => {
    if (newValue !== oldValue) {
      await search(newValue)
    }
  });

  onMounted(async () => {
    await search(input.value);
  });

  return {
    loading,
    search,
    input,
    movies: computed(() => store.movies.results),
  };
};
