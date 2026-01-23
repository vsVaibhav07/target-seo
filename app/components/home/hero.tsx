'use client'

import { m, LazyMotion, domAnimation,Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Optimized Animations
const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.02 }
  }
}

const wordVariants:Variants = {
  hidden: { opacity: 0 }, // Removed Y-axis movement to eliminate CLS during animation
  visible: {
    opacity: 1,
    transition: { duration: 0.2 }
  }
}

export default function Hero() {
  const line1 = "We Help Businesses Rank Higher,"
  const line2 = "Get More Leads & Grow Revenue"

  return (
    // FIX 1: Added explicit height and contain-intrinsic-size to prevent jump
    <section className="relative overflow-hidden py-16 lg:py-0 min-h-[700px] lg:min-h-screen flex items-center bg-white [content-visibility:auto] [contain-intrinsic-size:1px_700px]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center w-full">
        
        {/* LazyMotion reduces JS execution time */}
        <LazyMotion features={domAnimation}>
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="will-change-[opacity]"
          >
            {/* FIX 2: Fixed Height Heading Container to reserve space for fonts */}
            <h1 className="text-4xl lg:text-5xl font-black leading-[1.2] mb-6 text-slate-900 min-h-[100px] lg:min-h-[130px]">
              <div className="flex flex-wrap gap-x-[0.2em]">
                {line1.split(" ").map((word, i) => (
                  <m.span key={i} variants={wordVariants} className="inline-block">
                    {word}
                  </m.span>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-[0.2em]">
                {line2.split(" ").map((word, i) => (
                  <m.span 
                    key={i} 
                    variants={wordVariants} 
                    className={`inline-block ${word.includes('Revenue') || word.includes('Leads') ? 'text-orange-600' : ''}`}
                  >
                    {word}
                  </m.span>
                ))}
              </div>
            </h1>

            <div>
              <hr className="mb-8 border-slate-200" />
              <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed min-h-[60px]">
                ROI-driven SEO strategies for local and national businesses. 
                <span className="font-bold text-slate-800"> No fluff. Just results.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 min-h-[60px]">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-7 py-4 rounded-xl font-bold shadow-lg hover:bg-orange-700 transition-colors"
              >
                Get Free SEO Audit
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                View Case Studies
              </Link>
            </div>

            <p className="text-sm text-slate-500 font-medium">
              ⭐⭐⭐⭐⭐ Google Reviews · 100+ Clients · Transparent Reporting
            </p>
          </m.div>
        </LazyMotion>

        {/* FIX 3: Image LCP & CLS Fix */}
        <div className="relative min-h-[300px] lg:min-h-[540px] flex items-center justify-center">
          <Image
            src="/heroImage.svg"
            alt="SEO growth illustration"
            width={640}
            height={540}
            priority={true} // Immediate load
            fetchPriority="high"
            loading="eager"
            decoding="sync" // Fastest rendering for LCP
            className="mx-auto drop-shadow-2xl h-auto w-full max-w-[640px]"
            style={{ 
              aspectRatio: "640 / 540",
            }}
          />
          <div className="absolute inset-0 bg-orange-500/5 blur-[100px] rounded-full -z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}