'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Shield, Award } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy-950"
      aria-label="Hero"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(10,132,255,0.15),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-semibold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                Freight Logistics — USDOT #9579447
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6"
            >
              Reliable Freight.{' '}
              <span className="text-electric-400 glow-text">Strong Routes.</span>{' '}
              <br className="hidden sm:block" />
              Delivered With Precision.
            </motion.h1>

            <motion.p {...fadeUp(0.35)} className="text-lg text-silver-300 mb-8 max-w-xl leading-relaxed">
              Iron Routes Logistics LLC helps shippers and carriers move freight with dependable
              communication, efficient coordination, and professional logistics support.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-electric-500 text-white font-bold text-sm hover:bg-electric-400 transition-all shadow-lg shadow-electric-500/30 hover:shadow-electric-500/50 hover:scale-105"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-electric-500/50 text-electric-400 font-bold text-sm hover:bg-electric-500/10 transition-all"
              >
                <Phone size={16} /> Contact Dispatch
              </Link>
            </motion.div>

            {/* USDOT / MC badges */}
            <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-800/80 border border-electric-500/20">
                <Shield size={14} className="text-electric-400" />
                <span className="text-xs text-silver-300 font-medium">USDOT <span className="text-white font-bold">#9579447</span></span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-800/80 border border-electric-500/20">
                <Award size={14} className="text-electric-400" />
                <span className="text-xs text-silver-300 font-medium">MC <span className="text-white font-bold">#5551397</span></span>
              </div>
            </motion.div>
          </div>

          {/* Right: Route animation graphic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md h-80">
              {/* Route map illustration */}
              <svg viewBox="0 0 440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
                {/* Grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(10,132,255,0.1)" strokeWidth="0.5"/>
                  </pattern>
                  <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0a84ff" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="1"/>
                  </linearGradient>
                </defs>
                <rect width="440" height="320" fill="url(#grid)" rx="12"/>
                <rect width="440" height="320" rx="12" stroke="rgba(10,132,255,0.2)" strokeWidth="1"/>

                {/* Main route line */}
                <path d="M40 160 C100 160 120 80 200 80 C280 80 300 240 380 240 L400 240" stroke="url(#routeGrad)" strokeWidth="2.5" strokeDasharray="6 3" fill="none"/>

                {/* Secondary route */}
                <path d="M40 200 C120 200 160 140 240 140 C320 140 360 180 400 180" stroke="rgba(56,182,255,0.4)" strokeWidth="1.5" strokeDasharray="4 4" fill="none"/>

                {/* Origin point */}
                <circle cx="40" cy="160" r="8" fill="#0a84ff" stroke="#38b6ff" strokeWidth="2"/>
                <circle cx="40" cy="160" r="16" fill="#0a84ff" fillOpacity="0.15"/>

                {/* Destination point */}
                <circle cx="400" cy="240" r="8" fill="#00e5ff" stroke="#4df0ff" strokeWidth="2"/>
                <circle cx="400" cy="240" r="16" fill="#00e5ff" fillOpacity="0.15"/>

                {/* Midpoint */}
                <circle cx="220" cy="80" r="5" fill="#38b6ff" stroke="#5cc8ff" strokeWidth="1.5"/>

                {/* Labels */}
                <text x="20" y="148" fill="#94a3b8" fontSize="9" fontFamily="monospace">ORIGIN</text>
                <text x="375" y="268" fill="#00e5ff" fontSize="9" fontFamily="monospace">DEST</text>

                {/* Truck icon simplified */}
                <g transform="translate(190, 55)">
                  <rect x="0" y="3" width="28" height="14" rx="2" fill="#0a84ff" fillOpacity="0.8"/>
                  <rect x="20" y="0" width="14" height="17" rx="2" fill="#38b6ff" fillOpacity="0.9"/>
                  <circle cx="5" cy="19" r="3" fill="#00e5ff"/>
                  <circle cx="25" cy="19" r="3" fill="#00e5ff"/>
                </g>

                {/* Status card */}
                <g transform="translate(280, 40)">
                  <rect width="120" height="60" rx="8" fill="rgba(13,24,41,0.9)" stroke="rgba(10,132,255,0.4)" strokeWidth="1"/>
                  <text x="10" y="18" fill="#94a3b8" fontSize="8" fontFamily="monospace">STATUS</text>
                  <text x="10" y="32" fill="#00e5ff" fontSize="10" fontWeight="bold" fontFamily="monospace">IN TRANSIT</text>
                  <text x="10" y="46" fill="#38b6ff" fontSize="8" fontFamily="monospace">ETA: ON SCHEDULE</text>
                </g>

                {/* Animated moving dot via CSS */}
                <circle r="5" fill="#00e5ff" filter="url(#glow)">
                  <animateMotion dur="4s" repeatCount="indefinite">
                    <mpath href="#routePath"/>
                  </animateMotion>
                </circle>
                <path id="routePath" d="M40 160 C100 160 120 80 200 80 C280 80 300 240 380 240 L400 240" fill="none"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
