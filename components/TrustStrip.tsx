import { Truck, Users, Package, Zap, MessageSquare } from 'lucide-react'

const ITEMS = [
  { icon: Truck, label: 'Freight Coordination' },
  { icon: Users, label: 'Carrier Support' },
  { icon: Package, label: 'Shipper Solutions' },
  { icon: Zap, label: 'Fast Response' },
  { icon: MessageSquare, label: 'Reliable Communication' },
]

export default function TrustStrip() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div
      className="py-4 overflow-hidden border-y border-gray-200 dark:border-electric-500/15 bg-gray-50 dark:bg-navy-900/60"
      aria-label="Trust indicators"
    >
      <div className="flex marquee-inner whitespace-nowrap">
        {doubled.map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={i}
              className="inline-flex items-center gap-3 mx-8 text-sm text-slate-600 dark:text-silver-300 font-medium"
            >
              <Icon size={16} className="text-electric-500 dark:text-electric-400 shrink-0" aria-hidden="true" />
              <span>{item.label}</span>
              <span className="text-electric-500/40 ml-6">◆</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
