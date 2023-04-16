import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";
import pwa from "./pwa";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  app: {
    head: {
      meta: [
        {
          name: "title",
          content: pwa.meta.title,
        },
        {
          name: "description",
          content: pwa.meta.description,
        },
        {
          name: "name",
          content: pwa.meta.name,
        },
        {
          name: "author",
          content: pwa.meta.author,
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
  },

  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },

  modules: [
    "@nuxt/image-edge",
    "@nuxtjs/strapi",
    "@kevinmarrec/nuxt-pwa",
    "nuxt-windicss",
  ],

  runtimeConfig: {
    public: {
      strapi: {
        url: process.env.STRAPI_URL || "http://localhost:1337",
      },
    },
  },

  css: [
    "~/assets/index.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "virtual:windi.css",
    "virtual:windi-devtools",
  ],

  pwa,

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ["project.d.ts"],
      },
    },
  },

  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
  },

  router: {
    options: {
      linkActiveClass: "text-black font-bold",
    },
  },

  image: {
    dir: "assets/images",
    cloudinary: {
      baseURL: "https://res.cloudinary.com/novanet-studio/image/upload/",
    },
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1920,
    },
  },
});
