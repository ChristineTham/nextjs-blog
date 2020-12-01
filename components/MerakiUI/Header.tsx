import Link from 'next/link'

interface HeaderProps {
  title: string
  description?: string
  href?: string
  image?: string
}

const Header: React.FC<HeaderProps> = ({ children, title, description, href, image }) => (
  <header className="container mx-auto px-6 py-16 bg-pink-100">
    <div className="md:flex items-center">
      <div className="w-full md:w-1/2">
        <div className="max-w-lg">
          <Link href={href || '#'}>
            <a>
              <h1 className="text-purple-800 text-2xl font-semibold uppercase md:text-3xl">
                {title}
              </h1>
            </a>
          </Link>
          {description ? <p className="mt-2 text-pink-600">{description}</p> : ''}
          <button className="mt-4 px-3 py-2 bg-indigo-600 text-white text-sm uppercase font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
            Shop Now
          </button>
          {children}
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
        <img
          className="max-w-2xl w-full h-full"
          src={image || '/drawings/knowledge.svg'}
          alt="Featured Image"
        />
      </div>
    </div>
  </header>
)
export default Header
