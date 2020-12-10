import { getSortedPostsData, PostMeta } from '../lib/postutils'
import { GetStaticProps } from 'next'

import Navbar from '../components/MerakiUI/Navbar'
import Hero from '../components/MerakiUI/Hero'
import About from '../components/MerakiUI/About'
import Section from '../components/MerakiUI/Section'
import Feature from '../components/MerakiUI/Feature'
import Article from '../components/MerakiUI/Article'
import Footer from '../components/MerakiUI/Footer'

import Security from '../icons/security.svg'
import Scale from '../icons/scale.svg'
import Sparkle from '../icons/sparkle.svg'
import Auto from '../icons/play.svg'
import Device from '../icons/device.svg'
import Code from '../icons/code.svg'

const SampleMeraki: React.FC<{ allPostsData: PostMeta[] }> = ({ allPostsData }) => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Section />
    <section className="bg-rosely6">
      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <Feature feature="Security" description="No servers to hack into.">
            <Security className="h-10 w-10" />
          </Feature>
          <Feature feature="Scalability" description="No infrastructure to upgrade.">
            <Scale className="h-10 w-10" />
          </Feature>
          <Feature feature="Performance" description="Prerendered content delivered on a CDN.">
            <Sparkle className="h-10 w-10" />
          </Feature>
          <Feature feature="Maintainability" description="Automatic build, test and deploy.">
            <Auto className="h-10 w-10" />
          </Feature>
          <Feature feature="Portability" description="Usable on any device.">
            <Device className="h-10 w-10" />
          </Feature>
          <Feature feature="Open" description="Open source development.">
            <Code className="h-10 w-10" />
          </Feature>
        </div>
      </div>
    </section>
    <article className="bg-rosely5">
      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {allPostsData.map(({ id, meta }) => (
            <Article href={`/posts/${id}`} meta={meta} key={id} />
          ))}
        </div>
      </div>
    </article>
    <Footer />
  </>
)
export default SampleMeraki

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData().filter((post) => !post.meta.draft)

  return {
    props: {
      allPostsData
    }
  }
}
