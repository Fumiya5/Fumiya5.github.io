/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: 
    {
      fontFamily: {
        'mainfont': ['Roboto', 'Archivo Black',],
        'secondaryf': ['Allura'],
      },
      colors: {
        'main-red': '#d90429',
        'main-navbar': '#2b2d42'
      },
      screens: {
        '2xl': '1320px',
      },
    }
  },
  plugins: [],
}
