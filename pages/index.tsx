import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/postutils'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import Nav from '../components/nav'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}): React.ReactElement {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <Nav />
        <div className="py-20">
          <h1 className="text-5xl text-center text-accent-1">Next.js + Tailwind CSS</h1>
        </div>
      </div>
      <section className={utilStyles.headingMd}>
        <p>artist, consultant, cyclist, designer, musician, photograher, world traveller</p>
        <p>
          I live in Sydney, Australia and this is a personal web site where I post articles relating
          to my interests.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <ul>
          <li>
            <Link href="/cat">
              <a>The Cat (AMP-first Page)</a>
            </Link>
          </li>
          <li>
            <Link href="/dog">
              <a>The Dog (Hybrid AMP Page)</a>
            </Link>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
