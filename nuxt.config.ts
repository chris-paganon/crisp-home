import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@nuxt/eslint", "shadcn-nuxt"],
  devtools: { enabled: true },

  app: {
    head: {
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
  css: ["~/assets/css/tailwind.css"],

  runtimeConfig: {
    public: {
      appEnv: "local",
      umamiEnabled: false,
      umamiScriptUrl: "",
      umamiWebsiteId: "",
    },
  },
  compatibilityDate: "2025-07-15",

  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        semi: true,
      },
    },
  },
});
