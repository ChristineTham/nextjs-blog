import Link from 'next/link'

import { site } from '../../global'
import Github from '../../icons/github'

function Hero(): JSX.Element {
  return (
    <section className="text-gray-700 body-font bg-white">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-pink-600 leading-none">
            {site.title}
          </h1>
          <p className="text-xl -mt-3 leading-none">
            <em>an ongoing series of articles</em>
          </p>
          <p className="mt-4 leading-relaxed">{site.description}</p>
          <div className="flex justify-center mt-4">
            <Link href="/blog">
              <a>
                <button
                  className={`inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg`}
                >
                  Read Articles
                </button>
              </a>
            </Link>
            <a href={site.github} target="_blank" rel="noreferrer">
              <button className="ml-4 inline-flex items-center text-gray-700 bg-purple-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                <Github /> &nbsp; Repository
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/drawings/knowledge.svg"
          />
        </div>
      </div>
    </section>
  )
}
export default Hero
