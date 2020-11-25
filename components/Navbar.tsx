import React from 'react'
import Link from 'next/link'

import { site } from '../global'

// components

// import IndexDropdown from './IndexDropdown'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import NavbarSocialItem from './NavbarSocialItem'

const Navbar: React.FC = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block' : ' hidden')
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li>
                <Link href="/">
                  <a className="text-pink-800 text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase">
                    {site.title}
                  </a>
                </Link>
              </li>
              {children}
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/*}
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              */}
              <NavbarSocialItem
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  site.title
                )}`}
                icon={faFacebook}
              >
                Share
              </NavbarSocialItem>
              <NavbarSocialItem
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  site.title
                )}&text=${encodeURIComponent(site.description)}`}
                icon={faTwitter}
              >
                Tweet
              </NavbarSocialItem>
              <NavbarSocialItem href={site.repository} icon={faGithub}>
                Star
              </NavbarSocialItem>

              <li className="flex items-center">
                <Link href={site.repository}>
                  <button
                    className="bg-pink-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faArrowAltCircleDown} /> Download
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
