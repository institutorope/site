// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@nuxt/image", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Livvic: [100, 200, 300, 400, 500, 600, 700, 900],
    },
  },
});
