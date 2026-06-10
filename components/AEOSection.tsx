import { HelpCircle } from 'lucide-react'

const QA = [
  {
    q: 'What does Iron Routes Logistics do?',
    a: 'Iron Routes Logistics LLC provides freight coordination, trucking logistics support, carrier matching, and shipper solutions. We help move freight efficiently with professional communication and reliable coordination across the United States.',
  },
  {
    q: 'How do I request a freight quote?',
    a: 'Fill out the quote form on our website with your pickup location, delivery location, freight type, and preferred timeline. Our team responds quickly to all requests.',
  },
  {
    q: 'Does Iron Routes work with carriers?',
    a: 'Yes. We work with carriers and owner-operators to match them with consistent freight opportunities. Contact our dispatch team to connect with available loads.',
  },
  {
    q: 'What information is needed for a quote?',
    a: 'Pickup location, delivery location, freight type, estimated weight or dimensions, and your preferred delivery timeline. The more detail, the faster we can respond.',
  },
  {
    q: 'How quickly can someone contact me?',
    a: 'We aim to respond to all freight requests within 1 business day, and often much sooner during regular business hours. You can also reach us at +1 (470) 316-4312.',
  },
]

export default function AEOSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-navy-900/40" aria-labelledby="aeo-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-electric-500 dark:text-electric-400 text-xs font-bold tracking-widest uppercase mb-3 block">Quick Answers</span>
          <h2 id="aeo-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Freight Questions, Answered Directly
          </h2>
        </div>
        <div className="grid gap-4">
          {QA.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white dark:bg-navy-800/60 border border-gray-200 dark:border-electric-500/10 shadow-sm dark:shadow-none"
              itemScope
              itemType="https://schema.org/Question"
            >
              <div className="flex gap-3 items-start">
                <HelpCircle size={18} className="text-electric-500 dark:text-electric-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-slate-900 dark:text-white font-semibold mb-2" itemProp="name">{item.q}</p>
                  <p
                    className="text-slate-500 dark:text-silver-400 text-sm leading-relaxed"
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <span itemProp="text">{item.a}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
