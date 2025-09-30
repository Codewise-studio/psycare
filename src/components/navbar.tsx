"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full px-4 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
          <img 
            src="/pasycare_white_color.png" 
            alt="Psycare Logo" 
            className="h-12 sm:h-14 w-auto" 
          />
          </Link>
        </div>

        {/* Desktop Navbar */}
        <section className="hidden md:flex items-center border border-gray-200 rounded-full px-6 py-2 bg-white space-x-8">
          <nav className="flex items-center space-x-10 text-sm font-semibold text-gray-800">
            {/* <a href="/" className="hover:text-black">Home</a> */}
  {/* <a href="#focusCare" className="hover:text-black">Focus Care</a> */}
  <a href="#whychoosepsycare" className="hover:text-black">Why choose Psycare</a>
   <a href="#features" className="hover:text-black">Features</a>
  <a href="#functionalities" className="hover:text-black">Functionalities</a>
  <a href="#caseStudies" className="hover:text-black">Case Studies</a> 
  <a href="#team" className="hover:text-black">Team</a>
  <a href="#testimonials" className="hover:text-black">Testimonials</a>
  
          </nav>

          <Link
            href="#contact"
            className="inline-flex items-center relative overflow-hidden rounded-full px-8 py-3 font-semibold bg-[#9d9af0] cursor-pointer group"
          >
            <span className="absolute inset-0 bg-[#93bddc] translate-x-[100%] group-hover:translate-x-0 rounded-full transition-transform duration-300" />
            <span className="relative z-10 text-white flex items-center space-x-2">
              <span>Contact us</span>
              <span className="bg-white text-[#9d9af0] rounded-full w-8 h-8 flex items-center justify-center group-hover:text-[#93bddc] transition-colors duration-300">
                →
              </span>
            </span>
          </Link>
        </section>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#9d9af0] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-lg py-6 px-6 space-y-6 text-center transition-all duration-300">
          <nav className="flex flex-col space-y-4 text-gray-800 font-semibold">
            <a href="#" className="hover:text-[#9d9af0]" onClick={() => setMenuOpen(false)}>Homepages</a>
            <a href="#" className="hover:text-[#9d9af0]" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#" className="hover:text-[#9d9af0]" onClick={() => setMenuOpen(false)}>Case studies</a>
            <a href="#" className="hover:text-[#9d9af0]" onClick={() => setMenuOpen(false)}>Other</a>
            <a href="#" className="hover:text-[#9d9af0]" onClick={() => setMenuOpen(false)}>Template</a>
          </nav>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center relative overflow-hidden rounded-full px-8 py-3 font-semibold bg-[#9d9af0] group w-full justify-center"
          >
            <span className="absolute inset-0 bg-[#93bddc] translate-x-[100%] group-hover:translate-x-0 rounded-full transition-transform duration-300" />
            <span className="relative z-10 text-white flex items-center space-x-2">
              <span>Contact us</span>
              <span className="bg-white text-[#9d9af0] rounded-full w-8 h-8 flex items-center justify-center group-hover:text-[#93bddc] transition-colors duration-300">
                →
              </span>
            </span>
          </Link>
        </div>
      )}
    </header>
  )
}
