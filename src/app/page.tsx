import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CompanyLogos } from "@/components/company-logos"
import { ServicesSection } from "@/components/services-section"
import { FeatureCards } from "@/components/feature-cards"
import { CtaSection } from "@/components/cta-section"
import { TimelineSection } from "@/components/timeline-section"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CompanyLogos />
      <ServicesSection />
      <CtaSection />
      <TimelineSection />
      <FeatureCards />
      <ProcessSection />
      <PricingSection />
      <TestimonialSection />
      <StatsSection />
      <Footer />
    </main>
  )
}
