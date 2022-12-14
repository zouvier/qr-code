/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./*html'],
  theme: {
    extend: {
      colors:{ 
        'qr-white':'hsl(0, 0%, 100%)',
        'qr-gray':'hsl(212, 45%, 89%)',
        'qr-gblue':'hsl(220, 15%, 55%)',
        'qr-dblue':'hsl(218, 44%, 22%)',
      },
      fontFamily:{
        'outfit':['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
// - White: hsl(0, 0%, 100%)
// - Light gray: hsl(212, 45%, 89%)
// - Grayish blue: hsl(220, 15%, 55%)
// - Dark blue: hsl(218, 44%, 22%)