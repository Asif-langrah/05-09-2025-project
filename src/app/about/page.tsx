export default function AboutPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            This is a clean, production-ready Next.js 14+ application built with the src directory structure.
          </p>
          <p className="text-muted-foreground mb-6">
            The application demonstrates best practices for organizing a Next.js project with TypeScript and Tailwind
            CSS. All components are located in the src/components directory, with proper TypeScript path aliases
            configured.
          </p>
          <p className="text-muted-foreground">
            The project structure follows modern Next.js conventions while maintaining clean separation of concerns and
            optimal developer experience.
          </p>
        </div>
      </div>
    </main>
  )
}
