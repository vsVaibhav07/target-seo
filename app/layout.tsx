import './globals.css'
import { Metadata } from 'next'
import Script from 'next/script'
import { LazyMotion, domMax } from 'framer-motion'

import ScrollProvider from './components/common/scrollProvider'
import { Dancing_Script,Space_Grotesk } from 'next/font/google'
import Header from './components/common/header'
import Footer from './components/common/footer'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Target SEO Solutions – ROI Driven SEO Agency',
  description: 'ROI-driven SEO strategies for local and national businesses',
  other: {
    'preconnect': 'https://www.googletagmanager.com',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dancingScript.variable} `}>
      <body className="bg-[#020617] text-slate-100 antialiased selection:bg-orange-500/30">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        <LazyMotion features={domMax}>
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