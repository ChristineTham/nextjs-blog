// external modules
import { NextSeo, BlogJsonLd } from 'next-seo'
import { GetStaticProps } from 'next'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'

// components
import Layout from '../components/layout'
import Hero from '../components/tailblocks/Hero'
import What from '../components/tailblocks/What'
import WhoWhy from '../components/tailblocks/WhoWhy'
import Section from '../components/tailblocks/Section'
import Article from '../components/tailblocks/Article'
import CTA from '../components/tailblocks/CTA'
import { getPosts, PostMeta } from '../lib/postutils'
import { generateSitemap, generateRSS } from '../lib/generate'

import { site } from '../global'

const POSTS_PER_PAGE = 6

const Home: React.FC<{ posts: PostMeta[]; buildDate: string }> = ({ posts, buildDate }) => {
  const [offset, setOffset] = useState(0)

  const handlePageClick = (data) => {
    const selected = data.selected
    const offset = Math.ceil(selected * POSTS_PER_PAGE)
    setOffset(offset)
  }

  return (
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
      <Section
        title="How"
        description="Latest articles relating to steps along my learning process. Please visit the Posts page to view all posts and filter by category."
        className="flex flex-col items-center"
        backgroundColor="bg-rosely6"
        width="w-16"
      >
        <ReactPaginate
          previousLinkClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-rosely3 bg-white text-sm font-medium text-rosely0 hover:bg-rosely8"
          previousLabel={
            <>
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          }
          nextLinkClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-rosely3 bg-white text-sm font-medium text-rosely0 hover:bg-rosely8"
          nextLabel={
            <>
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          }
          pageLinkClassName="relative inline-flex items-center px-4 py-2 border border-rosely3 bg-white text-sm font-medium text-rosely0 hover:bg-rosely8"
          breakLabel={'...'}
          breakLinkClassName="relative inline-flex items-center px-4 py-2 border border-rosely3 bg-rosely5 text-sm font-medium text-rosely3"
          pageCount={Math.ceil(posts.length / POSTS_PER_PAGE)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="relative z-0 inline-flex shadow-sm -space-x-px"
          activeLinkClassName="relative inline-flex items-center px-4 py-2 border border-rosely7 bg-rosely4 text-sm font-medium text-rosely0 hover:bg-rosely8"
        />
        <div className="flex flex-wrap px-6 pt-6">
          {posts.slice(offset, offset + POSTS_PER_PAGE).map(({ id, meta }) => (
            <Article href={`/posts/${id}`} meta={meta} key={id} />
          ))}
        </div>
      </Section>
      <CTA />
    </Layout>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts().filter((post) => !post.meta.draft)
  const buildDate = new Date().toISOString()

  generateSitemap()
  generateRSS(posts)

  return {
    props: {
      posts,
      buildDate
    }
  }
}
