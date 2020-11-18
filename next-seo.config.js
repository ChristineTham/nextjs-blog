const sitename = 'ChrisTham'
const title = 'Chris Tham - Personal Web Page'
const description = 'artist, consultant, cyclist, designer, musician, photograher, world traveller'

const SEO = {
  title,
  description,
  canonical: 'https://leerob.io',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://christham-website.now.sh/',
    site_name: sitename,
    title,
    description,
    images: [
      {
        url: 'https://christham-website.now.sh/images/profile.jpg',
        alt: title,
        width: 500,
        height: 500,
      },
    ],
  },
  twitter: {
    handle: '@chris1tham',
    site: sitename,
    cardType: 'summary_large_image',
  },
}

export default SEO