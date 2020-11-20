// Generate sitemap.xml and feed.xml

const fs = require('fs')
const globby = require('globby')
const matter = require('gray-matter')
const RSS = require('rss')

function addPage(page) {
  const path = page
    .replace('pages', '')
    .replace('.tsx', '')
    .replace('.mdx', '')
    .replace('posts', '/posts')
  const route = path === '/index' ? '' : path

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`
}

function getPost(file) {
  const fileContents = fs.readFileSync(file, 'utf8')

  // Use gray-matter to parse the post metadata section
  const post = matter(fileContents)
  return { fileName: file, data: post.data }
}

function byDate(a, b) {
  const date1 = new Date(a.data.date)
  const date2 = new Date(b.data.date)
  if (date1 > date2) return -1
  if (date1 < date2) return 1
  return 0
}

async function generate() {
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

  const feed = new RSS({
    title: 'Chris Tham',
    site_url: process.env.WEBSITE_URL,
    feed_url: process.env.WEBSITE_URL + '/feed.xml'
  })

  function itemRSS(post) {
    feed.item({
      title: post.data.title,
      guid: post.fileName,
      url: `${process.env.WEBSITE_URL}/${post.fileName}`,
      date: post.data.date
      // description: post.data.frontmatter.description,
      // author: post.data.frontmatter.author
    })
  }

  posts.map(getPost).sort(byDate).map(itemRSS)

  const rss = feed.xml({ indent: true })
  fs.writeFileSync('public/feed.xml', rss)
}

generate()
