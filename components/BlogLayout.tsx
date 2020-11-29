import Head from 'next/head'
import Header from './tailblocks/Header'
import BlogHero from './tailblocks/BlogHero'
import Footer from './Notus/Footer'
import { FrontMatter } from '../lib/postutils'

const BlogLayout: React.FC<{ meta: FrontMatter }> = ({ children, meta }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
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
