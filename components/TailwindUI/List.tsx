import ListHeader from './ListHeader'
import ListItem from './ListItem'

const List: React.FC = () => (
  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
    <ListHeader title="Deployment Information" description="Deployment information for website" />
    <div className="border-t border-rosely7">
      <dl>
        <ListItem item="VERCEL" value={process.env.VERCEL} />
        <ListItem item="VERCEL_ENV" value={process.env.VERCEL_ENV} />
        <ListItem item="VERCEL_URL" value={process.env.VERCEL_URL} />
        <ListItem item="VERCEL_REGION" value={process.env.VERCEL_REGION} />
        <ListItem item="VERCEL_GIT_PROVIDER" value={process.env.VERCEL_GIT_PROVIDER} />
        <ListItem item="VERCEL_GIT_REPO_SLUG" value={process.env.VERCEL_GIT_REPO_SLUG} />
        <ListItem item="VERCEL_GIT_REPO_OWNER" value={process.env.VERCEL_GIT_REPO_OWNER} />
        <ListItem item="VERCEL_GIT_REPO_ID" value={process.env.VERCEL_GIT_REPO_ID} />
        <ListItem item="VERCEL_GIT_COMMIT_REF" value={process.env.VERCEL_GIT_COMMIT_REF} />
        <ListItem item="VERCEL_GIT_COMMIT_SHA" value={process.env.VERCEL_GIT_COMMIT_SHA} />
        <ListItem item="VERCEL_GIT_COMMIT_MESSAGE" value={process.env.VERCEL_GIT_COMMIT_MESSAGE} />
        <ListItem
          item="VERCEL_GIT_COMMIT_AUTHOR_NAME"
          value={process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME}
        />
      </dl>
    </div>
    <ListHeader
      title="Node Process Information"
      description="Information from NodeJS at build time"
    />
    <div className="border-t border-rosely7">
      <dl>
        <ListItem item="Architecture" value={process.arch} />
        <ListItem item="Platform" value={process.platform} />
        <ListItem item="Version" value={process.version} />
      </dl>
    </div>{' '}
  </div>
)
export default List
