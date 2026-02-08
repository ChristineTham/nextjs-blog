import Head from 'next/head'

interface SocialProfileJsonLdProps {
  type: string
  name: string
  url: string
  sameAs: string[]
}

export const SocialProfileJsonLd = ({ type, name, url, sameAs }: SocialProfileJsonLdProps) => {
  const json = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    url,
    sameAs
  }
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </Head>
  )
}
