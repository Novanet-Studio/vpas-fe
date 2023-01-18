import pwa from './pwa';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },

  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/strapi',
    '@kevinmarrec/nuxt-pwa',
    'nuxt-windicss',
  ],

  css: ['virtual:windi.css', 'virtual:windi-devtools'],

  pwa,

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ['project.d.ts'],
      },
    },
  },

  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
  },

  image: {
    dir: 'assets/images',
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },
});
