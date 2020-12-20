import WhatItem from './WhatItem'
import A from '../A'
import Section from './Section'

import Security from '../../icons/security.svg'
import Scale from '../../icons/scale.svg'
import Sparkle from '../../icons/sparkle.svg'
import Auto from '../../icons/play.svg'
import Device from '../../icons/device.svg'
import Code from '../../icons/code.svg'

function What(): JSX.Element {
  return (
    <Section
      title="What"
      description="Jamstack is a modern way to build Websites and Apps that delivers better performance.
    Technologies in the stack include JavaScript frameworks, Static Site Generators,
    Headless CMSs, and CDNs."
      backgroundColor="bg-white"
      className="flex flex-col"
      width="w-20"
    >
      <div className="flex flex-wrap">
        <WhatItem feature="Security" description="No servers to hack into.">
          <Security className="h-10 w-10" />
        </WhatItem>
        <WhatItem feature="Scalability" description="No infrastructure to upgrade.">
          <Scale className="h-10 w-10" />
        </WhatItem>
        <WhatItem feature="Performance" description="Prerendered content delivered on a CDN.">
          <Sparkle className="h-10 w-10" />
        </WhatItem>
        <WhatItem feature="Maintainability" description="Automatic build, test and deploy.">
          <Auto className="h-10 w-10" />
        </WhatItem>
        <WhatItem feature="Portability" description="Usable on any device.">
          <Device className="h-10 w-10" />
        </WhatItem>
        <WhatItem feature="Open" description="Open source development.">
          <Code className="h-10 w-10" />
        </WhatItem>
      </div>
      <A external noline href="https://jamstack.org">
        <button
          className={`flex mx-auto mt-8 text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-rosely9 rounded text-lg`}
        >
          Learn More at Jamstack.org
        </button>
      </A>
    </Section>
  )
}
export default What
