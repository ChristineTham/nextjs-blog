import { useState } from 'react'

const CTA: React.FC = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 201) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        firstname: '',
        lastname: '',
        email: ''
      })
    } else {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    const res0 = await fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: inputs.firstname,
        lastname: inputs.lastname,
        email: inputs.email
      })
    })
    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: inputs.email,
        subject: `${inputs.firstname} ${inputs.lastname} has subscribed to Learning Jamstack`,
        message: inputs.firstname + ' ' + inputs.lastname + ' ' + inputs.email
      })
    })
    const text = await res0.text()
    handleResponse(res0.status, text)
  }

  return (
    <section className="text-rosely1 body-font bg-rosely5">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-rosely2">
            Subscribe to get updates to this site!
          </h1>
          <p className="leading-relaxed mt-4 tex-rosely1">
            Like my articles? Enter your details and I will send you an email whenever the site has
            new content. I will not use your email for any other purpose.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-rosely6 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-rosely2 text-lg font-medium title-font mb-5">Subscribe</h2>
          <form onSubmit={handleOnSubmit}>
            <div className="relative mb-4">
              <label htmlFor="firstname" className="leading-7 text-sm text-rosely1">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                onChange={handleOnChange}
                required
                value={inputs.firstname}
                className={`w-full bg-rosely4 rounded border border-rosely3 focus:border-rosely7 text-base outline-none text-rosely0 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="lastname" className="leading-7 text-sm text-rosely1">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={handleOnChange}
                required
                value={inputs.lastname}
                className={`w-full bg-rosely4 rounded border border-rosely3 focus:border-rosely7 text-base outline-none text-rosely0 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-rosely1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleOnChange}
                required
                value={inputs.email}
                className={`w-full bg-rosely4 rounded border border-rosely3 focus:border-rosely7 text-base outline-none text-rosely0 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
              />
            </div>
            <button
              className={`text-white bg-rosely10 border-0 py-2 px-8 focus:outline-none hover:bg-rosely9 rounded text-lg`}
            >
              {!status.submitting ? (!status.submitted ? 'Subscribe' : 'Subscribed') : 'Adding ...'}
            </button>
          </form>
          {status.info.error && (
            <div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mt-4">
              <div className="flex justify-center items-center w-12 bg-red-500">
                <svg
                  className="h-6 w-6 fill-current text-white"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                </svg>
              </div>

              <div className="-mx-3 py-2 px-4">
                <div className="mx-3">
                  <span className="text-red-500 font-semibold">Error</span>
                  <p className="text-gray-600 text-sm">{status.info.msg}</p>
                </div>
              </div>
            </div>
          )}
          {!status.info.error && status.info.msg && (
            <div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden my-4">
              <div className="flex justify-center items-center w-12 bg-green-500">
                <svg
                  className="h-6 w-6 fill-current text-white"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                </svg>
              </div>

              <div className="-mx-3 py-2 px-4">
                <div className="mx-3">
                  <span className="text-green-500 font-semibold">Success</span>
                  <p className="text-gray-600 text-sm">You are now subscribed!</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
export default CTA
