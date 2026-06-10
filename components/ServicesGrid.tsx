'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Truck, Package, Radio, MapPin, Network, MessageSquare, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Truck,
    title: 'Truckload Freight',
    desc: 'Full truckload coordination connecting shippers with qualified carriers for reliable point-to-point freight movement.',
    href: '/services#truckload',
  },
  {
    icon: Package,
    title: 'Freight Brokerage',
    desc: 'Acting as the bridge between shippers and carriers to match freight capacity with demand efficiently.',
    href: '/services#brokerage',
  },
  {
    icon: Radio,
    title: 'Dispatch Support',
    desc: 'Professional dispatch assistance to help carriers stay on route, communicate updates, and manage loads effectively.',
    href: '/services#dispatch',
  },
  {
    icon: MapPin,
    title: 'Route Coordination',
    desc: 'Strategic route planning and coordination to optimize delivery timelines and reduce transportation friction.',
    href: '/services#routes',
  },
  {
    icon: Network,
    title: 'Carrier Network',
    desc: 'Access to a network of vetted, compliant carriers ready to move freight across the country.',
    href: '/services#carriers',
  },
  {
    icon: MessageSquare,
    title: 'Shipment Communication',
    desc: 'Keeping shippers informed at every stage — from pickup confirmation to delivery updates and documentation.',
    href: '/services#communication',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white dark:bg-navy-950" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-electric-500 dark:text-electric-400 text-xs font-bold tracking-widest uppercase mb-3">
            What We Do
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Logistics Services Built for Reliability
          </h2>
          <p className="text-slate-500 dark:text-silver-400 max-w-2xl mx-auto">
            From truckload freight to dispatch support, Iron Routes Logistics provides the services
            your supply chain depends on.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map(s => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                variants={item}
                className="group p-6 rounded-2xl bg-gray-50 dark:bg-navy-800/60 border border-gray-200 dark:border-electric-500/15 hover:border-electric-500/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center mb-4 group-hover:bg-electric-500/20 transition-colors">
                  <Icon size={22} className="text-electric-500 dark:text-electric-400" aria-hidden="true" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 dark:text-silver-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1 text-electric-500 dark:text-electric-400 text-sm font-medium hover:gap-2 transition-all"
                  aria-label={`Learn more about ${s.title}`}
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-electric-500/40 text-electric-500 dark:text-electric-400 font-semibold hover:bg-electric-500/10 transition-all"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
