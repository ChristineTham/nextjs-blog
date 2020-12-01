import Section from './Section'

const Articles: React.FC<{ title?: string }> = ({ children, title = 'Articles' }) => (
  <Section
    title={title}
    description="Please follow my journey by reading articles relating to steps along my
    learning process."
    className="flex flex-wrap px-6"
    backgroundColor="bg-rosely6"
    width="w-16"
  >
    {children}
  </Section>
)
export default Articles
