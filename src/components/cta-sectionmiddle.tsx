import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASectionMiddle() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to transform your practice?</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Join thousands of mental health professionals who trust PsyCare Studio to enhance their patient care with
              cutting-edge AI technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Start Your Free Trial
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">No credit card required • 14-day free trial • HIPAA compliant</p>
        </div>
      </div>
    </section>
  )
}
