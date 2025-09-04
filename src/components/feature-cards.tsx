import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FeatureCards() {
  const features = [
    {
      title: "Become global",
      description: "Fusce nequa. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Pellentesque posuere.",
      color: "bg-blue-500",
      textColor: "text-blue-500",
    },
    {
      title: "Improve data",
      description: "Fusce nequa. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Pellentesque posuere.",
      color: "bg-primary",
      textColor: "text-primary",
    },
    {
      title: "The missing puzzle",
      description: "Fusce nequa. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Pellentesque posuere.",
      color: "bg-accent",
      textColor: "text-accent",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{feature.description}</p>
                <Button variant="link" className={`p-0 h-auto ${feature.textColor} hover:${feature.textColor}/80`}>
                  read more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
