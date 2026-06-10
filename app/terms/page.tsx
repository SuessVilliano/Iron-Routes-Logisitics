import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service | Iron Routes Logistics LLC',
}

export default function TermsPage() {
  return (
    <main>
      <Header />
      <section className="pt-28 pb-20 min-h-screen bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white mb-2">Terms of Service</h1>
          <p className="text-silver-400 mb-8">Last updated: {new Date().getFullYear()}</p>
          <div className="space-y-6 text-silver-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
              <p>By accessing or using the Iron Routes Logistics LLC website, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">2. Services Description</h2>
              <p>Iron Routes Logistics LLC provides freight coordination, logistics support, brokerage, and carrier/shipper communication services. All services are subject to applicable federal regulations including FMCSA requirements.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">3. Use of the Website</h2>
              <p>You agree not to misuse our website, submit false information, or use our services for unlawful purposes. We reserve the right to refuse service to anyone.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">4. Quote Requests and Service Agreements</h2>
              <p>Submitting a quote request does not constitute a binding contract. All service agreements are subject to separate written confirmation between Iron Routes Logistics LLC and the relevant party.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">5. Disclaimer of Warranties</h2>
              <p>Our website and services are provided &quot;as is.&quot; Iron Routes Logistics LLC makes no warranties, express or implied, regarding service availability, carrier performance, or freight outcomes.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">6. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Iron Routes Logistics LLC shall not be liable for indirect, incidental, or consequential damages arising from use of our services.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">7. FMCSA Compliance</h2>
              <p>Iron Routes Logistics LLC operates in compliance with applicable FMCSA regulations. USDOT #9579447 | MC #5551397. Verify current authority at fmcsa.dot.gov.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">8. Changes to Terms</h2>
              <p>We reserve the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">9. Contact</h2>
              <p>Questions about these terms? Contact us at ironrouteslogistics.com/contact.</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
