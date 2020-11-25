const Hero: React.FC = ({ children }) => (
  <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
    <div className="container mx-auto items-center flex flex-wrap">
      <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">{children}</div>
    </div>
    <img
      className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
      src="/images/hero.jpg"
      alt="Hero Image"
    />
    <span className="text-xs text-right text-gray-400">
      <em>Laptop and Notebook:</em> by{' '}
      <a href="https://unsplash.com/@nickmorrison?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Nick Morrison
      </a>
      on{' '}
      <a href="https://unsplash.com/s/photos/learning?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Unsplash
      </a>
    </span>
  </section>
)
export default Hero
