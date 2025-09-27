import A from '../A'
import { site } from '../../global'
import Github from '../../icons/github.svg'
import Jamstack from '../../icons/jamstack.svg'
import Read from '../../icons/book.svg'

const Hero: React.FC = () => (
  <header className="bg-white">
    <div className="container mx-auto px-6 py-12">
      <div className="md:flex items-center">
        <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-6 flex flex-col items-center">
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
                className={`inline-flex items-center text-white bg-rosely10 border-0 py-2 px-6 focus:outline-hidden hover:bg-rosely9 rounded-sm text-lg`}
              >
                <Read className="h-6 w-6" /> &nbsp; Read
              </button>
            </A>
            <A external noline href={site.github}>
              <button className="inline-flex items-center text-rosely0 bg-rosely7 border-0 py-2 px-6 focus:outline-hidden hover:bg-rosely3 rounded-sm text-lg">
                <Github className="h-6 w-6" /> &nbsp; Download
              </button>
            </A>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
          <img className="max-w-2xl w-full h-full" src="/drawings/blogging.svg" alt="Hero" />
        </div>
      </div>
    </div>
  </header>
)
export default Hero
