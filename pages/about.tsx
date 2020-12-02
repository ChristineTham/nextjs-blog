import { NextSeo } from 'next-seo'

// components
import Layout from '../components/layout'
import AboutMe from '../components/tailblocks/AboutMe'
import Learning from '../components/tailblocks/Learning'
import Architecture from '../components/tailblocks/Architecture'

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
          images: [
            {
              url: site.url + '/images/hellokitty.jpg',
              alt: title
            }
          ]
        }}
      />
      <AboutMe />
      <Learning />
      <Architecture />
    </Layout>
  )
}
export default About
