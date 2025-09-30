"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import {
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  MapPin,
  Calendar,
  Users,
  Clock,
  Target,
  Award,
} from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "Centro de Saúde Mental Lisboa",
    location: "Lisboa, Portugal",
    type: "Clínica Privada",
    duration: "6 meses",
    image: "/hospital (3).jpg",
    challenge: "High administrative burden and limited session insights",
    solution: "Implemented PsyCare's AI transcription and analytics suite",
    results: [
      { metric: "75%", description: "Redução do tempo de documentação" },
      { metric: "40%", description: "Aumento da satisfação dos pacientes" },
      { metric: "60%", description: "Mais sessões por semana" },
      { metric: "90%", description: "Satisfação dos terapeutas" },
    ],
    testimonial:
      "PsyCare transformed our clinic. We can now fully focus on our patients while AI handles administrative tasks.",
    author: "Dra. Sara Martins",
    role: "Clinical Director",
    tags: ["AI Transcription", "Analytics", "Workflow Optimization"],
    color: "from-teal-500 to-blue-500",
  },
  {
    id: 2,
    title: "Clínica Universitária do Porto",
    location: "Porto, Portugal",
    type: "Clínica Universitária",
    duration: "8 meses",
    image: "/hospital (2).jpg",
    challenge: "Managing high student volume with limited staff",
    solution: "Deployed PsyCare's patient app and automated scheduling",
    results: [
      { metric: "200%", description: "Aumento da capacidade de marcação de consultas" },
      { metric: "85%", description: "Redução de faltas às consultas" },
      { metric: "95%", description: "Engajamento dos estudantes" },
      { metric: "50%", description: "Faster crisis response time" },
    ],
    testimonial:
      "The patient app revolutionized how we connect with students. Crisis interventions are now 50% faster.",
    author: "Dr. Miguel Costa",
    role: "Head of Student Services",
    tags: ["Patient App", "Scheduling", "Crisis Management"],
    color: "from-teal-400 to-blue-400",
  },
  {
    id: 3,
    title: "Clínica Pediátrica Harmony",
    location: "Coimbra, Portugal",
    type: "Clínica Pediátrica",
    duration: "4 meses",
    image: "/hospital (1).jpg",
    challenge: "Difficulty tracking progress in child therapy sessions",
    solution: "Integrated PsyCare's behavioral analysis and parent portal",
    results: [
      { metric: "80%", description: "Melhoria nos resultados dos tratamentos" },
      { metric: "95%", description: "Satisfação dos pais" },
      { metric: "65%", description: "Maior precisão no diagnóstico" },
      { metric: "70%", description: "Aumento do envolvimento familiar" },
    ],
    testimonial:
      "Working with children requires special attention to detail. PsyCare's behavioral analysis helps us catch nuances we might miss.",
    author: "Dra. Emília Rodrigues",
    role: "Pediatric Psychologist",
    tags: ["Behavioral Analysis", "Parent Portal", "Child Therapy"],
    color: "from-teal-500 to-cyan-500",
  },
]

export function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState(0)

  return (
    <section className="py-6 bg-white relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[hsla(179,39%,68%,0.35)] blur-xl animate-pulse"></div>
        <div className="absolute top-28 right-16 w-28 h-28 rounded-full bg-[hsla(179,39%,68%,0.35)] blur-xl animate-pulse"></div>
        <div className="absolute bottom-16 left-1/4 w-32 h-32 rounded-full bg-[hsla(179,39%,68%,0.35)] blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 rounded-full bg-[hsla(179,39%,68%,0.35)] blur-xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-6 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3">
            <Award className="h-5 w-5 sm:h-6 sm:w-6 text-[hsla(229,71%,77%,1)]" />
            <span className="text-[hsla(229,71%,77%,1)] font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Case Studies
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-gray-900">
            Transforming Mental Health
            <span className="bg-gradient-to-r from-[hsla(229,71%,77%,1)] via-[hsla(179,39%,68%,1)] to-[hsla(229,71%,77%,1)] bg-clip-text text-transparent block sm:inline">
              <br /> One Practice at a Time
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how leading mental health professionals are revolutionizing patient care and achieving remarkable
            outcomes with PsyCare's AI-powered platform.
          </p>
        </motion.div>

        {/* Case Selector Buttons */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            {caseStudies.map((study, index) => (
              <motion.button
                key={study.id}
                onClick={() => setSelectedCase(index)}
                className={`group relative px-4 py-2 sm:px-8 sm:py-4 rounded-3xl font-semibold transition-all duration-300 ${
                  selectedCase === index
                    ? "bg-gradient-to-r from-[#8CD5BC]/70 to-[#9BAAEE]/70 text-gray-900 shadow-xl"
                    : "bg-white text-gray-600 hover:text-gray-900 border-2 border-gray-200 hover:border-teal-300 shadow-md hover:shadow-lg"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className={`w-3 h-3 rounded-full ${selectedCase === index ? "bg-white" : "bg-[#8CD5BC]"}`}></div>
                  <span className="text-sm sm:text-base">{study.title}</span>
                </div>
                {selectedCase === index && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Case Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCase}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <Card className="bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
                  {/* Image Section */}
                  <div className="md:col-span-2 relative">
                    <div className="h-64 sm:h-80 md:h-full relative overflow-hidden">
                      <img
                        src={caseStudies[selectedCase].image || "/placeholder.svg"}
                        alt={caseStudies[selectedCase].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Floating success badge */}
                      <motion.div
                        className="absolute top-4 right-4 bg-[#8CD5BC] text-white p-3 rounded-full shadow-lg"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <CheckCircle className="w-5 h-5" />
                      </motion.div>

                      {/* Practice info overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-gray-700">
                          <div className="flex flex-wrap gap-2 sm:gap-4">
                            <div className="flex items-center gap-1">
                              <Building className="w-3 h-3 sm:w-4 sm:h-4 text-[#96B9DF]" />
                              {caseStudies[selectedCase].type}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#96B9DF]" />
                              {caseStudies[selectedCase].location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#96B9DF]" />
                              {caseStudies[selectedCase].duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-3 p-4 sm:p-6 lg:p-12 space-y-6">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                      {caseStudies[selectedCase].title}
                    </h3>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {caseStudies[selectedCase].tags.map((tag, index) => (
                        <Badge
                          key={index}
                          className="bg-gradient-to-br from-[#8CD5BC]/70 to-[#9BAAEE]/70 text-grey-800 px-2 py-1 sm:px-3 sm:py-1.5 text-sm sm:text-base"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-red-500" />
                          <h4 className="font-bold text-gray-900 text-sm sm:text-base">Challenge</h4>
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{caseStudies[selectedCase].challenge}</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-500" />
                          <h4 className="font-bold text-gray-900 text-sm sm:text-base">Solution</h4>
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{caseStudies[selectedCase].solution}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {caseStudies[selectedCase].results.map((result, index) => (
                        <motion.div
                          key={index}
                          className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 rounded-2xl border-2 border-gray-100 text-center shadow-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                        >
                          <div
                            className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${caseStudies[selectedCase].color} bg-clip-text text-transparent mb-1 sm:mb-2`}
                          >
                            {result.metric}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 font-medium">{result.description}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-sky-50 shadow-lg">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#8CD5BC] to-[#9BAAEE] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {caseStudies[selectedCase].author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div className="flex-1">
                            <blockquote className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-3 italic leading-relaxed">
                              "{caseStudies[selectedCase].testimonial}"
                            </blockquote>
                            <div>
                              <div className="font-bold text-gray-900 text-sm sm:text-base">{caseStudies[selectedCase].author}</div>
                              <div className="text-xs sm:text-sm text-black font-semibold">{caseStudies[selectedCase].role}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
