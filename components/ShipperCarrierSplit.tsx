import Link from 'next/link'
import { ArrowRight, Package, Truck } from 'lucide-react'

export default function ShipperCarrierSplit() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-navy-950 border-y border-gray-200 dark:border-electric-500/10" aria-label="Shippers and Carriers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Shippers */}
          <div className="p-8 rounded-2xl bg-white dark:bg-navy-800/60 border border-gray-200 dark:border-electric-500/15 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center mb-5">
              <Package size={24} className="text-electric-500 dark:text-electric-400" aria-hidden="true" />
            </div>
            <span className="text-electric-500 dark:text-electric-400 text-xs font-bold tracking-widest uppercase mb-2 block">For Shippers</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
              Need Freight Moved?
            </h2>
            <p className="text-slate-600 dark:text-silver-300 text-sm leading-relaxed mb-6 flex-1">
              Iron Routes Logistics connects shippers with reliable carriers and handles all freight coordination — from pickup to delivery confirmation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-electric-500 text-white font-bold text-sm hover:bg-electric-400 transition-all shadow-md shadow-electric-500/20"
              >
                Get a Quote <ArrowRight size={14} />
              </Link>
              <Link
                href="/shippers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-electric-500/40 text-electric-500 dark:text-electric-400 font-semibold text-sm hover:bg-electric-500/10 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Carriers */}
          <div className="p-8 rounded-2xl bg-white dark:bg-navy-800/60 border border-gray-200 dark:border-sky-400/15 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center mb-5">
              <Truck size={24} className="text-sky-400" aria-hidden="true" />
            </div>
            <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-2 block">For Carriers</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
              Looking for Consistent Loads?
            </h2>
            <p className="text-slate-600 dark:text-silver-300 text-sm leading-relaxed mb-6 flex-1">
              Connect with Iron Routes Logistics for access to freight opportunities, professional dispatch communication, and a team that supports your operation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/carriers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-400 text-navy-950 font-bold text-sm hover:bg-sky-300 transition-all shadow-md shadow-sky-400/20"
              >
                Join Our Network <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-sky-400/40 text-sky-400 font-semibold text-sm hover:bg-sky-400/10 transition-all"
              >
                Contact Dispatch
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
