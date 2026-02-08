import Head from 'next/head'
import { Fragment } from 'react'
import defaultSeo from '../../next-seo.config'

interface OpenGraphMedia {
  url: string
  width?: number
  height?: number
  alt?: string
  type?: string
}

interface OpenGraphArticle {
  publishedTime?: string
  modifiedTime?: string
  expirationTime?: string
  section?: string
  authors?: string[]
  tags?: string[]
}

interface OpenGraphProfile {
  firstName?: string
  lastName?: string
  username?: string
  gender?: string
}

interface OpenGraph {
  url?: string
  type?: string
  title?: string
  description?: string
  images?: OpenGraphMedia[]
  article?: OpenGraphArticle
  profile?: OpenGraphProfile
  locale?: string
  site_name?: string
}

interface Twitter {
  handle?: string
  site?: string
  cardType?: string
}

export interface NextSeoProps {
  title?: string
  description?: string
  canonical?: string
  openGraph?: OpenGraph
  twitter?: Twitter
}

export const NextSeo = (props: NextSeoProps) => {
  const config = defaultSeo as unknown as NextSeoProps
  const title = props.title || config.openGraph?.title || config.title
  const description = props.description || config.openGraph?.description || config.description
  const canonical = props.canonical || config.canonical

  const og = {
    ...config.openGraph,
    ...props.openGraph,
    images: props.openGraph?.images || config.openGraph?.images,
  }

  const twitter = {
    ...config.twitter,
    ...props.twitter
  }

  // Determine title to use in <title> and og:title
  // If prop title is provided, use it.
  // We might want a template like "Title | Site Name".
  // But let's stick to simple replacement for now.

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} key="description" />}
      {canonical && <link rel="canonical" href={canonical} key="canonical" />}

      {og.type && <meta property="og:type" content={og.type} key="og:type" />}
      {og.title && <meta property="og:title" content={og.title} key="og:title" />}
      {og.description && <meta property="og:description" content={og.description} key="og:description" />}
      {og.site_name && <meta property="og:site_name" content={og.site_name} key="og:site_name" />}
      {og.locale && <meta property="og:locale" content={og.locale} key="og:locale" />}
      {og.url && <meta property="og:url" content={og.url} key="og:url" />}

      {og.images?.map((img, index) => (
         <Fragment key={`og:image:${index}`}>
           <meta property="og:image" content={img.url} key={`og:image:url:${index}`} />
           {img.width && <meta property="og:image:width" content={img.width.toString()} key={`og:image:width:${index}`} />}
           {img.height && <meta property="og:image:height" content={img.height.toString()} key={`og:image:height:${index}`} />}
           {img.alt && <meta property="og:image:alt" content={img.alt} key={`og:image:alt:${index}`} />}
           {img.type && <meta property="og:image:type" content={img.type} key={`og:image:type:${index}`} />}
         </Fragment>
      ))}

      {/* Article tags */}
      {og.type === 'article' && og.article && (
        <>
          {og.article.publishedTime && <meta property="article:published_time" content={og.article.publishedTime} key="article:published_time" />}
          {og.article.modifiedTime && <meta property="article:modified_time" content={og.article.modifiedTime} key="article:modified_time" />}
          {og.article.expirationTime && <meta property="article:expiration_time" content={og.article.expirationTime} key="article:expiration_time" />}
          {og.article.section && <meta property="article:section" content={og.article.section} key="article:section" />}
          {og.article.authors?.map((author, i) => <meta key={`article:author:${i}`} property="article:author" content={author} />)}
          {og.article.tags?.map((tag, i) => <meta key={`article:tag:${i}`} property="article:tag" content={tag} />)}
        </>
      )}

      {/* Profile tags */}
      {og.type === 'profile' && og.profile && (
        <>
            {og.profile.firstName && <meta property="profile:first_name" content={og.profile.firstName} key="profile:first_name" />}
            {og.profile.lastName && <meta property="profile:last_name" content={og.profile.lastName} key="profile:last_name" />}
            {og.profile.username && <meta property="profile:username" content={og.profile.username} key="profile:username" />}
            {og.profile.gender && <meta property="profile:gender" content={og.profile.gender} key="profile:gender" />}
        </>
      )}

      {twitter.handle && <meta name="twitter:creator" content={twitter.handle} key="twitter:creator" />}
      {twitter.site && <meta name="twitter:site" content={twitter.site} key="twitter:site" />}
      {twitter.cardType && <meta name="twitter:card" content={twitter.cardType} key="twitter:card" />}
    </Head>
  )
}
