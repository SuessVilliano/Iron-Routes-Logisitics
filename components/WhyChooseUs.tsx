'use client'
import { motion } from 'framer-motion'
import { MessageSquare, Briefcase, Shield, Clock, TrendingUp } from 'lucide-react'

const REASONS = [
  { icon: MessageSquare, title: 'Reliable Communication', desc: 'We keep shippers and carriers informed at every stage of the freight process — no guessing, no gaps.' },
  { icon: Briefcase, title: 'Professional Coordination', desc: 'Experienced team managing every detail from load matching through final delivery confirmation.' },
  { icon: Shield, title: 'Safety-Minded Partners', desc: 'We prioritize compliance and work with vetted carriers who meet safety and regulatory standards.' },
  { icon: Clock, title: 'Fast Quote Response', desc: 'We respond quickly to all freight requests so you can keep your supply chain moving without delays.' },
  { icon: TrendingUp, title: 'Scalable Logistics Support', desc: 'Whether you move one load or one thousand, our support scales with your business needs.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-navy-900/60" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-electric-500 dark:text-electric-400 text-xs font-bold tracking-widest uppercase mb-3 block">Our Advantage</span>
          <h2 id="why-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Why Choose Iron Routes Logistics
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 p-5 rounded-xl bg-white dark:bg-navy-800/40 border border-gray-200 dark:border-electric-500/10 hover:border-electric-500/30 transition-colors shadow-sm dark:shadow-none"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center mt-0.5">
                  <Icon size={18} className="text-electric-500 dark:text-electric-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold mb-1">{r.title}</h3>
                  <p className="text-slate-500 dark:text-silver-400 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
