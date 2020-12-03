import { NextSeo, BlogJsonLd } from 'next-seo'
// external modules
import { GetStaticProps } from 'next'

// components
import Layout from '../components/layout'
import { getSortedPostsData, PostMeta } from '../lib/postutils'
import Articles from '../components/tailblocks/Articles'
import Article from '../components/tailblocks/Article'

import { site } from '../global'

const Posts: React.FC<{ allPostsData: PostMeta[]; buildDate: string }> = ({
  allPostsData,
  buildDate
}) => {
  const title = 'Posts'
  const description =
    'Please follow my journey by reading articles relating to steps along my learning process.'
  return (
    <Layout>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description
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
      <div className="h-24 w-full bg-rosely5"></div>
      <Articles title="Posts" bgcolor="bg-rosely5">
        {allPostsData.map(({ id, meta }) => (
          <Article href={`/posts/${id}`} meta={meta} key={id} />
        ))}
      </Articles>
    </Layout>
  )
}
export default Posts

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
