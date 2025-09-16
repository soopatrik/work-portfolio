export function SocialProofSection() {
  const companies = [
    { name: "Scale AI", logo: "Scale AI" },
    { name: "Bricksite", logo: "Bricksite" },
    { name: "COR-X", logo: "COR-X" },
    { name: "OpenRouter", logo: "OpenRouter" },
    { name: "React", logo: "React" },
    { name: "TypeScript", logo: "TypeScript" },
    { name: "Next.js", logo: "Next.js" },
    { name: "Tailwind", logo: "Tailwind" },
    { name: "MongoDB", logo: "MongoDB" },
    { name: "Supabase", logo: "Supabase" },
    { name: "GitHub", logo: "GitHub" },
    { name: "Vercel", logo: "Vercel" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            When you work with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Patrik
            </span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            You get results. Period.
          </h3>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Proven expertise across leading AI companies and newest technologies
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <span className="text-lg font-medium tracking-wider">
                  {company.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
