"use client";
import { motion } from "framer-motion";

export default function CtaSection() {
  const text = [
    "Fueling growth in care through empowered practice",
    "and compassionate innovation."
  ];

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-[#1f1f2e]">
      {/* Imagem de fundo animada */}
      <motion.img
        src="teste.png"
        alt="fundo animado"
        className="absolute inset-0 w-full h-[350px] object-contain opacity-20"
        animate={{
          transform: [
            "translate3d(0px, 0px, 0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
            "translate3d(0px, 10px, 0px) scale3d(1.01665,1.01665,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
          ]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Texto */}
      <div className="relative z-10 max-w-auto mx-auto text-center space-y-6">
        {text.map((line, index) => (
          <motion.h2
            key={index}
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-white text-balance"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.5 }}
          >
            {line}
          </motion.h2>
        ))}
      </div>
    </div>
  );
}
