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
    desc: `Full truckload (FTL) coordination is at the core of what we do. Iron Routes Logistics works to connect shippers needing full truck capacity with qualified, compliant carriers ready to move their freight.

    Whether you need dry van, refrigerated, or specialized equipment, our team identifies the right capacity for your lane and coordinates every step — from carrier selection to delivery confirmation.`,
    features: ['Full truckload coordination', 'Dry van & specialized equipment', 'Lane-specific carrier matching', 'Delivery confirmation support'],
  },
  {
    id: 'brokerage',
    icon: Package,
    title: 'Freight Brokerage',
    desc: `As a licensed freight broker, Iron Routes Logistics acts as the bridge between shippers and carriers. We handle the communication, paperwork coordination, and logistics details so both sides can focus on their core operations.

    Our brokerage services help match freight capacity with demand efficiently, reducing empty miles and helping carriers stay productive.`,
    features: ['Licensed freight brokerage', 'Carrier-shipper matching', 'Load coordination & communication', 'Rate negotiation support'],
  },
  {
    id: 'dispatch',
    icon: Radio,
    title: 'Dispatch Support',
    desc: `Our dispatch support services help owner-operators and small fleets stay organized, communicate effectively, and keep loads moving. We handle the back-and-forth communication that takes drivers off the road.

    Iron Routes Logistics provides professional dispatch assistance to help carriers manage loads, communicate updates, and stay on schedule.`,
    features: ['Owner-operator dispatch support', 'Load communication management', 'Check-call coordination', 'Documentation assistance'],
  },
  {
    id: 'routes',
    icon: MapPin,
    title: 'Route Coordination',
    desc: `Efficient route coordination reduces transit time, minimizes costs, and ensures freight arrives on schedule. Iron Routes Logistics helps plan and coordinate shipping routes based on your freight type, timeline, and destination.

    We work to optimize routes to reduce friction and improve on-time performance for every shipment.`,
    features: ['Route planning & optimization', 'Transit time coordination', 'Multi-stop route management', 'Deadline-driven scheduling'],
  },
  {
    id: 'carriers',
    icon: Network,
    title: 'Carrier Network',
    desc: `Access to a reliable carrier network is what makes freight move. Iron Routes Logistics maintains relationships with vetted, compliant carriers across the country to ensure capacity is available when you need it.

    Our carrier network is built on trust, compliance, and performance — so shippers can count on professional execution.`,
    features: ['Vetted carrier relationships', 'Compliance-focused partnerships', 'National coverage', 'Capacity matching'],
  },
  {
    id: 'communication',
    icon: MessageSquare,
    title: 'Shipment Communication',
    desc: `Clear, consistent communication is the foundation of reliable freight logistics. Iron Routes Logistics keeps all parties informed — from pickup confirmation to delivery updates and final documentation.

    We believe proactive communication prevents problems before they start, and our team is committed to keeping shippers and carriers aligned throughout every shipment.`,
    features: ['Pickup & delivery confirmation', 'Real-time status updates', 'Exception management', 'Document coordination'],
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <section className="pt-28 pb-16 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-electric-400 text-xs font-bold tracking-widest uppercase block mb-4">What We Offer</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 max-w-2xl">
            Logistics Services Built for Reliability
          </h1>
          <p className="text-silver-300 text-lg max-w-2xl">
            From truckload freight to dispatch support, Iron Routes Logistics provides the services your supply chain depends on.
          </p>
        </div>
      </section>

      <section className="py-16 bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.id} id={s.id} className={`flex flex-col md:flex-row gap-10 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center">
                  <Icon size={28} className="text-electric-400" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-extrabold text-white mb-4">{s.title}</h2>
                  <div className="text-silver-300 leading-relaxed mb-6 whitespace-pre-line">{s.desc}</div>
                  <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-silver-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-400 shrink-0" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/quote" className="inline-flex items-center gap-2 text-electric-400 text-sm font-semibold hover:gap-3 transition-all">
                    Request This Service <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
