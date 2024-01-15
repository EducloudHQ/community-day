// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtseo/module",
    "@nuxt/image",
    "@nuxtjs/eslint-module",
    "nuxt-og-image",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
