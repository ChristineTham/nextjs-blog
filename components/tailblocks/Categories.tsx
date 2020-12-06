const Categories: React.FC<{ categories: string[] }> = ({ categories }) => (
  <div className="flex flex-row items-start space-x-2">
    {categories.map((category) => (
      <span
        className="inline-block py-1 px-3 rounded bg-rosely14 text-white text-xs font-medium tracking-tight uppercase"
        key={category}
      >
        {category}
      </span>
    ))}
  </div>
)
export default Categories
