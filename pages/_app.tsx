import '../styles/index.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import { site } from '../global'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  document.documentElement.lang = 'en-au'
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        {/*<meta content="width=device-width, initial-scale=1" name="viewport" />*/}
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="/browserconfig.xml" name="msapplication-config" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS for blog posts"
          href={site.url + '/rss'}
        />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
export default App
