
import { FeaturesGrid } from "@/components/features-grid"
import { Footer } from "@/components/footer"
import Banner2 from "@/components/banner2"
import { ContactSection } from "@/components/contacts"
import { Team } from "@/components/team"
import { Navbar } from "@/components/navbar"
import { CTASectionMiddle } from "@/components/cta-sectionmiddle"
import {Thefyuture} from "@/components/Thefyuture"
import FunctionalitiesSection from "@/components/functionalities-section";
import AIPracticeSection from "@/components/ai-practice-section";
import { GradientBackground } from "@/components/ui/gradient-background"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { EnhancedHeroSection  } from "@/components/enhanced-hero-section"
import { EnhancedServicesSection } from "@/components/enhanced-services-section"
  
import FocusCareSection from "@/components/focus-care-section"


export default function HomePage() {
  return (
    <main className="min-h-screen ">
        {/* <GradientBackground /> */}
      <Navbar />
      <EnhancedHeroSection />
      <FocusCareSection />
      <EnhancedServicesSection />
      <AIPracticeSection />
      <Thefyuture />
      
      <Banner2 />
      <FunctionalitiesSection />
      <FeaturesGrid />
      
      <CaseStudiesSection />
      <Team />
      <ContactSection />
      <Footer />
    </main>
  )
}
