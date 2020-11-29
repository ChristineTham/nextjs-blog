import Link from 'next/link'
import { site } from '../../global'
import Twitter from '../../icons/twitter'
import Facebook from '../../icons/facebook'
import Github from '../../icons/github'
import Blog from '../../icons/blog'
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
            <h4 className="text-3xl text-rosely10 font-semibold">{site.title}</h4>
            <h5 className="text-lg mt-4 text-rosely1">Reach out to start a conversation!</h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <A external noline href={site.twitter}>
                <button
                  className="bg-rosely6 text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Twitter />
                </button>
              </A>
              <A external noline href={site.facebook}>
                <button
                  className="bg-rosely6 text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Facebook />
                </button>
              </A>
              <A external noline href={site.website}>
                <button
                  className="bg-rosely6 text-rosely10 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Blog />
                </button>
              </A>
              <A external noline href={site.github}>
                <button
                  className="bg-rosely6 text-rosely9 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Github />
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
                    <Link href="/about">
                      <a className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm">
                        About This Site
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm"
                      href={site.website}
                    >
                      Personal Website
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm"
                      href={site.company_url}
                    >
                      {site.company} Website
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-rosely2 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-nextjs/blob/master/LICENSE.md?ref=nnjs-footer"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=nnjs-footer"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=nnjs-footer"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-rosely10 hover:text-rosely9 font-semibold block pb-2 text-sm"
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
