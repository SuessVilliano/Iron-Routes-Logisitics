'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Phone } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Shippers', href: '/shippers' },
  { label: 'Carriers', href: '/carriers' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border-b border-gray-200 dark:border-electric-500/20 shadow-lg shadow-gray-200/50 dark:shadow-navy-950/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group" aria-label="Iron Routes Logistics Home">
              <Image
                src="/logo.png"
                alt="Iron Routes Logistics"
                width={140}
                height={107}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              {NAV.map(n => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="text-sm font-medium text-slate-600 dark:text-silver-300 hover:text-electric-500 dark:hover:text-electric-400 transition-colors"
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+14703164312"
                className="hidden lg:inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-silver-300 hover:text-electric-500 dark:hover:text-electric-400 transition-colors"
                aria-label="Call us"
              >
                <Phone size={14} />
                (470) 316-4312
              </a>

              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="p-2 rounded-lg text-slate-500 dark:text-silver-400 hover:text-electric-500 dark:hover:text-electric-400 hover:bg-electric-500/10 transition-all"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <Link
                href="/quote"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-electric-500 text-white font-semibold text-sm hover:bg-electric-400 transition-all shadow-lg shadow-electric-500/25 hover:shadow-electric-500/40"
              >
                Get a Quote
              </Link>

              <button
                className="md:hidden p-2 text-slate-600 dark:text-silver-300 hover:text-slate-900 dark:hover:text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/98 dark:bg-navy-900/98 backdrop-blur-md border-b border-gray-200 dark:border-electric-500/20 md:hidden"
          >
            <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
              {NAV.map(n => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-slate-700 dark:text-silver-300 hover:text-slate-900 dark:hover:text-white hover:bg-electric-500/10 font-medium transition-all"
                >
                  {n.label}
                </Link>
              ))}
              <a
                href="tel:+14703164312"
                className="px-4 py-3 rounded-lg text-electric-500 dark:text-electric-400 font-medium flex items-center gap-2"
              >
                <Phone size={14} /> (470) 316-4312
              </a>
              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                className="mt-2 mx-4 py-3 rounded-full bg-electric-500 text-white font-semibold text-center hover:bg-electric-400 transition-all"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
