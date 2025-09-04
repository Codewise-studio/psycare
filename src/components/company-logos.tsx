export function CompanyLogos() {
  const logos = [
    { name: "LOGOIPSUM", width: 120 },
    { name: "Logoipsum", width: 100 },
    { name: "Logoipsum", width: 100 },
    { name: "LOGO", width: 80 },
    { name: "logo", width: 80 },
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-12">Join just like the next companies out there</p>

        <div className="flex items-center justify-center space-x-12 md:space-x-16 opacity-60">
          {logos.map((logo, index) => (
            <div key={index} className="text-muted-foreground font-medium" style={{ width: logo.width }}>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
