import { NextSeo, SocialProfileJsonLd } from 'next-seo'
import { GetStaticProps } from 'next'
import mailchimp from '@mailchimp/mailchimp_marketing'

// components
import Layout from '../components/layout'
import AboutMe from '../components/tailblocks/AboutMe'
import Learning from '../components/tailblocks/Learning'
import Architecture from '../components/tailblocks/Architecture'
import Section from '../components/tailblocks/Section'
import ListHeader from '../components/TailwindUI/ListHeader'
import ListItem from '../components/TailwindUI/ListItem'

import { site } from '../global'

interface AboutProps {
  arch: string
  platform: string
  version: string
  commit: string
  chimpstatus: string
}

const About: React.FC<AboutProps> = ({ arch, platform, version, commit, chimpstatus }) => {
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
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ListHeader title="Deployment Information" description="Website deployment details" />
          <div className="border-t border-rosely7">
            <dl>
              <ListItem item="Architecture" value={arch} bgcolor="bg-rosely6" />
              <ListItem item="Platform" value={platform} />
              <ListItem item="NodeJS Version" value={version} bgcolor="bg-rosely6" />
              <ListItem item="Last Commit" value={commit} />
              <ListItem item="Mailchimp Status" value={chimpstatus} bgcolor="bg-rosely6" />
            </dl>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
export default About

export const getStaticProps: GetStaticProps = async () => {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX
  })
  const mailchimpResponse = await mailchimp.ping.get()

  return {
    props: {
      arch: process.arch,
      platform: process.platform,
      version: process.version,
      commit: process.env.VERCEL_GIT_COMMIT_MESSAGE,
      chimpstatus: mailchimpResponse.health_status
    }
  }
}
