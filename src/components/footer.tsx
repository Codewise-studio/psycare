import { Button } from "@/components/ui/button"

export function Footer() {
  const footerLinks = {
    Company: ["About", "Careers", "Press", "News"],
    Services: ["AI Strategy", "Implementation", "Training", "Support"],
    Resources: ["Blog", "Documentation", "Help Center", "Community"],
    Legal: ["Privacy", "Terms", "Security", "Compliance"],
  }

  return (
    <footer className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg"></div>
              <span className="text-xl font-bold">consult-ai</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming businesses through intelligent AI solutions and strategic consulting.
            </p>
            <Button>Get Started</Button>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2024 consult-ai. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
