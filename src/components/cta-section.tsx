export function CtaSection() {
  return (
    <section className="py-32 px-4 bg-gradient-to-r from-primary via-primary to-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/20"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full border border-white/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
          Being stable is great. <br className="hidden md:block" />
          Progress is better.
        </h2>
      </div>
    </section>
  )
}
