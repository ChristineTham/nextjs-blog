// Generate sitemap.xml and feed.xml

const fs = require('fs')
const globby = require('globby')
const matter = require('gray-matter')
const RSS = require('rss')

const site = {
  url: 'https://learning-jamstack.now.sh',
  title: 'Learning Jamstack',
  description:
    'My adventures learning how to build websites and apps in 2020 using static web apps,serverless backends, headless content management systems, and non relational data storage.',
  repository: 'https://github.com/ChristineTham/nextjs-blog',
  sitemap: 'https://learning-jamstack.now.sh/sitemap.xml',
  rss: 'https://learning-jamstack.now.sh/feed.xml',
  author: 'Chris Tham',
  email: 'chris.tham@hellotham.com',
  website: 'https://christham.net',
  company: 'Hello Tham',
  company_url: 'https://hellotham.com',
  facebook: 'https://www.facebook.com/chris1.tham',
  twitter: 'https://twitter.com/Chris1Tham',
  github: 'https://github.com/ChristineTham',
  linkedin: 'https://www.linkedin.com/in/christham/'
}

function addPage(page) {
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
    title: site.title,
    description: site.description,
    site_url: site.url,
    feed_url: site.sitemap
  })

  function itemRSS(post) {
    feed.item({
      title: post.data.title,
      guid: post.fileName,
      url: `${site.url}/${post.fileName}`,
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
