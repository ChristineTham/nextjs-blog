import BlogLayout from '../../components/BlogLayout'
import Head from 'next/head'
import fs from 'fs'
import ImageSize from 'image-size'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import path from 'path'
import { GetStaticProps, GetStaticPaths } from 'next'
import { postFilePaths, POSTS_PATH, GALLERY_PATH, FrontMatter } from '../../lib/postutils'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkSlug from 'remark-slug'
import remarkHeadings from 'remark-autolink-headings'
import remarkCodeTitles from 'remark-code-titles'
import remarkTOC from 'remark-toc'
import remarkSmartyPants from 'remark-smartypants'
// import remarkTWEmoji from 'remark-twemoji'
import CodeBlock from '../../components/CodeBlock'
import A from '../../components/A'
import Typed from 'react-typed'
import Gallery from '../../components/Gallery'

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
  Typed,
  Gallery
}

interface PostProps {
  id: string
  url: string
  source: MDXRemoteSerializeResult
  frontMatter: FrontMatter
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Post: React.FC<PostProps> = ({ url, source, frontMatter }) => {
  return (
    <BlogLayout url={url} meta={frontMatter}>
      <MDXRemote {...source} components={components} />
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

  if (data.gallery) {
    const galleryPath = path.join(GALLERY_PATH, data.gallery)
    const images = fs.readdirSync(galleryPath)
    data.images = images.map((image) => path.join('/gallery', data.gallery, image))
    data.image_dimensions = images.map((image) =>
      ImageSize(path.join(GALLERY_PATH, data.gallery, image))
    )
  }

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkMath,
        remarkSlug,
        remarkHeadings,
        remarkCodeTitles,
        remarkSmartyPants,
        // remarkTWEmoji,
        remarkTOC
      ],
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
