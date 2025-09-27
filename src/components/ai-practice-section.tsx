"use client"

import { motion } from "framer-motion"
import { Clock, Database, TrendingUp, Brain } from "lucide-react"
import Link from "next/link"

const practiceCards = [
  {
    title: "Time",
    benefit: "Save 3+ hours daily on documentation",
    icon: Clock,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Data",
    benefit: "Real-time insights from every session",
    icon: Database,
    gradient: "from-cyan-500/20 to-teal-500/20",
    iconColor: "text-cyan-400",
  },
  {
    title: "Quality & Efficiency",
    benefit: "Enhanced treatment outcomes",
    icon: TrendingUp,
    gradient: "from-teal-500/20 to-emerald-500/20",
    iconColor: "text-teal-400",
  },
  {
    title: "Insights",
    benefit: "AI-powered pattern recognition",
    icon: Brain,
    gradient: "from-emerald-500/20 to-blue-500/20",
    iconColor: "text-emerald-400",
  },
]

export default function AIPracticeSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20 bg-white overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 ai-grid-pattern opacity-30" />

      {/* Fade overlay at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            AI-Powered Mental Health{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Practice
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transform your practice with intelligent automation and insights
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Explanation */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-foreground">
                Empowering psychologists and organizations with AI
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Focus on what matters most - your patients. Let AI handle the rest with intelligent documentation,
                real-time insights, and automated workflows.
              </p>
            </div>

            {/* Interactive Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {practiceCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className={`relative p-6 rounded-2xl bg-gradient-to-br ${card.gradient} 
                    border border-white/10 backdrop-blur-sm ai-card-hover cursor-pointer group`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="space-y-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center 
                      group-hover:scale-110 transition-transform duration-300`}
                    >
                      <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{card.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.benefit}</p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Brain Illustration */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Brain Icon */}
              <div
                className="relative z-10 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20 
                flex items-center justify-center border border-white/10 backdrop-blur-sm brain-pulse"
              >
                <Brain className="w-40 h-40 text-blue-400" />
              </div>

              {/* Orbiting Elements */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0 0",
                  }}
                  animate={{
                    rotate: 360,
                    x: Math.cos((i * Math.PI * 2) / 8) * 200,
                    y: Math.sin((i * Math.PI * 2) / 8) * 200,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                />
              ))}

              {/* Pulse Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-blue-400/30"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.5 + i * 0.3, opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/about" legacyBehavior>
            <motion.a
              className="inline-flex items-center relative overflow-hidden rounded-full px-8 py-3 font-semibold 
                     bg-[#9d9af0] cursor-pointer group shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <span className="absolute inset-0 bg-[#93bddc] translate-x-[100%] group-hover:translate-x-0 
                           rounded-full transition-transform duration-300" />
              <span className="relative z-10 text-white flex items-center space-x-2">
                <span>Experience AI-Powered Practice</span>
              </span>
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
