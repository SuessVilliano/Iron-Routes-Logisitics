import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | Iron Routes Logistics LLC',
}

export default function PrivacyPage() {
  return (
    <main>
      <Header />
      <section className="pt-28 pb-20 min-h-screen bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-sm max-w-none">
          <h1 className="text-3xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-silver-400 mb-8">Last updated: {new Date().getFullYear()}</p>

          <div className="space-y-6 text-silver-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
              <p>Iron Routes Logistics LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects information you provide when using our website, including name, company name, email address, phone number, and freight details submitted through our contact and quote forms.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">2. How We Use Your Information</h2>
              <p>We use collected information to respond to freight inquiries, provide logistics services, communicate about your shipments, improve our website and services, and comply with legal obligations.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">3. Information Sharing</h2>
              <p>We do not sell or rent your personal information. We may share information with carriers, service providers, or partners as necessary to fulfill logistics services, or as required by law.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">4. Data Security</h2>
              <p>We implement reasonable security measures to protect your information. However, no transmission over the internet is 100% secure.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">5. Cookies and Tracking</h2>
              <p>Our website may use cookies, Google Analytics, Meta Pixel, and other tracking technologies to understand site usage and improve our services. You may opt out through your browser settings.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">6. Your Rights</h2>
              <p>You may request access to, correction of, or deletion of your personal information by contacting us through the contact form on our website.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">7. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us through our website at ironrouteslogistics.com/contact.</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
