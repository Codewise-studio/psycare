import { Card } from "@/components/ui/card"
import { Brain, Mic, Video, BarChart3, Users, Eye, Activity, Target } from "lucide-react"

const features = [
  {
    icon: <Mic className="w-5 h-5" />,
    title: "Note-Free Sessions",
    description: "AI-powered recording and transcription",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Real-time AI Analysis",
    description: "Instant insights and pattern recognition",
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Biomarker Monitoring",
    description: "Track physiological indicators",
  },
  {
    icon: <Video className="w-5 h-5" />,
    title: "Audio & Video Analysis",
    description: "Comprehensive behavioral assessment",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Gesture Recognition",
    description: "Advanced emotion and body language AI",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Data-Driven Insights",
    description: "Evidence-based treatment recommendations",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Patient App",
    description: "Seamless client engagement platform",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Personalized Plans",
    description: "AI-generated treatment pathways",
  },
]

export function FeaturesGrid() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Blurred gradient circles */}
      <div className="absolute -top-20 -left-40 w-96 h-96 rounded-full bg-[hsla(179,39%,68%,0.4)] blur-3xl" />
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-[hsla(229,71%,77%,0.35)] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 w-fit mx-auto">
            <Brain className="h-6 w-6 text-[hsla(229,71%,77%,1)]" />
            <span className="text-[hsla(229,71%,77%,1)] font-semibold text-sm uppercase tracking-wide">
              AI-Powered Features
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
