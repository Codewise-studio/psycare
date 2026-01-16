"use client"

import { Award } from "lucide-react"
import { motion } from "framer-motion"

export const TestimonialsMarqueeGrid = () => {
  return (
    <section className="relative w-full section-x section-y overflow-hidden h-full bg-gray-50">
      {/* Section Title */}
      <div className="pb-20 text-center">
        <motion.div
          className="inline-flex items-center gap-2 py-2 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Award className="h-6 w-6 text-[#9BAAEE]" />
          <span className="text-[#9BAAEE] font-semibold text-sm uppercase tracking-wide">
            Testimonials
          </span>
        </motion.div>

        <motion.h2
          className="text-[32px] sm:text-[38px] md:text-5xl font-semibold text-gray-900 mb-6 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Real Experiences,{" "}
          <span className="bg-gradient-to-r from-[#9BAAEE] via-[#8CD5BC] to-[#9BAAEE] bg-clip-text text-transparent">
            Real Impact
          </span>
        </motion.h2>
      </div>

      {/* Under construction placeholder */}
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 md:p-10 shadow-md text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Under construction</h3>
          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Testimonials are being updated and will be available soon.
          </p>
        </div>
      </motion.div>
    </section>
  )
};
