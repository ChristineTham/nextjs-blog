interface ListHeaderProps {
  title: string
  description: string
}

const ListHeader: React.FC<ListHeaderProps> = ({ title, description }) => (
  <div className="px-4 py-5 sm:px-6">
    <h3 className="text-lg leading-6 font-medium text-rosely1">{title}</h3>
    <p className="mt-1 max-w-2xl text-sm text-rosely3">{description}</p>
  </div>
)
export default ListHeader
