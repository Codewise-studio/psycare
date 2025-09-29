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
    title: "Riverside Mental Health Center",
    location: "San Francisco, CA",
    type: "Private Practice",
    duration: "6 months",
    image: "/modern-therapy-office.jpg",
    challenge: "High administrative burden and limited session insights",
    solution: "Implemented PsyCare's AI transcription and analytics suite",
    results: [
      { metric: "75%", description: "Reduction in documentation time" },
      { metric: "40%", description: "Increase in patient satisfaction" },
      { metric: "60%", description: "More sessions per week" },
      { metric: "90%", description: "Therapist satisfaction rate" },
    ],
    testimonial:
      "PsyCare transformed our practice. We can now focus entirely on our patients while AI handles the administrative work.",
    author: "Dr. Sarah Martinez",
    role: "Clinical Director",
    tags: ["AI Transcription", "Analytics", "Workflow Optimization"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Metro University Counseling",
    location: "Boston, MA",
    type: "University Clinic",
    duration: "8 months",
    image: "/university-counseling-center.jpg",
    challenge: "Managing high student volume with limited staff",
    solution: "Deployed PsyCare's patient app and automated scheduling",
    results: [
      { metric: "200%", description: "Increase in appointment capacity" },
      { metric: "85%", description: "Reduction in no-shows" },
      { metric: "95%", description: "Student engagement rate" },
      { metric: "50%", description: "Faster crisis response time" },
    ],
    testimonial:
      "The patient app revolutionized how we connect with students. Crisis interventions are now 50% faster.",
    author: "Dr. Michael Chen",
    role: "Head of Student Services",
    tags: ["Patient App", "Scheduling", "Crisis Management"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Harmony Pediatric Psychology",
    location: "Austin, TX",
    type: "Pediatric Clinic",
    duration: "4 months",
    image: "/child-therapy-room-colorful.jpg",
    challenge: "Difficulty tracking progress in child therapy sessions",
    solution: "Integrated PsyCare's behavioral analysis and parent portal",
    results: [
      { metric: "80%", description: "Improvement in treatment outcomes" },
      { metric: "95%", description: "Parent satisfaction score" },
      { metric: "65%", description: "Faster diagnosis accuracy" },
      { metric: "70%", description: "Increase in family engagement" },
    ],
    testimonial:
      "Working with children requires special attention to detail. PsyCare's behavioral analysis helps us catch nuances we might miss.",
    author: "Dr. Emily Rodriguez",
    role: "Pediatric Psychologist",
    tags: ["Behavioral Analysis", "Parent Portal", "Child Therapy"],
    color: "from-green-500 to-teal-500",
  },
]

export function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState(0)

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-br from-teal-100 to-green-100 rounded-full opacity-30 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-full px-6 py-3 border border-green-200">
            <Award className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-700">Success Stories</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-balance text-gray-900">
            Transforming Mental Health
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              One Practice at a Time
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Discover how leading mental health professionals are revolutionizing patient care and achieving remarkable
            outcomes with PsyCare's AI-powered platform.
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {caseStudies.map((study, index) => (
              <motion.button
                key={study.id}
                onClick={() => setSelectedCase(index)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCase === index
                    ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-xl"
                    : "bg-white text-gray-600 hover:text-gray-900 border-2 border-gray-200 hover:border-green-300 shadow-md hover:shadow-lg"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${selectedCase === index ? "bg-white" : "bg-green-400"}`}></div>
                  <span>{study.title}</span>
                </div>
                {selectedCase === index && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCase}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <div className="lg:col-span-2 relative">
                    <div className="h-96 lg:h-full relative overflow-hidden">
                      <img
                        src={caseStudies[selectedCase].image || "/placeholder.svg"}
                        alt={caseStudies[selectedCase].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Floating success badge */}
                      <motion.div
                        className="absolute top-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <CheckCircle className="w-6 h-6" />
                      </motion.div>

                      {/* Practice info overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex items-center gap-4 text-sm text-gray-700">
                            <div className="flex items-center gap-1">
                              <Building className="w-4 h-4 text-blue-600" />
                              {caseStudies[selectedCase].type}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-green-600" />
                              {caseStudies[selectedCase].location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4 text-purple-600" />
                              {caseStudies[selectedCase].duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="space-y-4">
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                          {caseStudies[selectedCase].title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                          {caseStudies[selectedCase].tags.map((tag, index) => (
                            <Badge
                              key={index}
                              className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 px-3 py-1"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-red-500" />
                            <h4 className="font-bold text-gray-900">Challenge</h4>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{caseStudies[selectedCase].challenge}</p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <h4 className="font-bold text-gray-900">Solution</h4>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{caseStudies[selectedCase].solution}</p>
                        </div>
                      </div>

                      {/* Results Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {caseStudies[selectedCase].results.map((result, index) => (
                          <motion.div
                            key={index}
                            className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border-2 border-gray-100 text-center shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                          >
                            <div
                              className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${caseStudies[selectedCase].color} bg-clip-text text-transparent mb-2`}
                            >
                              {result.metric}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">{result.description}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                              {caseStudies[selectedCase].author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div className="flex-1">
                              <blockquote className="text-lg text-gray-700 mb-3 italic leading-relaxed">
                                "{caseStudies[selectedCase].testimonial}"
                              </blockquote>
                              <div>
                                <div className="font-bold text-gray-900">{caseStudies[selectedCase].author}</div>
                                <div className="text-sm text-blue-600 font-semibold">
                                  {caseStudies[selectedCase].role}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 border-2 border-green-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Ready to Transform Your Practice?</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join these leading practices and discover how PsyCare can help you achieve similar results while
                improving patient outcomes and reducing administrative burden.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <TrendingUp className="w-6 h-6 mr-3" />
                Get Your Success Story
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-green-300 hover:border-green-500 text-green-700 hover:text-green-800 font-bold px-10 py-5 rounded-full transition-all duration-300 bg-white hover:bg-green-50"
              >
                <Users className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-600" />
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-purple-600" />
                <span>HIPAA compliant</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
