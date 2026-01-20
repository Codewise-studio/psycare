import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FeatureCards() {
  const features = [
    {
      title: "Data-Driven Decisions",
      description: "AI-powered insights reduce guesswork and support more accurate, evidence-based care.",
      color: "bg-blue-500",
      textColor: "text-blue-500",
    },
    {
      title: "Personalized Treatment Plans",
      description: "Tailored interventions based on real-time data, speech patterns, and emotional cues.",
      color: "bg-primary",
      textColor: "text-primary",
    },
    {
      title: "Real-Time Feedback",
      description: "Live analysis enables immediate course corrections, increasing session impact and engagement.",
      color: "bg-accent",
      textColor: "text-accent",
    },
     {
      title: "Note-Free Sessions",
      description: "Automatic recording and AI analysis free professionals from manual notes, ensuring full presence.",
      color: "bg-blue-500",
      textColor: "text-blue-500",
    },
    {
      title: "Multimodal AI Analysis",
      description: "Voice, facial expressions, gestures, and prosody are analyzed to reveal deeper emotional and behavioral patterns.",
      color: "bg-primary",
      textColor: "text-primary",
    },
    {
      title: "Patient-Centered Tools",
      description: "Empower patients with a dedicated app, homework suggestions, and AI-supported progress tracking.",
      color: "bg-accent",
      textColor: "text-accent",
    },
  ]

  return (
    <section className="section-y section-x bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <CardTitle className="text-[24px] font-normal font-satoshi">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{feature.description}</p>
                {/* <Button variant="link" className={`p-0 h-auto ${feature.textColor} hover:${feature.textColor}/80`}>
                  read more →
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
