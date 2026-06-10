import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Request a Freight Quote | Iron Routes Logistics LLC',
  description: 'Request a freight quote from Iron Routes Logistics LLC. Fast response, professional coordination, reliable carriers.',
}

export default function QuotePage() {
  return (
    <main>
      <Header />
      <section className="min-h-screen pt-28 pb-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-electric-400 text-xs font-bold tracking-widest uppercase block mb-4">Get Started</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Request a Freight Quote
            </h1>
            <p className="text-silver-300 text-lg max-w-xl mx-auto">
              Fill out the form below and our team will respond quickly with availability and next steps.
            </p>
          </div>
          <div className="bg-navy-800/50 rounded-2xl border border-electric-500/20 p-6 sm:p-10">
            {/* GHL FORM WEBHOOK: Replace /api/contact in ContactForm with your GHL webhook URL */}
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
