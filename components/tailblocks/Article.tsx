import Link from 'next/link'

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
    <Link href={href}>

      <div className="h-full border border-rosely3 bg-white rounded-lg shadow-xl overflow-hidden p-2">
        <img
          className="lg:h-48 md:h-36 w-full object-fit object-center"
          src={meta.featured_image || '/drawings/knowledge.svg'}
          height="192"
          width="100%"
          alt={'Featured Drawing ' + meta.featured_image}
        />
        <div className="p-6">
          <Categories categories={meta.categories} />

          <h1 className="title-font text-2xl font-bold text-rosely10 hover:text-rosely9 mt-2">
            {meta.title}
          </h1>

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

          <p className="mt-3 italic text-sm text-rosely1">{meta.description}</p>
        </div>
      </div>

    </Link>
  </div>
)
export default Article
