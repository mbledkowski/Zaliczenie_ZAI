// https://nuxt.com/docs/api/configuration/nuxt-config
import messages from './i18n/messages';

export default defineNuxtConfig({
  pages: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    strict: true
  },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages
    }
  }
})
