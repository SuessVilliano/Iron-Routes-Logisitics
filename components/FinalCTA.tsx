import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-navy-900 to-navy-950 relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(10,132,255,0.1),transparent)]" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 id="final-cta-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Ready to Move Freight?
        </h2>
        <p className="text-silver-300 text-lg mb-8">
          Contact Iron Routes Logistics today for fast, professional freight coordination and logistics support.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-electric-500 text-white font-bold hover:bg-electric-400 transition-all shadow-lg shadow-electric-500/30"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-electric-500/40 text-electric-400 font-semibold hover:bg-electric-500/10 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
