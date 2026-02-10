"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { Brain, Clock, Target, TrendingUp, ArrowRight } from "lucide-react"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"


const benefits = [
  {
    icon: Brain,
    title: "Work smarter, care deeper",
    description:
      "Spend less time documenting. More time with patients. Build stronger therapeutic relationships.",
    color: "from-[#C4DCE4] to-[#96B9DF]",
    bgColor: "bg-[#C4DCE4]/50",
    imageSrc: "/image (5).webp",
    imageAlt: "Gravacao da consulta e controlos de sessao",
    imageQuery: "psychologist having meaningful conversation with patient in modern office",
  },
  {
    icon: Clock,
    title: "More time for patients",
    description:
      "Automation eliminates scheduling, reminders, and admin tasks—reclaiming up to 1.8h every day. Spend your time where it matters most.",
    color: "from-[#96B9DF] to-[#8ECDCC]",
    bgColor: "bg-[#8ECDCC]/50",
    imageSrc: "/image24.webp",
    imageAlt: "Painel principal com metricas e visao geral",
    imageQuery: "clock showing saved time with calendar and automation icons",
  },
  {
    icon: Target,
    title: "Evidence-informed personalization",
    description:
      "Intelligent insights help tailor care plans, track progress, and improve outcomes. Data-driven decisions that enhance every patient journey.",
    color: "from-[#8ECDCC] to-[#85E1B9]",
    bgColor: "bg-[#85E1B9]/50",
    imageSrc: "/image (7).webp",
    imageAlt: "Dashboard com progresso e insights clinicos",
  },
  {
    icon: TrendingUp,
    title: "Scale care with clinical consistency",
    description:
      "See more patients without losing quality, supported by scalable automation. Your practice grows while care standards remain exceptional.",
    color: "from-[#85E1B9] to-[#9BAAEE]",
    bgColor: "bg-[#9BAAEE]/50",
     imageSrc: "/image28.webp",
    imageQuery: "growing practice with multiple patients and upward trending graph",
  },
]

export function EnhancedServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen px-4 py-24 md:py-32 bg-gradient-to-br from-white via-white to-purple-50/30 section-visuals"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-6 mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
      <div className="flex items-center justify-center gap-2">
  <Brain className="h-6 w-6 text-[hsla(229,71%,77%,1)]" />
  <span className="text-[hsla(229,71%,77%,1)] font-semibold text-sm uppercase tracking-wide">
    AI-Powered Care
  </span>
</div>


          <h2 className="text-[42px]  md:text-3xl lg:text-5xl font-semibold text-gray-900 leading-tight text-balance">
            Why Choose PsyCare
          </h2>

   <p className="text-xl text-gray-600 leading-relaxed max-w-2xl text-center mx-auto">
  Empower psychologists to focus on care while AI handles the rest.
</p>

        </motion.div>

        {/* Benefits List */}
        <div className="space-y-24 md:space-y-32">
          {benefits.map((benefit, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div
                  className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                    isEven ? "" : "md:grid-flow-dense"
                  }`}
                >
                  {/* Image Column */}
                  <motion.div
                    className={`relative ${isEven ? "" : "md:col-start-2"}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  >
                    <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                      {benefit.imageSrc ? (
                        <img
                          src={benefit.imageSrc}
                          alt={benefit.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      ) : (
                        <img
                          src={`/.jpg?key=kixw6&height=600&width=800&query=${encodeURIComponent(
                            benefit.imageQuery ?? ""
                          )}`}
                          alt={benefit.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      )}
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-10`} />
                    </div>

                    {/* Decorative floating icon */}
                    <motion.div
                      className={`absolute -top-6 ${
                        isEven ? "-right-6" : "-left-6"
                      } w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center shadow-xl`}
                      whileInView={{ scale: [0, 1.2, 1], rotate: [0, 10, 0] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    >
                      <benefit.icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </motion.div>
                  </motion.div>

                  {/* Content Column */}
                  <motion.div
                    className={isEven ? "" : "md:col-start-1 md:row-start-1"}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  >
                    <div
                      className={`${benefit.bgColor} rounded-3xl p-8 md:p-10 backdrop-blur-sm border border-gray-100/50`}
                    >
                      <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 rounded-full shadow-sm">
                          <div className={`w-2 h-2 bg-gradient-to-r ${benefit.color} rounded-full`} />
                          <span className="text-sm font-semibold text-gray-700">
                            Benefit {index + 1}
                          </span>
                        </div>

                        <h3 className="text-3xl md:text-2xl font-bold text-gray-900 leading-tight text-balance">
                          {benefit.title}
                        </h3>

                        <p className="text-md md:text-md text-gray-600 leading-relaxed text-pretty">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative blur element */}
                <motion.div
                  className={`absolute ${isEven ? "-right-12" : "-left-12"} top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br ${benefit.color} rounded-full blur-3xl opacity-20 pointer-events-none`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-32 text-center space-y-8 bg-gradient-to-br from-[#9BAAEE] to-[#9BAAEE] rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ opacity, scale }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>

          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-balance">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto text-pretty leading-relaxed">
              Join mental health professionals who are saving time and improving patient outcomes with PsyCare.
            </p>

            <Link
            href="#contact"
            className="inline-flex items-center relative overflow-hidden rounded-full px-8 py-3 font-semibold bg-white cursor-pointer group"
          >
          
            <span className="relative z-10 text-[#9d9af0] flex items-center space-x-2 ">
              <span>Transform Your Practice</span>
              <span className="bg-[#9d9af0] text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300">
                →
              </span>
            </span>
          </Link>

            {/* <div className="flex flex-wrap justify-center items-center gap-6 pt-4">
              {["No credit card required", "14-day free trial", "HIPAA compliant"].map(
                (item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/90 font-medium">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
