// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'MadoX',
      meta: [
        { name: 'description', content: 'MadoX' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: 'Madox' },
        { property: 'og:description', content: 'MadoX' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://madox.com' },
        { property: 'og:image', content: 'https://madox.com/thumbnail.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'MadoX' },
        { name: 'twitter:description', content: 'MadoX'},
        { name: 'twitter:image', content: 'https://madox.com/thumbnail.png' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js'
        }
      ]
    }
  },
  css: ['~/assets/styles/main.scss'],
  modules: ['@nuxtjs/color-mode', '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./store/**'],
  },

})