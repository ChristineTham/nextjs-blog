// external modules
import { NextSeo, BlogJsonLd } from 'next-seo'
import { GetStaticProps } from 'next'

// components
import Layout from '../components/layout'
import { getPosts, PostMeta } from '../lib/postutils'
import Hero from '../components/tailblocks/Hero'
import What from '../components/tailblocks/What'
import WhoWhy from '../components/tailblocks/WhoWhy'
import Articles from '../components/tailblocks/Articles'
import Article from '../components/tailblocks/Article'
import CTA from '../components/tailblocks/CTA'

import { site } from '../global'
import { generateSitemap, generateRSS } from '../lib/generate'

const Home: React.FC<{ allPostsData: PostMeta[]; buildDate: string }> = ({
  allPostsData,
  buildDate
}) => (
  <Layout>
    <NextSeo
      title={site.title}
      description={site.description}
      openGraph={{
        title: site.title,
        description: site.description
      }}
    />
    <BlogJsonLd
      url={site.url}
      title={site.title}
      images={[site.url + '/images/screenshot.png']}
      datePublished="2020-12-01"
      dateModified={buildDate}
      authorName={site.author}
      description={site.description}
    />
    <Hero />
    <WhoWhy />
    <What />
    <Articles
      title="How"
      description="Please follow my journey by reading articles relating to steps along my learning process. Please visit Posts page to filter by category."
    >
      {allPostsData.map(({ id, meta }) => (
        <Article href={`/posts/${id}`} meta={meta} key={id} />
      ))}
    </Articles>
    <CTA />
  </Layout>
)
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getPosts().filter((post) => !post.meta.draft)
  const buildDate = new Date().toISOString()

  generateSitemap()
  generateRSS(allPostsData)

  return {
    props: {
      allPostsData,
      buildDate
    }
  }
}
