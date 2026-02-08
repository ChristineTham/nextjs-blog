import Head from 'next/head'
import Header from './tailblocks/Header'
import BlogHero from './tailblocks/BlogHero'
import CTA from './tailblocks/CTA'
import MyGallery from './Gallery'
import Footer from './Notus/Footer'
import { ArticleJsonLd } from 'next-seo'
import { NextSeo } from './SEO/NextSeo'
import { FrontMatter } from '../lib/postutils'
import { site } from '../global'

const BlogLayout: React.FC<{ children?: React.ReactNode; url: string; meta: FrontMatter }> = ({ children, url, meta }) => {
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
        headline={meta.title}
        image={[site.url + meta.featured_image.replace('.svg', '.png')]}
        datePublished={meta.date}
        dateModified={meta.date}
        author={[meta.author]}
        publisher={{
          name: meta.author,
          logo: site.url + '/android-chrome-512x512.png'
        }}
        description={meta.description}
      />
      <Header />
      <BlogHero meta={meta} />
      <main className="mt-8 md:mt-10 pb-40 relative bg-white">
        <article className="prose mx-auto">{children}</article>
      </main>
      {meta.images && <MyGallery photos={meta.images} dimensions={meta.image_dimensions} />}
      <CTA />
      <Footer />
    </>
  )
}
export default BlogLayout
