const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [require('remark-math')],
    rehypePlugins: [require('rehype-highlight'), require('rehype-katex')]
  },
  extension: /\.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    return config
  }
})
