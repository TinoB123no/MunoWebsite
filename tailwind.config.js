/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'hide': ["Kablammo", "cursive"],
      },
      colors: {
              transparent: 'transparent',
              current: 'currentColor',
              black: colors.black,
              white: colors.white,
              gray: colors.gray,
              emerald: colors.emerald,
              indigo: colors.indigo,
              yellow: colors.yellow,
      },
    },
  },
  plugins: [],
}
