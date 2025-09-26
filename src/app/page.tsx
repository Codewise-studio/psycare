import { HeroSection } from "@/components/hero-section"

import { ServicesSection } from "@/components/services-section"
import { FeaturesGrid } from "@/components/features-grid"
import CtaSection from "@/components/cta-section";
import { TimelineSection } from "@/components/timeline-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { Footer } from "@/components/footer"
import Banner2 from "@/components/banner2"
import PsycareSection from "@/components/psycare-section"
import { Contacts } from "@/components/contacts"
import { Team } from "@/components/team"
import { Navbar } from "@/components/navbar"
import type { Star } from "lucide-react";
import { CTASectionMiddle } from "@/components/cta-sectionmiddle"


export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
        <p>The future of mental health care starts here
</p>
     
      <ServicesSection />
  {/* <CtaSection /> */}
      <Banner2 />
   
    
      <FeaturesGrid />
      <CTASectionMiddle />
      
       
      <Team/>
       <Contacts /> 
      <Footer />
    </main>
  )
}
