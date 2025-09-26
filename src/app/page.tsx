import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturesGrid } from "@/components/features-grid"
import { Footer } from "@/components/footer"
import Banner2 from "@/components/banner2"
import { Contacts } from "@/components/contacts"
import { Team } from "@/components/team"
import { Navbar } from "@/components/navbar"
import { CTASectionMiddle } from "@/components/cta-sectionmiddle"
import {Thefyuture} from "@/components/Thefyuture"
import FunctionalitiesSection from "@/components/functionalities-section";
import AIPracticeSection from "@/components/ai-practice-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Thefyuture />
      <AIPracticeSection />
      <ServicesSection />
      <Banner2 />
      <FunctionalitiesSection />
      <FeaturesGrid />
      <CTASectionMiddle />
      <Team />
      <Contacts />
      <Footer />
    </main>
  )
}
