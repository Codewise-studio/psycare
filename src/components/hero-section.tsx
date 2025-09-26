"use client"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
import { FloatingIcons } 
from "./floating-icons"
import { Brain, Mic, Video, BarChart3, Users, Shield, Eye, Activity, Target } from "lucide-react"

export function HeroSection() {
  const titleLines = [
    <>
      Human-Centered Care,{" "}
      <span className="text-[#9d9af0]" key="primary-span">
        Enhanced by Technology
      </span>
    </>,
  ]

  const paragraphLines = [
    "At PsyCare, we combine expert psychological support with innovative technology to make mental health care more accessible, personal, and effective.",
    "Your well-being is always at the center of what we do.",
  ]

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full border border-primary/20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full border border-accent/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10"></div>
      </div>

      <FloatingIcons />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="flex justify-center lg:justify-end">
         {/* Image Column */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex justify-center lg:justify-end"
>
  <img
    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-s1FneVtfr7KQQq7MsJXL4O4p27r3PB.png"
    alt="Modern therapy office with AI analytics overlay"
    className="w-full max-w-md lg:max-w-lg drop-shadow-xl rounded-xl"
  />
</motion.div>

        </div>

        {/* Text Column */}
        <div className="space-y-8 text-center lg:text-left">
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
  className="w-fit mx-auto lg:mx-0"
>
  <Badge variant="secondary" className="flex items-center gap-1">
    <Shield className="w-3 h-3" />
    4/5 Psychologists approve
  </Badge>
</motion.div>

          

          <div className="space-y-2">
            {titleLines.map((line, index) => (
              <motion.h1
                key={index}
                className="text-4xl md:text-6xl lg:text-7xl font-normal text-foreground leading-tight text-balance"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.5, ease: "easeOut" }}
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <div className="space-y-2 max-w-xl mx-auto lg:mx-0">
            {paragraphLines.map((line, index) => (
              <motion.p
                key={index}
                className="text-lg md:text-xl text-muted-foreground text-pretty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.5, ease: "easeOut" }}
              >
                {line}
              </motion.p>
            ))}
          </div>

             <Link
            href="/about"
            className="inline-flex items-center relative overflow-hidden rounded-full px-8 py-3 font-semibold bg-[#9d9af0] cursor-pointer group"
          >
            <span className="absolute inset-0 bg-[#93bddc] translate-x-[100%] group-hover:translate-x-0 rounded-full transition-transform duration-300" />
            <span className="relative z-10 text-white flex items-center space-x-2">
              <span>Get Started</span>
              {/* <span className="bg-white text-[#9d9af0] rounded-full w-8 h-8 flex items-center justify-center group-hover:text-[#93bddc] transition-colors duration-300">
                →
              </span> */}
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
