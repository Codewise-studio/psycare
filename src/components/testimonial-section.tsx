import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="section-y section-x bg-muted/30">
      <div className="section-container">
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
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
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
