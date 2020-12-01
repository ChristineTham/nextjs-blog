import A from '../A'

interface ItemProps {
  title: string
  href: string
}

const ArchitectureItem: React.FC<ItemProps> = ({ children, title, href }) => {
  return (
    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-4 my-2 border-l-2 border-rosely7">
      <h2 className="text-lg sm:text-xl text-rosely2 font-medium title-font mb-2">{title}</h2>
      <p className="text-sm tracking-wide text-rosely1 mb-4">{children}</p>
      <A external href={href}>
        <span className="inline-flex items-center">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </A>
    </div>
  )
}
export default ArchitectureItem
