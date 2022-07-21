import { useMemo } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

interface MathProps {
  children: React.ReactNode
  display: boolean; options?: string[]
}

export const Math: React.FC<MathProps> = ({ children = '', display = false, options }) => {
  const Wrapper = display ? 'div' : 'span'
  if (typeof children !== 'string') throw new Error('Children prop must be a katex string')

  const renderedKatex = useMemo(() => {
    let result

    try {
      result = katex.renderToString(children, {
        ...options,
        displayMode: display,
        throwOnError: true,
        globalGroup: true,
        trust: true,
        strict: false
      })
    } catch (error) {
      console.error(error)
      result = katex.renderToString(children, {
        ...options,
        displayMode: display,
        throwOnError: false,
        strict: 'ignore',
        globalGroup: true,
        trust: true
      })
    }

    return result
  }, [children, display, options])

  return <Wrapper dangerouslySetInnerHTML={{ __html: renderedKatex || '' }} />
}
