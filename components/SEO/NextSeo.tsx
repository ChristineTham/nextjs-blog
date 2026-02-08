import Head from 'next/head'
import { generateNextSeo, NextSeoProps } from 'next-seo/pages'

export type { NextSeoProps }

export const NextSeo = (props: NextSeoProps) => {
  return (
    <Head>
      {generateNextSeo(props)}
    </Head>
  )
}
