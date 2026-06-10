'use client'
import { motion } from 'framer-motion'
import { ClipboardList, Truck, MapPin, CheckCircle } from 'lucide-react'

const STEPS = [
  { num: '01', icon: ClipboardList, title: 'Submit Load Details', desc: 'Provide your pickup/delivery locations, freight type, weight, and timeline.' },
  { num: '02', icon: Truck, title: 'Get Matched With Capacity', desc: 'We identify qualified carriers from our network ready to move your freight.' },
  { num: '03', icon: MapPin, title: 'Coordinate Pickup', desc: 'Our team handles carrier communication and confirms all pickup details.' },
  { num: '04', icon: CheckCircle, title: 'Track Through Delivery', desc: 'We maintain communication throughout transit and confirm delivery completion.' },
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white dark:bg-navy-950" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-electric-500 dark:text-electric-400 text-xs font-bold tracking-widest uppercase mb-3 block">Simple Process</span>
          <h2 id="process-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-slate-500 dark:text-silver-400 max-w-xl mx-auto">Four straightforward steps from load request to delivered freight.</p>
        </motion.div>

        {/* Desktop: horizontal */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-electric-500/30 via-electric-400/60 to-sky-400/30" />

          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="relative w-20 h-20 rounded-2xl bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-electric-500/30 flex flex-col items-center justify-center mb-4 shadow-md dark:shadow-electric-500/10 z-10">
                  <span className="text-electric-500 dark:text-electric-400 font-bold font-mono text-xs mb-1">{step.num}</span>
                  <Icon size={22} className="text-slate-700 dark:text-white" aria-hidden="true" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-slate-500 dark:text-silver-400 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-electric-500/30 flex flex-col items-center justify-center">
                  <span className="text-electric-500 dark:text-electric-400 font-bold font-mono text-[10px]">{step.num}</span>
                  <Icon size={18} className="text-slate-700 dark:text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold mb-1">{step.title}</h3>
                  <p className="text-slate-500 dark:text-silver-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
