import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full px-4 py-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-foreground">consult</span>
          <span className="text-2xl font-bold text-primary">ai</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Homepage
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Case studies
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Other
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Template
          </a>
        </nav>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Buy template</Button>
      </div>
    </header>
  )
}
