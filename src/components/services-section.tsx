"use client"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
import { FloatingIcons } from "./floating-icons"
import { Check, Lightbulb, Heart } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-blue-50/30 to-violet-50/20 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-100/20 to-transparent rounded-t-[100px]"></div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full border border-blue-400/20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full border border-violet-400/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blue-300/10"></div>
      </div>

      <FloatingIcons />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Column - Left Side */}
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="outline" className="border-blue-400/30 text-blue-600 bg-blue-50/50 mb-4">
              🌟 Why you should join
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Wouldn't it be great to let{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text">
              psychologists focus
            </span>{" "}
            on what they do best?
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground text-pretty max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            With PsyCare, psychologists focus on care while AI handles the rest.
          </motion.p>

          <motion.div
            className="space-y-4 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-3 text-left">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Heart className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-lg text-foreground">Build strong therapeutic alliances</span>
            </div>
            <div className="flex items-center space-x-3 text-left">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-violet-600" />
              </div>
              <span className="text-lg text-foreground">Ensure meaningful session time</span>
            </div>
            <div className="flex items-center space-x-3 text-left">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-lg text-foreground">Deliver patient-centered care</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <Link
              href="/about"
              className="inline-flex items-center relative overflow-hidden rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white cursor-pointer group shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 translate-x-[100%] group-hover:translate-x-0 rounded-full transition-transform duration-300" />
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Started Today</span>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Image Column - Right Side */}
        <motion.div
          className="flex justify-center lg:justify-start order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="w-full max-w-md lg:max-w-lg aspect-square bg-gradient-to-br from-blue-100 to-violet-100 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-center space-y-4 p-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-200 to-violet-200 rounded-full flex items-center justify-center mb-6">
                  <div className="text-6xl">🧠</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-gray-700">Human + AI Collaboration</div>
                  <div className="text-sm text-gray-600">Empowering better mental health outcomes</div>
                </div>
              </div>
            </div>
            {/* Floating elements around the illustration */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
              <Check className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
              <Heart className="w-6 h-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
