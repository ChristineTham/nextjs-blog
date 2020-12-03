import ListHeader from './ListHeader'
import ListItem from './ListItem'

interface ListProps {
  arch: string
  platform: string
  version: string
  commit: string
  message: string
}
const List: React.FC<ListProps> = ({ arch, platform, version, commit, message }) => (
  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
    <ListHeader title="Deployment Information" description="Website deployment details" />
    <div className="border-t border-rosely7">
      <dl>
        <ListItem item="Architecture" value={arch} />
        <ListItem item="Platform" value={platform} />
        <ListItem item="Version" value={version} />
        <ListItem item="Last Commit" value={commit} />
        <ListItem item="Commit Message" value={message} />
      </dl>
    </div>{' '}
  </div>
)
export default List
