import Link from 'next/link'

import { site } from '../../global'

const Footer: React.FC = () => (
  <footer className="bg-rosely2">
    <div className="container mx-auto px-6 py-4">
      <div className="lg:flex">
        <div className="w-full lg:w-2/5 -mx-6">
          <div className="px-6">
            <div>
              <a href="#" className="text-xl font-bold text-rosely6 hover:text-gray-400">
                Learning Jamstack
              </a>
            </div>

            <p className="mt-2 text-rosely5 max-w-md">Reach out to start a conversation</p>

            <div className="flex mt-4 -mx-2">
              <a
                href={site.linkedin}
                className="mx-2 text-rosely6 hover:text-gray-400"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 512 512">
                  <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                </svg>
              </a>

              <a
                href={site.facebook}
                className="mx-2 text-rosely6 hover:text-gray-400"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 512 512">
                  <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                </svg>
              </a>

              <a
                href={site.twitter}
                className="mx-2 text-rosely6 hover:text-gray-400"
                aria-label="Twitter"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 512 512">
                  <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-0 lg:flex-1">
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <div>
              <h3 className="text-rosely6 uppercase">About</h3>
              <Link href="/about">
                <a className="block mt-2 text-sm text-rosely4 hover:text-rosely8">This Site</a>
              </Link>
              <a href={site.website} className="block mt-2 text-sm text-rosely4 hover:text-rosely8">
                Me
              </a>
              <a
                href={site.company_url}
                className="block mt-2 text-sm text-rosely4 hover:text-rosely8"
              >
                Company
              </a>
            </div>

            <div>
              <h3 className="text-rosely6 uppercase">Site</h3>
              <Link href="/posts">
                <a className="block mt-2 text-sm text-rosely4 hover:text-rosely8">Posts</a>
              </Link>
              <Link href="/sitemap.xml">
                <a className="block mt-2 text-sm text-rosely4 hover:text-rosely8">Sitemap</a>
              </Link>
              <Link href="/feed.xml">
                <a className="block mt-2 text-sm text-rosely4 hover:text-rosely8">RSS</a>
              </Link>
            </div>

            <div>
              <h3 className="text-rosely6 uppercase">Products</h3>
              <a
                href="https://github.com/ChristineTham/nextjs-blog/blob/master/LICENSE"
                className="block mt-2 text-sm text-rosely4 hover:text-rosely8"
              >
                MIT Licence
              </a>
              <Link href="/privacy">
                <a className="block mt-2 text-sm text-rosely4 hover:text-rosely8">Privacy Policy</a>
              </Link>
              <a
                href={site.repository}
                className="block mt-2 text-sm text-rosely4 hover:text-rosely8"
              >
                Source Code
              </a>
            </div>

            <div>
              <h3 className="text-rosely6 uppercase">Contact</h3>
              <Link href="/contact">
                <a className="block mt-2 text-sm text-rosely4 hover:text-rosely8">Contact Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-px my-6 bg-rosely0 border-none" />

      <div>
        <p className="text-center text-rosely6">
          &copy; {new Date().getFullYear()}{' '}
          <a href={site.company_url} className="text-rosely4 hover:text-rosely8">
            {site.company}
          </a>
        </p>
      </div>
    </div>
  </footer>
)
export default Footer
