const CTA: React.FC = () => (
  <section className="pb-16 bg-gray-300 relative pt-32">
    <div
      className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
      style={{ transform: 'translateZ(0)' }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon className="text-pink-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>

    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
        <div className="w-full text-center lg:w-8/12">
          <p className="text-4xl text-center">
            <span role="img" aria-label="love">
              😍
            </span>
          </p>
          <h3 className="font-semibold text-3xl">Do you love this Starter Kit?</h3>
          <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
            Cause if you do, it can be yours now. Hit the buttons below to navigate to get the Free
            version for your next project. Build a new web app or give an old project a new look!
          </p>
          <div className="sm:block flex flex-col mt-10">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
              target="_blank"
              rel="noreferrer"
              className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              Get started
            </a>
            <a
              href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
              target="_blank"
              rel="noreferrer"
              className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
            >
              <i className="fab fa-github text-lg mr-1"></i>
              <span>Help With a Star</span>
            </a>
          </div>
          <div className="text-center mt-16"></div>
        </div>
      </div>
    </div>
  </section>
)
export default CTA
