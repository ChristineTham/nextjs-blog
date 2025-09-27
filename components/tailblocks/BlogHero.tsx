import { FrontMatter } from '../../lib/postutils'
import Categories from './Categories'
import DateIcon from '../../icons/calendar.svg'
import AuthorIcon from '../../icons/user-circle.svg'

const BlogHero: React.FC<{ meta: FrontMatter }> = ({ meta }) => {
  const image = meta.featured_image || '/drawings/knowledge.svg'
  return (
    <section className="text-rosely0 body-font bg-white mt-28 ">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center rounded-lg shadow-xl bg-rosely4">
        <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-6 flex flex-col items-start">
          <Categories categories={meta.categories} />
          <h1 className="title-font text-4xl font-bold text-rosely2 leading-none mt-4">
            {meta.title}
          </h1>
          <div className="flex items-center flex-wrap mt-2">
            <span className="text-rosely1 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-rosely7">
              <DateIcon className="w-4 h-4 mr-1" />
              {meta.date}
            </span>
            <span className="text-rosely1 inline-flex items-center leading-none text-sm">
              <AuthorIcon className="w-4 h-4 mr-1" />
              {meta.author}
            </span>
          </div>
          <p className="mt-6 text-rosely1 text-lg tracking-wide">
            <em>{meta.description}</em>
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-4">
          <img className="object-cover object-center rounded-sm" alt="hero" src={image} />
        </div>
      </div>
    </section>
  )
}
export default BlogHero
