/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html,css}',
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '821px'
      },
      fontFamily: {
        'Tungsten-bold': 'Tungsten-bold, Arial, serif',
        'Tungsten-semibold': 'Tungsten-semibold, Arial, serif',
        'helvetica': 'Helvetica, Arial, sans-serif'
      }
    },
  },
  plugins: [],
}

