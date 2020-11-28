import Head from 'next/head'
import Navbar from './Notus/Navbar'
import NavbarItem from './Notus/NavbarItem'
import Header from './MerakiUI/Header'
import Footer from './Notus/Footer'
import { FrontMatter } from '../pages/posts/[id]'

const BlogLayout: React.FC<{ meta: FrontMatter }> = ({ children, meta }) => {
  return (
    <>
      <Navbar>
        <NavbarItem href="/about">About</NavbarItem>
        <NavbarItem href="/blog">Blog</NavbarItem>
      </Navbar>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header title={meta.title} />
      <main className="mt-8 md:mt-10 pb-40 relative bg-white">
        <article className="prose lg:prose-xl prose-indigo mx-auto">{children}</article>
      </main>
      <Footer />
    </>
  )
}
export default BlogLayout
