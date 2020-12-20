import { site } from '../../global'
import Logo from '../../icons/stack.svg'
import A from '../A'

function Header(): JSX.Element {
  return (
    <header className="text-rosely0 body-font top-0 fixed z-50 w-full bg-white bg-opacity-90">
      <div className=" container border-b border-rosely7 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <A noline href="/">
          <span className="title-font font-medium items-center flex text-primary mb-4 md:mb-0">
            <Logo className="h-10 w-10" />
            <span className="ml-3 text-xl">{site.title}</span>
          </span>
        </A>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-rosely7	flex flex-wrap items-center text-base justify-center space-x-3">
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
        </nav>
        <A external noline href={site.repository}>
          <button className="inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-rosely9 text-white rounded text-base mt-4 md:mt-0">
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
            &nbsp; Github
          </button>
        </A>
      </div>
    </header>
  )
}
export default Header
