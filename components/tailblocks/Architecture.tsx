import ArchitectureItem from './ArchitectureItem'
import Section from './Section'
import A from '../A'
import type { ReactElement } from 'react'

function Architecture(): ReactElement {
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
      <ArchitectureItem title="TailwindCSS" href="https://tailwindcss.com">
        A constraint based, utility-first CSS framework that can be composed to build any design,
        directly in HTML.
      </ArchitectureItem>
      <ArchitectureItem title="Undraw" href="https://undraw.co/">
        The beautiful illustrations on this site were created by Katerina Limpitsouni.
      </ArchitectureItem>
      <ArchitectureItem title="Tailblocks" href="https://mertjf.github.io/tailblocks/">
        The current design of the website is largely inspired by the beautiful blocks created by
        Mert Cukuren.
      </ArchitectureItem>
      <ArchitectureItem title="HeroIcons" href="https://heroicons.com">
        Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
      </ArchitectureItem>
      <ArchitectureItem title="Flaticon" href="https://www.flaticon.com/">
        The website logo and favicon is a colour-modified version of transip-stack icon made by{' '}
        <A external href="https://www.freepik.com/" title="Freepik">
          Freepik
        </A>
      </ArchitectureItem>
      <ArchitectureItem title="Vercel" href="https://vercel.com/">
        The creators of NextJS and a hosting platform for this site.
      </ArchitectureItem>
    </Section>
  )
}
export default Architecture
