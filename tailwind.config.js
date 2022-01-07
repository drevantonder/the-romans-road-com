const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          ...colors.rose,
          600: '#902F29',
        },
      },
    },
  },
  plugins: [],
}
