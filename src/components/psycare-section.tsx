
 "use client"
// components/AnimatedSection.jsx
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";

const items = ["Subtitle 1", "Subtitle 2", "Subtitle 3", "Subtitle 4"];

// Parent animation variants for staggered effect
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // delay between children
    },
  },
};

// Child animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 50, rotate: 0 },
  show: { opacity: 1, y: 0, rotate: 360, transition: { duration: 0.8 } },
};

export default function PsycareSection() {
  // const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const controls = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("show");
  //   } else {
  //     controls.start("hidden");
  //   }
  // }, [controls, inView]);

  return (
    <section className="section-y section-x bg-gray-50">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Our Features</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>
      </div>

      {/* Horizontal Items */}
      <motion.div
        // ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex justify-center gap-12 flex-wrap"
      >
        {items.map((text, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center space-y-4"
          >
            <motion.div className="w-12 h-12 bg-blue-500 rounded-full flex-shrink-0" />
            <h3 className="text-lg font-medium">{text}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
