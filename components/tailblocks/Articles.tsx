import Section from './Section'

interface ArticleProps {
  children?: React.ReactNode
  title?: string
  description?: string
  bgcolor?: string
}

const Articles: React.FC<ArticleProps> = ({
  children,
  title = 'Articles',
  bgcolor = 'bg-rosely6',
  description = 'Please follow my journey by reading articles relating to steps along my learning process.'
}) => (
  <Section
    title={title}
    description={description}
    className="flex flex-wrap px-6"
    backgroundColor={bgcolor}
    width="w-16"
  >
    {children}
  </Section>
)
export default Articles
