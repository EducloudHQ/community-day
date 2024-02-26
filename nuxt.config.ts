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
    name: "AWS Community Day Cameroon",
    description: "aws community day Cameroon",
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
  app: {
    head: {
      script: [
        {
          src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCSK4vqrOG3caqUr6dxAVhA7MrdMmq63q0&callback=initMap",
          async: true,
          defer: true,
        },
        {
          src: "https://code.jquery.com/jquery-3.1.1.min.js",
          integrity: "sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=",
          crossorigin: "anonymous",
        },
        {
          src: "js/site.js",
        },
        {
          src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
          type: "text/javascript",
        },
        {
          src: "https://www.googletagmanager.com/gtag/js?id=UA-123754553-1",
          async: true,
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
          type: "text/css",
        },
      ],
    },
  },
});
