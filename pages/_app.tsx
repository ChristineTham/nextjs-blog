import '../styles/global.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="/browserconfig.xml" name="msapplication-config" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS for blog posts"
          href={process.env.WEBSITE_URL + '/rss'}
        />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
