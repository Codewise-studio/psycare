import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2">
              <img
                src="/pasycare_white_color.png"
                alt="Psycare Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Human-Centered Care, 
              <br />Enhanced by Technology
            </p>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://www.instagram.com/visualthinking.pt/"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                    <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m17.5 6.51l.01-.011" />
                  </g>
                </svg>
              </Link>
              <Link
                href="https://pt.linkedin.com/company/visualthinking-bi"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Documentation", "API Reference", "Changelog"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contacts</h3>
            <ul className="space-y-3">
              <li>
                <Link href="tel:+351223750358" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  (+351) 223 750 358 <span className="block text-xs">Call to national fixed network</span>
                </Link>
              </li>
              <li>
                <Link href="mailto:info@visual-thinking.pt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  info@visual-thinking.pt
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Address</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://maps.app.goo.gl/1UDYVC9HC3uW2bhj9"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Avenida Manuel Violas, 476 - Sala 17 <br />
                  4410-137 São Félix da Marinha <br />
                  Vila Nova de Gaia
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
<div className="mt-12 pt-8 border-t border-border">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
      <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
        Privacy Policy
      </Link>
      <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
        Terms of Service
      </Link>
      <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
        Cookie Policy
      </Link>

      {/* Divider */}
      <div className="hidden sm:block w-px h-4 bg-black" />

      <Link
        href="https://www.visual-thinking.pt/"
        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Visual Thinking
      </Link>

      {/* Divider */}
      <div className="hidden sm:block w-px h-4 bg-black" />

      <Link
        href="https://www.code-wise.pt"
        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Designed by codewise
      </Link>
    </div>

    <p className="text-xs text-muted-foreground">
      © 2025 Psycare Studio — All rights reserved
    </p>
  </div>
</div>

      </div>
    </footer>
  )
}
