"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"  // 👈 add this

interface AdvisoryMember {
  id: string
  name: string
  photo: string
  shortCV: string
  role: string
  expertise: string[]
}

const advisoryMembers: AdvisoryMember[] = [
  {
    id: "1",
    name: "Dr. Maria Silva",
    photo: "/image.webp",
    shortCV:
      "PhD in Clinical Psychology with 15+ years of experience in mental health research and digital therapeutics. Former head of Psychology at Hospital São João.",
    role: "Clinical Psychology Advisor",
    expertise: ["Clinical Psychology", "Digital Health", "Research"],
  },
  {
    id: "2",
    name: "João Santos",
    photo: "/image1.webp",
    shortCV:
      "Serial entrepreneur and tech investor. Founded 3 successful healthtech startups. Currently Managing Partner at HealthTech Ventures.",
    role: "Strategic Business Advisor",
    expertise: ["Business Strategy", "HealthTech", "Investment"],
  },
  {
    id: "3",
    name: "Dr. Ana Costa",
    photo: "/image.webp",
    shortCV:
      "MD specializing in Psychiatry and Digital Mental Health. Published researcher with 50+ papers on technology-assisted therapy.",
    role: "Medical Advisor",
    expertise: ["Psychiatry", "Digital Therapeutics", "Medical Research"],
  },
  {
    id: "4",
    name: "Carlos Mendes",
    photo: "/image1.webp",
    shortCV:
      "Former CTO at major European healthtech companies. Expert in AI/ML applications for healthcare and regulatory compliance.",
    role: "Technology Advisor",
    expertise: ["AI/ML", "Healthcare Tech", "Regulatory Compliance"],
  },
]

export function Team() {
  const [selectedMember, setSelectedMember] = useState<AdvisoryMember | null>(null)

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      initial={{ opacity: 0, y: 50 }}          // 👈 start invisible, slightly down
      whileInView={{ opacity: 1, y: 0 }}       // 👈 fade+slide in on scroll
      viewport={{ once: true, amount: 0.2 }}   // 👈 only trigger once, when 20% is visible
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Our Leadership
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">Advisory Board</p>
      </div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }, // 👈 animate cards one by one
          },
        }}
      >
        {advisoryMembers.map((member) => (
          <motion.div
            key={member.id}
            className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-x-4">
              <Image
                className="rounded-full"
                src={member.photo}
                alt={member.name}
                width={80}
                height={80}
              />
              <div className="grow">
                <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                  {member.name}
                </h3>
                <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                  {member.role}
                </p>
              </div>
            </div>

            {/* Button with hover effect */}
            <button
              onClick={() => setSelectedMember(member)}
              className="mt-3 self-start inline-flex items-center relative overflow-hidden rounded-full px-3 py-1 text-sm font-semibold bg-[#9d9af0] cursor-pointer group"
            >
              <span className="absolute inset-0 bg-[#93bddc] translate-x-[100%] group-hover:translate-x-0 rounded-full transition-transform duration-300" />
              <span className="relative z-10 text-white">View Details</span>
            </button>

            <p className="mt-3 text-gray-500 dark:text-neutral-400">
              {member.shortCV}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {member.expertise.map((exp, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-lg border border-gray-200 dark:border-neutral-700 text-gray-600 dark:text-neutral-400"
                >
                  {exp}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Popup Modal */}
      {selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 max-w-lg w-full relative"
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white"
            >
              ✕
            </button>

            <div className="flex flex-col items-center">
              <Image
                className="rounded-full mb-4"
                src={selectedMember.photo}
                alt={selectedMember.name}
                width={100}
                height={100}
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {selectedMember.name}
              </h3>
              <p className="text-sm uppercase text-gray-500 dark:text-neutral-400 mb-4">
                {selectedMember.role}
              </p>
              <p className="text-gray-600 dark:text-neutral-300 mb-4">
                {selectedMember.shortCV}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedMember.expertise.map((exp, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-lg border border-gray-200 dark:border-neutral-700 text-gray-600 dark:text-neutral-400"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}
