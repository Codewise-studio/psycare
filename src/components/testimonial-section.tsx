"use client"

import { useState } from "react"
import { Quote, Star } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Clinical Psychologist",
    location: "San Francisco, CA",
    avatar: "/professional-woman-psychologist.png",
    rating: 5,
    quote:
      "PsyCare has revolutionized my practice. The AI insights help me focus on what matters most - building meaningful connections with my patients.",
    highlight: "Increased patient engagement by 40%",
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    role: "Therapist & Practice Owner",
    location: "Austin, TX",
    avatar: "/professional-man-therapist.png",
    rating: 5,
    quote:
      "The time I save on administrative tasks now goes directly to patient care. My clients notice the difference, and so do I.",
    highlight: "Saved 15 hours per week",
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Child Psychologist",
    location: "Boston, MA",
    avatar: "/professional-woman-child-psychologist.png",
    rating: 5,
    quote:
      "Working with children requires my full attention. PsyCare's intelligent tools ensure I never miss important details while staying present.",
    highlight: "Improved treatment outcomes",
  },
  {
    id: 4,
    name: "Dr. James Thompson",
    role: "Behavioral Therapist",
    location: "Seattle, WA",
    avatar: "/professional-man-behavioral-therapist.jpg",
    rating: 5,
    quote:
      "The seamless integration of AI with human expertise has elevated my practice to new heights. My patients feel more heard and understood.",
    highlight: "Enhanced therapeutic relationships",
  },
]

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/testimonial-bg.png)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse" />
      <div className="absolute top-32 right-20 w-3 h-3 bg-teal-400/20 rounded-full animate-bounce" />
      <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-ping" />

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Quote className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-medium text-white/90">What Our Users Say</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Trusted by Mental Health
            <span className="block bg-gradient-to-r from-purple-300 to-teal-300 bg-clip-text text-transparent">
              Professionals Worldwide
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
            Join thousands of practitioners who have transformed their practice with PsyCare's AI-powered solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/1">
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
                    <CardContent className="p-8">
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Highlight Badge */}
                      <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-teal-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                        <span className="text-sm font-semibold text-purple-200">{testimonial.highlight}</span>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <Avatar className="w-16 h-16 ring-2 ring-white/20">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback className="bg-gradient-to-br from-purple-500 to-teal-500 text-white font-semibold">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-white/70 font-medium">{testimonial.role}</p>
                          <p className="text-white/50 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Buttons */}
            <CarouselPrevious className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 -left-16" />
            <CarouselNext className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 -right-16" />
          </Carousel>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10,000+</div>
            <div className="text-white/70">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-white/70">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-white/70">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/70">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
