import { NextSeo } from 'next-seo'
// external modules
import { GetStaticProps } from 'next'

// components
import Layout from '../components/layout'
import { getSortedPostsData, PostMeta } from '../lib/postutils'
import Articles from '../components/tailblocks/Articles'
import Article from '../components/tailblocks/Article'

const Posts: React.FC<{ allPostsData: PostMeta[] }> = ({ allPostsData }) => {
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
  return {
    props: {
      allPostsData
    }
  }
}
