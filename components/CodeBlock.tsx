/* eslint react/jsx-key: 0 */

import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { mdx } from '@mdx-js/react'
import theme from '../styles/rosely-prism'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const CodeBlock: React.FC<{
  children: string
  className: string
  live: string
  render: string
}> = ({ children, className, live, render }) => {
  const language = className ? className.replace(/language-/, '') : 'bash'

  if (live) {
    return (
      <div className="mt-10 bg-rosely5">
        <LiveProvider
          code={children.trim()}
          transformCode={(code) => '/** @jsx mdx */' + code}
          scope={{ mdx }}
        >
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }

  if (render) {
    return (
      <div className="mt-10">
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      theme={theme}
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} text-left mt-4 mr-0 p-2 overflow-scroll text-lg`}
          style={style}
        >
          {tokens.map((line, i) => (
            <div className="table-row" key={i} {...getLineProps({ line, key: i })}>
              <span className="table-cell text-right w-10 pr-4 select-none opacity-50 text-xs">
                {i + 1}
              </span>
              <span className="table-cell">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
export default CodeBlock
