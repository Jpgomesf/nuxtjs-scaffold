// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.deepPurple.darken4,
            secondary: colors.indigo.lighten2,
            accent: '#B388FF',
          }
        },
        dark: {
          dark: true,
          colors: {
            primary: '#2196F3',
            secondary: '#424242',
            accent: '#FF4081',
          }
        }
      }
    }
  })
  app.vueApp.use(vuetify)
})
