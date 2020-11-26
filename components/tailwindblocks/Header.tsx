import Link from 'next/link'
import { site } from '../../global'
import Logo from '../../icons/stack.svg'

function Header(): JSX.Element {
  return (
    <header className="text-gray-700 body-font top-0 fixed z-50 w-full bg-white bg-opacity-90">
      <div className=" container border-b border-pink-300 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="title-font font-medium items-center flex text-pink-600 mb-4 md:mb-0">
            <Logo className="h-10 w-10" />
            <span className="ml-3 text-xl">{site.title}</span>
          </a>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/about">
            <a className="mr-5 hover:text-purple-700">About</a>
          </Link>
          <Link href="/blog">
            <a href="/blog" className="mr-5 hover:text-purple-700">
              Blog
            </a>
          </Link>
        </nav>
        <Link href={site.github}>
          <a target="_blank" rel="noreferrer">
            <button className="inline-flex items-center bg-pink-500 border-0 py-1 px-3 focus:outline-none hover:bg-purple-500 text-white rounded text-base mt-4 md:mt-0">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              &nbsp; Download
            </button>
          </a>
        </Link>
      </div>
    </header>
  )
}
export default Header
