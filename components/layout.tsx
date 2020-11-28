import Head from 'next/head'

import Header from './tailblocks/Header'
import Footer from './Notus/Footer'

import { site } from '../global'

const Layout: React.FC<{ _home?: boolean }> = ({ children, _home }) => {
  return (
    <>
      <Head>
        <title>{site.title}</title>
      </Head>
      <Header />
      <main className="mt-32 md:mt-4 pb-20 relative">{children}</main>
      <Footer />
    </>
  )
}
export default Layout
