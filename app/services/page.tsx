import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'
import Link from 'next/link'
import { Truck, Package, Radio, MapPin, Network, MessageSquare, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Logistics Services | Iron Routes Logistics LLC',
  description: 'Truckload freight, freight brokerage, dispatch support, route coordination, and carrier network services from Iron Routes Logistics LLC.',
}

const SERVICES = [
  {
    id: 'truckload',
    icon: Truck,
    title: 'Truckload Freight',
    desc: 'Full truckload (FTL) coordination connecting shippers with qualified, compliant carriers. We handle carrier selection, lane matching, and delivery confirmation so you can focus on your business.',
    features: ['Full truckload coordination', 'Dry van & specialized equipment', 'Lane-specific carrier matching', 'Delivery confirmation support'],
  },
  {
    id: 'brokerage',
    icon: Package,
    title: 'Freight Brokerage',
    desc: 'As a licensed freight broker, Iron Routes Logistics bridges shippers and carriers — managing communication, paperwork coordination, and logistics details so both sides can focus on core operations.',
    features: ['Licensed freight brokerage', 'Carrier-shipper matching', 'Load coordination & communication', 'Rate negotiation support'],
  },
  {
    id: 'dispatch',
    icon: Radio,
    title: 'Dispatch Support',
    desc: 'Professional dispatch assistance to help owner-operators and small fleets manage loads, communicate updates, and stay on schedule — keeping drivers productive and off the phone.',
    features: ['Owner-operator dispatch support', 'Load communication management', 'Check-call coordination', 'Documentation assistance'],
  },
  {
    id: 'routes',
    icon: MapPin,
    title: 'Route Coordination',
    desc: 'Strategic route planning to reduce transit time, minimize costs, and keep freight on schedule. We optimize based on freight type, timeline, and destination.',
    features: ['Route planning & optimization', 'Transit time coordination', 'Multi-stop route management', 'Deadline-driven scheduling'],
  },
  {
    id: 'carriers',
    icon: Network,
    title: 'Carrier Network',
    desc: 'Access to vetted, compliant carriers across the country. Our network is built on trust, compliance, and performance — so shippers can count on professional execution.',
    features: ['Vetted carrier relationships', 'Compliance-focused partnerships', 'National coverage', 'Capacity matching'],
  },
  {
    id: 'communication',
    icon: MessageSquare,
    title: 'Shipment Communication',
    desc: 'Clear, proactive communication from pickup confirmation through final delivery. We keep all parties aligned so problems get caught before they become delays.',
    features: ['Pickup & delivery confirmation', 'Real-time status updates', 'Exception management', 'Document coordination'],
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <section className="pt-28 pb-16 bg-white dark:bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-electric-500 dark:text-electric-400 text-xs font-bold tracking-widest uppercase block mb-4">What We Offer</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 max-w-2xl">
            Logistics Services Built for Reliability
          </h1>
          <p className="text-slate-600 dark:text-silver-300 text-lg max-w-2xl">
            From truckload freight to dispatch support, Iron Routes Logistics provides the services your supply chain depends on.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.id}
                  id={s.id}
                  className="p-6 rounded-2xl bg-white dark:bg-navy-800/60 border border-gray-200 dark:border-electric-500/15 hover:border-electric-500/40 transition-colors shadow-sm dark:shadow-none flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-electric-500 dark:text-electric-400" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">{s.title}</h2>
                  <p className="text-slate-600 dark:text-silver-300 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-500 dark:text-silver-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-500 dark:bg-electric-400 shrink-0" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/quote" className="inline-flex items-center gap-1.5 text-electric-500 dark:text-electric-400 text-sm font-semibold hover:gap-2.5 transition-all">
                    Request This Service <ArrowRight size={13} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
