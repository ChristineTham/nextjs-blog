import ListHeader from './ListHeader'
import ListItem from './ListItem'

interface ListProps {
  arch: string
  platform: string
  version: string
  commit: string
  chimpstatus: string
}
const List: React.FC<ListProps> = ({ arch, platform, version, commit, chimpstatus }) => (
  <div className="bg-white shadow-sm overflow-hidden sm:rounded-lg">
    <ListHeader title="Deployment Information" description="Website deployment details" />
    <div className="border-t border-rosely7">
      <dl>
        <ListItem item="Architecture" value={arch} />
        <ListItem item="Platform" value={platform} />
        <ListItem item="NodeJS Version" value={version} />
        <ListItem item="Last Commit" value={commit} />
        <ListItem item="Mailchimp Status" value={chimpstatus} />
      </dl>
    </div>
  </div>
)
export default List
