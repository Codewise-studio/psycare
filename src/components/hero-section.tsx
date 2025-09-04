import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full border border-primary/20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full border border-accent/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5">
          awarded the most influential company of 2024
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
          Where AI tech <span className="text-primary">meets consulting</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Consult AI offers the highest quality consulting services in the area of technology and business.
        </p>

        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
          Learn more
        </Button>
      </div>
    </section>
  )
}
