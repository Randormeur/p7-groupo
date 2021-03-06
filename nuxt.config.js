export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  //  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "Groupamania: %s",
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css:  ['~/assets/sass/app.scss'],
  build: {
      extractCSS: true,
      loaders: {
          limit: 0,
      }
  },


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    ['cookie-universal-nuxt', { SameSite: 'true' }]
  ],
  auth: {
    strategies: {
        local: {
            endpoints: {
                // these are the API endpoints we created in Express
                login: {
                    url: '/auth/login',
                    method: 'post',
                    propertyName: 'token'
                },
                logout: true,
                user: {
                     url: '/auth/user',
                    method: 'get',
                    propertyName: 'user'
                }
            },
            
            token: {
                required: true,
                type: "Bearer"
            },
            
        }
    },
    redirect: {
          login: '/login', // User will be redirected to this path if login is required
          logout: '/', // User will be redirected to this path if after logout, current route is protectednpm
          home: '/posts' // User will be redirect to this path after login if accessed login page directly
    },
    rewriteRedirects: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    //baseURL: '/api',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  serverMiddleware:['~/serverMiddleware/index.js'
  ],
  router: {
    prefetchLinks: false
  },

}
