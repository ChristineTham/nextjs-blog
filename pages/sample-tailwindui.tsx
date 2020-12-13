import { getPosts, PostMeta } from '../lib/postutils'
import { GetStaticProps } from 'next'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

import A from '../components/A'
import Banner from '../components/TailwindUI/Banner'
import Features from '../components/TailwindUI/Features'
import CTA from '../components/TailwindUI/CTA'
import Article from '../components/MerakiUI/Article'

import Jamstack from '../icons/jamstack.svg'
import Logo from '../public/icons/stack.svg'

import { site } from '../global'
import { useState } from 'react'

const SampleTailWindUI: React.FC<{ allPostsData: PostMeta[] }> = ({ allPostsData }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Banner />
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <A noline href="/">
                      <span className="sr-only">{site.title}</span>
                      <Logo className="h-8 w-8 sm:h-10" />
                    </A>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-rosely10 hover:text-white hover:bg-rosely9 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rosely3"
                        id="main-menu"
                        aria-haspopup="true"
                        onClick={() => setIsOpen(true)}
                      >
                        <span className="sr-only">Open main menu</span>
                        {/* Heroicon name: menu */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <A noline href="/about">
                    About
                  </A>
                  <A noline href="/contact">
                    Contact
                  </A>
                  <A noline href="/privacy">
                    Privacy
                  </A>
                  <A noline href="/posts">
                    Posts
                  </A>
                </div>
              </nav>
            </div>

            <Transition
              show={isOpen}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <Logo className="h-8 w-auto" />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-rosely10 hover:text-white hover:bg-rosely9 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rosely10"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="sr-only">Close main menu</span>
                        {/* Heroicon name: x */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                      <Link href="/about">
                        <a
                          className="block px-3 py-2 rounded-md text-base font-medium text-rosely10 hover:text-rosely9 hover:bg-gray-50"
                          role="menuitem"
                        >
                          About
                        </a>
                      </Link>
                      <Link href="/contact">
                        <a
                          className="block px-3 py-2 rounded-md text-base font-medium text-rosely10 hover:text-rosely9 hover:bg-gray-50"
                          role="menuitem"
                        >
                          Contact
                        </a>
                      </Link>
                      <Link href="/privacy">
                        <a
                          className="block px-3 py-2 rounded-md text-base font-medium text-rosely10 hover:text-rosely9 hover:bg-gray-50"
                          role="menuitem"
                        >
                          Privacy
                        </a>
                      </Link>
                      <Link href="/posts">
                        <a
                          className="block px-3 py-2 rounded-md text-base font-medium text-rosely10 hover:text-rosely9 hover:bg-gray-50"
                          role="menuitem"
                        >
                          Posts
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-jamstack sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    Learning
                    <Jamstack className="h-16 xl:h-24 p-2 bg-pink-300" />
                  </span>
                </h1>
                <p className="text-3xl leading-none mt-2 text-rosely1 ">
                  <em>an ongoing series of articles</em>
                </p>
                <p className="mt-3 text-base text-rosely1 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {site.description}
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/hellokitty.jpeg"
            alt="Feature"
          />
        </div>
      </div>
      <CTA />
      <Features />
      <article className="bg-rosely5">
        <div className="lg:text-center">
          <h2 className="pt-12 text-3xl leading-8 font-extrabold tracking-tight text-rosely2 sm:text-4xl">
            Articles
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-rosely1 lg:mx-auto">
            Please follow my journey by reading articles relating to steps along my learning
            process.
          </p>
        </div>
        <div className="container mx-auto px-6 py-8">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {allPostsData.map(({ id, meta }) => (
              <Article href={`/posts/${id}`} meta={meta} key={id} />
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
export default SampleTailWindUI

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getPosts().filter((post) => !post.meta.draft)

  return {
    props: {
      allPostsData
    }
  }
}
