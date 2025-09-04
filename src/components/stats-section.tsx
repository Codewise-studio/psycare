import { Badge } from "@/components/ui/badge"

export function StatsSection() {
  const stats = [
    { value: "500%", label: "ROI increase for our clients within the first year of AI implementation" },
    { value: "99.9%", label: "Uptime guarantee with our enterprise AI solutions and support" },
    { value: "50%", label: "Reduction in operational costs through intelligent automation" },
    { value: "24/7", label: "Round-the-clock monitoring and support for all AI systems" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">We're as good as our last project</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">{stat.value}</div>
              <p className="text-muted-foreground leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
