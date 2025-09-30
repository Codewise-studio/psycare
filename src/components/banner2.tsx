"use client"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { useEffect, useState } from "react"

const Banner2 = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  const orb1X = useTransform(mouseXSpring, [-50, 50], [-30, 30])
  const orb1Y = useTransform(mouseYSpring, [-50, 50], [-20, 20])
  const orb2X = useTransform(mouseXSpring, [-50, 50], [-60, 60])
  const orb2Y = useTransform(mouseYSpring, [-50, 50], [-40, 40])
  const orb3X = useTransform(mouseXSpring, [-50, 50], [-90, 90])
  const orb3Y = useTransform(mouseYSpring, [-50, 50], [-60, 60])
  const orb4X = useTransform(mouseXSpring, [-50, 50], [-120, 120])
  const orb4Y = useTransform(mouseYSpring, [-50, 50], [-80, 80])

  const [mounted, setMounted] = useState(false)

  const orbs = [
    { size: 600, color: "from-cyan-400/30 to-blue-500/40", duration: 15, delay: 0, x: orb1X, y: orb1Y },
    { size: 500, color: "from-purple-400/25 to-pink-500/35", duration: 18, delay: 2, x: orb2X, y: orb2Y },
    { size: 450, color: "from-emerald-400/20 to-teal-500/30", duration: 20, delay: 4, x: orb3X, y: orb3Y },
    { size: 400, color: "from-violet-400/25 to-indigo-500/35", duration: 16, delay: 1, x: orb4X, y: orb4Y },
  ]

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set((clientX / innerWidth - 0.5) * 100)
      mouseY.set((clientY / innerHeight - 0.5) * 100)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Generate particles
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }))

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#4483c7] via-[#96B9DF] to-[#4483c7]">
      {/* Animated gradient mesh background */}
 <motion.div
  className="absolute inset-0"
  animate={{
    background: [
      "radial-gradient(circle at 20% 30%, rgba(139, 193, 65, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)",
      "radial-gradient(circle at 80% 30%, rgba(168, 85, 247, 0.4) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(139, 193, 65, 0.4) 0%, transparent 50%)",
      "radial-gradient(circle at 20% 30%, rgba(139, 193, 65, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)",
    ],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    },
  }}
/>



      {/* Floating orbs with mouse interaction */}
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-br ${orb.color} blur-3xl`}
          style={{
            width: orb.size,
            height: orb.size,
            x: orb.x,
            y: orb.y,
          }}
          animate={{
            x: ["-20%", "20%", "-20%"],
            y: ["-30%", "30%", "-30%"],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Particle system */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/40"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Morphing shapes */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <motion.div
          className="w-[700px] h-[700px] border border-white/10 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            borderRadius: ["50%", "40%", "50%"],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-6 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: mounted ? 1 : 0 }} transition={{ duration: 0.5 }}>
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white/90">
              Revolutionizing Mental Healthcare
            </span>
          </motion.div>

          {/* Main heading with character animation */}
          <motion.h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-tight mb-8 text-balance">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              Fueling growth in care
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-white"
            >
              through empowered practice
            </motion.span>
          </motion.h1>

          {/* Description */}
          {/* <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 text-pretty"
          >
            AI-powered solutions that let psychologists focus on what matters most—compassionate, personalized care.
          </motion.p> */}

          {/* CTA Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
            >
              Get Started Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg hover:bg-white/15 transition-colors"
            >
              Watch Demo
            </motion.button>
          </motion.div> */}

          {/* Scroll indicator */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2 text-white/60"
            >
              <span className="text-sm font-medium tracking-wide">Discover More</span>
              <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-white/60"
                />
              </div>
            </motion.div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Banner2
