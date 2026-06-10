'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'What services does Iron Routes Logistics provide?',
    a: 'Iron Routes Logistics provides truckload freight coordination, freight brokerage, dispatch support, route coordination, carrier network services, and shipment communication. We support both shippers and carriers throughout the freight process.',
  },
  {
    q: 'How do I request a freight quote?',
    a: 'Fill out our online quote form with your pickup location, delivery location, freight type, weight or dimensions, and preferred timeline. Our team reviews requests quickly and will follow up to confirm details.',
  },
  {
    q: 'Do you work with carriers and owner-operators?',
    a: 'Yes. Iron Routes Logistics actively works with qualified carriers and owner-operators. We help match them with available freight and provide professional communication throughout each load.',
  },
  {
    q: 'What shipment details should I provide?',
    a: 'Please include: pickup city/state, delivery city/state, freight type (dry van, flatbed, etc.), approximate weight or dimensions, commodity, and your desired pickup/delivery dates. The more detail you provide, the faster we can respond.',
  },
  {
    q: 'Can I contact someone directly?',
    a: 'Yes. Use our contact form or call our dispatch team directly. We prioritize fast responses to all freight inquiries.',
  },
  {
    q: 'Does Iron Routes provide freight coordination for businesses?',
    a: 'Yes. We support businesses of all sizes — from single-load shippers to companies moving regular freight volumes. Our team adapts to your needs.',
  },
  {
    q: 'How fast will someone respond?',
    a: 'We aim to respond to all requests within 1 business day. During active business hours, response times are often much faster.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-navy-900/50" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-electric-400 text-xs font-bold tracking-widest uppercase mb-3 block">FAQ</span>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-colors ${
                open === i ? 'border-electric-500/40 bg-navy-800/80' : 'border-electric-500/10 bg-navy-800/40 hover:border-electric-500/25'
              }`}
              itemScope
              itemType="https://schema.org/Question"
              itemProp="mainEntity"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left gap-4"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-white font-semibold text-sm" itemProp="name">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-electric-400"
                >
                  <ChevronDown size={18} aria-hidden="true" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <p className="px-5 pb-5 text-silver-400 text-sm leading-relaxed border-t border-electric-500/10 pt-3" itemProp="text">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
