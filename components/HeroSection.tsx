'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Shield, Award, TrendingUp, Clock, Star } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const STATS = [
  { icon: TrendingUp, value: '500+', label: 'Loads Coordinated' },
  { icon: Clock, value: '24/7', label: 'Dispatch Support' },
  { icon: Star, value: '98%', label: 'On-Time Rate' },
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy-950 dark:bg-navy-950"
      style={{ background: 'var(--hero-bg, #050a18)' }}
      aria-label="Hero"
    >
      {/* ── Perspective highway grid ── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="heroGlow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#0a84ff" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#050a18" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="laneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0a84ff" stopOpacity="0" />
              <stop offset="40%" stopColor="#0a84ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="laneGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38b6ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#38b6ff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#38b6ff" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="glowStrong">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Dark sky gradient */}
          <rect width="1440" height="900" fill="#050a18" />
          <rect width="1440" height="900" fill="url(#heroGlow)" />

          {/* Horizon line */}
          <line x1="0" y1="420" x2="1440" y2="420" stroke="#0a84ff" strokeOpacity="0.08" strokeWidth="1" />

          {/* ── Perspective highway lanes converging to vanishing point at (720, 420) ── */}
          {/* Outer left edge */}
          <line x1="0" y1="900" x2="720" y2="420" stroke="url(#laneGrad)" strokeWidth="1.5" strokeOpacity="0.6" />
          {/* Left lane line */}
          <line x1="260" y1="900" x2="720" y2="420" stroke="url(#laneGrad2)" strokeWidth="1" />
          {/* Center-left lane */}
          <line x1="480" y1="900" x2="720" y2="420" stroke="url(#laneGrad2)" strokeWidth="1" />
          {/* Center divider */}
          <line x1="720" y1="900" x2="720" y2="420" stroke="url(#laneGrad)" strokeWidth="2" filter="url(#glow)" />
          {/* Center-right lane */}
          <line x1="960" y1="900" x2="720" y2="420" stroke="url(#laneGrad2)" strokeWidth="1" />
          {/* Right lane line */}
          <line x1="1180" y1="900" x2="720" y2="420" stroke="url(#laneGrad2)" strokeWidth="1" />
          {/* Outer right edge */}
          <line x1="1440" y1="900" x2="720" y2="420" stroke="url(#laneGrad)" strokeWidth="1.5" strokeOpacity="0.6" />

          {/* Dashed center lane markers — animated */}
          {[0, 80, 160, 240, 320, 400].map((offset, i) => {
            // Each dash: interpolate along center line from bottom (720,900) to VP (720,420)
            const t1 = (offset + 500) / 900
            const t2 = (offset + 540) / 900
            const y1 = 900 - t1 * 480
            const y2 = 900 - t2 * 480
            return (
              <line
                key={i}
                x1="720" y1={y1}
                x2="720" y2={y2}
                stroke="#00e5ff"
                strokeWidth="2"
                strokeOpacity={0.4 + t1 * 0.4}
                filter="url(#glow)"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 480"
                  to="0 0"
                  dur="2s"
                  begin={`${i * 0.33}s`}
                  repeatCount="indefinite"
                />
              </line>
            )
          })}

          {/* Horizontal distance bands (like mile markers) */}
          {[0.15, 0.30, 0.50, 0.72].map((t, i) => {
            const y = 420 + (1 - t) * 480
            const lx = 720 - t * 720
            const rx = 720 + t * 720
            return (
              <line
                key={i}
                x1={lx} y1={y}
                x2={rx} y2={y}
                stroke="#0a84ff"
                strokeOpacity={0.06 + t * 0.08}
                strokeWidth="1"
              />
            )
          })}

          {/* Moving headlights/taillights on lanes */}
          {/* Left lane truck (coming closer) */}
          <g filter="url(#glowStrong)">
            <circle cx="420" cy="700" r="4" fill="#ffcc44" fillOpacity="0.9">
              <animateTransform attributeName="transform" type="translate" from="0 -200" to="0 200" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="460" cy="700" r="4" fill="#ffcc44" fillOpacity="0.9">
              <animateTransform attributeName="transform" type="translate" from="0 -200" to="0 200" dur="5s" begin="0.1s" repeatCount="indefinite" />
            </circle>
          </g>
          {/* Right lane (going away) */}
          <g filter="url(#glow)">
            <circle cx="920" cy="520" r="2.5" fill="#ff4444" fillOpacity="0.8">
              <animateTransform attributeName="transform" type="translate" from="0 100" to="0 -100" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="960" cy="520" r="2.5" fill="#ff4444" fillOpacity="0.8">
              <animateTransform attributeName="transform" type="translate" from="0 100" to="0 -100" dur="4s" begin="0.1s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Ambient city glow at horizon */}
          <ellipse cx="720" cy="422" rx="300" ry="30" fill="#0a84ff" fillOpacity="0.06" />
          <ellipse cx="720" cy="422" rx="100" ry="10" fill="#00e5ff" fillOpacity="0.10" />

          {/* Stars / scattered light dots above horizon */}
          {[100,200,350,500,650,800,950,1100,1250,1380].map((x, i) => (
            <circle key={i} cx={x} cy={80 + (i % 4) * 60} r="1" fill="#ffffff" fillOpacity={0.2 + (i % 3) * 0.15} />
          ))}
          {[150,300,450,600,750,900,1050,1200,1350].map((x, i) => (
            <circle key={i+10} cx={x} cy={200 + (i % 3) * 50} r="0.8" fill="#38b6ff" fillOpacity={0.15 + (i % 3) * 0.1} />
          ))}

          {/* Bottom fade */}
          <rect width="1440" height="200" y="700" fill="url(#bottomFade)" />
          <defs>
            <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#050a18" stopOpacity="0" />
              <stop offset="100%" stopColor="#050a18" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Side glow orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-electric-500/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-sky-400/8 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div {...fadeUp(0.05)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              Licensed & Insured · USDOT #9579447 · MC #5551397
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.15)}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-white mb-6"
          >
            <span className="block">Move Freight.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-sky-400 to-electric-300">
              Own the Road.
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.25)} className="text-lg sm:text-xl text-silver-300 mb-8 max-w-xl leading-relaxed">
            Iron Routes Logistics delivers precision freight coordination for shippers and carriers across the country — 24/7 dispatch, reliable communication, zero surprises.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.35)} className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-electric-500 text-white font-bold text-sm hover:bg-electric-400 transition-all shadow-lg shadow-electric-500/30 hover:shadow-electric-500/50 hover:scale-105 active:scale-100"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+14703164312"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-electric-500/40 text-electric-400 font-bold text-sm hover:bg-electric-500/10 hover:border-electric-400 transition-all"
            >
              <Phone size={16} /> (470) 316-4312
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {STATS.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.label}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <Icon size={16} className="text-electric-400" aria-hidden="true" />
                  <div>
                    <div className="text-white font-extrabold text-lg leading-none">{s.value}</div>
                    <div className="text-silver-400 text-[11px] font-medium mt-0.5">{s.label}</div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade out */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  )
}
