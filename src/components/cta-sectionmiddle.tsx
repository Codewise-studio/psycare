"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Heart, Brain, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function CTASectionMiddle() {
  return (
    <section className="w-full relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="w-full  relative ">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 
            border border-white/10 backdrop-blur-sm shadow-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-cyan-600/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]" />

          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse" />
          </div>

          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20">
            <motion.div
              className="absolute top-8 left-8 p-3 bg-purple-500/10 rounded-full border border-purple-500/20"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Brain className="w-5 h-5 text-purple-400" />
            </motion.div>

            <motion.div
              className="absolute top-12 right-12 p-3 bg-blue-500/10 rounded-full border border-blue-500/20"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Heart className="w-5 h-5 text-blue-400" />
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-12 p-3 bg-cyan-500/10 rounded-full border border-cyan-500/20"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </motion.div>

            <div className="space-y-10">
              <div className="space-y-6">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full border border-white/10 mb-6">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium text-purple-300">Transform Your Practice</span>
                  </div>

                  <h2 className="text-5xl lg:text-6xl font-bold text-balance bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                    Empower practice.
                    <br />
                    <span className="text-4xl lg:text-5xl">Enhance care.</span>
                  </h2>
                </motion.div>

                <motion.p
                  className="text-xl lg:text-2xl text-muted-foreground text-pretty max-w-4xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  AI-powered solutions that optimize time, boost engagement, and transform therapy into a smarter,
                  human-centered experience.
                </motion.p>
              </div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
  as="a"
  href="#contact"
  size="lg"
  className="relative inline-flex items-center overflow-hidden rounded-full px-10 py-4 font-semibold bg-white/80 backdrop-blur-sm border-2 border-gray-300 group cursor-pointer transition-all duration-300"
>
  {/* Animated background */}
  <span className="absolute inset-0 bg-blue-100 translate-x-[100%] group-hover:translate-x-0 rounded-full transition-transform duration-300" />

  {/* Text and icon */}
  <span className="relative z-10 flex items-center space-x-2 text-gray-700 group-hover:text-blue-600">
    <Phone className="w-5 h-5" />
    <span>Contact Us</span>
    <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
      <ArrowRight className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
    </span>
  </span>
</Button>
                </div>

                {/* <motion.p
                  className="text-sm text-muted-foreground/80 flex items-center justify-center gap-6 flex-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    No credit card required
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    14-day free trial
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    HIPAA compliant
                  </span>
                </motion.p> */}
              </motion.div>
            </div>
          </div>

          <div className="absolute top-6 left-6 w-2 h-2 bg-purple-400/40 rounded-full animate-ping" />
          <div
            className="absolute top-10 right-10 w-3 h-3 bg-blue-400/40 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-8 left-10 w-2 h-2 bg-cyan-400/40 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-6 right-6 w-3 h-3 bg-purple-400/40 rounded-full animate-ping"
            style={{ animationDelay: "0.5s" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
