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
} from "lucide-react"

const engagementFeatures = [
  { text: "Immersive VR for anxiety reduction", icon: Brain },
  { text: "AI audio transcription & analysis", icon: Zap },
  { text: "AI session insights & follow-up suggestions", icon: Heart },
  { text: "Diagnostic & treatment support", icon: Monitor },
  { text: "Patient mood tracking & analysis", icon: Activity },
  { text: "Automated progress report", icon: FileText },
  { text: "Patients' homework suggestions", icon: Heart },
  { text: "Wearable device integration", icon: Watch },
  { text: "Patient app", icon: Smartphone },
  { text: "Tele-health integration", icon: Video },
]

const technologyFeatures = [
  { text: "AI video processing & analysis", icon: Video },
  { text: "AI-enhanced knowledge base", icon: Database },
  { text: "Real-time feedback with biomarkers", icon: BarChart3 },
  { text: "Integration of insights for reports", icon: Puzzle },
  { text: "API for software integration", icon: Code },
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
    y: 50,
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
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export default function FunctionalitiesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-purple-400 to-teal-400 bg-clip-text text-transparent mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            PsyCare Studio
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-semibold text-primary mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Functionalities
          </motion.h3>
          <motion.p
            className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            AI Power for Next-Gen Mental Health Solutions
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="flex items-center mb-12" variants={titleVariants}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                ENGAGEMENT
              </h4>
            </div>
            <div className="flex-1 ml-8 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" variants={containerVariants}>
            {engagementFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                  }}
                  onHoverStart={() => setHoveredCard(`engagement-${index}`)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="perspective-1000"
                >
                  <Card className="p-6 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 border-0 text-white relative overflow-hidden group cursor-pointer h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

                    <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                      <motion.div
                        animate={hoveredCard === `engagement-${index}` ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <p className="text-sm font-medium leading-relaxed">{feature.text}</p>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mb-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="border-t-2 border-dashed border-primary/30 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.div className="flex items-center mb-12" variants={titleVariants}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                TECHNOLOGY
              </h4>
            </div>
            <div className="flex-1 ml-8 h-px bg-gradient-to-r from-teal-400/50 to-transparent"></div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" variants={containerVariants}>
            {technologyFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: -5,
                    z: 50,
                  }}
                  onHoverStart={() => setHoveredCard(`technology-${index}`)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="perspective-1000"
                >
                  <Card className="p-6 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 border-0 text-white relative overflow-hidden group cursor-pointer h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

                    <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                      <motion.div
                        animate={hoveredCard === `technology-${index}` ? { rotate: -360 } : { rotate: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <p className="text-sm font-medium leading-relaxed">{feature.text}</p>
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
