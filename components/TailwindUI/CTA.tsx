import Github from '../../icons/github.svg'
import Read from '../../icons/book.svg'

export default function CTA(): JSX.Element {
  return (
    <>
      <div className="bg-rosely5">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-rosely0 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-rosely10">Read an article or browse source code</span>
          </h2>
          <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rosely10 hover:bg-rosely9"
              >
                <Read className="h-6 w-6" /> &nbsp; Read
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-rosely0 bg-rosely7 hover:bg-rosely3"
              >
                <Github className="h-6 w-6" /> &nbsp; Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
