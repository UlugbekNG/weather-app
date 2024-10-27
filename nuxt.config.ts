// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "@nuxt/image",
    'nuxt-icons'
  ],
  compatibilityDate: "2024-10-22",
  runtimeConfig: {
    baseUrl: '',
    public: {
      weatherApiKey: ''
    }
  },
  plugins: [
    {src: "~/plugins/api.ts", mode: "client"},
  ],
  image: {
    dir: 'assets/icons',
  }
})
