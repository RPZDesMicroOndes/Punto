// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    mongoUrl: "mongodb://localhost:3050/Punto",
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  }
})
