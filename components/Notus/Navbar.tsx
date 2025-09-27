import React from 'react'
import Link from 'next/link'

import { site } from '../../global'

// components
import NavbarSocialItem from './NavbarSocialItem'

// icons
import MenuIcon from '../../icons/menu.svg'
import Facebook from '../../icons/facebook.svg'
import Github from '../../icons/github.svg'
import Twitter from '../../icons/twitter.svg'
import Download from '../../icons/download.svg'

const Navbar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow-sm">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded-sm bg-transparent block lg:hidden outline-hidden focus:outline-hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="sr-only">Menu</span>
              <MenuIcon className="h-8 w-8 text-rosely10 hover:text-rosely9" />
            </button>
          </div>
          <div
            className={
              'lg:flex grow items-center bg-white lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block' : ' hidden')
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li>
                <Link
                  href="/"
                  className="text-rosely10 hover:rosely9 text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase">

                  {site.title}

                </Link>
              </li>
              {children}
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavbarSocialItem
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  site.title
                )}`}
                title="Share"
              >
                <Facebook className="h-8 w-8" />
              </NavbarSocialItem>
              <NavbarSocialItem
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  site.title
                )}&text=${encodeURIComponent(site.description)}`}
                title="Tweet"
              >
                <Twitter className="h-8 w-8" />
              </NavbarSocialItem>
              <NavbarSocialItem href={site.repository} title="Star">
                <Github className="h-8 w-8" />
              </NavbarSocialItem>

              <li className="flex items-center">
                <Link href={site.repository} passHref legacyBehavior>
                  <button
                    className="bg-rosely10 text-white hover:bg-rosely9 text-xs font-bold uppercase px-4 py-2 rounded-sm shadow-sm hover:shadow-lg outline-hidden focus:outline-hidden lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 flex flex-row items-center"
                    type="button"
                  >
                    <Download className="h-6 w-6" /> Download
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar
