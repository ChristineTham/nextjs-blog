const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [require('remark-math')],
    rehypePlugins: [require('rehype-katex')]
  },
  extension: /\.mdx?$/
})
const withSvgr = require('next-plugin-svgr')

module.exports = withPlugins(
  [
    [
      withMDX,
      {
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
      }
    ],
    [withSvgr]
  ],
  {
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./scripts/generate')
      }

      return config
    }
  }
)
