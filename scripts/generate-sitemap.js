const fs = require('fs')
const globby = require('globby')

function addPage(page) {
  const path = page
    .replace('pages', '')
    .replace('.tsx', '')
    .replace('.md', '')
    .replace('posts', '/posts')
  const route = path === '/index' ? '' : path

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'pages/**/*{.tsx,.md}',
    'posts/**/*{.tsx,.mdx}',
    '!pages/_*.tsx',
    '!pages/posts/[id].tsx',
    '!pages/api'
  ])
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()
