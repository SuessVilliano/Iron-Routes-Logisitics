import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { Truck, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Carrier Opportunities | Iron Routes Logistics LLC',
  description: 'Owner-operators and carriers — connect with Iron Routes Logistics for consistent freight opportunities and professional dispatch support.',
}

const OFFERS = [
  'Consistent freight opportunities across key lanes',
  'Professional dispatch communication support',
  'Clear load details and delivery expectations',
  'Reliable pay coordination and documentation',
  'Support from a team that respects carrier time',
]

export default function CarriersPage() {
  return (
    <main>
      <Header />
      <section className="pt-28 pb-16 bg-white dark:bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center">
              <Truck size={22} className="text-sky-400" aria-hidden="true" />
            </div>
            <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">For Carriers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 max-w-2xl">
            Carrier Opportunities With Iron Routes
          </h1>
          <p className="text-slate-600 dark:text-silver-300 text-lg max-w-2xl">
            Looking for consistent loads? Connect with Iron Routes Logistics and access freight opportunities with professional communication and reliable coordination.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">What Iron Routes Offers Carriers</h2>
              <ul className="space-y-3">
                {OFFERS.map(o => (
                  <li key={o} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-sky-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-slate-700 dark:text-silver-300 text-sm">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">What We Look For</h2>
              <ul className="space-y-3">
                {[
                  'Active USDOT authority in good standing',
                  'Valid insurance on file',
                  'Professional communication and reliability',
                  'Equipment that matches your lanes and freight',
                  'Willingness to work with a professional team',
                ].map(o => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" aria-hidden="true" />
                    <span className="text-slate-500 dark:text-silver-400 text-sm">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-navy-950" id="carrier-connect">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">Connect With Our Team</h2>
            <p className="text-slate-500 dark:text-silver-400">Tell us about your operation and we&apos;ll follow up quickly.</p>
          </div>
          <div className="bg-gray-50 dark:bg-navy-800/40 rounded-2xl border border-gray-200 dark:border-sky-400/15 p-6 sm:p-8 shadow-sm dark:shadow-none">
            <ContactForm defaultRole="Carrier" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
