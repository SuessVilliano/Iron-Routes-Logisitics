import Link from 'next/link'
import { Shield, Award } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-electric-500/10 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="36" height="36" rx="6" fill="#0a84ff" fillOpacity="0.15" stroke="#0a84ff" strokeWidth="1.5"/>
                <path d="M6 18H30" stroke="#0a84ff" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="28" cy="18" r="4" fill="#00e5ff"/>
                <path d="M8 12L14 18L8 24" stroke="#38b6ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="leading-tight">
                <span className="block font-extrabold text-xs tracking-widest text-white">IRON ROUTES</span>
                <span className="block text-[9px] tracking-[0.2em] text-electric-400 font-medium">LOGISTICS LLC</span>
              </div>
            </div>
            <p className="text-silver-400 text-xs leading-relaxed mb-4">
              Reliable freight coordination and logistics support for shippers and carriers across the United States.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-navy-800 border border-electric-500/15 text-xs text-silver-400">
                <Shield size={10} className="text-electric-400" /> USDOT #9579447
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-navy-800 border border-electric-500/15 text-xs text-silver-400">
                <Award size={10} className="text-electric-400" /> MC #5551397
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              {['Truckload Freight', 'Freight Brokerage', 'Dispatch Support', 'Route Coordination', 'Carrier Network', 'Shipment Communication'].map(s => (
                <li key={s}>
                  <Link href="/services" className="text-silver-400 text-xs hover:text-electric-400 transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Shippers', href: '/shippers' },
                { label: 'Carriers', href: '/carriers' },
                { label: 'Get a Quote', href: '/quote' },
                { label: 'Contact', href: '/contact' },
              ].map(n => (
                <li key={n.href}>
                  <Link href={n.href} className="text-silver-400 text-xs hover:text-electric-400 transition-colors">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-silver-400 text-xs hover:text-electric-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-silver-400 text-xs hover:text-electric-400 transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="mt-6">
              <p className="text-silver-400 text-[10px] leading-relaxed">
                Verify authority status at{' '}
                <a href="https://safer.fmcsa.dot.gov" target="_blank" rel="noopener noreferrer" className="text-electric-400 hover:underline">
                  fmcsa.dot.gov
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-electric-500/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-silver-400 text-xs">
            © {new Date().getFullYear()} Iron Routes Logistics LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-silver-400 text-xs hover:text-electric-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-silver-400 text-xs hover:text-electric-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
