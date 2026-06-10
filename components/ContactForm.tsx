'use client'
import { useState, FormEvent } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

interface FormData {
  name: string; company: string; email: string; phone: string;
  role: string; service: string; pickup: string; delivery: string;
  freight: string; timeline: string; message: string;
}

const INITIAL: FormData = {
  name: '', company: '', email: '', phone: '',
  role: '', service: '', pickup: '', delivery: '',
  freight: '', timeline: '', message: '',
}

const inputCls = `w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-navy-800/80 border border-gray-200 dark:border-electric-500/20
  text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-silver-400/50 text-sm focus:outline-none
  focus:border-electric-500 dark:focus:border-electric-400 focus:ring-1 focus:ring-electric-500/30 dark:focus:ring-electric-400/30 transition-all`

const labelCls = 'block text-sm font-medium text-slate-700 dark:text-silver-300 mb-1.5'

export default function ContactForm({ defaultRole = '' }: { defaultRole?: string }) {
  const [form, setForm] = useState<FormData>({ ...INITIAL, role: defaultRole })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      /* GHL FORM WEBHOOK: Replace /api/contact with your GHL webhook URL */
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contact_form' }),
      })
      if (!res.ok) throw new Error('Network error')
      setSuccess(true)
      setForm({ ...INITIAL, role: defaultRole })
    } catch {
      setError('Something went wrong. Please try again or call us at +1 (470) 316-4312.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-electric-500/10 border border-electric-500/30 flex items-center justify-center mb-5">
          <CheckCircle size={36} className="text-electric-500 dark:text-electric-400" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Request Received!</h3>
        <p className="text-slate-600 dark:text-silver-300 max-w-md">
          Thank you — Iron Routes Logistics received your request. We&apos;ll follow up within 1 business day.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 px-6 py-2.5 rounded-full border border-electric-500/40 text-electric-500 dark:text-electric-400 text-sm font-medium hover:bg-electric-500/10 transition-all"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Freight quote request form">
      {/* GHL FORM WEBHOOK: Replace the /api/contact route action with your GHL webhook URL */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className={labelCls}>Full Name *</label>
          <input id="cf-name" type="text" required value={form.name} onChange={set('name')} placeholder="Jane Smith" className={inputCls} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="cf-company" className={labelCls}>Company Name</label>
          <input id="cf-company" type="text" value={form.company} onChange={set('company')} placeholder="Acme Corp" className={inputCls} autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelCls}>Email Address *</label>
          <input id="cf-email" type="email" required value={form.email} onChange={set('email')} placeholder="jane@company.com" className={inputCls} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelCls}>Phone Number *</label>
          <input id="cf-phone" type="tel" required value={form.phone} onChange={set('phone')} placeholder="(555) 000-0000" className={inputCls} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="cf-role" className={labelCls}>I Am A *</label>
          <select id="cf-role" required value={form.role} onChange={set('role')} className={inputCls}>
            <option value="">Select...</option>
            <option>Shipper</option>
            <option>Carrier</option>
            <option>Broker</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="cf-service" className={labelCls}>Service Needed</label>
          <select id="cf-service" value={form.service} onChange={set('service')} className={inputCls}>
            <option value="">Select service...</option>
            <option>Truckload Freight</option>
            <option>Freight Brokerage</option>
            <option>Dispatch Support</option>
            <option>Route Coordination</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="cf-pickup" className={labelCls}>Pickup Location</label>
          <input id="cf-pickup" type="text" value={form.pickup} onChange={set('pickup')} placeholder="City, State" className={inputCls} />
        </div>
        <div>
          <label htmlFor="cf-delivery" className={labelCls}>Delivery Location</label>
          <input id="cf-delivery" type="text" value={form.delivery} onChange={set('delivery')} placeholder="City, State" className={inputCls} />
        </div>
        <div>
          <label htmlFor="cf-timeline" className={labelCls}>Timeline</label>
          <select id="cf-timeline" value={form.timeline} onChange={set('timeline')} className={inputCls}>
            <option value="">Select timeline...</option>
            <option>ASAP</option>
            <option>Within 1 week</option>
            <option>1–2 weeks</option>
            <option>Flexible</option>
          </select>
        </div>
        <div>
          <label htmlFor="cf-freight" className={labelCls}>Freight Details</label>
          <input id="cf-freight" type="text" value={form.freight} onChange={set('freight')} placeholder="Type, weight, dimensions..." className={inputCls} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className={labelCls}>Additional Message</label>
          <textarea id="cf-message" rows={4} value={form.message} onChange={set('message')} placeholder="Any additional details about your shipment or needs..." className={`${inputCls} resize-none`} />
        </div>
      </div>

      {error && <p className="mt-4 text-red-500 dark:text-red-400 text-sm text-center" role="alert">{error}</p>}

      <div className="mt-6">
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-electric-500 text-white font-bold text-sm hover:bg-electric-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-electric-500/25"
        >
          {submitting ? (
            <><Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending Request...</>
          ) : (
            <><Send size={18} aria-hidden="true" /> Send Request</>
          )}
        </button>
      </div>
    </form>
  )
}
