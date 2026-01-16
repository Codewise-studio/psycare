"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { FlaskConical, ClipboardCheck, BarChart3, Route, Users, Rocket } from "lucide-react"

const items = [
   {
    icon: Rocket,
    title: "Clinical pilots",
    description: "",
  },
  {
    icon: ClipboardCheck,
    title: "Validation methodology",
    description: "",
  },
  {
    icon: BarChart3,
    title: "Outcome metrics",
    description: "",
  },
  {
    icon: Route,
    title: "Research roadmap",
    description: "",
  },
]

export function ScienceValidationSection() {
  return (
    <section className="relative section-y section-x section-visuals bg-white">
      <div className="absolute -top-24 -left-40 w-96 h-96 rounded-full bg-[hsla(229,71%,77%,0.25)] blur-3xl science-blob" />
      <div className="absolute top-24 -right-40 w-[520px] h-[520px] rounded-full bg-[hsla(179,39%,68%,0.25)] blur-3xl science-blob" />

      <div className="relative section-container">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 w-fit mx-auto">
            <FlaskConical className="h-6 w-6 text-[hsla(229,71%,77%,1)]" />
            <span className="text-[hsla(229,71%,77%,1)] font-semibold text-sm uppercase tracking-wide">Science &amp; Validation</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Science &amp; validation</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
       PsyCare is developed and validated in collaboration with clinicians and research partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="p-6 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        > */}
          {/* <Card className="p-8 bg-gradient-to-br from-[#9BAAEE]/20 to-[#8CD5BC]/20 border border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                
                  <span className="text-sm font-semibold text-[#6b6b9b] uppercase tracking-wide">PsyCare is developed and validated in collaboration with clinicians and research partners.</span>
                </div>
                {/* <p className="text-gray-700 text-pretty">
                  Pilot deployments support iterative validation and responsible improvement.
                </p> */}
              {/* </div>
            </div>
          </Card>
        </motion.div> */} 

        {/* <div className="mt-12 text-center">
          <p className="text-lg md:text-xl font-semibold text-gray-900">
            <span className="bg-gradient-to-r from-[#ADCBE2] to-[#8AD7C3] bg-clip-text text-transparent">
              PsyCare is developed and validated in collaboration with clinicians and research partners.
            </span>
          </p>
        </div> */}
      </div>
    </section>
  )
}
