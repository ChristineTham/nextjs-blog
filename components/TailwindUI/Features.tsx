import Feature from './Feature'

import Security from '../../icons/security.svg'
import Scale from '../../icons/scale.svg'
import Sparkle from '../../icons/sparkle.svg'
import Auto from '../../icons/play.svg'
import Device from '../../icons/device.svg'
import Code from '../../icons/code.svg'
import type { ReactElement } from 'react'

export default function Features(): ReactElement {
  return (
    <>
      <div className="py-12 bg-rosely6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-rosely2 sm:text-4xl">
              What is Jamstack?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-rosely1 lg:mx-auto">
              Jamstack is a modern way to build Websites and Apps that delivers better performance.
              Technologies in the stack include JavaScript frameworks, Static Site Generators,
              Headless CMSs, and CDNs.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <Feature feature="Security" description="No servers to hack into.">
                <Security className="h-10 w-10" />
              </Feature>
              <Feature feature="Scalability" description="No infrastructure to upgrade.">
                <Scale className="h-10 w-10" />
              </Feature>
              <Feature feature="Performance" description="Prerendered content delivered on a CDN.">
                <Sparkle className="h-10 w-10" />
              </Feature>
              <Feature feature="Maintainability" description="Automatic build, test and deploy.">
                <Auto className="h-10 w-10" />
              </Feature>
              <Feature feature="Portability" description="Usable on any device.">
                <Device className="h-10 w-10" />
              </Feature>
              <Feature feature="Open" description="Open source development.">
                <Code className="h-10 w-10" />
              </Feature>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
