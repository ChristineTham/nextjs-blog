import A from '../A'
import { site } from '../../global'
import Github from '../../icons/github.svg'
import Jamstack from '../../icons/jamstack.svg'
import Read from '../../icons/book.svg'

function Hero(): JSX.Element {
  return (
    <section className="text-rosely0 body-font bg-white">
      <div className="container mx-auto flex px-5 pt-28 pb-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-6 flex flex-col items-center">
          <div className="flex flex-row space-x-3 items-center">
            <h1 className="title-font text-4xl font-bold text-jamstack leading-none">Learning</h1>
            <Jamstack className="h-14 p-2 bg-pink-300" />
          </div>
          <p className="text-xl leading-none mt-2 text-rosely1 ">
            <em>an ongoing series of articles</em>
          </p>
          <p className="mt-6">{site.description}</p>
          <div className="flex justify-start space-x-2 flex-row mt-6">
            <A noline href="/posts">
              <button
                className={`inline-flex items-center text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-rosely9 rounded text-lg`}
              >
                <Read className="h-6 w-6" /> &nbsp; Read
              </button>
            </A>
            <A external noline href={site.github}>
              <button className="inline-flex items-center text-rosely0 bg-rosely7 border-0 py-2 px-6 focus:outline-none hover:bg-rosely3 rounded text-lg">
                <Github className="h-6 w-6" /> &nbsp; Download
              </button>
            </A>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-4">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            height="100%"
            width="100%"
            src="/drawings/blogging.svg"
          />
        </div>
      </div>
    </section>
  )
}
export default Hero
