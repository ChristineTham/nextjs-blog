import Link from 'next/link'

const NavbarSocialItem: React.FC<{ children?: React.ReactNode; href: string; title: string }> = ({ children, href, title }) => (
  <li className="flex items-center">
    <Link href={href}>
      <a
        className="hover:text-rosely9 text-rosely10 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        target="_blank"
        rel="noreferrer"
      >
        {children}
        <span className="lg:hidden inline-block ml-2">{title}</span>
      </a>
    </Link>
  </li>
)
export default NavbarSocialItem
