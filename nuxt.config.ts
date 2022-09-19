import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
    strict: true
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '@/assets/css/main.css'
  ],
  meta: {
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/logo/Stash_Logo_Full.svg'}
    ]
  }
})
