"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Send, Sparkles, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", company: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-[#f9f9fb] to-white">
      {/* Floating dots (subtle) */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#9d9af0] rounded-full animate-pulse opacity-40" />
      <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-[#82e8b4] rounded-full animate-ping opacity-30" />
      <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-[#93bddc] rounded-full animate-bounce opacity-30" />

      {/* Decorative blurred orbs */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-r from-[#9d9af0]/20 to-[#93bddc]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-20 w-52 h-52 bg-gradient-to-r from-[#82e8b4]/10 to-[#6c909e]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6">
               <Phone className="h-6 w-6 text-[hsla(229,71%,77%,1)]" />
            <span className="text-[hsla(229,71%,77%,1)] font-semibold text-sm uppercase tracking-wide">
  Get in touch
            </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 text-balance">
              Ready to transform your practice?
            </h2>

         <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ">
 <span className="font-semibold">Ask us anything. </span> <br />
              We're here to help you discover how PsyCare can revolutionize your mental health practice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#9d9af0]/20 to-[#93bddc]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-[#9d9af0]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground">info@visual-thinking.pt</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#82e8b4]/20 to-[#6c909e]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-[#6c909e]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground">(+351) 223 750 358 *</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#9d9af0] focus:ring-[#9d9af0]/20"
                          placeholder="Dr. Sarah Johnson"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#9d9af0] focus:ring-[#9d9af0]/20"
                          placeholder="sarah@practice.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">
                        Practice/Organization
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#9d9af0] focus:ring-[#9d9af0]/20"
                        placeholder="Wellness Psychology Center"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="bg-slate-50 border-slate-200 text-foreground placeholder:text-slate-400 focus:border-[#9d9af0] focus:ring-[#9d9af0]/20 resize-none"
                        placeholder="Tell us about your practice and how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#9d9af0] to-[#93bddc] hover:from-[#7d77ec] hover:to-[#82e8b4] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#82e8b4] to-[#6c909e] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#9d9af0] to-[#93bddc] rounded-full opacity-60 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#82e8b4] to-[#6c909e] rounded-full opacity-40 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
