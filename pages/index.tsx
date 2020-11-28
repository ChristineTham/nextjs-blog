// external modules
// import Link from 'next/link'
import { GetStaticProps } from 'next'

// components
import Layout from '../components/layout'
import { getSortedPostsData, PostMeta } from '../lib/postutils'
import Hero from '../components/tailblocks/Hero'
import What from '../components/tailblocks/What'
import WhoWhy from '../components/tailblocks/WhoWhy'
import Articles from '../components/Articles'
import Article from '../components/Article'

// import { site } from '../global'

const Home: React.FC<{ allPostsData: PostMeta[] }> = ({ allPostsData }) => (
  <Layout>
    <Hero />
    <WhoWhy />
    <What />
    <Articles title="How">
      {allPostsData.map(({ id, date, title }) => (
        <Article href={`/posts/${id}`} title={title} date={date} key={id}>
          Read more ...
        </Article>
      ))}
    </Articles>
  </Layout>
)
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
