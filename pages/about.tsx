import { NextSeo, SocialProfileJsonLd } from 'next-seo'

// components
import Layout from '../components/layout'
import AboutMe from '../components/tailblocks/AboutMe'
import Learning from '../components/tailblocks/Learning'
import Architecture from '../components/tailblocks/Architecture'
import List from '../components/TailwindUI/List'
import Section from '../components/tailblocks/Section'

import { site } from '../global'

const About: React.FC = () => {
  const title = 'About'
  const description = 'About Me and This Site'
  return (
    <Layout>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          type: 'profile',
          profile: {
            firstName: 'Chris',
            lastName: 'Tham',
            username: 'chris1tham',
            gender: 'female'
          },
          images: [
            {
              url: site.url + '/images/hellokitty.jpg',
              alt: title
            }
          ]
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Chris Tham"
        url={site.url}
        sameAs={[site.facebook, site.instagram, site.linkedin, site.twitter]}
      />
      <AboutMe />
      <Learning />
      <Architecture />
      <Section
        title="Website Information"
        description="Detailed information on current build of website"
        backgroundColor="bg-rosely5"
        width="w-64"
      >
        <List />
      </Section>
    </Layout>
  )
}
export default About
