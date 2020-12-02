import Head from 'next/head'
import Header from './tailblocks/Header'
import BlogHero from './tailblocks/BlogHero'
import Footer from './Notus/Footer'
import { NextSeo } from 'next-seo'
import { FrontMatter } from '../lib/postutils'
import { site } from '../global'

const BlogLayout: React.FC<{ meta: FrontMatter }> = ({ children, meta }) => {
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
          images: [
            {
              url: site.url + meta.featured_image.replace('.svg', '.png'),
              alt: meta.title
            }
          ]
        }}
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
