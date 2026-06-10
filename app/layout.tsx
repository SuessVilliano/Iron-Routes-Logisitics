import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Iron Routes Logistics LLC | Reliable Trucking & Freight Logistics',
  description: 'Iron Routes Logistics LLC provides professional freight coordination, trucking logistics, carrier support, and shipper solutions. Request a quote today.',
  keywords: [
    'trucking logistics', 'freight logistics', 'freight broker', 'carrier support',
    'shipper solutions', 'freight coordination', 'dispatch logistics', 'Iron Routes Logistics',
    'truckload freight', 'freight brokerage', 'dispatch support', 'route coordination',
  ],
  authors: [{ name: 'Iron Routes Logistics LLC' }],
  openGraph: {
    type: 'website',
    url: 'https://ironrouteslogistics.com',
    title: 'Iron Routes Logistics LLC | Reliable Trucking & Freight Logistics',
    description: 'Professional freight coordination, trucking logistics, carrier support, and shipper solutions.',
    siteName: 'Iron Routes Logistics LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iron Routes Logistics LLC | Reliable Trucking & Freight Logistics',
    description: 'Professional freight coordination, trucking logistics, carrier support, and shipper solutions.',
  },
  robots: { index: true, follow: true },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://ironrouteslogistics.com/#organization',
      name: 'Iron Routes Logistics LLC',
      description: 'Professional freight coordination, trucking logistics, carrier support, and shipper solutions.',
      url: 'https://ironrouteslogistics.com',
      logo: 'https://ironrouteslogistics.com/logo.png',
      address: { '@type': 'PostalAddress', addressCountry: 'US' },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: 'English',
        url: 'https://ironrouteslogistics.com/contact',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://ironrouteslogistics.com/#org',
      name: 'Iron Routes Logistics LLC',
      url: 'https://ironrouteslogistics.com',
    },
    {
      '@type': 'Service',
      serviceType: 'Freight Logistics',
      provider: { '@id': 'https://ironrouteslogistics.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United States' },
      description: 'Truckload freight, freight brokerage, dispatch support, route coordination, carrier network.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What services does Iron Routes Logistics provide?', acceptedAnswer: { '@type': 'Answer', text: 'Iron Routes Logistics provides truckload freight coordination, freight brokerage, dispatch support, route coordination, carrier network services, and shipment communication support.' } },
        { '@type': 'Question', name: 'How do I request a freight quote?', acceptedAnswer: { '@type': 'Answer', text: 'Fill out the quote form on our website with your pickup location, delivery location, freight details, and timeline. Our team will respond quickly.' } },
        { '@type': 'Question', name: 'Do you work with carriers and owner-operators?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Iron Routes Logistics works with carriers and owner-operators to match them with consistent freight opportunities.' } },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* No-flash theme script — runs before paint */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('irl_theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})()` }} />
        {/* GA4 SCRIPT GOES HERE */}
        {/* GTM SCRIPT GOES HERE */}
        {/* META PIXEL SCRIPT GOES HERE */}
        {/* GHL TRACKING CODE GOES HERE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
