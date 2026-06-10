import Link from 'next/link'
import Image from 'next/image'
import { Shield, Award, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-navy-950 border-t border-gray-200 dark:border-electric-500/10 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-3">
              <Image
                src="/logo.png"
                alt="Iron Routes Logistics"
                width={140}
                height={107}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-slate-500 dark:text-silver-400 text-xs leading-relaxed mb-3">
              Reliable freight coordination and logistics support for shippers and carriers across the United States.
            </p>
            <div className="mb-4 space-y-1.5">
              <a href="tel:+14703164312" className="flex items-center gap-2 text-xs text-slate-600 dark:text-silver-400 hover:text-electric-500 dark:hover:text-electric-400 transition-colors">
                <Phone size={11} className="text-electric-500 dark:text-electric-400" />
                +1 (470) 316-4312
              </a>
              <a href="mailto:contact@ironrouteslogistics.com" className="flex items-center gap-2 text-xs text-slate-600 dark:text-silver-400 hover:text-electric-500 dark:hover:text-electric-400 transition-colors">
                <Mail size={11} className="text-electric-500 dark:text-electric-400" />
                contact@ironrouteslogistics.com
              </a>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-gray-100 dark:bg-navy-800 border border-gray-200 dark:border-electric-500/15 text-xs text-slate-500 dark:text-silver-400">
                <Shield size={10} className="text-electric-500 dark:text-electric-400" /> USDOT #9579447
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-gray-100 dark:bg-navy-800 border border-gray-200 dark:border-electric-500/15 text-xs text-slate-500 dark:text-silver-400">
                <Award size={10} className="text-electric-500 dark:text-electric-400" /> MC #5551397
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              {['Truckload Freight', 'Freight Brokerage', 'Dispatch Support', 'Route Coordination', 'Carrier Network', 'Shipment Communication'].map(s => (
                <li key={s}>
                  <Link href="/services" className="text-slate-500 dark:text-silver-400 text-xs hover:text-electric-500 dark:hover:text-electric-400 transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Shippers', href: '/shippers' },
                { label: 'Carriers', href: '/carriers' },
                { label: 'Get a Quote', href: '/quote' },
                { label: 'Contact', href: '/contact' },
              ].map(n => (
                <li key={n.href}>
                  <Link href={n.href} className="text-slate-500 dark:text-silver-400 text-xs hover:text-electric-500 dark:hover:text-electric-400 transition-colors">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-slate-500 dark:text-silver-400 text-xs hover:text-electric-500 dark:hover:text-electric-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-500 dark:text-silver-400 text-xs hover:text-electric-500 dark:hover:text-electric-400 transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="mt-6">
              <p className="text-slate-400 dark:text-silver-400 text-[10px] leading-relaxed">
                Verify authority status at{' '}
                <a href="https://safer.fmcsa.dot.gov" target="_blank" rel="noopener noreferrer" className="text-electric-500 dark:text-electric-400 hover:underline">
                  fmcsa.dot.gov
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-electric-500/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 dark:text-silver-400 text-xs">
            © {new Date().getFullYear()} Iron Routes Logistics LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-slate-400 dark:text-silver-400 text-xs hover:text-electric-500 dark:hover:text-electric-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-slate-400 dark:text-silver-400 text-xs hover:text-electric-500 dark:hover:text-electric-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
