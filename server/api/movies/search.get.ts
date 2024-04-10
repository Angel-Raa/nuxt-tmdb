import { MOVIE_URL } from "@/server/constants/url";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const input = getQuery(event);
  const url = `${MOVIE_URL}?api_key=${config.apiToken}&language=en-US&page=1&query=${input}`;
  const response = await $fetch(url);
  return response;
});
