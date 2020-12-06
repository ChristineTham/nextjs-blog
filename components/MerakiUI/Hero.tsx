const Hero: React.FC = ({ children }) => (
  <header className="bg-white">
    <div className="container mx-auto px-6 py-16">
      <div className="md:flex items-center">
        <div className="w-full md:w-1/2">
          <div className="max-w-lg">{children}</div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
          <img className="max-w-2xl w-full h-full" src="/drawings/knowledge.svg" alt="Hero" />
        </div>
      </div>
    </div>
  </header>
)
export default Hero
