'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const line1 = "We Help Businesses Rank Higher,"
  const line2 = "Get More Leads & Grow Revenue"

  // Word Animation Variants - Reduced initial Y to prevent huge Layout Shifts
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 } // Faster stagger
    }
  }

  const wordVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 10, // Reduced from 20 to minimize CLS
      rotateX: 10 
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.4, // Faster duration
        ease: [0.215, 0.61, 0.355, 1] 
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  return (
    // Problem Fix: Added min-height directly to avoid layout jump
    <section className="relative overflow-hidden py-16 lg:py-0 min-h-[600px] lg:min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center w-full">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading - Optimization: Added min-height to text container */}
          <h1 className="text-4xl font-black leading-tight mb-6 text-slate-900 perspective-1000 min-h-[120px]">
            <div className="flex flex-wrap gap-x-[0.2em] overflow-hidden">
              {line1.split(" ").map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block origin-bottom">
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-[0.2em] overflow-hidden">
              {line2.split(" ").map((word, i) => (
                <motion.span 
                  key={i} 
                  variants={wordVariants} 
                  className={`inline-block origin-bottom ${word.includes('Revenue') || word.includes('Leads') ? 'text-accent' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>

          <motion.div variants={itemVariants}>
            <hr className="mb-8 border-slate-200" />
            <p className="text-lg text-justify text-muted mb-10 max-w-xl leading-relaxed">
              ROI-driven SEO strategies for local and national businesses. 
              <span className="font-bold text-slate-800"> No fluff. Just results.</span>
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
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
          </motion.div>

          <motion.p variants={itemVariants} className="text-sm text-muted font-medium">
            ⭐⭐⭐⭐⭐ Google Reviews · 100+ Clients · Transparent Reporting
          </motion.p>
        </motion.div>

        {/* Right Side Image - LCP FIX */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <Image
              src="/heroImage.svg"
              alt="SEO growth illustration"
              width={640}
              height={540}
              priority={true} // Priority loading
              loading="eager" // Force eager load
              fetchPriority="high" // Tell browser this is top priority
              className="mx-auto drop-shadow-2xl w-auto h-auto"
            />
          </motion.div>
          <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full -z-10" />
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  )
}