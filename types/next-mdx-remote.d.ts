import type { ReactElement } from 'react'

interface Scope {
  [key: string]: unknown
}

declare module 'next-mdx-remote/hydrate' {
  type HydrateOptions = { components: any }

  export interface Source {
    compiledSource: string
    renderedOutput: string
    scope?: Scope
  }

  let hydrate: (source: Source, options?: HydrateOptions) => ReactElement
  export default hydrate
}

declare module 'next-mdx-remote/render-to-string' {
  type RenderToStringOptions = {
    components?: unknown
    mdxOptions?: unknown
    scope?: Scope
  }

  let renderToString: (source: string, options?: RenderToStringOptions) => Promise<Source>
  export default renderToString
}
