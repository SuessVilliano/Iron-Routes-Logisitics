'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Loader2 } from 'lucide-react'

const STORAGE_KEY = 'irl_exit_shown'

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', need: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem(STORAGE_KEY)) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !sessionStorage.getItem(STORAGE_KEY)) {
        sessionStorage.setItem(STORAGE_KEY, '1')
        setOpen(true)
      }
    }

    let timer: ReturnType<typeof setTimeout>
    const resetTimer = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        if (!sessionStorage.getItem(STORAGE_KEY)) {
          sessionStorage.setItem(STORAGE_KEY, '1')
          setOpen(true)
        }
      }, 30000)
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('touchstart', resetTimer)
    resetTimer()

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('touchstart', resetTimer)
      clearTimeout(timer)
    }
  }, [])

  const close = () => setOpen(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'exit_intent' }),
      })
      setSuccess(true)
      setTimeout(() => setOpen(false), 2500)
    } catch {
      setSubmitting(false)
    }
  }

  const inputCls = 'w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-electric-500/20 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-silver-400/50 text-sm focus:outline-none focus:border-electric-500 dark:focus:border-electric-400 transition-all'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={e => e.target === e.currentTarget && close()}
          aria-modal="true"
          role="dialog"
          aria-labelledby="exit-popup-heading"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative bg-white dark:bg-navy-900 border border-gray-200 dark:border-electric-500/30 rounded-2xl shadow-2xl shadow-electric-500/20 max-w-md w-full p-7"
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 p-1.5 text-slate-400 dark:text-silver-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
              aria-label="Close popup"
            >
              <X size={18} />
            </button>

            {success ? (
              <div className="text-center py-6">
                <CheckCircle size={40} className="text-electric-500 dark:text-electric-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Request Received</h3>
                <p className="text-slate-500 dark:text-silver-400 text-sm">Iron Routes Logistics will follow up soon.</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-electric-500 dark:text-electric-400 text-xs font-bold tracking-widest uppercase block mb-2">Before You Go</span>
                  <h2 id="exit-popup-heading" className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
                    Need Freight Support Before You Go?
                  </h2>
                  <p className="text-slate-500 dark:text-silver-400 text-sm">
                    Send your route or shipment details and Iron Routes Logistics will follow up.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text" required placeholder="Your Name"
                    value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className={inputCls} aria-label="Your name"
                  />
                  <input
                    type="tel" required placeholder="Phone Number"
                    value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                    className={inputCls} aria-label="Phone number"
                  />
                  <input
                    type="email" required placeholder="Email Address"
                    value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    className={inputCls} aria-label="Email address"
                  />
                  <textarea
                    required placeholder="Describe your shipment need..."
                    rows={3} value={form.need} onChange={e => setForm(p => ({ ...p, need: e.target.value }))}
                    className={`${inputCls} resize-none`} aria-label="Shipment need"
                  />
                  <button
                    type="submit" disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-electric-500 text-white font-bold hover:bg-electric-400 disabled:opacity-60 transition-all"
                  >
                    {submitting ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : 'Request Follow-Up'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
