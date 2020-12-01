const sitename = 'Learning Jamstack'
const title = 'Learning Jamstack'
const description =
  'My adventures learning how to build websites and apps in 2020 using the Jamstack architecture, auto workflows and modern build tools. Content is pre-rendered and served to a CDN and made dynamic through APIs and serverless functions.'

const SEO = {
  title,
  description,
  canonical: 'https://learning-jamstack.now.sh',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://learning-jamstack.now.sh/',
    site_name: sitename,
    title,
    description,
    images: [
      {
        url: 'https://learning-jamstack.now.sh/images/screenshot.png',
        alt: title,
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    handle: '@chris1tham',
    site: sitename,
    cardType: 'summary_large_image'
  }
}

export default SEO
