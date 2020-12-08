import A from '../A'
import DateIcon from '../../icons/calendar.svg'
import AuthorIcon from '../../icons/user-circle.svg'
import { FrontMatter } from '../../lib/postutils'
import Categories from './Categories'

interface ArticleProps {
  href: string
  meta: FrontMatter
}

const Article: React.FC<ArticleProps> = ({ href, meta }) => (
  <div className="p-4 md:w-1/3">
    <div className="h-full border-1 border-rosely3 bg-white rounded-lg shadow-xl overflow-hidden p-2">
      <img
        className="lg:h-48 md:h-36 w-full object-fit object-center"
        src={meta.featured_image || '/drawings/knowledge.svg'}
        height="192"
        width="100%"
        alt="Featured Image"
      />
      <div className="p-6">
        <Categories categories={meta.categories} />
        <A noline href={href}>
          <h1 className="title-font text-2xl font-bold text-rosely10 hover:text-rosely9 mt-2">
            {meta.title}
          </h1>
        </A>
        <div className="flex items-center flex-wrap ">
          <span className="text-rosely1 mr-3 inline-flex items-center leading-none text-xs pr-3 py-1 border-r-2 border-rosely7">
            <DateIcon className="w-4 h-4 mr-1" />
            {meta.date}
          </span>
          <span className="text-rosely1 inline-flex items-center leading-none text-xs">
            <AuthorIcon className="w-4 h-4 mr-1" />
            {meta.author}
          </span>
        </div>
        <A noline href={href}>
          <div className="inline-flex items-center leading-none text-sm">
            Read
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </div>
        </A>
        <p className="mt-3 italic text-sm text-rosely1">{meta.description}</p>
      </div>
    </div>
  </div>
)
export default Article
