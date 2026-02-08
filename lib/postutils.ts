import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ISizeCalculationResult } from 'image-size/types/interface'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts')
export const GALLERY_PATH = path.join(process.cwd(), 'public/gallery')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

// Suggested front matter, a subset of Hugo
export interface FrontMatter {
  date: string
  type: string
  draft: boolean
  title: string
  description: string
  author: string
  featured_image: string
  images: string[]
  image_dimensions: ISizeCalculationResult[]
  gallery: string
  tags: string[]
  categories: string[]
}

export interface PostMeta {
  id: string
  meta: FrontMatter
}

let savedPosts: PostMeta[]
let categories: string[]
let isLoaded = false

export function getPosts(): PostMeta[] {
  if (isLoaded) return savedPosts

  // Get file names under /posts
  const fileNames = postFilePaths
  const posts = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(POSTS_PATH, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      meta: matterResult.data as FrontMatter
    }
  })
  // Sort posts by date
  savedPosts = posts.sort((a, b) => {
    if (a.meta.date < b.meta.date) {
      return 1
    } else {
      return -1
    }
  })
  categories = Array.from(new Set(posts.flatMap((post) => post.meta.categories).sort()))

  isLoaded = true
  return savedPosts
}

export function getCategories(): string[] {
  if (!isLoaded) getPosts()
  return categories
}
