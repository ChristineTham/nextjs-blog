import Image from 'next/image'

import A from '../A'
import Section from './Section'

import { site } from '../../global'
import type { ReactElement } from 'react'

function WhoWhy(): ReactElement {
  return (
    <Section
      title="Who | Why"
      className="flex flex-col sm:flex-row mx-auto"
      backgroundColor="bg-rosely5"
      width="w-36"
    >
      <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-rosely3 text-rosely1">
          <Image
            className="rounded-full"
            height="80"
            width="80"
            src="/images/profile.jpg"
            alt="Profile"
          />
        </div>
        <div className="flex flex-col items-center text-center justify-center">
          <h2 className="font-medium title-font mt-4 text-rosely1">Chris Tham</h2>
          <div className="w-20 h-1 bg-rosely7 rounded-sm mt-2 mb-4"></div>
          <p className="text-base text-rosely1 italic tracking-wide">
            artist, consultant, cyclist, designer, musician, photographer, world traveller.
          </p>
          <A external href={site.website}>
            <div className="inline-flex items-center mt-2">
              Personal website
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </A>
        </div>
      </div>
      <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l-2 border-rosely7 text-rosely0 sm:border-t-0 border-t-4 border-radius mt-4 pt-4 sm:mt-0 text-center sm:text-left">
        <p className="mb-4">
          In 2020 I decided to learn how to create modern web sites and apps, for fun (and maybe
          profit?). I started by learning Javascript (ES6) and Typescript, followed by React and
          Gatsby. I converted my company website{' '}
          <A external href={site.company_url}>
            Hello Tham
          </A>{' '}
          from Wordpress to Gatsby, Bulma and Netlify CMS hosted on Netlify.
        </p>
        <p className="mb-4">
          I am currently learning Hugo, Next.js, MDX/Markdown, Tailwind and exploring various
          headless CMS. This website is written in Next.js, Tailwind, tailblocks and hosted on
          Vercel.
        </p>
        <p className="mb-4">
          I may explore GraphQL, REST APIs and serverless functions in the near future. I am also
          creating a design system that I hope to publish in the short term.
        </p>
        <A href="/about">
          <div className="inline-flex items-center">
            For more information
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </A>
      </div>
    </Section>
  )
}
export default WhoWhy
