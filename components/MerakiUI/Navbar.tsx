import React from 'react'
import Link from 'next/link'

import { site } from '../../global'

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <div className="h-8 w-8 overflow-hidden rounded-full">
              <img src="/icons/stack.svg" className="h-full w-full object-cover" alt="avatar" />
            </div>
            <div className="text-xl font-semibold text-rosely0 ml-2">
              <a
                href={site.url}
                className="text-rosely10 text-xl font-bold hover:text-rosely9 md:text-2xl"
              >
                {site.title}
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-rosely10 hover:text-rosely9 focus:outline-none focus:text-rosely8"
                aria-label="toggle menu"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`${
              navbarOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:justify-between flex-1`}
          >
            <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
              <Link href="/about">
                <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-base text-rosely10 font-medium rounded-md hover:bg-rosely9 hover:text-white">
                  About
                </a>
              </Link>
              <Link href="/contact">
                <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-base text-rosely10 font-medium rounded-md hover:bg-rosely9 hover:text-white">
                  Contact
                </a>
              </Link>
              <Link href="/privacy">
                <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-base text-rosely10 font-medium rounded-md hover:bg-rosely9 hover:text-white">
                  Privacy
                </a>
              </Link>
              <Link href="/posts">
                <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-base text-rosely10 font-medium rounded-md hover:bg-rosely9 hover:text-white">
                  Posts
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
