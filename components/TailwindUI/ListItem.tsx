interface ListItemProps {
  item: string
  value: string
  bgcolor?: string
}

const ListItem: React.FC<ListItemProps> = ({ item, value, bgcolor = 'bg-white' }) => (
  <div className={`${bgcolor} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
    <dt className="text-sm font-medium text-rosely3">{item}</dt>
    <dd className="mt-1 text-sm text-rosely0 sm:mt-0 sm:col-span-2">{value}</dd>
  </div>
)
export default ListItem
