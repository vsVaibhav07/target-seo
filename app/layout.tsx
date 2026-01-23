import './globals.css'
import Header from './components/common/header'
import Footer from './components/common/footer'
import SmoothScroll from './components/common/smoothScroll'

export const metadata = {
  title: 'Target SEO Solutions – ROI Driven SEO Agency',
  description: 'ROI-driven SEO strategies for local and national businesses'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-slate-100 overflow-x-hidden">
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
