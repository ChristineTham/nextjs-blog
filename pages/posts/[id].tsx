import BlogLayout from '../../components/BlogLayout'
import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import { Source } from 'next-mdx-remote/hydrate'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import path from 'path'
import { GetStaticProps, GetStaticPaths } from 'next'
import { postFilePaths, POSTS_PATH, FrontMatter } from '../../lib/postutils'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import CodeBlock from '../../components/CodeBlock'
import A from '../../components/A'
import inlineCode from '../../components/inlineCode'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: A,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import('../../components/TestComponent')),
  Head,
  code: CodeBlock,
  inlineCode: inlineCode
}

interface PostProps {
  id: string
  url: string
  source: Source
  frontMatter: FrontMatter
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Post: React.FC<PostProps> = ({ id, url, source, frontMatter }) => {
  const content = hydrate(source, { components })
  return (
    <BlogLayout url={url} meta={frontMatter}>
      {content}
    </BlogLayout>
  )
}
export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((id) => ({ params: { id } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.id}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
    },
    scope: data
  })

  return {
    props: {
      id: params.id,
      url: postFilePath,
      source: mdxSource,
      frontMatter: data as FrontMatter
    }
  }
}
