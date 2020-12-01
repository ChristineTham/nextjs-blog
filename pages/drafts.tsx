// external modules
import { GetStaticProps } from 'next'

// components
import Layout from '../components/layout'
import { getSortedPostsData, PostMeta } from '../lib/postutils'
import Articles from '../components/tailblocks/Articles'
import Article from '../components/tailblocks/Article'

const Drafts: React.FC<{ allPostsData: PostMeta[] }> = ({ allPostsData }) => (
  <Layout>
    <div className="h-24 w-full bg-rosely6"></div>
    <Articles
      title="Drafts"
      bgcolor="bg-rosely6"
      description="You have reached a 'secret' page containing draft posts."
    >
      {allPostsData.map(({ id, meta }) => (
        <Article href={`/posts/${id}`} meta={meta} key={id} />
      ))}
    </Articles>
  </Layout>
)
export default Drafts

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData().filter((post) => post.meta.draft)
  return {
    props: {
      allPostsData
    }
  }
}
