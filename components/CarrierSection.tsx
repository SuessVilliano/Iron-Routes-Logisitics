import Link from 'next/link'
import { ArrowRight, Truck } from 'lucide-react'

export default function CarrierSection() {
  return (
    <section
      className="py-20 bg-white dark:bg-navy-950"
      aria-labelledby="carrier-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center mx-auto mb-6">
            <Truck size={28} className="text-sky-400" aria-hidden="true" />
          </div>
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-3 block">For Carriers</span>
          <h2 id="carrier-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Looking for Consistent Loads?
          </h2>
          <p className="text-slate-600 dark:text-silver-300 text-lg mb-8">
            Connect with Iron Routes Logistics and access freight opportunities with professional
            communication, reliable load coordination, and a team that supports your growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/carriers"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sky-400 text-navy-950 font-bold hover:bg-sky-300 transition-all shadow-lg shadow-sky-400/25"
            >
              Join Our Network <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-sky-400/40 text-sky-400 font-semibold hover:bg-sky-400/10 transition-all"
            >
              Contact Dispatch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
