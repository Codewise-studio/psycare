import { Brain, BarChart3, Activity, Heart, Zap, Eye, MessageSquare, Sparkles } from "lucide-react"

const floatingIcons = [
  { icon: <Brain className="w-8 h-8" />, position: "top-20 left-20" },
  { icon: <BarChart3 className="w-6 h-6" />, position: "top-32 right-32" },
  { icon: <Activity className="w-7 h-7" />, position: "top-64 right-20" },
  // { icon: <Heart className="w-5 h-5" />, position: "top-64 right-20" },
  { icon: <Zap className="w-6 h-6" />, position: "bottom-32 left-24" },
  // { icon: <Eye className="w-7 h-7" />, position: "bottom-48 right-1/4" },
  // { icon: <MessageSquare className="w-6 h-6" />, position: "bottom-20 left-1/2" },
  // { icon: <Sparkles className="w-5 h-5" />, position: "top-40 right-1/3" },
]

export function FloatingIcons() {
  return (
    <>
      {floatingIcons.map((item, index) => (
        <div key={index} className={`floating-icon absolute ${item.position} text-[#9d9af0] hidden lg:block`}>
          {item.icon}
        </div>
      ))}
    </>
  )
}
