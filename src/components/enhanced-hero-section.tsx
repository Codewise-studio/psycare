"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Brain, Mic, Video, BarChart3, Shield, Activity, Target, ArrowRight, Play, Sparkles, Phone } from "lucide-react"

const FloatingIcon = ({ icon: Icon, className, delay = 0 }: { icon: any; className: string; delay?: number }) => (
  <motion.div
    className={`absolute ${className} p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, 0],
    }}
    transition={{
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
      delay,
    }}
  >
    <Icon className="w-5 h-5 text-[#96B9DF]" />
  </motion.div>
)

export function EnhancedHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
    
       
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      {/* Floating Icons */}
      <FloatingIcon icon={Brain} className="top-20 left-10" delay={0} />
      <FloatingIcon icon={Mic} className="top-32 right-20" delay={1} />
      <FloatingIcon icon={Video} className="bottom-32 left-20" delay={2} />
      <FloatingIcon icon={BarChart3} className="bottom-20 right-32" delay={3} />
      <FloatingIcon icon={Activity} className="top-1/2 left-10" delay={1.5} />
      <FloatingIcon icon={Target} className="top-1/3 right-10" delay={2.5} />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Enhanced Text Column */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-fit mx-auto lg:mx-0"
          >
           <div className="flex items-center space-x-2">
  <Brain className="h-6 w-6 text-[hsla(229,71%,77%,1)]" />
  <span className="text-[hsla(229,71%,77%,1)] font-semibold text-sm uppercase tracking-wide">
    4/5 Psychologists approve
  </span>
</div>

            {/* <Badge
              variant="secondary"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-[#4b65d4] border-blue-200 px-4 py-2"
            >
              <Shield className="w-4 h-4" />
              <span className="font-medium">4/5 Psychologists approve</span>
              {/* <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full" />
                ))}
              </div> */}
            {/* </Badge>  */}
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-semib text-gray-900 leading-tight text-balance"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Human-Centered Care,{" "}
            <span className="bg-[#9d9af0] bg-clip-text text-transparent">
       Enhanced by Technology
            </span>
          </motion.h1>

          <motion.div
            className="space-y-4 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 text-pretty leading-relaxed">
             At PsyCare, we combine expert psychological support with innovative technology to make mental health care more accessible, personal, and effective.
            </p>
            <p className="text-lg text-gray-500">
              Join thousands of professionals who save 3+ hours daily with intelligent automation.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >

{/* Learn More button (mais neutro) */}
<Button
  className="inline-flex items-center relative overflow-hidden rounded-full px-8 py-6 font-semibold bg-[#96B9DF] cursor-pointer group border border-[#96B9DF]"
>
  {/* Background hover */}
  <span className="absolute inset-0 bg-gradient-to-r from-[hsla(179,39%,68%,1)] to-[hsla(229,71%,77%,1)] translate-x-[100%] group-hover:translate-x-0 rounded-full transition-transform duration-300" />
  
  {/* Text + icons */}
  <span className="relative z-10 text-white flex items-center space-x-2 group-hover:text-[#fffff] ">
    <Brain className="w-5 h-5" />
    <span>Learn More</span>
  </span>
</Button>

{/* Contact Us button (Call to Action – destacado) */}
<Button
  as="a"
  href="#contact"
  className="inline-flex items-center relative overflow-hidden rounded-full px-8 py-6 font-semibold bg-gradient-to-r from-[hsla(179,39%,68%,1)] to-[hsla(229,71%,77%,1)] cursor-pointer group shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
>
  {/* Background hover */}
  <span className="absolute inset-0 bg-[#8CD5BC] translate-x-[100%] group-hover:translate-x-0 rounded-full transition-transform duration-300" />
  
  {/* Text + icons */}
  <span className="relative z-10 text-white flex items-center space-x-2">
    <span>Contact Us</span>
    <span className="bg-white text-[#9BAAEE] rounded-full w-8 h-8 flex items-center justify-center group-hover:text-[#8CD5BC]  transition-colors duration-300">
      <ArrowRight className="w-5 h-5" />
    </span>
  </span>
</Button>





          </motion.div>

          {/* Trust Indicators */}
          {/* <motion.div
            className="flex flex-wrap justify-center lg:justify-start items-center gap-8 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span>24/7 Support</span>
            </div>
          </motion.div> */}
        </div>

        {/* Enhanced Image Column */}
        <motion.div
          className="flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative">
            {/* Main Image */}
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 ">
              <img
                src="/image24.jpg"
                alt="Modern therapy office with AI analytics overlay"
                className="w-full max-w-md lg:max-w-lg drop-shadow-xl rounded-2xl"
              />

              {/* Floating Stats Cards */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-200"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">Live Session</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mt-1">98%</div>
                <div className="text-xs text-gray-500">Accuracy</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-200"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">Time Saved</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mt-1">3.2h</div>
                <div className="text-xs text-gray-500">Per Day</div>
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl -z-10 scale-110" />
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div> */}
    </section>
  )
}
