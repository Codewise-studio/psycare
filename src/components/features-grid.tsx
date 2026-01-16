import { Card } from "@/components/ui/card"
import { Brain, Mic, Video, BarChart3, Users, Eye, Activity, Target } from "lucide-react"

const features = [
  {
    icon: <Mic className="w-5 h-5" />,
    title: "During the session",
    topics: [
      "Secure speech-to-text transcription",
      "Tele-health integration",
      "Real-time session cues (non-diagnostic)",
    ],
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "After the session",
    topics: [
      "Structured clinical notes (SOAP / DAP compatible)",
      "Session summary and key themes",
      "Progress indicators over time",
      "Clinical decision support (non-diagnostic)",
    ],
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Between sessions",
    topics: [
      "Patient app for reflections and followups",
      "Homework and self-reported outcomes",
      "Patient-reported mood tracking over time",
      "Longitudinal trends to support clinical decisions",
      "Optional wearable data integrations (research & pilots)",
    ],
  },
]

export function FeaturesGrid() {
  return (
    <section className="relative section-y section-x section-visuals bg-white">
      {/* Blurred gradient circles */}
      <div className="absolute -top-20 -left-40 w-96 h-96 rounded-full bg-[hsla(179,39%,68%,0.4)] blur-3xl" />
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-[hsla(229,71%,77%,0.35)] blur-3xl" />

      <div className="relative section-container">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 w-fit mx-auto">
            <Brain className="h-6 w-6 text-[hsla(229,71%,77%,1)]" />
            <span className="text-[hsla(229,71%,77%,1)] font-semibold text-sm uppercase tracking-wide">
              Product
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Everything you need for modern mental healthcare
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive AI tools designed to enhance your practice while maintaining the highest standards of patient
            care and data security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 group bg-white/70 backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
              {feature.topics ? (
                <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                  {feature.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
