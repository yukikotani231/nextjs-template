import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExampleFormComponent } from '@/components/ExampleFormComponent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="w-full max-w-4xl space-y-8">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-4xl">Welcome to Next.js Template</CardTitle>
            <CardDescription className="text-lg">
              A modern template with shadcn/ui, Tailwind CSS, and everything you need
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Features</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ Next.js 15 with App Router</li>
                <li>✅ TypeScript for type safety</li>
                <li>✅ Tailwind CSS for styling</li>
                <li>✅ shadcn/ui component library</li>
                <li>✅ SSR/SSG/ISR support per route</li>
                <li>✅ Prettier + ESLint configured</li>
                <li>✅ GitHub Actions CI/CD</li>
                <li>✅ Vercel & GitHub Pages deployment</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="flex-1">
                <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                  Next.js Docs
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                  shadcn/ui
                </a>
              </Button>
              <Button asChild variant="secondary" className="flex-1">
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                  Tailwind CSS
                </a>
              </Button>
            </div>

            <div className="border-t pt-4">
              <h3 className="mb-2 font-semibold">Get Started</h3>
              <p className="text-sm text-muted-foreground">
                Edit <code className="rounded bg-muted px-1.5 py-0.5">src/app/page.tsx</code> to
                start building your application.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Form Example */}
        <Card>
          <CardHeader>
            <CardTitle>Form Example</CardTitle>
            <CardDescription>
              React Hook Form + Zod validation with shadcn/ui components
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ExampleFormComponent />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
