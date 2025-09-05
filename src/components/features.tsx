export function Features() {
  const features = [
    {
      title: "Next.js 14+",
      description: "Built with the latest Next.js App Router for optimal performance and developer experience.",
    },
    {
      title: "TypeScript",
      description: "Fully typed codebase with TypeScript for better development experience and fewer bugs.",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development with consistent design.",
    },
    {
      title: "Src Directory",
      description: "Clean project structure with src directory organization for better code management.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
