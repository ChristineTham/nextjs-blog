interface ItemProps {
  children?: React.ReactNode
  feature: string
  description: string
  more?: string
}

const WhatItem: React.FC<ItemProps> = ({ children, feature, more, description }) => (
  <div className="p-4 sm:w-1/2 md:w-1/3 flex flex-col text-center items-center">
    <div
      className={`w-20 h-20 inline-flex items-center justify-center rounded-full bg-rosely4 text-rosely10 flex-shrink-0`}
    >
      {children}
    </div>
    <div className="flex-grow">
      <h2 className="text-rosely2 text-lg title-font font-medium mt-4">{feature}</h2>
      <p className="mt-2 text-rosely1 tracking-wide text-sm italic">{description}</p>
      {more && (
        <a href={more} className={`mt-3 text-rosely10 hover:rosely9 inline-flex items-center`}>
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
        </a>
      )}
    </div>
  </div>
)
export default WhatItem
