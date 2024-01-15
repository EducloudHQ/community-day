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

  site: {
    url: "https://www.educloud.academy",
    name: process.env.NAME || "AWS Community Cameroon",
    description:
      process.env.NUXT_PUBLIC_SITE_DESCRIPTION || "aws community Cameroon",
    defaultLocale: "en",
    identity: {
      type: "Organization",
    },
    twitter: "@educloudHQ",
    trailingSlash: true,
    indexable: true,
  },
  vite: {
    resolve: {
      alias: {
        "./runtimeConfig": "./runtimeConfig.browser",
      },
    },

    server: {
      fs: {
        strict: false,
      },
    },

    // temp-fix for dev, it breaks build for now (see: https://github.com/nuxt/framework/issues/4916)
    define: {
      "window.global": {},
    },
  },
});
