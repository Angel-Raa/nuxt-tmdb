// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Nuxt Movies",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Nuxt Movies" },
        { name: "keywords", content: "Nuxt " },
        { name: "author", content: "Angel Aguero" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/movie.ico" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  runtimeConfig: {
    apiKey: process.env.API_TOKEN,
    apiToken: process.env.API_KEY,

    public: {
      apiBase: process.env.PUBLIC_API_BASE,
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/image"],
});
