// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Movie Explorer",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Movie Explorer" },
        { name: "keywords", content: "Nuxt " },
        { name: "author", content: "Angel Aguero" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/movie.ico" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  runtimeConfig: {
    apiKey: process.env.KEY,
    apiToken: process.env.TOKEN,
  },

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});
