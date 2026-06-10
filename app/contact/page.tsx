import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, Globe } from 'lucide-react'

export const metadata = {
  title: 'Contact Iron Routes Logistics LLC',
  description: 'Contact Iron Routes Logistics LLC for freight support, carrier connections, or shipper solutions.',
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="pt-28 pb-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-electric-400 text-xs font-bold tracking-widest uppercase block mb-4">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Contact Iron Routes Logistics</h1>
            <p className="text-silver-300 text-lg max-w-xl mx-auto">
              Have a freight need or question? Reach out and our team will respond quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
            {[
              { icon: Globe, label: 'Website', val: 'ironrouteslogistics.com', href: '#' },
              { icon: Mail, label: 'Email', val: 'dispatch@ironrouteslogistics.com', href: 'mailto:dispatch@ironrouteslogistics.com' },
              { icon: Phone, label: 'Dispatch', val: 'Contact via form', href: '#contact-form' },
            ].map(c => {
              const Icon = c.icon
              return (
                <a
                  key={c.label}
                  href={c.href}
                  className="p-6 rounded-2xl bg-navy-800/60 border border-electric-500/15 hover:border-electric-500/40 transition-colors text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-electric-500/20 transition-colors">
                    <Icon size={20} className="text-electric-400" aria-hidden="true" />
                  </div>
                  <p className="text-silver-400 text-xs font-bold tracking-widest uppercase mb-1">{c.label}</p>
                  <p className="text-white text-sm font-medium">{c.val}</p>
                </a>
              )
            })}
          </div>

          <div className="max-w-3xl mx-auto" id="contact-form">
            <div className="bg-navy-800/40 rounded-2xl border border-electric-500/15 p-6 sm:p-10">
              {/* GHL FORM WEBHOOK: Replace /api/contact with your GHL webhook URL */}
              {/* GHL FORM EMBED OR WEBHOOK GOES HERE */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* GHL CHAT WIDGET SCRIPT GOES HERE */}
    </main>
  )
}
