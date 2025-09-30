import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Quote } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-8">
            Testimonial
          </Badge>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-12">
              <Quote className="w-12 h-12 text-primary mx-auto mb-8" />
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 text-balance">
                "Our way to learn and improve in our day-to-day work has been better world in the next generation to
                come."
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src="/business-executive-headshot.webp"
                  alt="Client testimonial"
                  width={60}
                  height={60}
                  className="w-15 h-15 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-muted-foreground">CEO, TechCorp</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
