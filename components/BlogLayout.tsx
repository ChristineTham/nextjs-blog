import Head from 'next/head'
import Header from './tailblocks/Header'
import BlogHero from './tailblocks/BlogHero'
import Footer from './Notus/Footer'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import { FrontMatter } from '../lib/postutils'
import { site } from '../global'

const BlogLayout: React.FC<{ url: string; meta: FrontMatter }> = ({ children, url, meta }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: meta.description,
          type: 'article',
          article: {
            publishedTime: meta.date,
            section: meta.categories[0],
            authors: [meta.author],
            tags: meta.tags
          },
          images: [
            {
              url: site.url + meta.featured_image.replace('.svg', '.png'),
              alt: meta.title
            }
          ]
        }}
      />
      <ArticleJsonLd
        url={url}
        title={meta.title}
        images={[site.url + meta.featured_image.replace('.svg', '.png')]}
        datePublished={meta.date}
        dateModified={meta.date}
        authorName={[meta.author]}
        publisherName={meta.author}
        publisherLogo={site.url + '/android-chrome-512x512.png'}
        description={meta.description}
      />
      <Header />
      <BlogHero meta={meta} />
      <main className="mt-8 md:mt-10 pb-40 relative bg-white">
        <article className="prose mx-auto">{children}</article>
      </main>
      <Footer />
    </>
  )
}
export default BlogLayout
