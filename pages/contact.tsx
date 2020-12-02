import { NextSeo } from 'next-seo'

// components
import Layout from '../components/layout'
import Contact from '../components/tailblocks/Contact'

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
          description: description
        }}
      />
      <Contact />
    </Layout>
  )
}
export default ContactUs
