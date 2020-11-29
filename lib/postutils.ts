import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts')

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
  tags: string[]
  categories: string[]
}

export interface PostMeta {
  id: string
  meta: FrontMatter
}

export function getSortedPostsData(): PostMeta[] {
  // Get file names under /posts
  const fileNames = postFilePaths
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
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
  return allPostsData.sort((a, b) => {
    if (a.meta.date < b.meta.date) {
      return 1
    } else {
      return -1
    }
  })
}
