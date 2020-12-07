const Section: React.FC = () => (
  <section className="bg-rosely4 lg:py-6 lg:flex lg:justify-center">
    <div className="bg-rosely6 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
      <div className="lg:w-1/2">
        <img
          className="h-64 lg:rounded-lg lg:h-80 p-2"
          src="/drawings/buildingwebsites.svg"
          alt="Building Websites"
        />
      </div>

      <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
        <h2 className="text-2xl text-rosely2 font-bold md:text-3xl">What</h2>
        <p className="mt-4 text-rosely1">
          Jamstack is a modern way to build Websites and Apps that delivers better performance.
          Technologies in the stack include JavaScript frameworks, Static Site Generators, Headless
          CMSs, and CDNs.
        </p>
      </div>
    </div>
  </section>
)
export default Section
