import './globals.css'
import dynamic from 'next/dynamic'
import Header from './components/common/header'
import Footer from './components/common/footer'
import ScrollProvider from './components/common/scrollProvider'

// OPTIMIZATION: Dynamic import for SmoothScroll (Lenis + GSAP)
// Isse JS bundle split ho jayega aur initial page load fast hoga.


export const metadata = {
  title: 'Target SEO Solutions – ROI Driven SEO Agency',
  description: 'ROI-driven SEO strategies for local and national businesses'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-slate-100 overflow-x-hidden antialiased">
        
        <ScrollProvider >
          <Header />
          <main>{children}</main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  )
}