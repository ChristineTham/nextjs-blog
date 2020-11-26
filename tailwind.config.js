const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        rosely1: '#27272a'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
}
