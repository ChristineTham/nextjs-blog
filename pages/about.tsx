// components
import Layout from '../components/layout'
import AboutMe from '../components/tailblocks/AboutMe'
import Learning from '../components/tailblocks/Learning'
import Architecture from '../components/tailblocks/Architecture'

const About: React.FC = () => (
  <Layout _home>
    <AboutMe />
    <Learning />
    <Architecture />
  </Layout>
)
export default About
