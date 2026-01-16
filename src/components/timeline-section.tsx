import { Badge } from "@/components/ui/badge"

export function TimelineSection() {
  const timelineItems = [
    {
      year: "2019",
      title: "AI Adoption",
      description: "Early adopters begin implementing AI solutions in business processes.",
    },
    {
      year: "2020",
      title: "Machine Learning",
      description: "ML algorithms become mainstream for data analysis and predictions.",
    },
    {
      year: "2021",
      title: "Automation",
      description: "Businesses automate repetitive tasks using intelligent systems.",
    },
    {
      year: "2022",
      title: "Integration",
      description: "AI integrates seamlessly with existing business infrastructure.",
    },
  ]

  return (
    <section className="section-y section-x bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Timeline
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Join the <span className="text-primary">ten-fold</span> growth of AI
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {item.year}
                  </div>

                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
