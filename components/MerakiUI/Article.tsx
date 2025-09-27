import Link from 'next/link'
import { FrontMatter } from '../../lib/postutils'

interface ArticleProps {
  href: string
  meta: FrontMatter
}

const Article: React.FC<ArticleProps> = ({ href, meta }) => (
  <div className="bg-white overflow-hidden shadow-md rounded-lg">
    <img
      className="w-full h-64 object-fit p-2"
      src={meta.featured_image || '/drawings/knowledge.svg'}
      alt="Featured Image"
    />

    <div className="p-6">
      <div>
        {meta.categories.map((category) => (
          <span className="text-rosely14 text-xs font-medium uppercase mr-2" key={category}>
            {category}
          </span>
        ))}
        <Link
          href={href}
          className="block text-rosely10 font-semibold text-2xl mt-2 hover:text-rosely9 hover:underline">

          {meta.title}

        </Link>
        <p className="text-sm text-rosely1 mt-2">{meta.description}</p>
      </div>

      <div className="mt-4">
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              className="h-10 object-cover rounded-full"
              src="/images/profile.jpg"
              alt="Avatar"
            />
            <div className="flex flex-col items-center">
              <a href="#" className="mx-2 text-rosely1 font-semibold">
                {meta.author}
              </a>
              <span className="mx-1 text-rosely1 text-xs">{meta.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Article
