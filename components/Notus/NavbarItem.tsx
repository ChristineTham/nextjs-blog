import Link from 'next/link'

const NavbarItem: React.FC<{ href: string }> = ({ children, href }) => (
  <li className="flex items-center">
    <Link href={href}>
      <a className="hover:text-pink-600 text-pink-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
        <i className="text-pink-500 far fa-file-alt text-lg leading-lg mr-2" /> {children}
      </a>
    </Link>
  </li>
)
export default NavbarItem
