const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rosely0: '#27272a',
        rosely1: '#615f5f',
        rosely2: '#85677b',
        rosely3: '#a49e9e',
        rosely4: '#f7caca',
        rosely5: '#f4dede',
        rosely6: '#f4eee8',
        rosely7: '#93a9d1',
        rosely8: '#be9cc1',
        rosely9: '#b0879b',
        rosely10: '#b565a7',
        rosely11: '#d2386c',
        rosely12: '#ec809e',
        rosely13: '#eada4f',
        rosely14: '#64bfa4',
        rosely15: '#919bc9',
        jamstack: '#F0047F'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
}
