# Next.js Template

A modern, production-ready Next.js template with built-in support for SSR/SSG, code quality tools, and automated CI/CD.

## Features

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **SSR/SSG Support** - Choose rendering strategy per route
- ✅ **Prettier + ESLint** - Automatic code formatting and linting
- ✅ **GitHub Actions CI** - Lint, format, type-check, and build verification
- ✅ **Branch Protection** - Enforce PR workflow
- ✅ **Vercel Deployment** - One-click deployment
- ✅ **GitHub Pages** - Static export support for github.io
- ✅ **PR Templates** - Standardized pull request format

## Quick Start

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the template
git clone https://github.com/yukikotani231/nextjs-template.git
cd nextjs-template

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app.

## Available Scripts

### Development

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Production build
npm run start        # Start production server
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format code with Prettier
npm run format:check # Check formatting without changes
```

### Export

```bash
npm run export       # Build and export for static hosting
```

## Project Structure

```
nextjs-template/
├── src/
│   └── app/                    # Next.js App Router
│       ├── layout.tsx          # Root layout
│       ├── page.tsx            # Home page
│       └── globals.css         # Global styles
├── .github/
│   ├── workflows/
│   │   ├── ci.yml             # CI pipeline
│   │   └── deploy-github-pages.yml # GitHub Pages deploy
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── BRANCH_PROTECTION.md
├── .eslintrc.json              # ESLint config
├── .prettierrc                  # Prettier config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
├── next.config.ts              # Next.js config
└── vercel.json                 # Vercel config
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Create account at [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel automatically deploys on push to main

```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages

GitHub Pages deployment is automated via `deploy-github-pages.yml` workflow.

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch - deployment runs automatically

**Note**: For GitHub Pages, your site will be available at:

```
https://YOUR_USERNAME.github.io/nextjs-template/
```

If using custom domain, update the `NEXT_PUBLIC_BASE_PATH` in the workflow.

## Development Workflow

All changes go through pull requests:

```bash
# 1. Create feature branch
git checkout -b feature/your-feature

# 2. Make changes and ensure quality
npm run format
npm run lint:fix
npm run build

# 3. Commit and push
git add .
git commit -m "feat: your feature"
git push origin feature/your-feature

# 4. Create PR on GitHub
# CI runs automatically - must pass before merging

# 5. Merge after review
```

## Rendering Strategies

### Static Site Generation (SSG)

For pages that don't change frequently:

```typescript
// Auto-generated at build time
export default function Page() {
  return <div>Static content</div>;
}
```

### Server-Side Rendering (SSR)

For dynamic content:

```typescript
export const dynamic = 'force-dynamic';

export default function Page() {
  return <div>Dynamic content</div>;
}
```

### Incremental Static Regeneration (ISR)

Cache for a specific duration:

```typescript
export const revalidate = 60; // Revalidate every 60 seconds

export default function Page() {
  return <div>Cached content</div>;
}
```

## Environment Variables

Create `.env.local` for development:

```env
# Add your environment variables here
```

For production (Vercel dashboard):

- Set variables in project settings

For GitHub Pages:

- Edit the `deploy-github-pages.yml` workflow if needed

## Configuration

### Tailwind CSS

Edit `tailwind.config.ts` to customize:

```typescript
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add custom colors, fonts, etc.
    },
  },
};
```

### ESLint / Prettier

- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier configuration

Run auto-fixes:

```bash
npm run lint:fix   # Fix ESLint issues
npm run format     # Format code
```

## Branch Protection

The main branch is protected - all changes require:

1. Pull request review
2. Passing CI checks (lint, format, type-check, build)
3. Conversation resolution

See `.github/BRANCH_PROTECTION.md` for setup instructions.

## Troubleshooting

### Build fails locally but CI passes

Ensure your Node.js version matches:

```bash
node --version  # Should be 20+
```

### Port 3000 already in use

Run on different port:

```bash
npm run dev -- -p 3001
```

### Prettier/ESLint conflicts

Run format then lint:

```bash
npm run format
npm run lint:fix
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make changes following the workflow above
4. Create a pull request

Your PR will be automatically checked by CI. Make sure all checks pass before requesting review.
