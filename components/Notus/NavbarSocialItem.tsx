import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const NavbarSocialItem: React.FC<{ href: string; icon: IconDefinition }> = ({
  children,
  href,
  icon
}) => (
  <li className="flex items-center">
    <Link href={href}>
      <a
        className="hover:text-pink-600 text-pink-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="text-pink-500 fab text-lg leading-lg" icon={icon} size="2x" />
        <span className="lg:hidden inline-block ml-2">{children}</span>
      </a>
    </Link>
  </li>
)
export default NavbarSocialItem
