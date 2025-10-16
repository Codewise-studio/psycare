
import { FeaturesGrid } from "@/components/features-grid"
import { Footer } from "@/components/footer"
import Banner2 from "@/components/banner2"
import { ContactSection } from "@/components/contacts"
import { Team } from "@/components/team"
import { Navbar } from "@/components/navbar"
import {Thefyuture} from "@/components/Thefyuture"
import FunctionalitiesSection from "@/components/functionalities-section";
import AIPracticeSection from "@/components/ai-practice-section";
import { CaseStudiesSection } from "@/components/case-studies-section"
import { EnhancedHeroSection  } from "@/components/enhanced-hero-section"
import { EnhancedServicesSection } from "@/components/enhanced-services-section"  
import FocusCareSection from "@/components/focus-care-section"
import { TestimonialsMarqueeGrid } from "@/components/TestimonialsMarqueeGrid"

import { ScrollToTopButton } from "@/components/scrolltotop"



export default function HomePage() {
  return (
    <main className="min-h-screen relative">
  <Navbar />

  {/* Colocando o id fora do componente */}
  <section id="EnhancedHeroSection">
    <EnhancedHeroSection />
  </section>

  <section id="focusCare" className="min-h-screen">
    <FocusCareSection />
  </section>

  <section id="whychoosepsycare" className="min-h-screen">
    <EnhancedServicesSection />
  </section>

{/* <section id="aiPractice">
    <AIPracticeSection />
  </section> */}
   <section id="theFuture">
    <Thefyuture />
  </section>

   <section id="features" className="min-h-screen">
    <FeaturesGrid />
  </section>



  <section id="banner2 ">
    <Banner2 />
  </section>

  <section id="functionalities" className="min-h-screen">
    <FunctionalitiesSection />
  </section>

  <section id="caseStudies" className="min-h-screen">
    <CaseStudiesSection />
  </section>


  <section id="team" className="min-h-screen">
    <Team />
  </section>

  <section id="testimonials" className="min-h-screen">
     <TestimonialsMarqueeGrid /> 
  </section>
  
  <section id="contact" className="min-h-screen">
    <ContactSection />
  </section>

  <section id="footer" className="min-h-screen">
    <Footer />
  </section>

  <ScrollToTopButton />
</main>
  )
}




  
 