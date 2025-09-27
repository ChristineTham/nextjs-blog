import { NextSeo, ArticleJsonLd } from 'next-seo'
// external modules
import { GetStaticProps } from 'next'
import { Listbox, Transition } from '@headlessui/react'
import { useState } from 'react'

// components
import Layout from '../components/layout'
import { getPosts, getCategories, PostMeta } from '../lib/postutils'
import Articles from '../components/tailblocks/Articles'
import Article from '../components/tailblocks/Article'
import CTA from '../components/tailblocks/CTA'

import { site } from '../global'

const Posts: React.FC<{ posts: PostMeta[]; categories: string[]; buildDate: string }> = ({
  posts,
  categories,
  buildDate
}) => {
  const title = 'Posts'
  const description =
    'Please follow my journey by reading articles relating to steps along my learning process.'

  const categoryList = [...categories]
  categoryList.unshift('(all)')
  const [selectedCategory, setSelectedCategory] = useState(categoryList[0])
  const currentPosts =
    selectedCategory === '(all)'
      ? posts
      : posts.filter((post) => post.meta.categories.includes(selectedCategory))

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
      <ArticleJsonLd
        url={site.url}
        title={site.title}
        images={[site.url + '/images/screenshot.png']}
        datePublished="2020-12-01"
        dateModified={buildDate}
        authorName={site.author}
        description={site.description}
      />
      <div className="flex items-center justify-center pt-24 bg-rosely6">
        <div className="w-full max-w-xs mx-auto">
          <Listbox
            as="div"
            className="space-y-1"
            value={selectedCategory}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={setSelectedCategory as any}
          >
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm leading-5 font-medium text-rosely2">
                  Select Category
                </Listbox.Label>
                <div className="relative">
                  <span className="inline-block w-full rounded-md shadow-xs">
                    <Listbox.Button className="cursor-default relative w-full rounded-md border border-rosely3 bg-rosely4 pl-3 pr-10 py-2 text-left focus:outline-hidden focus:shadow-outline-blue focus:border-rosely7 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                      <span className="block truncate">{selectedCategory}</span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Listbox.Button>
                  </span>

                  <div className="absolute mt-1 w-full rounded-md bg-rosely5 shadow-lg">
                    <Transition
                      show={open}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options
                        static
                        className="max-h-60 rounded-md py-1 text-base leading-6 shadow-2xs overflow-auto focus:outline-hidden sm:text-sm sm:leading-5"
                      >
                        {categoryList.map((category) => (
                          <Listbox.Option key={category} value={category}>
                            {({ selected, active }) => (
                              <div
                                className={`${
                                  active ? 'text-rosely2 bg-rosely4' : 'text-rosely1'
                                } cursor-default select-none relative py-2 pl-8 pr-4`}
                              >
                                <span
                                  className={`${
                                    selected ? 'font-semibold' : 'font-normal'
                                  } block truncate`}
                                >
                                  {category}
                                </span>
                                {selected && (
                                  <span
                                    className={`${
                                      active ? 'text-rosely10' : 'text-rosely9'
                                    } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                  >
                                    <svg
                                      className="h-5 w-5"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                )}
                              </div>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </div>
              </>
            )}
          </Listbox>
        </div>
      </div>
      <Articles title="Posts" bgcolor="bg-rosely6">
        {currentPosts.map(({ id, meta }) => (
          <Article href={`/posts/${id}`} meta={meta} key={id} />
        ))}
      </Articles>
      <CTA />
    </Layout>
  )
}
export default Posts

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts().filter((post) => !post.meta.draft)
  const buildDate = new Date().toISOString()
  const categories = getCategories()

  return {
    props: {
      posts,
      categories,
      buildDate
    }
  }
}
