import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import LogosSection from './components/sections/LogosSection'
import ServicesSection from './components/sections/ServicesSection'
import CTABlock from './components/sections/CTABlock'
import CaseStudiesSection from './components/sections/CaseStudiesSection'
import ProcessSection from './components/sections/ProcessSection'
import TeamSection from './components/sections/TeamSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <div className="bg-white min-h-screen font-grotesk">
      <div className="flex flex-col gap-[70px] items-start w-[1440px] mx-auto pt-[60px]">
        <Navbar />
        <Hero />
        <LogosSection />
      </div>
      <div className="w-[1440px] mx-auto">
        <ServicesSection />
        <CTABlock />
        <CaseStudiesSection />
        <ProcessSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
