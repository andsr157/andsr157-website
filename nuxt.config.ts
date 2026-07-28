// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/icon', '@nuxt/image'],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2026-07-28',
  build: {
    transpile: ['gsap'],
  },
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: false,
    tsConfig: {
      compilerOptions: {
        skipLibCheck: true,
      },
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})