// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "@nuxt/image"],
  googleFonts: {
    families: {
      Inter: "200..700",
    },
    display: "swap",
  },
});