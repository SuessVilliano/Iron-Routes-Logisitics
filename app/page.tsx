import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TrustStrip from '@/components/TrustStrip'
import ServicesGrid from '@/components/ServicesGrid'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProcessSection from '@/components/ProcessSection'
import ShipperCarrierSplit from '@/components/ShipperCarrierSplit'
import FAQSection from '@/components/FAQSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import FloatingCTA from '@/components/FloatingCTA'

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustStrip />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSection />
      <ShipperCarrierSplit />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <ExitIntentPopup />
      <FloatingCTA />
      {/* GHL CHAT WIDGET SCRIPT GOES HERE */}
    </main>
  )
}
