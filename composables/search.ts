export const useSearch = () => {
  // Define minDate y maxDate como variables reactivas
  const minDate = ref("");
  const maxDate = ref("");
  const pending: Ref<boolean> = ref(false);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  minDate.value = `${year}-01-01`; // 1 de enero del año actual
  maxDate.value = `${year}-12-31`; // 31 de diciembre del año actual
  const url = ref(new URL(`https://api.themoviedb.org/3/discover/movie`));
  url.value.searchParams.append("api_key", "bc1d80b6495d7fd0ed617c32637e095f");
  url.value.searchParams.append("language", "en-US");
  url.value.searchParams.append("release_date.gte", minDate.value);
  url.value.searchParams.append("release_date.lte", maxDate.value);
  const store = useMovieStore();
  const input: Ref<string> = ref("");
  // Función para buscar películas
  const search = async (values: string) => {
    try {
      if (values === "") {
        await store.getMovies(url.value);
      } else {
        // Si hay texto en el input, buscar películas según el texto
        url.value.searchParams.set("query", values);
        await store.searchMovies(values);
      }
    } catch (error: any) {
      console.error("Error fetching movies:", error);
    }
  };

  

  // Watcher para buscar películas cuando el valor del input cambia
  watch(
    () => input.value,
    async (newValue, _) => {
      await search(newValue);
    }
  );

  // Obtener todas las películas al cargar la página
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
