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
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkMdxEnhanced from 'remark-mdx-math-enhanced'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeHighlight from 'rehype-highlight'
import remarkTOC from 'remark-toc'
import remarkSmartyPants from 'remark-smartypants'
import A from '../../components/A'
import { ReactTyped } from 'react-typed'
import Gallery from '../../components/Gallery'
import { Math } from '../../components/Math'
import 'highlight.js/styles/github-dark.css'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: A as React.FC,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import('../../components/TestComponent')),
  Head,
  ReactTyped,
  Gallery,
  Math
}

interface PostProps {
  id: string
  url: string
  source: MDXRemoteSerializeResult
  frontMatter: FrontMatter
}

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
  const id = (params && params.id) || 'xx'
  const postFilePath = path.join(POSTS_PATH, `${id}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  if (data.gallery) {
    const galleryPath = path.join(GALLERY_PATH, data.gallery)
    const images = fs.readdirSync(galleryPath)
    data.images = images.map((image) => path.join('/gallery', data.gallery, image))
    data.image_dimensions = images.map((image) =>
      ImageSize(fs.readFileSync(path.join(GALLERY_PATH, data.gallery, image)))
    )
  }

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        remarkMath,
        [remarkMdxEnhanced, { component: 'Math' }],
        remarkSmartyPants,
        remarkTOC
      ],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeCodeTitles, rehypeHighlight]
    },
    scope: data
  })

  return {
    props: {
      id: id,
      url: postFilePath,
      source: mdxSource,
      frontMatter: data as FrontMatter
    }
  }
}
