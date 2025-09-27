"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState } from "react"
import {
  Brain,
  Zap,
  Heart,
  Monitor,
  Smartphone,
  Activity,
  FileText,
  Watch,
  Video,
  Database,
  BarChart3,
  Puzzle,
  Code,
  Target,
  Shield,
} from "lucide-react"

const engagementFeatures = [
  { text: "Immersive VR for anxiety reduction", icon: Brain, description: "Virtual reality therapy sessions" },
  { text: "AI audio transcription & analysis", icon: Zap, description: "Real-time session insights" },
  {
    text: "AI session insights & follow-up suggestions",
    icon: Heart,
    description: "Personalized care recommendations",
  },
  { text: "Diagnostic & treatment support", icon: Monitor, description: "Evidence-based assessments" },
  { text: "Patient mood tracking & analysis", icon: Activity, description: "Continuous wellness monitoring" },
  { text: "Automated progress report", icon: FileText, description: "Comprehensive patient summaries" },
  { text: "Patients' homework suggestions", icon: Target, description: "Tailored therapeutic exercises" },
  { text: "Wearable device integration", icon: Watch, description: "Biometric data collection" },
  { text: "Patient app", icon: Smartphone, description: "Mobile therapy companion" },
  { text: "Tele-health integration", icon: Video, description: "Seamless remote sessions" },
]

const technologyFeatures = [
  { text: "AI video processing & analysis", icon: Video, description: "Advanced behavioral insights" },
  { text: "AI-enhanced knowledge base", icon: Database, description: "Intelligent treatment protocols" },
  { text: "Real-time feedback with biomarkers", icon: BarChart3, description: "Physiological monitoring" },
  { text: "Integration of insights for reports", icon: Puzzle, description: "Comprehensive analytics" },
  { text: "API for software integration", icon: Code, description: "Seamless system connectivity" },
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
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
}

export default function FunctionalitiesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            <Shield className="w-3 h-3 mr-1" />
            PsyCare Studio Functionalities
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">AI Power for Next-Gen Mental Health Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive AI tools designed to enhance engagement and leverage cutting-edge technology for modern mental
            healthcare.
          </p>
        </div>

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="flex items-center justify-center mb-8">
            <Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50">
              <Heart className="w-3 h-3 mr-1" />
              ENGAGEMENT
            </Badge>
          </div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6" variants={containerVariants}>
            {engagementFeatures.map((feature, index) => {
              const Icon = feature.icon
              const isHovered = hoveredCard === `engagement-${index}`

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onHoverStart={() => setHoveredCard(`engagement-${index}`)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-300 group h-full">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-sm leading-tight">{feature.text}</h3>
                        <motion.p
                          className="text-muted-foreground text-xs"
                          initial={{ opacity: 0, height: 0 }}
                          animate={isHovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.description}
                        </motion.p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        <div className="flex items-center justify-center my-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <motion.div
            className="mx-4 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-full flex items-center justify-center border border-purple-200/50"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          >
            <Brain className="w-5 h-5 text-purple-600" />
          </motion.div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <div className="flex items-center justify-center mb-8">
            <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
              <Zap className="w-3 h-3 mr-1" />
              TECHNOLOGY
            </Badge>
          </div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6" variants={containerVariants}>
            {technologyFeatures.map((feature, index) => {
              const Icon = feature.icon
              const isHovered = hoveredCard === `technology-${index}`

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onHoverStart={() => setHoveredCard(`technology-${index}`)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-teal-300 group h-full">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-sm leading-tight">{feature.text}</h3>
                        <motion.p
                          className="text-muted-foreground text-xs"
                          initial={{ opacity: 0, height: 0 }}
                          animate={isHovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.description}
                        </motion.p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
