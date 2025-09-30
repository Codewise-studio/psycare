"use client"

import { motion } from "framer-motion"
import { Clock, Database, TrendingUp, Brain, ArrowRight, CheckCircle } from "lucide-react"

const statsCards = [
  {
    metric: "3+ hours",
    description: "saved daily on documentation",
    icon: Clock,
    color: "from-purple-500 to-blue-500",
  },
  {
    metric: "Real-time",
    description: "insights from every session",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
  },
  {
    metric: "Enhanced",
    description: "treatment outcomes",
    icon: TrendingUp,
    color: "from-cyan-500 to-teal-500",
  },
  {
    metric: "AI-powered",
    description: "pattern recognition",
    icon: Brain,
    color: "from-teal-500 to-purple-500",
  },
]

const trustedBy = ["Mayo Clinic", "Johns Hopkins", "Cleveland Clinic", "Kaiser Permanente", "Mount Sinai"]

const features = [
  "Intelligent documentation automation",
  "Real-time session insights",
  "Automated workflow management",
  "Advanced pattern recognition",
]

export default function AIPracticeSection() {
  return (
    <section  id="whychoosepsycare" className="relative min-h-screen bg-white text-gray-900 overflow-hidden my-16 md:my-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          >
            <div className="w-full h-0.5 bg-gray-300/40 absolute top-1/2 transform -translate-y-1/2" />
            <div className="h-full w-0.5 bg-gray-300/40 absolute left-1/2 transform -translate-x-1/2" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 py-32 md:py-40">
        <motion.div
          className="text-center mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            PsyCare for Enterprise
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance text-gray-900">
            AI-Powered Mental Health Practice
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 text-balance">
            Transform your practice with intelligent automation and insights. Empowering psychologists and organizations
            with AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <motion.button
              className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              className="px-8 py-4 border border-gray-300 text-gray-900 font-semibold rounded-full hover:border-gray-400 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" />
              </div>
              Watch Demo
            </motion.button> */}
          </div>
        </motion.div>

        {/* <motion.div
          className="text-center mb-24 md:mb-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-500 text-sm mb-8">Trusted by leading healthcare organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedBy.map((company, index) => (
              <motion.div
                key={company}
                className="text-gray-600 font-medium text-lg opacity-60 hover:opacity-100 transition-opacity"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ opacity: 1 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 md:mb-32">
          {statsCards.map((card, index) => (
            <motion.div
              key={card.metric}
              className="relative p-8 rounded-2xl bg-gray-50 border border-gray-200 backdrop-blur-sm hover:border-gray-300 transition-all duration-300 group hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} p-3 mb-6 group-hover:scale-110 transition-transform`}
              >
                <card.icon className="w-full h-full text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.metric}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>

              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
            </motion.div>
          ))}
        </div>
{/* 
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center px-4 md:px-0"> */}
          {/* <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Focus on care.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Let AI handle the rest.
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Focus on what matters most - your patients. Let AI handle the rest with intelligent documentation,
                real-time insights, and automated workflows.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
          >
            <div className="relative bg-gray-50 rounded-2xl border border-gray-200 p-8 backdrop-blur-sm shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-gray-600 text-sm">PsyCare AI Dashboard</span>
              </div>

              <div className="space-y-4">
                <div className="h-4 bg-gradient-to-r from-purple-200 to-transparent rounded" />
                <div className="h-4 bg-gradient-to-r from-blue-200 to-transparent rounded w-3/4" />
                <div className="h-4 bg-gradient-to-r from-cyan-200 to-transparent rounded w-1/2" />

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="h-20 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                    <Clock className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="h-20 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                    <Brain className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div> */}
        {/* </div> */}
      </div>
    </section>
  )
}
