const withPlugins = require('next-compose-plugins')
// const withMDX = require('@next/mdx')({
//   options: {
//     remarkPlugins: [require('remark-math')],
//     rehypePlugins: [require('rehype-katex')]
//   },
//   extension: /\.mdx?$/
// })
const withSvgr = require('next-plugin-svgr')

module.exports = withPlugins(
  [
    // [
    //   withMDX,
    //   {
    //     pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
    //   }
    // ],
    [withSvgr]
  ],
  {
    i18n: {
      locales: ['en'],
      defaultLocale: 'en'
    },
    future: {
      webpack5: true
    }
  }
)
