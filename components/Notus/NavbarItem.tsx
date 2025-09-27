import Link from 'next/link'

const NavbarItem: React.FC<{ children?: React.ReactNode; href: string }> = ({ children, href }) => (
  <li className="flex items-center">
    <Link
      href={href}
      className="hover:text-rosely9 text-rosely10 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold">

      {children}

    </Link>
  </li>
)
export default NavbarItem
