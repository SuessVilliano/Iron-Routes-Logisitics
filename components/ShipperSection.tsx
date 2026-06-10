import Link from 'next/link'
import { ArrowRight, Package } from 'lucide-react'

export default function ShipperSection() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-100 to-white dark:from-navy-800 dark:to-navy-900 border-y border-gray-200 dark:border-electric-500/10"
      aria-labelledby="shipper-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center mx-auto mb-6">
            <Package size={28} className="text-electric-500 dark:text-electric-400" aria-hidden="true" />
          </div>
          <span className="text-electric-500 dark:text-electric-400 text-xs font-bold tracking-widest uppercase mb-3 block">For Shippers</span>
          <h2 id="shipper-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Need Freight Moved?
          </h2>
          <p className="text-slate-600 dark:text-silver-300 text-lg mb-8">
            Send us your shipment details and our team will respond quickly. Iron Routes Logistics
            connects shippers with reliable capacity and professional coordination.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-electric-500 text-white font-bold hover:bg-electric-400 transition-all shadow-lg shadow-electric-500/30"
            >
              Get a Quote Now <ArrowRight size={16} />
            </Link>
            <Link
              href="/shippers"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-electric-500/40 text-electric-500 dark:text-electric-400 font-semibold hover:bg-electric-500/10 transition-all"
            >
              Shipper Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
