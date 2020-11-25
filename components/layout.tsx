import Head from 'next/head'

import Navbar from './Navbar'
import NavbarItem from './NavbarItem'
import Footer from './Footer'

import { site } from '../global'

const Layout: React.FC<{ _home?: boolean }> = ({ children, _home }) => {
  return (
    <>
      <Navbar>
        <NavbarItem href="/about">About</NavbarItem>
        <NavbarItem href="/blog">Blog</NavbarItem>
      </Navbar>
      <Head>
        <title>{site.title}</title>
      </Head>
      <main className="mt-48 md:mt-40 pb-40 relative bg-pink-100">{children}</main>
      <Footer />
    </>
  )
}
export default Layout
