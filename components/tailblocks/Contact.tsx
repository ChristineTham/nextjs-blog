function Contact(): JSX.Element {
  return (
    <section className="text-rosely0 body-font relative bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-rosely2">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-rosely1">
            Reach out if you are interested in a discussion, or want me to work for you!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-rosely1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full bg-rosely5
                   rounded border border-rosely3 focus:border-rosely7 text-base outline-none text-rosely0 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-rosely1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full bg-rosely5
                   rounded border border-rosely3 focus:border-rosely7 text-base outline-none text-rosely0 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-rosely1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`w-full bg-rosely5
                   rounded border border-rosely3 focus:border-rosely7 h-32 text-base outline-none text-rosely0 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                className={`flex mx-auto text-white bg-rosely10 border-0 py-2 px-8 focus:outline-none hover:bg-rosely9 rounded text-lg`}
              >
                Button
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-rosely7 text-center items-center flex flex-col">
              <div className="flex items-center">
                <a href="#" className="text-blue-600">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" className="ml-4 text-blue-400">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="ml-4 text-red-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
              </div>
              <a href="#" className={`text-pink-500`}>
                example@email.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
