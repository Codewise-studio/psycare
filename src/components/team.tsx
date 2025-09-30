"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BookOpen, Users, Star } from "lucide-react"

interface AdvisoryMember {
  id: string
  name: string
  photo: string
  shortCV: string
  role: string
  expertise: string[]
  credentials: string
  yearsExperience: number
}

const advisoryMembers: AdvisoryMember[] = [
  {
    id: "1",
    name: "Dr. Maria Silva",
    photo: "/image.png",
    shortCV:
      "PhD in Clinical Psychology with 15+ years of experience in mental health research and digital therapeutics. Former head of Psychology at Hospital São João.",
    role: "Clinical Psychology Advisor",
    expertise: ["Clinical Psychology", "Digital Health", "Research"],
    credentials: "PhD, Licensed Clinical Psychologist",
    yearsExperience: 15,
  },
  {
    id: "2",
    name: "João Santos",
    photo: "/image1.jpg",
    shortCV:
      "Serial entrepreneur and tech investor. Founded 3 successful healthtech startups. Currently Managing Partner at HealthTech Ventures.",
    role: "Strategic Business Advisor",
    expertise: ["Business Strategy", "HealthTech", "Investment"],
    credentials: "MBA, Serial Entrepreneur",
    yearsExperience: 12,
  },
  {
    id: "3",
    name: "Dr. Ana Costa",
    photo: "/image.png",
    shortCV:
      "MD specializing in Psychiatry and Digital Mental Health. Published researcher with 50+ papers on technology-assisted therapy.",
    role: "Medical Advisor",
    expertise: ["Psychiatry", "Digital Therapeutics", "Medical Research"],
    credentials: "MD, Board-Certified Psychiatrist",
    yearsExperience: 18,
  },
  {
    id: "4",
    name: "Carlos Mendes",
    photo: "/image1.jpg",
    shortCV:
      "Former CTO at major European healthtech companies. Expert in AI/ML applications for healthcare and regulatory compliance.",
    role: "Technology Advisor",
    expertise: ["AI/ML", "Healthcare Tech", "Regulatory Compliance"],
    credentials: "PhD Computer Science, Former CTO",
    yearsExperience: 14,
  },
]

export function Team() {
  const [selectedMember, setSelectedMember] = useState<AdvisoryMember | null>(null)

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <motion.div
        className="max-w-7xl px-6 py-10 sm:px-8 lg:px-12 lg:py-14 mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600">Expert Advisory Board</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Psychology Experts
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Leading professionals in clinical psychology, digital health, and mental wellness technology guiding our
            mission to transform therapeutic practice.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {advisoryMembers.map((member) => (
            <motion.div
              key={member.id}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-4">
                    <Image
                      className="rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                      src={member.photo || "/placeholder.svg"}
                      alt={member.name}
                      width={100}
                      height={100}
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-2">{member.role}</p>
                  <p className="text-xs text-gray-500 mb-3">{member.credentials}</p>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <BookOpen className="w-4 h-4" />
                    <span>{member.yearsExperience}+ years experience</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{member.shortCV}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {member.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-700 font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => setSelectedMember(member)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-full transition-all duration-300 group-hover:scale-105"
                >
                  View Full Profile
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Network of Psychology Professionals</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Connect with leading experts in digital mental health and be part of the future of therapeutic practice.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-full">
              Learn More About Our Advisory Program
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div> */}
        </motion.div>
      </motion.div>

      {selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors"
            >
              ✕
            </button>

            <div className="text-center mb-8">
              <div className="relative inline-block mb-6">
                <Image
                  className="rounded-full border-4 border-blue-500/20 shadow-lg"
                  src={selectedMember.photo || "/placeholder.svg"}
                  alt={selectedMember.name}
                  width={120}
                  height={120}
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedMember.name}</h3>
              <p className="text-lg font-medium text-blue-600 mb-2">{selectedMember.role}</p>
              <p className="text-sm text-gray-500 mb-4">{selectedMember.credentials}</p>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{selectedMember.yearsExperience}+ years</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Expert Level</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Professional Background</h4>
                <p className="text-gray-600 leading-relaxed">{selectedMember.shortCV}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedMember.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-700 font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
