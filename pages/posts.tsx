// external modules
import { GetStaticProps } from 'next'

// components
import Layout from '../components/layout'
import { getSortedPostsData, PostMeta } from '../lib/postutils'
import Articles from '../components/tailblocks/Articles'
import Article from '../components/tailblocks/Article'

const Posts: React.FC<{ allPostsData: PostMeta[] }> = ({ allPostsData }) => (
  <Layout>
    <Articles title="Posts">
      {allPostsData.map(({ id, meta }) => (
        <Article href={`/posts/${id}`} meta={meta} key={id} />
      ))}
    </Articles>
  </Layout>
)
export default Posts

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData().filter((post) => !post.meta.draft)
  return {
    props: {
      allPostsData
    }
  }
}
