// Generate sitemap.xml and feed.xml

import fs from 'fs'
import { globby } from 'globby'
import RSS from 'rss'
import { PostMeta } from '../lib/postutils'

import { site } from '../global'

function addPage(page: string) {
  const path = page
    .replace('pages', '')
    .replace('.tsx', '')
    .replace('.mdx', '')
    .replace('posts', '/posts')
  const route = path === '/index' ? '' : path

  return `  <url>
    <loc>${`${site.url}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`
}

export async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'pages/**/*{.tsx,.mdx}',
    '!pages/_*.tsx',
    '!pages/posts/[id].tsx',
    '!pages/api'
  ])
  const posts = await globby(['posts/**/*.mdx'])
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
${posts.map(addPage).join('\n')}
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

export async function generateRSS(allPostData: PostMeta[]) {
  const feed = new RSS({
    title: site.title,
    description: site.description,
    site_url: site.url,
    feed_url: site.sitemap
  })

  function itemRSS(post: PostMeta) {
    feed.item({
      title: post.meta.title,
      description: post.meta.description,
      url: `${site.url}/${post.id}`,
      categories: post.meta.categories,
      date: post.meta.date,
      author: post.meta.author,
      enclosure: {
        url: `${site.url}${post.meta.featured_image.replace('.svg', '.png')}`,
        file: 'public' + post.meta.featured_image.replace('.svg', '.png')
      }
    })
  }

  allPostData.map(itemRSS)

  const rss = feed.xml({ indent: true })
  fs.writeFileSync('public/feed.xml', rss)
}
