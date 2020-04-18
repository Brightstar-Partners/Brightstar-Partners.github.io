  let defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
  theme: {
    fontFamily: {
      'display': ['Signika', 'sans-serif'],
    },
    extend: {
      colors: {
        indigo: {
          '700': '#384a9b',
        }
      }
    }
  }
}
