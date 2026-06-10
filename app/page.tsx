import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TrustStrip from '@/components/TrustStrip'
import ServicesGrid from '@/components/ServicesGrid'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProcessSection from '@/components/ProcessSection'
import ShipperSection from '@/components/ShipperSection'
import CarrierSection from '@/components/CarrierSection'
import AEOSection from '@/components/AEOSection'
import ContactForm from '@/components/ContactForm'
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
      <section id="services" aria-label="Services overview">
        <ServicesGrid />
      </section>
      <WhyChooseUs />
      <ProcessSection />
      <ShipperSection />
      <CarrierSection />
      <AEOSection />
      <section id="quote" className="py-20 bg-navy-950" aria-labelledby="quote-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-electric-400 text-xs font-bold tracking-widest uppercase mb-3 block">Request a Quote</span>
            <h2 id="quote-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Get Your Freight Moving
            </h2>
            <p className="text-silver-400 max-w-xl mx-auto">
              Fill out the form below and our team will respond quickly with availability and pricing.
            </p>
          </div>
          <div className="bg-navy-800/40 rounded-2xl border border-electric-500/15 p-6 sm:p-8">
            {/* GHL FORM WEBHOOK: Replace /api/contact in ContactForm with your GHL webhook URL */}
            <ContactForm />
          </div>
        </div>
      </section>
      <FAQSection />
      <FinalCTA />
      <Footer />
      <ExitIntentPopup />
      <FloatingCTA />
      {/* GHL CHAT WIDGET SCRIPT GOES HERE */}
    </main>
  )
}
