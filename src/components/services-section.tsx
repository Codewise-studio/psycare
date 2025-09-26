"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Brain, Mic, Video, BarChart3, Users, Shield, Eye, Activity, Target } from "lucide-react"

export function ServicesSection() {
  const listItems = [
    "Build strong therapeutical alliances with patients",
    "Ensure meaningful and quality time during all sessions",
    "Perform patient-centered care"
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna Texto */}
          <div className="space-y-6">
            {/* Badge animado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="w-fit mx-auto">
           
            <Shield className="w-3 h-3 mr-1" />
          why you should join
          </Badge>
            </motion.div>

            {/* Título animado */}
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Wouldn´t it <span className="text-[#9d9af0]"> be great</span> to let psychologists do what they are specialized for?
            </motion.h2>

            {/* Parágrafo animado */}
            <motion.p
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              With PsyCare, psychologists can focus on what matters most—building strong therapeutic bonds and delivering truly patient-centered care.
            </motion.p>

            {/* Lista animada */}
            <div className="space-y-4">
              {listItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#93bddc]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#93bddc]"></div>
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coluna Imagem */}
          <div className="relative">
            <motion.img
              src="/professional-woman-with-laptop-outdoors-smiling.jpg"
              alt="Professional consultant working outdoors"
              className="rounded-lg shadow-lg w-full h-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
