import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'
import { Shield, Award, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'About Iron Routes Logistics LLC | Trucking & Freight Logistics',
  description: 'Learn about Iron Routes Logistics LLC — our mission, credentials, and commitment to professional freight coordination.',
}

const VALUES = [
  'Professional integrity in every interaction',
  'Transparent communication with shippers and carriers',
  'Safety-first approach to carrier partnerships',
  'Commitment to timely freight delivery',
  'Scalable support that grows with your business',
]

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="min-h-[40vh] pt-24 pb-16 bg-navy-950 relative overflow-hidden" aria-labelledby="about-heading">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_50%,rgba(10,132,255,0.08),transparent)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <span className="text-electric-400 text-xs font-bold tracking-widest uppercase block mb-4">Who We Are</span>
          <h1 id="about-heading" className="text-4xl sm:text-5xl font-extrabold text-white mb-6 max-w-2xl">
            About Iron Routes Logistics LLC
          </h1>
          <p className="text-silver-300 text-lg max-w-2xl">
            Iron Routes Logistics LLC is a professional freight coordination and logistics company dedicated to helping shippers and carriers move freight reliably across the United States.
          </p>
        </div>
      </section>

      <section className="py-16 bg-navy-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-4">Our Mission</h2>
              <p className="text-silver-300 leading-relaxed mb-4">
                To provide reliable, professional freight coordination and logistics support that helps shippers and carriers achieve their goals. We believe every shipment deserves clear communication, careful coordination, and dependable follow-through.
              </p>
              <p className="text-silver-400 leading-relaxed">
                Iron Routes Logistics LLC was built on the principle that logistics works best when every party — shipper, carrier, and broker — has a partner they can trust. That&apos;s what we set out to be.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-4">Our Values</h2>
              <ul className="space-y-3">
                {VALUES.map(v => (
                  <li key={v} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-electric-400 mt-1 shrink-0" aria-hidden="true" />
                    <span className="text-silver-300 text-sm">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white mb-8">Federal Credentials</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-navy-800/60 border border-electric-500/20">
              <Shield size={28} className="text-electric-400 mb-4" aria-hidden="true" />
              <p className="text-silver-400 text-xs font-bold tracking-widest uppercase mb-1">USDOT Number</p>
              <p className="text-white text-2xl font-extrabold">#9579447</p>
            </div>
            <div className="p-6 rounded-2xl bg-navy-800/60 border border-electric-500/20">
              <Award size={28} className="text-electric-400 mb-4" aria-hidden="true" />
              <p className="text-silver-400 text-xs font-bold tracking-widest uppercase mb-1">MC Number</p>
              <p className="text-white text-2xl font-extrabold">#5551397</p>
            </div>
          </div>
          <p className="mt-4 text-silver-400 text-xs">
            * Please verify current authority status at{' '}
            <a href="https://safer.fmcsa.dot.gov" target="_blank" rel="noopener noreferrer" className="text-electric-400 hover:underline">fmcsa.dot.gov</a>.
            Numbers provided by client — confirm directly before relying on this information.
          </p>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
