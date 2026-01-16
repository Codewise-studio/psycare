"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
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
  { text: "Clinical pilots", icon: Brain, description: "" },
  { text: "Validation methodology", icon: Zap, description: "" },
  { text: "Outcome metrics", icon: Heart, description: "" },
  { text: "Research roadmap", icon: Monitor, description: "" },
 
]

const technologyFeatures = [
  { text: "Security (encryption, access control, audit logs)", icon: Video, description: "" },
  { text: "Privacy (GDPR-by-design, data minimization)", icon: Database, description: "" },
  { text: "AI governance (human-in-the-loop, evaluation)", icon: BarChart3, description: "" },
  { text: "Deployment (cloud / on-prem if applicable)", icon: Puzzle, description: "" },

]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
}

export default function FunctionalitiesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleCardClick = (key: string) => {
    if (isMobile) {
      setHoveredCard(hoveredCard === key ? null : key)
    }
  }

  return (
    <section className="section-y section-x bg-gray-50/50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 w-fit mx-auto">
            <Shield className="h-6 w-6 text-[hsla(229,71%,77%,1)]" />
            <span className="text-[hsla(229,71%,77%,1)] font-semibold text-sm uppercase tracking-wide">
              PsyCare Studio Functionalities
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance text-gray-900">
            AI Power for Next-Gen Mental Health Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Comprehensive AI tools designed to enhance engagement and leverage cutting-edge technology for modern mental
            healthcare.
          </p>
        </div>

        {/* TECHNOLOGY Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.div className="flex items-center mb-12 justify-center" variants={containerVariants}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#85E1B9] to-[#8AD7C3] rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-3xl font-bold bg-gradient-to-r from-[#85E1B9] to-[#8AD7C3] bg-clip-text text-transparent">
                TECHNOLOGY
              </h4>
            </div>
            <div className="flex-1 ml-8 h-px bg-gradient-to-r from-[#85E1B9]/50 to-transparent"></div>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {technologyFeatures.map((feature, index) => {
              const Icon = feature.icon
              const key = `technology-${index}`
              const isHovered = hoveredCard === key

              return (
                <motion.div
                  key={key}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onHoverStart={() => !isMobile && setHoveredCard(key)}
                  onHoverEnd={() => !isMobile && setHoveredCard(null)}
                  onClick={() => handleCardClick(key)}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-[#8AD7C3] group h-full bg-white border-gray-200">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-teal-100/80 rounded-lg flex items-center justify-center text-[#85E1B9] group-hover:bg-[#85E1B9] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-sm leading-tight text-gray-900">{feature.text}</h3>
                        <motion.p
                          className="text-gray-600 text-xs"
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

        {/* Science & Validation Section */}
        {/* <motion.div className="mt-20 mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          {/* Gradient Badge with Line */}
          {/* <motion.div className="flex items-center mb-12 justify-center" variants={containerVariants}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ADCBE2] to-[#96B9DF] rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-3xl font-bold bg-gradient-to-r from-[#ADCBE2] to-[#96B9DF] bg-clip-text text-transparent">
                Science & Validation
              </h4>
            </div>
            <div className="flex-1 ml-8 h-px bg-gradient-to-r from-[#ADCBE2]/50 to-transparent"></div>
          </motion.div> */} 

          {/* <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" variants={containerVariants}>
            {engagementFeatures.map((feature, index) => {
              const Icon = feature.icon
              const key = `engagement-${index}`
              const isHovered = hoveredCard === key

              return (
                <motion.div
                  key={key}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onHoverStart={() => !isMobile && setHoveredCard(key)}
                  onHoverEnd={() => !isMobile && setHoveredCard(null)}
                  onClick={() => handleCardClick(key)}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-[#96B9DF] group h-full bg-white border-gray-200">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#ADCBE2]/50 rounded-lg flex items-center justify-center text-[#96B9DF] group-hover:bg-[#96B9DF] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-sm leading-tight text-gray-900">{feature.text}</h3>
                        <motion.p
                          className="text-gray-600 text-xs"
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
          </motion.div> */}
        {/* </motion.div> */}
        {/* <div className="mt-12 text-center">
          <p className="text-lg md:text-xl font-semibold text-gray-900">
            <span className="bg-gradient-to-r from-[#ADCBE2] to-[#8AD7C3] bg-clip-text text-transparent">
              PsyCare is developed and validated in collaboration with clinicians and research partners.
            </span>
          </p>
        </div> */}
      </div>
    </section>
  )
}
