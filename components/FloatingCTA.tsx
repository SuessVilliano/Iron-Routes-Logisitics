'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: 'easeOut' }}
      className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
      aria-label="Mobile call to action"
    >
      <Link
        href="/quote"
        className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-electric-500 text-white font-bold text-sm shadow-2xl shadow-electric-500/40 hover:bg-electric-400 transition-all"
      >
        📦 Get a Freight Quote <ArrowRight size={16} />
      </Link>
    </motion.div>
  )
}
