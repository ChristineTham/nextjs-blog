import ArchitectureItem from './ArchitectureItem'
import Section from '../Section'

function Architecture(): JSX.Element {
  return (
    <Section
      title="Building Blocks"
      description="This website started from me following the Learn Nextjs tutorial
      and then I subsequently kept building on it until it morphed into what you see today."
      className="flex flex-wrap"
      width="w-52"
    >
      <ArchitectureItem title="React" href="https://reactjs.org">
        A JavaScript library for building user interfaces.
      </ArchitectureItem>
      <ArchitectureItem title="Next.js" href="https://nextjs.org">
        Next.js is a minimalistic framework for server-rendered React applications as well as
        statically exported React apps.
      </ArchitectureItem>
    </Section>
  )
}
export default Architecture
