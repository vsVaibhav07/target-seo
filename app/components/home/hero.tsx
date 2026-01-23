'use client'

import { m ,Variants} from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Variants ko component ke bahar rakha hai taaki re-renders par recalculate na ho
const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.05 } // Faster stagger for better TBT
  }
}

const wordVariants:Variants = {
  hidden: { opacity: 0, y: 8 }, // Minimal Y movement to keep CLS near zero
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const itemVariants:Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
}

export default function Hero() {
  const line1 = "We Help Businesses Rank Higher,"
  const line2 = "Get More Leads & Grow Revenue"

  return (
    <section className="relative overflow-hidden py-16 lg:py-0 min-h-[600px] lg:min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center w-full">
        
        <m.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="will-change-transform" // Browser optimization for animations
        >
          {/* Heading - min-h adjusted for mobile/desktop to prevent layout jump */}
          <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6 text-slate-900 perspective-1000 min-h-[100px] lg:min-h-[140px]">
            <div className="flex flex-wrap gap-x-[0.2em] overflow-hidden">
              {line1.split(" ").map((word, i) => (
                <m.span key={i} variants={wordVariants} className="inline-block origin-bottom">
                  {word}
                </m.span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-[0.2em] overflow-hidden">
              {line2.split(" ").map((word, i) => (
                <m.span 
                  key={i} 
                  variants={wordVariants} 
                  className={`inline-block origin-bottom ${word.includes('Revenue') || word.includes('Leads') ? 'text-accent' : ''}`}
                >
                  {word}
                </m.span>
              ))}
            </div>
          </h1>

          <m.div variants={itemVariants}>
            <hr className="mb-8 border-slate-200" />
            <p className="text-lg text-justify text-muted mb-10 max-w-xl leading-relaxed">
              ROI-driven SEO strategies for local and national businesses. 
              <span className="font-bold text-slate-800"> No fluff. Just results.</span>
            </p>
          </m.div>

          <m.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Get Free SEO Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition-transform"
            >
              View Case Studies
            </Link>
          </m.div>

          <m.p variants={itemVariants} className="text-sm text-muted font-medium">
            ⭐⭐⭐⭐⭐ Google Reviews · 100+ Clients · Transparent Reporting
          </m.p>
        </m.div>

        {/* Right Side Image - Critical Path Optimization */}
        <div className="relative min-h-[300px] lg:min-h-[540px] flex items-center justify-center">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-full"
          >
            <Image
              src="/heroImage.svg"
              alt="SEO growth illustration"
              width={640}
              height={540}
              priority={true} 
              fetchPriority="high" // Signals browser to download this immediately
              className="mx-auto drop-shadow-2xl h-auto w-full max-w-[640px]"
              style={{ 
                aspectRatio: "640 / 540",
                contentVisibility: "auto" 
              }}
            />
          </m.div>
          {/* Subtle Glow - Using opacity instead of blur for performance if needed */}
          <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full -z-10 pointer-events-none" />
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  )
}