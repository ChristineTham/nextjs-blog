import { site } from '../../global'
import Twitter from '../../icons/twitter.svg'
import Facebook from '../../icons/facebook.svg'
import Github from '../../icons/github.svg'
import Blog from '../../icons/blog.svg'
import A from '../A'

const Footer: React.FC = () => (
  <>
    <footer className="relative bg-rosely4 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
        style={{ transform: 'translateZ(0)' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="text-rosely4 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <p className="text-3xl text-rosely10 font-semibold">{site.title}</p>
            <p className="text-lg text-rosely1">Reach out to start a conversation!</p>
            <div className="mt-6 lg:mb-0 mb-6">
              <A external noline href={site.twitter}>
                <button
                  className="bg-rosely6 text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6 mx-2" />
                  <span className="hidden">Twitter</span>
                </button>
              </A>
              <A external noline href={site.facebook}>
                <button
                  className="bg-rosely6 text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6 mx-2" />
                  <span className="hidden">Facebook</span>
                </button>
              </A>
              <A external noline href={site.website}>
                <button
                  className="bg-rosely6 text-rosely10 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  aria-label="Blog"
                >
                  <Blog className="h-6 w-6 mx-2" />
                  <span className="hidden">Blog</span>
                </button>
              </A>
              <A external noline href={site.github}>
                <button
                  className="bg-rosely6 text-rosely9 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  aria-label="Github"
                >
                  <Github className="h-6 w-6 mx-2" />
                  <span className="hidden">Github</span>
                </button>
              </A>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-rosely2 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <A
                      href="/about"
                      className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm"
                    >
                      About This Site
                    </A>
                  </li>
                  <li>
                    <A
                      external
                      href={site.website}
                      className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm"
                    >
                      Personal Site
                    </A>
                  </li>
                  <li>
                    <A
                      external
                      href={site.company_url}
                      className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm"
                    >
                      {site.company} Site
                    </A>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-rosely2 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <A
                      external
                      href="https://github.com/ChristineTham/nextjs-blog/blob/master/LICENSE"
                      className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm"
                    >
                      MIT License
                    </A>
                  </li>
                  <li>
                    <A
                      href="/privacy"
                      className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm"
                    >
                      Privacy Policy
                    </A>
                  </li>
                  <li>
                    <A
                      href="/contact"
                      className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm"
                    >
                      Contact Us
                    </A>
                  </li>
                  <li>
                    <A
                      href="/sitemap.xml"
                      className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm"
                    >
                      Sitemap
                    </A>
                  </li>
                  <li>
                    <A
                      href="/feed.xml"
                      className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm"
                    >
                      RSS Feed
                    </A>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-rosely7" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-rosely1 font-semibold py-1">
              Copyright &copy; {new Date().getFullYear()}{' '}
              <a href="https://hellotham.com" className="text-rosely10 hover:text-rosely9">
                Hello Tham Pty Ltd
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
)
export default Footer
