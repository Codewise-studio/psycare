"use client";
import React, { useState } from "react";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

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
  const [globalPaused, setGlobalPaused] = useState(false);

  return (
    <div className="relative w-screen mx-auto px-4 md:px-8 py-20 overflow-hidden h-full bg-gray-50">
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
          <p className="text-sm sm:text-base mt-4 text-neutral-600 dark:text-neutral-400 hidden md:block">
            Tap or hover to read
          </p>
        </motion.h2>

        {/* Control Button for Mobile */}
        <div className="md:hidden mt-4 flex justify-center">
          <button
            onClick={() => setGlobalPaused(!globalPaused)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9BAAEE] to-[#8CD5BC] text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {globalPaused ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Resume
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Pause
              </>
            )}
          </button>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="relative">
        <div className="h-full overflow-hidden w-full">
          <TestimonialsGrid globalPaused={globalPaused} />
        </div>
      </div>
    </div>
  );
};

export const TestimonialsGrid: React.FC<{ globalPaused?: boolean }> = ({ globalPaused = false }) => {
  const first = testimonials.slice(0, 6);
  const second = testimonials.slice(6, 12);

  const renderMarquee = (list: Testimonial[]) => {
    const [paused, setPaused] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleTouch = (index: number) => {
      setExpandedIndex(expandedIndex === index ? null : index);
      setPaused(expandedIndex !== index); // pause if expanding
    };

    return (
      <Marquee
        direction="right"
        pauseOnHover
        speed={40}
        gradient={false}
        play={!globalPaused && !paused}
      >
        {list.map((testimonial: Testimonial, index: number) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={`testimonial-${testimonial.name}-${index}`}
              className={`p-4 md:p-8 rounded-xl min-h-[200px] md:min-h-[230px] h-full 
                w-[250px] sm:w-[300px] md:w-[380px] mx-2 sm:mx-4 bg-white shadow-md 
                hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer
                ${isExpanded ? "max-h-[400px] overflow-y-auto" : "overflow-hidden"}
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onTouchStart={() => handleTouch(index)}
            >
              <h3 className="text-xs sm:text-sm md:text-base font-medium md:font-semibold text-black py-2">
                {testimonial.quote}
              </h3>
              <div className="flex gap-2 items-center mt-6 md:mt-8">
                <div className="flex flex-col">
                  <p className="text-xs md:text-sm font-normal text-gray-600">
                    {testimonial.name}
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-sm font-normal text-gray-400">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </Marquee>
    );
  };

  return (
    <div className="relative [mask-image:linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)]">
      {renderMarquee(testimonials)}
    </div>
  );
};
