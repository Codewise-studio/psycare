"use client"

import { Card } from "@/components/ui/card"
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
  { text: "AI session insights & follow-up suggestions", icon: Heart, description: "Personalized care recommendations" },
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
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 } },
}

export default function FunctionalitiesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="py-12 sm:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 w-fit mx-auto">
            <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-[hsla(229,71%,77%,1)]" />
            <span className="text-[hsla(229,71%,77%,1)] font-semibold text-xs sm:text-sm uppercase tracking-wide">
              PsyCare Studio Functionalities
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            AI Power for Next-Gen Mental Health Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI tools designed to enhance engagement and leverage cutting-edge technology for modern mental
            healthcare.
          </p>
        </div>

        {/* ENGAGEMENT Section */}
        <motion.div className="mb-12 sm:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          {/* Badge & Title */}
          <motion.div className="flex flex-col sm:flex-row items-center mb-8 sm:mb-12" variants={containerVariants}>
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#ADCBE2] to-[#96B9DF] rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#ADCBE2] to-[#96B9DF] bg-clip-text text-transparent">
                ENGAGEMENT
              </h4>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#ADCBE2]/50 to-transparent"></div>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6" variants={containerVariants}>
            {engagementFeatures.map((feature, index) => {
              const Icon = feature.icon
              const isHovered = hoveredCard === `engagement-${index}`

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -3 }}
                  onHoverStart={() => setHoveredCard(`engagement-${index}`)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:border-[#96B9DF] group h-full bg-white border-gray-200">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ADCBE2]/50 rounded-lg flex items-center justify-center text-[#96B9DF] group-hover:bg-[#96B9DF] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-sm sm:text-base leading-tight text-gray-900">{feature.text}</h3>
                        <motion.p
                          className="text-gray-600 text-xs sm:text-sm"
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

        {/* Divider */}
        <div className="flex items-center justify-center my-12 sm:my-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <motion.div
            className="mx-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[hsla(229,71%,77%,1)] to-[hsla(229,71%,77%,1)] rounded-full flex items-center justify-center border border-purple-200/50"
            animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
            transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
          >
            <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </motion.div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* TECHNOLOGY Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          {/* Badge & Title */}
          <motion.div className="flex flex-col sm:flex-row items-center mb-8 sm:mb-12" variants={containerVariants}>
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#85E1B9] to-[#8AD7C3] rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#85E1B9] to-[#8AD7C3] bg-clip-text text-transparent">
                TECHNOLOGY
              </h4>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#85E1B9]/50 to-transparent"></div>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6" variants={containerVariants}>
            {technologyFeatures.map((feature, index) => {
              const Icon = feature.icon
              const isHovered = hoveredCard === `technology-${index}`

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -3 }}
                  onHoverStart={() => setHoveredCard(`technology-${index}`)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:border-[#8AD7C3] group h-full bg-white border-gray-200">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100/80 rounded-lg flex items-center justify-center text-[#85E1B9] group-hover:bg-[#85E1B9] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-sm sm:text-base leading-tight text-gray-900">{feature.text}</h3>
                        <motion.p
                          className="text-gray-600 text-xs sm:text-sm"
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
