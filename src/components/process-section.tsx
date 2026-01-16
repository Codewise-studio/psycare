import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Consult",
      description:
        "We analyze your business needs and identify opportunities for AI integration to maximize efficiency and growth.",
    },
    {
      number: "02",
      title: "Strategize",
      description:
        "Our experts develop a comprehensive AI strategy tailored to your specific industry and business objectives.",
    },
    {
      number: "03",
      title: "Analyze",
      description:
        "We conduct thorough analysis of your data infrastructure and existing processes to ensure seamless integration.",
    },
    {
      number: "04",
      title: "Actual plan",
      description:
        "Implementation of the AI solution with continuous monitoring and optimization for maximum ROI and performance.",
    },
  ]

  return (
    <section className="section-y section-x bg-primary text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/20">
            Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">We understand how firms</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold mb-4 opacity-80">{step.number}</div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-white/80 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  )
}
