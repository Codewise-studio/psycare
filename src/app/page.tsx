
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
import { ScienceValidationSection } from "@/components/science-validation-section"

import { ScrollToTopButton } from "@/components/scrolltotop"



export default function HomePage() {
  return (
    <main className="min-h-screen relative">
  <Navbar />

  {/* Colocando o id fora do componente */}
  <section id="EnhancedHeroSection">
    <EnhancedHeroSection />
  </section>

  <section id="focusCare">
    <FocusCareSection />
  </section>

  <section id="about">
    <EnhancedServicesSection />
  </section>

{/* <section id="aiPractice">
    <AIPracticeSection />
  </section> */}
   <section id="theFuture">
    <Thefyuture />
  </section>

   <section id="product">
    <FeaturesGrid />
  </section>



  <section id="banner2">
    <Banner2 />
  </section>

  <section id="privacy-security">
    <FunctionalitiesSection />
  </section>

  <section id="science-validation">
    <ScienceValidationSection />
  </section>

  <section id="caseStudies">
    <CaseStudiesSection />
  </section>


  <section id="team">
    <Team />
  </section>

    <section id="testimonials">
     <TestimonialsMarqueeGrid /> 
  </section>
  
  <section id="contact">
    <ContactSection />
  </section>

  <section id="footer">
    <Footer />
  </section>

  <ScrollToTopButton />
</main>
  )
}




  
 