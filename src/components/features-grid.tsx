"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Brain, Mic, Video, BarChart3, Users, Shield, Eye, Activity, Target } from "lucide-react"

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export function FeaturesGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge variant="secondary" className="w-fit mx-auto">
            <Shield className="w-3 h-3 mr-1" />
            AI-Powered Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Everything you need for modern mental healthcare
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive AI tools designed to enhance your practice while maintaining the highest standards of patient
            care and data security.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
              className="perspective-1000"
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-[#9d9af0]/50 group h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#9d9af0]/10 rounded-lg flex items-center justify-center text-[#9d9af0] group-hover:bg-[#9d9af0] group-hover:text-primary-foreground transition-colors">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
