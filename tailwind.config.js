const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './posts/**/*.mdx'],
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
      },
      spacing: {
        128: '32rem'
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#27272a',
            a: {
              color: '#b565a7',
              '&:hover': {
                color: '#b0879b'
              }
            },
            blockquote: {
              borderLeftColor: '#93a9d1'
            },
            hr: {
              borderColor: '#93a9d1',
              borderTopWidth: 2
            },
            'ul > li::before': {
              backgroundColor: '#93a9d1'
            },
            'code::before': {
              content: ''
            },
            'code::after': {
              content: ''
            },
            'pre code::before': {
              content: ''
            },
            'pre code::after': {
              content: ''
            },
            h1: {
              color: '#85677b'
            },
            h2: {
              color: '#85677b'
            },
            h3: {
              color: '#85677b'
            },
            thead: {
              borderBottomWidth: '2px',
              borderBottomColor: '#93a9d1'
            },
            'tbody tr': {
              borderBottomColor: '#93a9d1'
            }
          }
        }
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
}
