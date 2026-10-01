import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@nuxt/eslint", "shadcn-nuxt"],
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        {
          rel: "preload",
          href: "/fonts/aeonikpro/aeonikpro_regular.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/aeonikpro/aeonikpro_medium.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
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
