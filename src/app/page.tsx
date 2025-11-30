export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Next.js Template</h1>
        <p className="text-xl text-gray-600 mb-8">
          A modern template with SSR/SSG, Prettier, ESLint, and GitHub Actions CI
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://nextjs.org"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Next.js Docs
          </a>
          <a
            href="https://tailwindcss.com"
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
          >
            Tailwind CSS
          </a>
        </div>
      </div>
    </main>
  );
}
