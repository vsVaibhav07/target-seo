import './globals.css'
import { Metadata } from 'next'
import Script from 'next/script'
import { LazyMotion, domMax } from 'framer-motion'
import { Dancing_Script } from 'next/font/google'

// Providers & Components
import ScrollProvider from './components/common/scrollProvider'
import Header from './components/common/header'
import Footer from './components/common/footer'
import TransitionWrapper from './components/common/TransitionWrapper' // Naya wrapper

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Target SEO Solutions – ROI Driven SEO Agency',
  description: 'ROI-driven SEO strategies for local and national businesses',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0', // Mobile zoom prevent karne ke liye
  other: {
    'preconnect': 'https://www.googletagmanager.com',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dancingScript.variable} scroll-smooth`}>
      <body className="bg-[#020617] text-slate-100 antialiased selection:bg-orange-500/30 overflow-x-hidden">
        {/* Google Analytics */}
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
            
            {/* TransitionWrapper handles AnimatePresence and PageTransition */}
            <TransitionWrapper>
              <main className="relative min-h-screen">
                {children}
              </main>
            </TransitionWrapper>

            <Footer />
          </ScrollProvider>
        </LazyMotion>
      </body>
    </html>
  )
}