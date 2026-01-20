"use client"

import { motion } from "framer-motion"
import { Check, Brain, Clock, Workflow, Target, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Brain,
    title: "Reduce administrative burden",
  },
  {
    icon: Clock,
    title: "Preserve therapeutic presence",
  },
  {
    icon: Workflow,
    title: "Support consistent, evidence-informed care",
  },
]

const dashboardElements = [
  { color: "bg-purple-200", width: "w-32", delay: 0.2 },
  { color: "bg-blue-200", width: "w-24", delay: 0.4 },
  { color: "bg-cyan-200", width: "w-28", delay: 0.6 },
  { color: "bg-indigo-200", width: "w-20", delay: 0.8 },
]

export default function FocusCareSection() {
  return (
    <section className="bg-white section-y section-x section-visuals relative">
      {/* Left Side Sound Waves */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`left-wave-${i}`}
            animate={{
              scaleY: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            className="w-1 bg-gradient-to-t from-purple-400 to-blue-400 rounded-full mb-2"
            style={{ height: `${40 + i * 20}px` }}
          />
        ))}
      </div>

      {/* Right Side Sound Waves */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`right-wave-${i}`}
            animate={{
              scaleY: [1, 1.8, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2.5 + i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
            className="w-1 bg-gradient-to-t from-cyan-400 to-purple-400 rounded-full mb-2"
            style={{ height: `${50 + i * 15}px` }}
          />
        ))}
      </div>

      {/* Floating Circles - Left Side */}
      <div className="absolute left-10 top-20 opacity-20">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-24 h-24 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full blur-sm"
        />
      </div>

      <div className="absolute left-32 bottom-32 opacity-15">
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="w-16 h-16 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full blur-sm"
        />
      </div>

      {/* Floating Circles - Right Side */}
      <div className="absolute right-16 top-32 opacity-20">
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -12, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="w-20 h-20 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-sm"
        />
      </div>

      <div className="absolute right-8 bottom-20 opacity-15">
        <motion.div
          animate={{
            y: [0, -18, 0],
            x: [0, 8, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          className="w-12 h-12 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full blur-sm"
        />
      </div>

      {/* Pulsing Rings */}
      <div className="absolute left-1/4 top-16 opacity-10">
        <motion.div
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
          className="w-32 h-32 border-2 border-purple-400 rounded-full"
        />
      </div>

      <div className="absolute right-1/4 bottom-16 opacity-10">
        <motion.div
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: 2,
          }}
          className="w-24 h-24 border-2 border-cyan-400 rounded-full"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-4"
              >
                <Sparkles className="h-6 w-6 text-[hsla(229,71%,77%,1)]" />
                <span className="text-[hsla(229,71%,77%,1)] font-semibold text-sm uppercase tracking-wide">AI-Powered Care</span>
              </motion.div>

              <h2 className="text-[42px] sm:text-3xl lg:text-4xl font-bold leading-tight text-balance">
                <span className="text-gray-900">Focus on care.</span>
                <br />
                <span className="bg-gradient-to-r from-[hsla(229,71%,77%,1)] via-[hsla(179,39%,68%,1)] to-[hsla(229,71%,77%,1)] bg-clip-text text-transparent">
                  Let AI handle the rest.
                </span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Focus on what matters most – your patients.Let AI handle the rest with intelligent documentation, real-time insights and automated Workflows.  .
              </motion.p>
            </div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-xl transition-all duration-300"
                >
                  {/* <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#85E1B9] to-[#6fcaa3] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div> */}
                    <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <feature.icon className="h-5 w-5 text-[#9d85f3]" />
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#9d85f3] transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:border-purple-300 bg-transparent"
              >
                Watch Demo
              </Button>
            </motion.div> */}

            {/* Trust Indicators */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 pt-6 border-t border-gray-100"
            >
              <div className="text-sm text-gray-500">Trusted by 10,000+ mental health professionals</div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full" />
                ))}
                <span className="text-sm text-gray-600 ml-2">4.9/5 rating</span>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Floating Background Elements */}
            <div className="absolute inset-0">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl"
              />
            </div>

            {/* Dashboard Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">PsyCare AI Dashboard</span>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-8 space-y-6">
                {dashboardElements.map((element, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "auto" }}
                    transition={{
                      duration: 0.8,
                      delay: element.delay,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className={`h-4 ${element.color} ${element.width} rounded-full relative overflow-hidden`}
                  >
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: element.delay + 1,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                ))}

                {/* Interactive Elements */}
                <div className="flex justify-between items-center pt-4">
                  <motion.div
                    // animate={{ scale: [1, 1.1, 1] }}
                    // transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    // className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center"
                  >
                    {/* <Clock className="h-6 w-6 text-white" /> */}
                  </motion.div>

                  <motion.div
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="w-12 h-12 bg-gradient-to-r from-[hsla(179,39%,68%,1)] to-[hsla(229,71%,77%,1)] rounded-full flex items-center justify-center"
                  >
                    <Brain className="h-6 w-6 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-gray-100 p-4"
            >
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-sm text-gray-600">Time Saved</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg border border-gray-100 p-4"
            >
              <div className="text-2xl font-bold text-[#9BAAEE]">24/7</div>
              <div className="text-sm text-gray-600">AI Support</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
