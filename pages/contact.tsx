import { NextSeo } from '../components/SEO/NextSeo'
import { SocialProfileJsonLd } from '../components/SEO/SocialProfileJsonLd'

// components
import Layout from '../components/layout'
import Contact from '../components/tailblocks/Contact'
import CTA from '../components/tailblocks/CTA'

import { site } from '../global'

const ContactUs: React.FC = () => {
  const title = 'Contact Us'
  const description =
    'Reach out if you are interested in a discussion, just want to say hi, provide feedback, or want to contact me!'
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
          }
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Chris Tham"
        url={site.url}
        sameAs={[site.facebook, site.instagram, site.linkedin, site.twitter]}
      />
      <Contact />
      <CTA />
    </Layout>
  )
}
export default ContactUs
