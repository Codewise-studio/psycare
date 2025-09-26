"use client";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Banner2 = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  const textLines = [
    "Fueling growth in care through",
    "empowered practice and compassionate innovation"
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#93bddc] via-[#6aa7d3] to-[#9d9af0]">
       {/* Wave Layer 1 */}
<motion.div
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-400/30 to-blue-500/20 blur-3xl"
/>

{/* Wave Layer 2 */}
<motion.div
  animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-300/20 to-indigo-400/30 blur-2xl"
/>

{/* Wave Layer 3 (mais fino, simulando “linha de ondas”) */}
<motion.div
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/20"
/>

        {/* Texto centralizado */}
        <div className="relative z-10 container mx-auto max-w-4xl text-center flex flex-col items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-normal text-white leading-tight space-y-3">
              {textLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {line}
                </motion.div>
              ))}
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
