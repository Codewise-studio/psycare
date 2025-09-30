"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [bgColor, setBgColor] = useState("#9d9af0") // cor inicial

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    const handleScroll = () => {
      toggleVisibility()

      // Detecta a seção visível e altera cor
      const sections = document.querySelectorAll("section")
      let newColor = "#9d9af0"

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          // Exemplo: pega cor de data attribute ou class
          const color = section.getAttribute("data-scroll-color")
          if (color) newColor = color
        }
      })

      setBgColor(newColor)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full text-white shadow-lg transition-all duration-300 hover:brightness-110 focus:outline-none
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        sm:bottom-8 sm:right-8 sm:p-4`}
      style={{ backgroundColor: bgColor }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
    // <p className="text-sm text-gray-500">Back to top</p>
  )
}
