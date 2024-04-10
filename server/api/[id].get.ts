export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const movieId = getRouterParam(event, "id");
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const res = await $fetch(url, {
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
    },
  });
  return res;
});
