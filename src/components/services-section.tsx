import { Badge } from "@/components/ui/badge"

export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5">
              why you should join
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Join the <span className="text-primary">inevitable</span> growth of AI
            </h2>

            <p className="text-muted-foreground text-lg">
              In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Praesent congue erat at massa. Vivamus
              aliquet elit.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Trusted by thousands</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <span className="text-foreground">Certificate awarded</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                </div>
                <span className="text-foreground">Download offline</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Made by professionals</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/professional-woman-with-laptop-outdoors-smiling.jpg"
              alt="Professional consultant working outdoors"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
