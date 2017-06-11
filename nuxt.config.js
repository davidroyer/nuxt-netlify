const { join } = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600|Vollkorn' }
    ]
  },

  build: {
    vendor: ['axios', 'vuetify']
  },
  plugins: ['~plugins/vuetify.js'],

  /*
  ** Global CSS
  */
  css: [
    { src: join(__dirname, 'css/app.styl'), lang: 'styl' },
    { src: '~assets/css/main.scss', lang: 'scss'}
  ],
  // css: [
  //   { src: '~assets/css/main.scss', lang: 'scss'}
  // ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

}
