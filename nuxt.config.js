export default {
  ssr: false,
  target: "static",
  server: {
    host: "0.0.0.0"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Call My Cake",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Call My Cake is a small startup by home bakers. Our cakes have a home touch to it which provides a unique flavor then the cakes that you will usually get in the market. The cakes are freshly made once we receive your order and delivered to your door."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "/css/line-awesome.min.css"
      }
    ],
    script: []
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/init.js", "~/plugins/utils.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://sentry.nuxtjs.org/guide/setup
    "@nuxtjs/sentry"
  ],
  sentry: {
    dsn:
      "https://e93d6c36032542828117806f46401c24@o999172.ingest.sentry.io/5958073",
    disabled: false,
    config: {
      environment: "development"
    },
    tracing: true,
    clientConfig: {
      beforeSend(event) {
        return event;
      },
      release: `callmycake@1.0.0`
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL:
      process.env.NODE_ENV === "development"
        ? "https://api.callmycake.com/"
        : "https://api.callmycake.com/"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
