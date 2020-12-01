import Head from 'next/head'
import { useAmp } from 'next/amp'
import Link from 'next/link'

export const config = {
  amp: true
}

// Any element you create will be accepted
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'amp-img': any
    }
  }
}

export default function SampleAmpPage(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isAmp = useAmp()

  return (
    <>
      <Head>
        <title>Sample AMP Page</title>
      </Head>
      <Link href="/">
        <a>Back to Home Page</a>
      </Link>
      <main className="mt-24 mx-auto prose-lg">
        <h1 className="mt-24">Sample AMP Page</h1>
        <p className="caption">AMP image below</p>
        <amp-img
          alt="Mountains"
          width="550"
          height="368"
          layout="responsive"
          src="https://amp.dev/static/inline-examples/images/mountains.webp"
        >
          <amp-img
            alt="Mountains"
            fallback=""
            width="550"
            height="368"
            layout="responsive"
            src="https://amp.dev/static/inline-examples/images/mountains.jpg"
          ></amp-img>
        </amp-img>
        <p>Hello World!</p>
      </main>
    </>
  )
}
