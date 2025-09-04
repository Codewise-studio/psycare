import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  const services = [
    {
      title: "Strategy",
      description: "AI strategy development and roadmap planning",
      featured: false,
    },
    {
      title: "Implementation",
      description: "Full-scale AI solution deployment",
      featured: true,
    },
    {
      title: "Training",
      description: "Team training and knowledge transfer",
      featured: false,
    },
    {
      title: "Support",
      description: "Ongoing maintenance and optimization",
      featured: false,
    },
    {
      title: "Analytics",
      description: "Performance monitoring and insights",
      featured: false,
    },
    {
      title: "Integration",
      description: "Seamless system integration services",
      featured: false,
    },
    {
      title: "Consulting",
      description: "Expert advisory and best practices",
      featured: false,
    },
    {
      title: "Automation",
      description: "Process automation and optimization",
      featured: true,
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            There's a reason why we're creating a cut for the
            <br />
            <span className="text-primary">professionals</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`relative ${service.featured ? "ring-2 ring-primary" : ""}`}>
              {service.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white">Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                <Button variant={service.featured ? "default" : "outline"} className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
