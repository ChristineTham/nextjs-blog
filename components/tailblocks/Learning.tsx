import LearningItem from './LearningItem'
import A from '../A'
import Section from './Section'
import type { ReactElement } from 'react'

function Learning(): ReactElement {
  return (
    <Section
      title="What I am learning"
      description="This is a selection of tools and frameworks that I am learning right now, which may be
                   featured as the subject of articles on this site."
      className="flex flex-wrap items-stretch"
      backgroundColor="bg-rosely5"
      width="w-64"
    >
      <LearningItem category="Fundamentals" title="HTML, CSS, Javascript" image="/drawings/web.svg">
        Fundamentals of the web.
        <ul>
          <li>
            <A external href="https://w3.org">
              w3.org
            </A>
          </li>
          <li>
            <A external href="https://w3schools.com">
              w3schools.com
            </A>
          </li>
          <li>
            <A external href="https://www.ecma-international.org/ecma-262/11.0/index.html">
              ECMAScript
            </A>
          </li>
        </ul>
      </LearningItem>
      <LearningItem category="Fundamentals" title="Typescript" image="/drawings/type.svg">
        What cool kids use instead of Javascript.
        <ul>
          <li>
            <A external href="https://typescriptlang.org">
              TypeScript
            </A>
          </li>
          <li>
            <A external href="https://react-typescript-cheatsheet.netlify.app">
              React TypeScript Cheatsheet
            </A>
          </li>
        </ul>
      </LearningItem>
      <LearningItem category="Fundamentals" title="React" image="/drawings/react.svg">
        Probably the most popular Javascript web framework right now, originally created by
        Facebook.
        <ul>
          <li>
            <A external href="https://reactjs.org">
              ReactJS.org
            </A>
          </li>
        </ul>
      </LearningItem>
      <LearningItem category="Web Framework" title="Gatsby" image="/drawings/gatsbyjs.svg">
        A popular static site generator, based on React.
        <ul>
          <li>
            <A external href="https://gatsbyjs.com">
              GatsbyJS.com
            </A>
          </li>
        </ul>
      </LearningItem>
      <LearningItem category="Web Framework" title="Next.js" image="/drawings/nextjs.svg">
        So hot right now, another React front end framework that supports both server side and
        static rendering.
        <ul>
          <li>
            <A external href="https://nextjs.org">
              NextJS.org
            </A>
          </li>
        </ul>
      </LearningItem>
      <LearningItem category="UI Framework" title="TailwindCSS" image="/drawings/tailwindcss.svg">
        A utility-first CSS framework.
        <ul>
          <li>
            <A external href="https://tailwindcss.com">
              TailwindCSS.com
            </A>
          </li>
        </ul>
      </LearningItem>
      <LearningItem category="Web Framework" title="Hugo" image="/drawings/hugo.svg">
        Static Site Generator written in Go.
        <ul>
          <li>
            <A external href="https://gohugo.io">
              GoHugo.io
            </A>
          </li>
        </ul>
      </LearningItem>
      <LearningItem category="Fundamentals" title="Markdown/MDX" image="/drawings/markdown.svg">
        Simple and easy-to-use markup language, enhanced with JSX elements.
        <ul>
          <li>
            <A external href="https://www.markdownguide.org/">
              Markdown Guide
            </A>
          </li>

          <li>
            <A external href="https://mdxjs.com">
              MDX
            </A>
          </li>
        </ul>
      </LearningItem>
    </Section>
  )
}
export default Learning
