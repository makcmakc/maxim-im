// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    },
  },
  // nitro: {
  //   storage: {
  //     'redis': {
  //       driver: 'redis',
  //       /* redis connector options */
  //       port: 6379, // Redis port
  //       host: "127.0.0.1", // Redis host
  //       username: "", // needs Redis >= 6
  //       password: "",
  //       db: 0, // Defaults to 0
  //       tls: {} // tls/ssl
  //     }
  //   }
  // },
  buildModules: ['@nuxtjs/color-mode'],
  modules: ['@nuxtjs/color-mode', 'nuxt-icons'],
  css: ['@/assets/main.scss']
})
