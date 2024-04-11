import { MOVIE_URL } from "@/server/constants/url";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const id = getRouterParam(event, "id");
  const url = `${MOVIE_URL}?api_key=${config.apiKey}&language=en-US&page=1&query=${id}`;
  const response = await $fetch(url, {
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
  });
  return response;
});
