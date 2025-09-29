"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check, Lightbulb, Heart, ArrowRight, Sparkles, Clock, Users, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Build strong therapeutic alliances",
    description: "Focus on meaningful connections while AI handles documentation",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Check,
    title: "Ensure meaningful session time",
    description: "Maximize patient interaction with automated workflows",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Lightbulb,
    title: "Deliver patient-centered care",
    description: "AI insights help personalize treatment approaches",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Clock,
    title: "Save 3+ hours daily",
    description: "Automated documentation and intelligent scheduling",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Improve patient outcomes",
    description: "Data-driven insights for better treatment decisions",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: TrendingUp,
    title: "Scale your practice",
    description: "Handle more patients without compromising quality",
    color: "from-indigo-500 to-blue-500",
  },
]

export function EnhancedServicesSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-violet-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="border-blue-400/30 text-blue-600 bg-blue-50/50 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Why Choose PsyCare
          </Badge>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight text-balance">
            Wouldn't it be great to let{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              psychologists focus
            </span>{" "}
            on what they do best?
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 text-pretty max-w-4xl mx-auto leading-relaxed">
            With PsyCare, psychologists focus on care while AI handles the rest. Transform your practice with
            intelligent automation.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10 space-y-4">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <benefit.icon className="w-8 h-8" />
                </motion.div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center space-y-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
          </div>

          <div className="relative z-10 space-y-6">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Experience AI-Powered Practice</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of mental health professionals who have transformed their practice with PsyCare's
                intelligent solutions.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-12 py-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Start Your Free Trial
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold px-10 py-5 rounded-full transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                Schedule Demo
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center items-center gap-8 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span>HIPAA compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span>24/7 support</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
