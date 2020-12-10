import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import Navbar from '../components/Notus/Navbar'
import Footer from '../components/Notus/Footer'
import Feature from '../components/Notus/Feature'
import Article from '../components/MerakiUI/Article'

import Jamstack from '../icons/jamstack.svg'
import Security from '../icons/security.svg'
import Scale from '../icons/scale.svg'
import Sparkle from '../icons/sparkle.svg'
import Auto from '../icons/play.svg'
import Device from '../icons/device.svg'
import Code from '../icons/code.svg'
import Academic from '../icons/academic.svg'
import Collection from '../icons/collection.svg'
import NextJSLogo from '../icons/nextjs.svg'
import TailwindLogo from '../icons/tailwindcss.svg'
import MDXLogo from '../icons/mdx.svg'
import ReactLogo from '../icons/react.svg'
import TypescriptLogo from '../icons/typescript.svg'
import VercelLogo from '../icons/vercel.svg'
import Github from '../icons/github.svg'
import Inbox from '../icons/inboxin.svg'
import Info from '../icons/info.svg'
import Chat from '../icons/chat.svg'
import Document from '../icons/document.svg'

import { site } from '../global'
import { getSortedPostsData, PostMeta } from '../lib/postutils'
import A from '../components/A'
import NavbarItem from '../components/Notus/NavbarItem'

const SampleNotus: React.FC<{ allPostsData: PostMeta[] }> = ({ allPostsData }) => {
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
    <>
      <Navbar>
        <NavbarItem href="/about">
          <Info className="h-6 w-6" />
          About
        </NavbarItem>
        <NavbarItem href="/contact">
          <Chat className="h-6 w-6" />
          Contact
        </NavbarItem>
        <NavbarItem href="/privacy">
          <Security className="h-6 w-6" />
          Privacy
        </NavbarItem>
        <NavbarItem href="/posts">
          <Document className="h-6 w-6" />
          Posts
        </NavbarItem>
      </Navbar>
      <section className="header relative pt-48 items-center flex max-h-full">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-jamstack">
                Learning
                <Jamstack className="h-14 p-2 bg-pink-300" />
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-rosely1">{site.description}</p>
              <div className="mt-12">
                <Link href="/posts">
                  <a
                    href="/posts"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-rosely10 hover:bg-rosely9 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Read
                  </a>
                </Link>

                <a
                  href={site.repository}
                  className="github-star ml-1 text-rosely0 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-rosely7 hover:bg-rosely3 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-full"
          src="/drawings/blogging.svg"
          alt="Hero"
        />
      </section>

      <section className="mt-48 md:mt-40 relative bg-rosely5">
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
            <polygon className="text-rosely5 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words text-white w-full mb-6 shadow-lg rounded-lg bg-rosely10">
                <img
                  alt="..."
                  src="/images/hellokitty.jpeg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-24 -top-24"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-rosely10 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">Chris Tham</h4>
                  <p className="text-md font-light mt-2 text-white">
                    <em>
                      artist, consultant, cyclist, designer, musician, photographer, world
                      traveller.
                    </em>
                  </p>
                  <p className="text-md font-light mt-2 text-white">
                    In 2020 I decided to learn how to create modern web sites and apps, for fun (and
                    maybe profit?).
                  </p>
                  <p className="text-md font-light mt-2 text-white">
                    Jamstack is a modern way to build Websites and Apps that delivers better
                    performance. Technologies in the stack include JavaScript frameworks, Static
                    Site Generators, Headless CMSs, and CDNs.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <Feature feature="Security" description="No servers to hack into.">
                    <Security className="h-12 w-12" />
                  </Feature>
                  <Feature feature="Scalability" description="No infrastructure to upgrade.">
                    <Scale className="h-12 w-12" />
                  </Feature>
                  <Feature
                    feature="Performance"
                    description="Prerendered content delivered on a CDN."
                  >
                    <Sparkle className="h-12 w-12" />
                  </Feature>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <Feature
                    feature="Maintainability"
                    description="Automatic build, test and deploy."
                  >
                    <Auto className="h-12 w-12" />
                  </Feature>
                  <Feature feature="Portability" description="Usable on any device.">
                    <Device className="h-12 w-12" />
                  </Feature>
                  <Feature feature="Open" description="Open source development.">
                    <Code className="h-12 w-12" />
                  </Feature>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-rosely10 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-rosely4">
                <Academic className="h-16 w-16" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-rosely2">
                What I am Learning
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-rosely1">
                This is a selection of tools and frameworks that I am learning right now, which may
                be featured as the subject of articles on this site.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  HTML
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  CSS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  Typescript
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  React
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  Gatsby
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  NextJS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  TailwindCSS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  Hugo
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  Markdown
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  MDX
                </span>
              </div>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="Web"
                  src="/drawings/web.svg"
                  className="w-full align-middle rounded absolute shadow-lg max-w-xs sm:-top-96 lg:top-48 lg:left-52 bg-rosely4"
                />
                <img
                  alt="NextJS"
                  src="/drawings/nextjs.svg"
                  className="w-full align-middle rounded absolute shadow-lg max-w-xs sm:-top-40 lg:-left-32 lg:-top-28 bg-rosely4"
                />
                <img
                  alt="GatsbyJS"
                  src="/drawings/gatsbyjs.svg"
                  className="w-full align-middle rounded absolute shadow-lg max-w-xs sm:top-0 lg:left-52 lg:-top-64 bg-rosely4"
                />
                <img
                  alt="TailwindCSS"
                  src="/drawings/tailwindcss.svg"
                  className="w-full align-middle rounded absolute shadow-lg max-w-xs sm:top-52 lg:-left-20 lg:top-16 bg-rosely4"
                />
                <img
                  alt="React"
                  src="/drawings/react.svg"
                  className="w-full align-middle rounded absolute shadow-lg max-w-xs sm:top-96 lg:left-56 lg:-top-8 bg-rosely4"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a href="https://nextjs.org" target="_blank" rel="noreferrer">
                    <div className="bg-rosely11 shadow-lg rounded-lg text-center p-8">
                      <NextJSLogo className="shadow-md rounded-full max-w-full h-20 w-20 mx-auto p-2 bg-white" />
                      <p className="text-lg text-white mt-4 font-semibold">NextJS</p>
                    </div>
                  </a>
                  <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
                    <div className="bg-rosely14 shadow-lg rounded-lg text-center p-8 mt-8">
                      <TailwindLogo className="shadow-md rounded-full max-w-full h-20 w-20 mx-auto p-2 bg-white" />
                      <p className="text-lg text-white mt-4 font-semibold">TailwindCSS</p>
                    </div>
                  </a>
                  <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <div className="bg-rosely7 shadow-lg rounded-lg text-center p-8 mt-8">
                      <ReactLogo className="shadow-md rounded-full max-w-full h-20 w-20 mx-auto p-2 bg-white" />
                      <p className="text-lg text-white mt-4 font-semibold">React</p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a href="https://mdxjs.com" target="_blank" rel="noreferrer">
                    <div className="bg-rosely12 shadow-lg rounded-lg text-center p-8">
                      <MDXLogo className="shadow-md rounded-full max-w-full h-20 w-20 mx-auto p-2 bg-white" />
                      <p className="text-lg text-white mt-4 font-semibold">MDX</p>
                    </div>
                  </a>
                  <a href="https://typescriptlang.org" target="_blank" rel="noreferrer">
                    <div className="bg-rosely15 shadow-lg rounded-lg text-center p-8 mt-8">
                      <TypescriptLogo className="shadow-md max-w-full h-20 w-20 mx-auto p-2 bg-blue" />
                      <p className="text-lg text-white mt-4 font-semibold">Typescript</p>
                    </div>
                  </a>
                  <a href="https://vercel.com" target="_blank" rel="noreferrer">
                    <div className="bg-rosely1 shadow-lg rounded-lg text-center p-8 mt-8">
                      <VercelLogo className="shadow-md rounded-full max-w-full h-20 w-20 mx-auto p-2 bg-blue" />
                      <p className="text-lg text-white mt-4 font-semibold">Vercel</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-rosely10 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-rosely4">
                <Collection className="h-16 w-16" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-rosely2">
                Building Blocks
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-rosely1">
                This website started from me following the Learn Nextjs tutorial and then I
                subsequently kept building on it until it morphed into what you see today.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  React
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  NextJS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  TailwindCSS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  Undraw
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  Tailblocks
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  HeroIcons
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  Flaticon
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-rosely8 uppercase last:mr-0 mr-2 mt-2">
                  Vercel
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-16 pt-16">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-rosely10 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-rosely4">
                  <Inbox className="h-16 w-16" />
                </div>
                <h3 className="text-3xl font-semibold text-rosely2">Subscribe</h3>
                <p className="mt-4 text-lg leading-relaxed text-rosely1">
                  Receive email notifications whenever there is new content on this site.
                </p>
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
                    {!status.submitting
                      ? !status.submitted
                        ? 'Subscribe'
                        : 'Subscribed'
                      : 'Adding ...'}
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

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)'
                }}
                src="/images/screenshot.png"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-12">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl text-rosely2">Articles</h2>
            <p className="text-lg leading-relaxed mt-4 text-rosely1">
              Please follow my journey by reading articles relating to steps along my learning
              process.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-rosely5">
        <div className="container mx-auto px-6 pt-8 pb-16">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {allPostsData.map(({ id, meta }) => (
              <Article href={`/posts/${id}`} meta={meta} key={id} />
            ))}
          </div>
        </div>
      </article>

      <section className="py-20 bg-rosely2 overflow-hidden">
        <div className="container mx-auto pb-32">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-24">
              <div className="text-rosely10 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-rosely4">
                <Code className="h-16 w-16" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">Open Source</h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-rosely6">
                This site is open source (MIT Licence) and you can use it as a starting base for
                your own projects.
              </p>
              <a
                href={site.repository}
                target="_blank"
                rel="noreferrer"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-rosely10 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
              >
                Github
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-24 relative">
              <Github className="fab fa-github text-gray-800 absolute text-55 -top-12 -right-100 left-auto opacity-80" />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-rosely6 relative pt-32">
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
            <polygon className="text-rosely6 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-rosely5 shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">Do you love this site?</h3>
              <p className="text-rosely1 text-lg leading-relaxed mt-4 mb-4">
                Send me a message or reach out on social media!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <A
                  href="/contact"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-rosely10 hover:bg-rosely9 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Contact
                </A>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default SampleNotus

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData().filter((post) => !post.meta.draft)

  return {
    props: {
      allPostsData
    }
  }
}
