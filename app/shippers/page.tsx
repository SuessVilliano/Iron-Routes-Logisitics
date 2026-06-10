import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { Package, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Shipper Solutions | Iron Routes Logistics LLC',
  description: 'Iron Routes Logistics provides professional freight coordination for shippers. Get matched with reliable carriers and keep your freight moving.',
}

const BENEFITS = [
  'Fast response to all freight requests',
  'Matched with vetted, compliant carriers',
  'Consistent communication throughout transit',
  'Flexible services for all freight types',
  'Professional coordination from pickup to delivery',
]

export default function ShippersPage() {
  return (
    <main>
      <Header />
      <section className="pt-28 pb-16 bg-white dark:bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center">
              <Package size={22} className="text-electric-500 dark:text-electric-400" aria-hidden="true" />
            </div>
            <span className="text-electric-500 dark:text-electric-400 text-xs font-bold tracking-widest uppercase">For Shippers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 max-w-2xl">
            Shipper Solutions That Move Freight
          </h1>
          <p className="text-slate-600 dark:text-silver-300 text-lg max-w-2xl">
            Iron Routes Logistics connects shippers with reliable capacity and professional coordination. Send your details and our team responds quickly.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">How It Works for Shippers</h2>
              <ol className="space-y-6">
                {[
                  { num: '1', t: 'Submit Your Load Details', d: 'Tell us where your freight is going, what it is, and your timeline.' },
                  { num: '2', t: 'Get Matched With Capacity', d: 'We identify qualified carriers from our network ready to move your freight.' },
                  { num: '3', t: 'We Coordinate Pickup', d: 'Iron Routes handles carrier communication and confirms all pickup details.' },
                  { num: '4', t: 'Stay Informed Through Delivery', d: 'We keep you updated throughout transit and confirm delivery completion.' },
                ].map(s => (
                  <li key={s.num} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-electric-500/10 border border-electric-500/30 flex items-center justify-center text-electric-500 dark:text-electric-400 font-bold text-sm">
                      {s.num}
                    </div>
                    <div>
                      <p className="text-slate-900 dark:text-white font-semibold mb-1">{s.t}</p>
                      <p className="text-slate-500 dark:text-silver-400 text-sm">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">Why Shippers Choose Iron Routes</h2>
              <ul className="space-y-3">
                {BENEFITS.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-electric-500 dark:text-electric-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-slate-700 dark:text-silver-300 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-navy-950" id="shipper-quote">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">Request a Freight Quote</h2>
            <p className="text-slate-500 dark:text-silver-400">Fill out the form and our team will respond quickly.</p>
          </div>
          <div className="bg-gray-50 dark:bg-navy-800/40 rounded-2xl border border-gray-200 dark:border-electric-500/15 p-6 sm:p-8 shadow-sm dark:shadow-none">
            <ContactForm defaultRole="Shipper" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
