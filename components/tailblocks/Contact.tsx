import React, { useState } from 'react'
import A from '../A'
import { site } from '../../global'
import TwitterIcon from '../../icons/twitter.svg'
import FacebookIcon from '../../icons/facebook.svg'
import GithubIcon from '../../icons/github.svg'

type StatusType = {
  submitted: boolean
  submitting: boolean
  info: {
    error: boolean
    msg: string | null
  }
}

function Contact(): JSX.Element {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  } as StatusType)

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleResponse = (status: number, msg: string ) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        name: '',
        email: '',
        message: ''
      })
    } else {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = (e: { persist: () => void; target: { id: string; value: string } }) => {
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

  const handleOnSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: inputs.email,
        subject: 'Learning Jamstack message from ' + inputs.name + '(' + inputs.email + ')',
        message: inputs.message
      })
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <section className="text-rosely0 body-font relative mt-24">
      <div className="container p-5 mx-auto bg-rosely6 rounded-lg shadow-xl">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-rosely2">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-rosely1">
            Reach out if you are interested in a discussion, just want to say hi, provide feedback,
            or want to contact me!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleOnSubmit}>
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
                    onChange={handleOnChange}
                    required
                    value={inputs.name}
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
                    onChange={handleOnChange}
                    required
                    value={inputs.email}
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
                    onChange={handleOnChange}
                    required
                    value={inputs.message}
                    className={`w-full bg-rosely5
                    rounded border border-rosely3 focus:border-rosely7 h-32 text-base outline-none text-rosely0 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full mb-4">
                <button
                  className={`flex mx-auto text-white bg-rosely10 border-0 py-2 px-8 focus:outline-none hover:bg-rosely9 rounded text-lg`}
                >
                  {!status.submitting
                    ? !status.submitted
                      ? 'Submit'
                      : 'Submitted'
                    : 'Submitting...'}
                </button>
              </div>
              {status.info.error && (
                <div className="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
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
                <div className="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
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
                      <p className="text-gray-600 text-sm">{status.info.msg}</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="p-2 w-full pt-8 mt-8 border-t border-rosely7 text-center items-center flex flex-col">
                <div className="flex items-center mb-2">
                  <a href={site.facebook} className="text-blue-600">
                    <FacebookIcon className="w-10 h-10" />
                  </a>
                  <a href={site.twitter} className="ml-4 text-blue-400">
                    <TwitterIcon className="w-10 h-10" />
                  </a>
                  <a href={site.github} className="ml-4 text-gray-600">
                    <GithubIcon className="w-10 h-10" />
                  </a>
                </div>
                <A external href="mailto:chris.tham@hellotham.com">
                  chris.tham@hellotham.com
                </A>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact
