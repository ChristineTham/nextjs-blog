import { NextSeo } from 'next-seo'

// components
import Layout from '../components/layout'
import A from '../components/A'
import { site } from '../global'

const Privacy: React.FC = () => {
  const title = 'Privacy Policy'
  const description =
    'The European Union (EU) General Data Protection Regulation (GDPR) is a first step toward giving EU citizens and residents more control over how their data are used by organizations. This is a GPDR compliant privacy notice for this site, which is required as this website may be visited by people residing in the EU.'
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
              url: site.url + '/drawings/privacy.png',
              alt: title
            }
          ]
        }}
      />
      <section className="text-rosely0 body-font bg-white mt-28 ">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center rounded-lg shadow-xl bg-rosely4">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-6 flex flex-col items-start">
            <h1 className="title-font text-4xl font-bold text-rosely2 leading-none mt-4">
              {title}
            </h1>
            <p className="mt-6 text-rosely1 text-lg tracking-wide">
              <em>{description}</em>
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-4">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/drawings/privacy.svg"
            />
          </div>
        </div>
      </section>
      <main className="mt-8 md:mt-10 pb-40 relative bg-white">
        <article className="prose mx-auto">
          <h2>Identity and contact details</h2>
          <p>
            This website is a personal website owned by Chris Tham. For contact details, please
            refer to the <A href="/contact">Contact page</A> on this website.
          </p>
          <h2>Collection of personal data</h2>
          <p>
            This website is currently a static web site hosted on{' '}
            <A external href="https://vercel.com">
              Vercel
            </A>
            . We currently collect your name and email information only if you subscribe to our
            mailing list for website notifications, and if you choose to contact us via the{' '}
            <A href="/contact">Contact</A> page. Vercel may also collect some statistics on the
            usage of their service, please refer to the{' '}
            <A external href="https://vercel.com/legal/privacy-policy">
              Vercel Privacy Policy
            </A>{' '}
            for further information and draw your own conclusions.
          </p>
          <h2>Future data collection</h2>
          <p>
            We reserve the right to change this privacy policy and implement user data collection
            for the purposes of providing features such as usage tracking, memberships, commenting,
            and any other feature consistent with the stated purpose of this website which is in the{' '}
            <A href="/about">About page</A>. If we do so, we will change this Privacy Policy
            appropriately so please visit this page from time to time.
          </p>
          <h2>What are your data protection rights?</h2>
          <p>
            If you are a citizen of the EU, we would like to make sure you are fully aware of all of
            your data protection rights. If you are not a citizen of the EU, we would like to honour
            these rights anyway. Every user is entitled to the following:
          </p>
          <ul>
            <li>
              <em>The right to access</em> &mdash; You have the right to request us for copies of
              your personal data.
            </li>
            <li>
              <em>The right to rectification</em> &mdash; You have the right to request that we
              correct any information you believe is inaccurate. You also have the right to request
              we complete the information you believe is incomplete. Please use the form in the{' '}
              <A href="/contact">Contact</A> page to notify us.
            </li>
            <li>
              <em>The right to erasure</em> &mdash; You have the right to request that we erase your
              personal data, under certain conditions. This includes unsubscribing yourself from the
              mailing list (which you can do from link at the bottom of every email you receive from
              us). In addition, you can also request we delete any previous feedback you have given
              us via the <A href="/contact">Contact</A> page.
            </li>
            <li>
              <em>The right to restrict processing</em> &mdash; You have the right to request that
              we restrict the processing of your personal data, under certain conditions. We
              currently do not process your personal data.
            </li>
            <li>
              <em>The right to object to processing</em> &mdash; You have the right to object to our
              processing of your personal data, under certain conditions. We currently do not
              process your personal data.
            </li>
            <li>
              <em>The right to data portability</em> &mdash; You have the right to request that we
              transfer the data that we have collected to another organization, or directly to you,
              under certain conditions. On request, we can provide you with copies of any previous
              feedback you have sent to us, if they are still on our email server (we periodically
              clean our emails and may no longer have copies to provide to you).
            </li>
          </ul>
          <h2>Cookies</h2>
          <p>
            Cookies are text files placed on your computer to collect standard Internet log
            information and visitor behavior information. When you visit our websites, we may
            collect information from you automatically through cookies or similar technology. For
            further information, visit <A href="https://allaboutcookies.org">allaboutcookies.org</A>
            .
          </p>
          <h2>How do we use cookies?</h2>
          <p>
            We currently do not explicitly use cookies in our website. However, we do use third
            party npm packages that may implement cookies. Please refer to the{' '}
            <A external href={site.repository}>
              source code
            </A>{' '}
            of our web site available on Github for details on third party packages that we use or
            visit the <A href="/about">About page</A> for general information on the building blocks
            of our website.
          </p>
          <h2>How to manage cookies</h2>
          <p>
            You can set your browser not to accept cookies, and the above website tells you how to
            remove cookies from your browser. However, in a few cases, some of our website features
            may not function as a result.
          </p>
          <h2>Privacy policies of other websites</h2>
          <p>
            Our website contains links to other websites. Our privacy policy applies only to our
            website, so if you click on a link to another website, you should read their privacy
            policy.
          </p>
          <h2>Changes to our privacy policy</h2>
          <p>We regularly review our privacy policy and place any updates on this web page.</p>
        </article>
      </main>
    </Layout>
  )
}
export default Privacy
