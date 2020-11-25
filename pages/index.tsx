// external modules
import Link from 'next/link'
import { GetStaticProps } from 'next'

// components
import Layout from '../components/layout'
import { getSortedPostsData, PostMeta } from '../lib/postutils'
import Hero from '../components/MerakiUI/Hero'
import Articles from '../components/Articles'
import Article from '../components/Article'

import { site } from '../global'

const Home: React.FC<{ allPostsData: PostMeta[] }> = ({ allPostsData }) => (
  <Layout _home>
    <Hero>
      <div className="pt-32 sm:pt-0">
        <h2 className="font-semibold text-4xl text-gray-700">{site.title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">{site.description} </p>
        <div className="mt-12">
          <Link href="/blog">
            <a className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-purple-600 active:bg-purple-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
              View Articles
            </a>
          </Link>
          <a
            href={site.repository}
            className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-600 active:bg-pink-700 uppercase text-sm shadow hover:shadow-lg"
            target="_blank"
            rel="noreferrer"
          >
            Github Repo
          </a>
        </div>
      </div>
    </Hero>
    <Articles>
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
