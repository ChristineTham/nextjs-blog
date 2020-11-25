import Link from 'next/link'
import { site } from '../global'
import Twitter from '../icons/twitter'
import Facebook from '../icons/facebook'
import Github from '../icons/github'
import Blog from '../icons/blog'

const Footer: React.FC = () => (
  <>
    <footer className="relative bg-pink-200 pt-8 pb-6">
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
          <polygon className="text-pink-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">{site.title}</h4>
            <h5 className="text-lg mt-0 mb-2 text-pink-700">
              Check me out on my personal website (https://christham.net) or on social media!
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <a href={site.twitter} target="_blank" rel="noreferrer">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Twitter />
                </button>
              </a>
              <a href={site.facebook} target="_blank" rel="noreferrer">
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Facebook />
                </button>
              </a>
              <a href={site.website} target="_blank" rel="noreferrer">
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Blog />
                </button>
              </a>
              <a href={site.github} target="_blank" rel="noreferrer">
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Github />
                </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/about">
                      <a className="text-purple-700 hover:text-purple-900 font-semibold block pb-2 text-sm">
                        About This Site
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-purple-700 hover:text-purple-900 font-semibold block pb-2 text-sm"
                      href={site.website}
                    >
                      Personal Website
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-purple-700 hover:text-purple-900 font-semibold block pb-2 text-sm"
                      href={site.company_url}
                    >
                      {site.company} Website
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-nextjs/blob/master/LICENSE.md?ref=nnjs-footer"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=nnjs-footer"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=nnjs-footer"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us?ref=nnjs-footer"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-pink-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-pink-600 font-semibold py-1">
              Copyright &copy; {new Date().getFullYear()} Design and website by{' '}
              <a href="https://hellotham.com" className="text-purple-600 hover:text-purple-900">
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
