# Gemini CLI Context: Learning Jamstack (Next.js Blog)

This project is a personal blog built with Next.js, originally evolved from the "Learn Next.js" course and enhanced with various Jamstack features. It uses MDX for content and Tailwind CSS for styling.

## Project Overview

- **Main Technologies:**
  - **Framework:** Next.js 16 (Pages Router)
  - **Language:** TypeScript
  - **Styling:** Tailwind CSS 4 with `@tailwindcss/typography`
  - **Content:** MDX via `next-mdx-remote`
  - **Metadata:** parsed using `gray-matter`
  - **Testing:** Jest and React Testing Library
  - **Key Libraries:** `next-seo` for SEO, `rss` for feed generation, `photoswipe` for galleries, `katex` for math, `prism-react-renderer` for code highlighting.

- **Architecture:**
  - **Static Site Generation (SSG):** All posts are pre-rendered at build time.
  - **Content Management:** Posts are stored as `.mdx` files in the `/posts` directory.
  - **Data Fetching:** `getStaticProps` and `getStaticPaths` are used in dynamic routes (`pages/posts/[id].tsx`) to fetch and serialize MDX content.
  - **Custom Components:** MDX files can use custom components (defined in `pages/posts/[id].tsx`), such as `Gallery`, `Math`, and `ReactTyped`.

## Building and Running

### Key Commands

- **Development:** `pnpm dev`
  Runs the Next.js development server (with increased heap size for large builds).
- **Build:** `pnpm build`
  Generates a production build of the static site.
- **Start:** `pnpm start`
  Starts the production server.
- **Test:** `pnpm test`
  Runs the Jest test suite.
- **Linting:** `pnpm lint` or `pnpm eslint`
  Runs ESLint to check for code quality issues.
- **Type Checking:** `pnpm type-check`
  Runs the TypeScript compiler to check for type errors.
- **Formatting:** `pnpm format`
  Formats the codebase using Prettier.
- **Full CI Check:** `pnpm test-all`
  Runs linting, type-checking, and tests sequentially.

## Development Conventions

### Posts and MDX

- **Post Location:** `/posts/*.mdx`
- **Front Matter:** Each post should include front matter (parsed by `gray-matter`). Key fields include `title`, `date`, `description`, `categories`, `tags`, and `featured_image`. Refer to `FrontMatter` interface in `lib/postutils.ts`.
- **Drafts:** Posts with `draft: true` in their front matter are filtered out of the production build (see `pages/index.tsx`).
- **Assets:** 
  - Images: `/public/images/`
  - Galleries: `/public/gallery/`

### Components

- Components are organized by UI library sources:
  - `components/MerakiUI/`
  - `components/Notus/`
  - `components/tailblocks/`
  - `components/TailwindUI/`
- Standard layout components are in the root of `components/` (e.g., `layout.tsx`, `BlogLayout.tsx`).

### Styling

- **Tailwind Config:** `tailwind.config.js` contains custom color definitions ("rosely" palette) and typography overrides.
- **CSS:** Global styles are in `styles/index.css`.

### Coding Standards

- **Formatting:** Enforced by Prettier (refer to `.prettierrc` or `package.json`).
- **Linting:** ESLint is configured in `eslint.config.mjs`.
- **TypeScript:** Strict type-checking is encouraged.
- **Git Hooks:** `husky` (though not explicitly detailed in `package.json` scripts, it's mentioned in `README.md`) typically handles pre-commit checks.

## Project Structure Highlights

- `/components/`: Reusable UI components.
- `/lib/`: Utility functions for post parsing (`postutils.ts`) and asset generation (`generate.ts`).
- `/pages/`: Next.js pages and API routes.
- `/posts/`: MDX source files for the blog.
- `/public/`: Static assets (images, fonts, sitemaps).
- `/styles/`: Global CSS and syntax highlighting themes.
