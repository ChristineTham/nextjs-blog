import A from '../A'
import { site } from '../../global'

function AboutMe(): JSX.Element {
  return (
    <section className="text-rosely1 body-font">
      <div className="container px-5 pt-28 mx-auto">
        <div className="flex flex-col text-center items-center">
          <h1 className="title-font sm:text-4xl text-3xl font-bold text-rosely2 text-center bg-rosely5 rounded-lg shadow-lg p-4">
            About me and this site
          </h1>
        </div>
      </div>
      <div className="container mx-auto flex px-5 pt-12 pb-20 xl:flex-row flex-col items-center">
        <div className="xl:max-w-xl xl:w-1/3 w-5/6 mb-10 xl:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="Hello Kitty"
            src="/images/hellokitty.jpeg"
          />
          <div className="flex justify-center space-x-2 flex-row mt-6">
            <A external noline href={site.website}>
              <button className="inline-flex items-center text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                christham.net
              </button>
            </A>
            <A external noline href={site.company_url}>
              <button className="inline-flex items-center text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
                Hello Tham
              </button>
            </A>
          </div>
        </div>
        <div className="xl:flex-grow xl:w-2/3 xl:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="mb-4">
            For those of you who are interested, I studied pure mathematics and computer science at
            the University of Sydney in the early 1980s, and did an honours thesis on computer
            music. I graduated with a University Medal and went on to do a Masters of Finance at
            Macquarie University.
          </p>
          <p className="mb-4">
            Although I did some coding in part time jobs in my final years at university (in C and
            occasionally Perl plus some SQL), I have not been involved in software development for
            most of my career, as my focus was on IT strategy and management consulting. In recent
            years, I have started coding again, mainly for fun (and maybe profit?) I started by
            learning data science (using Python and R) and have also built an iOS app in Swift.
          </p>
          <p className="mb-4">
            In 2020 I decided to learn how to create modern web sites and apps. I started by
            learning Javascript and Typescript early in 2020. Then I picked up React and Gatsby. I
            run a management consulting company called Hello Tham. The{' '}
            <A external href={site.company_url}>
              website
            </A>{' '}
            used to be in Wordpress, but I converted it to Gatsby, Bulma and Netlify CMS hosted on
            Netlify.
          </p>
        </div>
      </div>
    </section>
  )
}
export default AboutMe
