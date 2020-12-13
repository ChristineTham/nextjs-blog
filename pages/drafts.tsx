import { NextSeo, BlogJsonLd } from 'next-seo'
// external modules
import { GetStaticProps } from 'next'

// components
import Layout from '../components/layout'
import { getPosts, PostMeta } from '../lib/postutils'
import Articles from '../components/tailblocks/Articles'
import Article from '../components/tailblocks/Article'

import { site } from '../global'

const Drafts: React.FC<{ allPostsData: PostMeta[]; buildDate: string }> = ({
  allPostsData,
  buildDate
}) => {
  const title = 'Draft Posts'
  const description = "You have reached a 'secret' page containing draft posts."
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
      <div className="h-24 w-full bg-rosely6"></div>
      <Articles title={title} bgcolor="bg-rosely6" description={description}>
        {allPostsData.map(({ id, meta }) => (
          <Article href={`/posts/${id}`} meta={meta} key={id} />
        ))}
      </Articles>
    </Layout>
  )
}
export default Drafts

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getPosts().filter((post) => post.meta.draft)
  const buildDate = new Date().toISOString()
  return {
    props: {
      allPostsData,
      buildDate
    }
  }
}
