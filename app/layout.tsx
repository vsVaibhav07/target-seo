import './globals.css'
import { Metadata } from 'next'
import Script from 'next/script'
import { LazyMotion, domMax } from 'framer-motion'
import Header from './components/common/header'
import Footer from './components/common/footer'
import ScrollProvider from './components/common/scrollProvider'

// 1. Metadata with Preconnect & Performance Hints
export const metadata: Metadata = {
  title: 'Target SEO Solutions – ROI Driven SEO Agency',
  description: 'ROI-driven SEO strategies for local and national businesses',
  other: {
    // Google Analytics aur external scripts ke liye pehle hi connection banayein
    'preconnect': 'https://www.googletagmanager.com',
    'dns-prefetch': 'https://www.google-analytics.com',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-slate-100 overflow-x-hidden antialiased">
        
        {/* 2. Google Analytics (optimized with afterInteractive strategy) */}
        {/* Replace G-XXXXXXXXXX with your actual Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* 3. Framer Motion Lazy Loading - Reduces JS bundle size significantly */}
        <LazyMotion features={domMax} strict>
          <ScrollProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ScrollProvider>
        </LazyMotion>

      </body>
    </html>
  )
}