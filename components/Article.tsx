import A from './A'

interface ArticleProps {
  href: string
  title: string
  date: string
  image?: string
}

const Article: React.FC<ArticleProps> = ({ children, href, title, date, image }) => (
  <div className="w-full lg:w-1/2   md:px-4 lg:px-6 py-5 items-stretch">
    <div className="bg-white shadow-xl rounded-lg hover:border-pink-500">
      <A href={href}>
        {image && (
          <div className="">
            <img
              src={image}
              alt="Featured Image"
              className="h-56 w-full border-white border-8 hover:opacity-25"
            />
          </div>
        )}
        <div className="px-4 py-4 md:px-10">
          <h1 className="font-bold text-lg">{title}</h1>
          <p className="py-4">{children}</p>
          <div className="flex flex-wrap pt-8">
            <div className="w-full md:w-1/3 text-sm font-medium">{date}</div>
            <div className="2/3">
              <div className="text-sm font-medium">Category</div>
            </div>
          </div>
        </div>
      </A>
    </div>
  </div>
)
export default Article
