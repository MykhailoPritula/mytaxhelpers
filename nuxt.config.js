export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MyTaxHelpers',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/reset.scss'
  ],
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-sweetalert2',
    '@nuxtjs/dotenv'
  ],

  router: {
    // base: '/',
    base: '/mytaxhelpers/',
    mode: 'history',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'error',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue'),
      })
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  generate: {
    // dir: './dist_server'
    dir: './dist'
  },
  build: {
    // target: 'server'
    target: 'static'
  },

  // Server Middleware
  server: {
    port: process.env.PORT,
    host: process.env.HOST
  },
  serverMiddleware: [
    '~/api/index.js'
  ]
}

// .nuxt
// api
// static
// server
// package.json
// nuxt.config.js
