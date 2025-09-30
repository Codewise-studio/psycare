"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Manuel Arora",
    quote:
      "PsyCare has transformed how I manage my practice. I can focus fully on my patients while the AI handles all documentation and insights seamlessly.",
    src: "",
    designation: "Clinical Psychologist & Founder",
  },
  {
    name: "Sofia Duarte",
    quote:
      "Using PsyCare, I save hours every day on scheduling and reminders. The AI insights have improved patient outcomes dramatically.",
    src: "",
    designation: "Therapist & Practice Owner",
  },
  {
    name: "Ricardo Gomes",
    quote:
      "The personalized treatment recommendations from PsyCare make every session more effective. My patients appreciate the attention to detail and care.",
    src: "",
    designation: "Psychologist & Wellness Coach",
  },
  {
    name: "Mariana Silva",
    quote:
      "PsyCare has revolutionized how I approach therapy. Automation and AI-driven insights give me more time to connect with patients personally.",
    src: "",
    designation: "Clinical Psychologist & Author",
  },
];

export const TestimonialsMarqueeGrid: React.FC = () => {
  return (
    <div className="relative w-screen mx-auto px-4 md:px-8 p-20 overflow-hidden h-full bg-gray-50">
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
          className="text-[42px] md:text-5xl font-semibold text-gray-900 mb-6 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Real Experiences,{" "}
          <span className="bg-gradient-to-r from-[#9BAAEE] via-[#8CD5BC] to-[#9BAAEE] bg-clip-text text-transparent">
            Real Impact
          </span>
          <p className="text-base mt-4 text-neutral-600 dark:text-neutral-400">
            Hover to read
          </p>
        </motion.h2>
      </div>

      {/* Testimonials Grid */}
      <div className="relative">
        <div className="h-full overflow-hidden w-full">
          <TestimonialsGrid />
        </div>
      </div>

      {/* Gradient overlay */}
      {/* <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-gray-50 to-transparent"></div> */}
    </div>
  );
};

export const TestimonialsGrid: React.FC = () => {
  const first = testimonials.slice(0, 6);
  const second = testimonials.slice(6, 12);

  const renderMarquee = (list: Testimonial[]) => (
    <Marquee direction="right" pauseOnHover speed={50}>
      {list.map((testimonial: Testimonial, index: number) => (
        <motion.div
          key={`testimonial-${testimonial.src}-${index}`}
          className="p-4 md:p-8 rounded-xl min-h-[230px] h-full max-w-md md:max-w-lg mx-4 bg-white shadow-md hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h3 className="text-sm md:text-base font-semibold text-black py-2">
            {testimonial.quote}
          </h3>
          <div className="flex gap-2 items-center mt-8">
            <div className="flex flex-col">
              <p className="text-xs md:text-sm font-normal text-gray-600">
                {testimonial.name}
              </p>
              <p className="text-xs md:text-sm font-normal text-gray-400">
                {testimonial.designation}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </Marquee>
  );

  return (
    <div className="relative [mask-image:linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)]">
      {renderMarquee(first)}
      <div className="mt-10">{renderMarquee(second)}</div>
    </div>
  );
};
