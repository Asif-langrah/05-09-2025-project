export function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Welcome to Next.js 14+</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          A clean, production-ready Next.js application with TypeScript, Tailwind CSS, and src directory structure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Get Started
          </button>
          <button className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
