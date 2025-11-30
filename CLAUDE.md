# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern Next.js template with built-in support for SSR/SSG, TypeScript, Tailwind CSS, shadcn/ui components, code quality tools (ESLint + Prettier), and automated CI/CD via GitHub Actions. Supports deployment to both Vercel and GitHub Pages.

**Repository**: https://github.com/yukikotani231/nextjs-template

## Quick Commands

### Development

```bash
npm run dev          # Start dev server with Turbopack (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format code with Prettier
npm run format:check # Check code formatting without making changes
npm run export       # Build and export for static hosting
```

### CI/CD

```bash
# All changes must go through pull requests
# CI automatically runs on every PR and push to main:
# - ESLint check
# - Prettier format check
# - TypeScript type check
# - Build verification
```

### Pull Request Workflow

```bash
# 1. Create a new branch from main
git checkout main
git pull origin main
git checkout -b feature/your-feature-name

# 2. Make changes and ensure quality checks pass
npm run format       # Format code
npm run lint:fix     # Fix linting issues
npm run build        # Verify build succeeds

# 3. Commit and push
git add .
git commit -m "feat: your feature description"
git push origin feature/your-feature-name

# 4. Create PR on GitHub - CI will automatically run
# 5. After CI passes and review approval, merge to main
```

### Deployment

**Vercel** (Recommended):

```bash
vercel --prod        # Deploy to production
vercel env ls        # List environment variables
```

**GitHub Pages**:

- Automatic deployment on push to main via GitHub Actions
- Built and deployed to `https://username.github.io/nextjs-template/`

## Project Architecture

### Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form + Zod validation
- **Code Quality**: ESLint + Prettier
- **CI/CD**: GitHub Actions (lint, format, type-check, build)
- **Deployment**: Vercel (recommended) + GitHub Pages
- **Icon Library**: Lucide React

### Key Architectural Decisions

1. **Rendering Flexibility**: Supports SSG, SSR, and ISR per route
   - Default: SSG (static generation at build time)
   - Use `export const dynamic = 'force-dynamic'` for SSR
   - Use `export const revalidate = seconds` for ISR

2. **Code Quality**: Prettier + ESLint integration
   - All code must pass format and lint checks
   - CI blocks merging if checks fail
   - Use `npm run format` and `npm run lint:fix` before committing

3. **Deployment Dual Support**:
   - **Vercel**: For dynamic features (serverless functions)
   - **GitHub Pages**: For static sites (via `next export`)
   - Both can be used simultaneously or choose one

4. **Branch Protection**: Enforces PR-based workflow
   - No direct pushes to main
   - All PRs require passing CI checks
   - See `.github/BRANCH_PROTECTION.md` for setup

## File Structure

```
src/
├── app/                            # Next.js App Router
│   ├── page.tsx                    # Home page (using shadcn/ui)
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles + CSS variables
├── components/
│   ├── ExampleFormComponent.tsx    # Example form with validation
│   └── ui/                         # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── form.tsx                # React Hook Form integration
│       ├── textarea.tsx
│       ├── select.tsx
│       └── checkbox.tsx
└── lib/
    └── utils.ts                    # Utility functions (cn)
.github/
├── workflows/
│   ├── ci.yml                      # CI pipeline
│   └── deploy-github-pages.yml     # GitHub Pages deploy
├── PULL_REQUEST_TEMPLATE.md        # PR template
├── BRANCH_PROTECTION.md            # Protection setup guide
└── SHADCN_GUIDE.md                 # shadcn/ui guide
.eslintrc.json                      # ESLint config
.prettierrc                         # Prettier config
.nvmrc                              # Node.js version
.editorconfig                       # Editor settings
.npmrc                              # npm config
components.json                     # shadcn/ui config
tailwind.config.ts                  # Tailwind CSS config
next.config.ts                      # Next.js config
vercel.json                         # Vercel config
tsconfig.json                       # TypeScript config
package.json                        # Project metadata
```

## Important Notes

### Development Workflow

- **All changes must go through pull requests** - Direct pushes to main are blocked
- **Branch protection is enabled** - See `.github/BRANCH_PROTECTION.md` for setup
- **CI checks are required** - PRs must pass all checks before merging:
  - ESLint validation
  - Prettier format check
  - TypeScript type check
  - Build verification
- Use feature branches: `feature/`, `fix/`, `chore/`, etc.

### Rendering Strategy Selection

Choose based on your needs:

1. **Static (SSG)** - Default
   - Best for: Marketing pages, blogs, documentation
   - Generated at build time
   - Cached by CDN

2. **Server-Rendered (SSR)** - Add `export const dynamic = 'force-dynamic'`
   - Best for: Real-time data, user-specific content
   - Rendered on request
   - Use with Vercel for serverless execution

3. **Incremental Static (ISR)** - Add `export const revalidate = 60`
   - Best for: Frequently updated content with TTL
   - Cached but regenerated periodically

### Environment Variables

**Development** (`.env.local`):

```env
# Example - add as needed
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**Production** (Vercel dashboard):

- Set in project settings
- Use `NEXT_PUBLIC_` prefix for browser-accessible variables

**GitHub Pages**:

- Only static variables during build time
- Set in workflow if needed

### Vercel vs GitHub Pages

**Use Vercel for:**

- Dynamic APIs and serverless functions
- Real-time data
- Authentication
- Server-side features

**Use GitHub Pages for:**

- Static sites
- Documentation
- Marketing pages
- Cost-free hosting

Can use both - choose primary and secondary based on needs.

## Deployment Configuration

### Vercel Setup

1. Connect repository to Vercel
2. Vercel automatically detects Next.js
3. Auto-deploys on push to main
4. Environment variables via Vercel dashboard

### GitHub Pages Setup

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Workflow `deploy-github-pages.yml` auto-deploys
4. Available at `https://username.github.io/nextjs-template/`

**For custom domain:**

- Add domain in GitHub Pages settings
- Update `NEXT_PUBLIC_BASE_PATH` in workflow if needed

## shadcn/ui Components

This template comes with shadcn/ui pre-configured. See [.github/SHADCN_GUIDE.md](.github/SHADCN_GUIDE.md) for comprehensive usage guide.

### Using Components

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Component Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="outline">Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### Adding Components

Install from shadcn/ui library:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card input select dialog
```

### Available UI Utilities

- `src/lib/utils.ts` - `cn()` function for class merging
- `components.json` - shadcn/ui configuration
- CSS variables in `src/app/globals.css` - Customizable theme colors
- Dark mode support - Defined in `.dark` class

## Common Development Patterns

### Adding a New Page (SSG)

```typescript
// src/app/about/page.tsx
export default function About() {
  return <div>About page - generated at build time</div>;
}
```

### Adding Dynamic Route (SSR)

```typescript
// src/app/posts/[id]/page.tsx
export const dynamic = 'force-dynamic';

export default function Post({ params }: { params: { id: string } }) {
  return <div>Post {params.id}</div>;
}
```

### Adding Tailwind Styles

```typescript
export default function Styled() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-2xl font-bold text-blue-900">Styled with Tailwind</h1>
    </div>
  );
}
```

## Type Definitions

Key types to extend:

- **React.ReactNode** - For component children
- **Metadata** - For page metadata (from 'next')
- **Params** - For route parameters

Example:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Page',
  description: 'Page description',
};
```

## Performance Considerations

- **Image Optimization**: Use Next.js `<Image>` component
- **Code Splitting**: Automatic by Next.js
- **Caching**: Configure `revalidate` for ISR routes
- **Bundle Size**: Monitor with `npm run build`

## Troubleshooting

### CI Fails Locally But Not

Run all checks:

```bash
npm run lint
npm run format:check
npm run build
```

### Format/Lint Conflicts

Always format first, then lint:

```bash
npm run format
npm run lint:fix
```

### Port Already in Use

Use different port:

```bash
npm run dev -- -p 3001
```

### Build Fails

Check Node.js version (need 18+):

```bash
node --version
```

Clear cache and rebuild:

```bash
rm -rf .next
npm run build
```

## Future Enhancements

Consider adding:

- Unit tests (Jest + React Testing Library)
- E2E tests (Cypress/Playwright)
- API routes for backend functionality
- Database integration (Prisma/Drizzle)
- Authentication (NextAuth.js)
- State management (Zustand/Jotai/Redux)
