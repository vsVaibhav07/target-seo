'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion,Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const line1 = "We Help Businesses Rank Higher,"
  const line2 = "Get More Leads & Grow Revenue"

  // Word Animation Variants
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  }

  const wordVariants:Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: 40 
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.215, 0.61, 0.355, 1] 
      }
    }
  }

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="relative overflow-hidden  lg:min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center w-full">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading with Word-by-Word Animation */}
          <h1 className="text-4xl font-black leading-tight mb-6 text-slate-900 perspective-1000">
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
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Get Free SEO Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition-all"
            >
              View Case Studies
            </Link>
          </motion.div>

          <motion.p variants={itemVariants} className="text-sm text-muted font-medium">
            ⭐⭐⭐⭐⭐ Google Reviews · 100+ Clients · Transparent Reporting
          </motion.p>
        </motion.div>

        {/* Right Side Image with Float and Scale Entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Image
              src="/heroImage.svg"
              alt="SEO growth illustration"
              width={640}
              height={540}
              priority
              className="mx-auto drop-shadow-2xl"
            />
          </motion.div>
          
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full -z-10" />
        </motion.div>

      </div>

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  )
}