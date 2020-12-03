// external modules
import { NextSeo, BlogJsonLd } from 'next-seo'
import { GetStaticProps } from 'next'

// components
import Layout from '../components/layout'
import { getSortedPostsData, PostMeta } from '../lib/postutils'
import Hero from '../components/tailblocks/Hero'
import What from '../components/tailblocks/What'
import WhoWhy from '../components/tailblocks/WhoWhy'
import Articles from '../components/tailblocks/Articles'
import Article from '../components/tailblocks/Article'

import { site } from '../global'

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
    <Articles title="How">
      {allPostsData.map(({ id, meta }) => (
        <Article href={`/posts/${id}`} meta={meta} key={id} />
      ))}
    </Articles>
  </Layout>
)
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData().filter((post) => !post.meta.draft)
  const buildDate = new Date().toISOString()
  return {
    props: {
      allPostsData,
      buildDate
    }
  }
}
