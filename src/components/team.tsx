"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BookOpen, Star } from "lucide-react"

interface AdvisoryMember {
  id: string
  name: string
  photo: string
  shortCV: string
  role: string
  expertise: string[]
  credentials: string
  yearsExperience?: number
  group: "core" | "advisory" | "scientific"
}

const advisoryMembers: AdvisoryMember[] = [
 {
    id: "1",
    name: "Estela Bastos",
    photo: "/team/EstelaBastos.webp",
    shortCV:
      "",
    role: "Inventor & Founder",
    expertise: [""],
    credentials: "",
    yearsExperience: undefined,
    group: "core",
  },
  {
    id: "2",
    name: "Diogo Adão",
    photo: "/team/DiogoAdao.webp",
    shortCV:
      "",
    role: "Head Tech",
    expertise: [""],
    credentials: "",
    yearsExperience: undefined,
    group: "core",
  },
  {
    id: "3",
    name: "Helena Pereira",
    photo: "/team/HelenaPereira.webp",
    shortCV:
      "",
    role: "Behavioural Scientist, PhD",
    expertise: [""],
    credentials: "",
    yearsExperience: undefined,
    group: "core",
  },
  {
    id: "4",
    name: "Marcos Ferreira",
    photo: "/team/MarcosFerreira.webp",
    shortCV:
      "",
    role: "Robotics & AI, PhD",
    expertise: [""],
    credentials: "",
    yearsExperience: undefined,
    group: "core",
  },
   {
    id: "5",
    name: "Maria João Lupi",
    photo: "/team/MariaJoaoLupi.webp",
    shortCV:
      "",
    role: "DPO",
    expertise: [""],
    credentials: "",
    yearsExperience: undefined,
    group: "core",
  },

  {
    id: "6",
    name: "Miguel Ricou",
    photo: "/team/MiguelRicou.webp",
    shortCV:
      "",
    role: "Psychologist Expert, Professor & Researcher, PhD",
    expertise: [""],
    credentials: "",
    yearsExperience: undefined,
    group: "scientific",
  },
  {
    id: "7",
    name: "Pedro Morgado",
    photo: "/team/PedroMorgado.webp",
    shortCV:
      "",
    role: "Psychiatrist Expert, Professor & Researcher, PhD",
    expertise: [""],
    credentials: "",
    yearsExperience: undefined,
    group: "scientific",
  },
  {
    id: "8",
    name: "Manuel Dias",
    photo: "/team/ManuelDias.webp",
    shortCV:
      "",
    role: "National Technology Officer & Board Member",
    expertise: [""],
  credentials: "",
    yearsExperience: undefined,
    group: "advisory",
  },
  {
    id: "9",
    name: "Patrice Vanderbeeken",
    photo: "/team/PatriceVanderbeeken.webp",
    shortCV:
      "",
    role: "Founding Partner, Law Firm IP, IT & Data Protection",
    expertise: [""],
     credentials: "",
    yearsExperience: undefined,
    group: "advisory",
  },
   {
    id: "10",
    name: "Alain Strowel",
    photo: "/team/AlainStrowel.webp",
    shortCV:
      "",
    role: "IP & Data Protection Professor",
    expertise: [""],
    credentials: "",
    yearsExperience: undefined,
    group: "advisory",
  },

    {
    id: "11",
    name: "Nicholas Cummins",
    photo: "/team/NicholasCummins.webp",
    shortCV:
      "",
    role: "Researcher, Professor, Speech Analysis and Responsible AI in Health, PhD",
    expertise: [""],
    credentials: "",
    yearsExperience: undefined,
    group: "scientific",
  },
  {
    id: "12",
    name: "Miguel Gonçalves",
    photo: "/team/MiguelGoncalves.webp",
    shortCV:
      "",
    role: "Psychologist, Professor, Researcher, Speech Markers, PhD",
    expertise: [""],
    credentials: "",
    yearsExperience: undefined,
    group: "scientific",
  },
  {
    id: "13",
    name: "Susana Paço",
    photo: "/team/SusanaPaco.webp",
    shortCV:
      "",
    role: "Computational Biologist, PhD, Senior Data Scientist",
    expertise: [""],
    credentials: "",
    yearsExperience: undefined,
    group: "scientific",
  },
  {
    id: "14",
    name: "Miguel Oliveira",
    photo: "/team/MiguelOliveira.webp",
    shortCV:
      "",
    role: "Psychologist, Researcher, Synthetic Data, PhD student",
    expertise: [""],
    credentials: "",
    yearsExperience: undefined,
    group: "scientific",
  },
  //  {
  //   id: "15",
  //   name: "",
  //   photo: "/image1.webp",
  //   shortCV:
  //     "short cv",
  //   role: "DPO",
  //   expertise: ["expertise"],
  //   credentials: "credentials",
  //   yearsExperience: 0,
  //   group: "core",
  // },

  //  {
  //   id: "16",
  //   name: "",
  //   photo: "/team/kcl.webp",
  //   shortCV:
  //     "",
  //   role: "European Universities King´s College London European Hospital",
  //   expertise: [""],
  //   credentials: "",
  //   yearsExperience: undefined,
  //   group: "scientific",
  // },
]

export function Team() {
  const tabs: Array<{ key: AdvisoryMember["group"]; label: string }> = [
    { key: "core", label: "Core Team" },
    { key: "advisory", label: "Advisory Board" },
    { key: "scientific", label: "Scientific Team" },
  ]
  const [selectedTab, setSelectedTab] = useState<AdvisoryMember["group"]>("core")
  const [selectedMember, setSelectedMember] = useState<AdvisoryMember | null>(null)

  // refs para rolar até a secção do grupo
  const groupRefs = {
    core: useRef<HTMLDivElement | null>(null),
    advisory: useRef<HTMLDivElement | null>(null),
    scientific: useRef<HTMLDivElement | null>(null),
  } as Record<AdvisoryMember["group"], React.RefObject<HTMLDivElement>>

  const filteredMembers = advisoryMembers.filter((m) => m.group === selectedTab)

  // debug: log selectedTab and filtered count when tab changes
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('selectedTab', selectedTab, 'filteredMembersCount', filteredMembers.length)
  }, [selectedTab, filteredMembers.length])

  const onTabClick = (key: AdvisoryMember["group"]) => {
    setSelectedTab(key)
    const ref = groupRefs[key]
    if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  // keyboard navigation for tabs (ArrowLeft / ArrowRight / Home / End)
  const tabKeys = tabs.map((t) => t.key)
  const onTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const idx = tabKeys.indexOf(selectedTab)
    if (idx === -1) return

    const safeIndex = (i: number) => ((i % tabKeys.length) + tabKeys.length) % tabKeys.length

    if (e.key === "ArrowRight") {
      const nextKey = tabKeys[safeIndex(idx + 1)]
      if (nextKey) {
        setSelectedTab(nextKey)
        const ref = groupRefs[nextKey]
        if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      e.preventDefault()
      return
    }

    if (e.key === "ArrowLeft") {
      const prevKey = tabKeys[safeIndex(idx - 1)]
      if (prevKey) {
        setSelectedTab(prevKey)
        const ref = groupRefs[prevKey]
        if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      e.preventDefault()
      return
    }

    if (e.key === "Home") {
      const firstKey = tabKeys[0]
      if (firstKey) {
        setSelectedTab(firstKey)
        const ref = groupRefs[firstKey]
        if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      e.preventDefault()
      return
    }

    if (e.key === "End") {
      const lastKey = tabKeys[tabKeys.length - 1]
      if (lastKey) {
        setSelectedTab(lastKey)
        const ref = groupRefs[lastKey]
        if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      e.preventDefault()
      return
    }
  }

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* decorative overlay - must not capture pointer events */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse pointer-events-none"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl animate-pulse pointer-events-none"
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
        <div className="max-w-4xl mx-auto text-center mb-6">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Award className="h-6 w-6 text-[hsla(229,71%,77%,1)]" />
            <span className="text-[hsla(229,71%,77%,1)] font-semibold text-sm uppercase tracking-wide">
              Team & Advisors
            </span>
          </motion.div>

          <motion.h2
            className="text-[42px] md:text-5xl font-semibold text-gray-900 mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[hsla(229,71%,77%,1)] via-[hsla(179,39%,68%,1)] to-[hsla(229,71%,77%,1)] bg-clip-text text-transparent">
              <br /> Team & Advisory Board
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

          {/* Debug / Visual indicator of active tab */}
          {/* <div className="mt-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">
              Showing: {selectedTab}
            </span>
          </div> */}
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto mb-8">
          <div role="tablist" aria-label="Team groups" className="flex items-center justify-center gap-3">
            {tabs.map((t) => {
              const active = t.key === selectedTab
              const count = advisoryMembers.filter((m) => m.group === t.key).length
              return (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls={`team-${t.key}`}
                  tabIndex={active ? 0 : -1}
                  onKeyDown={onTabKeyDown}
                  onClick={() => {
                    // debug: log clicks
                    // eslint-disable-next-line no-console
                    console.log('tab click', t.key)
                    onTabClick(t.key)
                  }}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 focus:outline-none flex items-center gap-2 ${
                    active
                      ? "bg-gradient-to-r from-[hsla(229,71%,77%,1)] to-[hsla(179,39%,68%,1)] text-white shadow-md"
                      : "bg-white border border-gray-200 text-gray-700 hover:shadow-sm"
                  }`}
                >
                  <span>{t.label}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${active ? 'bg-white/20' : 'bg-gray-100 text-gray-600'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* render apenas os membros do tab selecionado */}
        <motion.div
          key={selectedTab}
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
          {filteredMembers.map((member) => (
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
                    <img
                      className={`rounded-full w-24 h-24 object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300 ${member.id === '7' ? 'object-[center top]' : ''}`}
                      src={member.photo || "/placeholder.svg"}
                      alt={member.name}
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[hsla(229,71%,77%,1)] via-[hsla(179,39%,68%,1)] to-[hsla(229,71%,77%,1)]  rounded-full p-2">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  {member.role && member.role.trim() !== "" && (
                    <p className="text-sm font-medium text-[#4c8fd6] mb-2">{member.role}</p>
                  )}
                  {member.credentials && member.credentials.trim() !== "" && (
                    <p className="text-xs text-gray-500 mb-3">{member.credentials}</p>
                  )}

                  {typeof member.yearsExperience === 'number' && member.yearsExperience > 0 && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <BookOpen className="w-4 h-4" />
                      <span>{member.yearsExperience}+ years experience</span>
                    </div>
                  )}
                </div>

                {member.shortCV && member.shortCV.trim() !== "" && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{member.shortCV}</p>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {member.expertise
                    .filter((e) => e && e.trim() !== "")
                    .map((exp, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-[#96B9DF]/30 text-grey-600 font-medium"
                      >
                        {exp}
                      </span>
                    ))}
                </div>

                <Button
                  onClick={() => setSelectedMember(member)}
                  className="w-full bg-gradient-to-r from-[hsla(229,71%,77%,1)]  to-[hsla(229,71%,77%,1)]  text-white font-semibold rounded-full transition-all duration-300 group-hover:scale-105"
                >
                  View Full Profile
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
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
                <img
                  className={`rounded-full w-32 h-32 object-cover border-4 border-blue-500/20 shadow-lg ${selectedMember.id === '7' ? 'object-[center top]' : ''}`}
                  src={selectedMember.photo || "/placeholder.svg"}
                  alt={selectedMember.name}
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[hsla(229,71%,77%,1)] via-[hsla(179,39%,68%,1)] to-[hsla(229,71%,77%,1)]  rounded-full p-3">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedMember.name}</h3>
              {selectedMember.role && selectedMember.role.trim() !== "" && (
                <p className="text-lg font-medium text-[#4c8fd6] mb-2">{selectedMember.role}</p>
              )}
              {selectedMember.credentials && selectedMember.credentials.trim() !== "" && (
                <p className="text-xs px-3 py-1 rounded-full text-grey-600 font-medium">{selectedMember.credentials}</p>
              )}

                <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-6">
                  {typeof selectedMember.yearsExperience === 'number' && selectedMember.yearsExperience > 0 && (
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{selectedMember.yearsExperience}+ years</span>
                    </div>
                  )}
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
                    {selectedMember.expertise
                      .filter((e) => e && e.trim() !== "")
                      .map((exp, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-[#96B9DF]/30 text-grey-600 font-medium">
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
