interface ItemProps {
  children?: React.ReactNode
  category: string
  title: string
  image?: string
}

const LearningItem: React.FC<ItemProps> = ({ children, category, title, image }) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4 flex item-stretch">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {image && (
          <img
            className="rounded w-full h-40 object-fit object-center mb-6"
            src={image}
            alt="content"
          />
        )}
        <h3 className="text-rosely11 text-xs uppercase tracking-tight font-medium title-font">
          {category}
        </h3>
        <h2 className="text-lg text-rosely2 font-medium title-font mb-4">{title}</h2>
        <p className="tracking-wide text-rosely1 text-sm">{children}</p>
      </div>
    </div>
  )
}
export default LearningItem
