'use client'

import { m, Variants, LazyMotion, domAnimation } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 40 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const floatAnimation: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
  }
}

export default function Hero() {
  const line1 = "We Help Businesses Rank Higher,"
  const line2 = "Get More Leads & Grow Revenue"

  return (
    <section className="relative overflow-hidden py-12 lg:py-0 min-h-[600px] lg:min-h-screen flex items-center bg-white">
      <LazyMotion features={domAnimation}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-4 lg:gap-1 items-center w-full">
          
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="will-change-transform z-10"
          >
            <h1 className="text-4xl lg:text-5xl font-black leading-[1.1] mb-6 text-slate-900">
              <div className="block overflow-hidden">
                <div className="flex flex-wrap gap-x-[0.2em]">
                  {line1.split(" ").map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden pb-1">
                      <m.span variants={wordVariants} className="inline-block">{word}</m.span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="block overflow-hidden">
                <div className="flex flex-wrap gap-x-[0.2em]">
                  {line2.split(" ").map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden pb-1">
                      <m.span 
                        variants={wordVariants} 
                        className={`inline-block ${word.includes('Revenue') || word.includes('Leads') ? 'text-accent' : ''}`}
                      >
                        {word}
                      </m.span>
                    </span>
                  ))}
                </div>
              </div>
            </h1>

            <m.div variants={itemVariants}>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                ROI-driven SEO strategies for local and national businesses. 
                <span className="font-bold text-slate-800"> No fluff. Just results.</span>
              </p>
            </m.div>

            {/* Dono Buttons yahan hain */}
            <m.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/free-audit"
                className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-accent/25 hover:bg-accent/90 transition-all active:scale-95"
              >
                Get Free SEO Audit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-slate-200 font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
              >
                View Case Studies
              </Link>
            </m.div>

            <m.p variants={itemVariants} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
               <span className="text-orange-400">⭐⭐⭐⭐⭐</span> 100+ Clients ROI Focused
            </m.p>
          </m.div>

          
          <m.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <m.div
              variants={floatAnimation}
              animate="animate"
              whileHover={{ scale: 1.05 }}
              className="relative z-10 w-full"
            >
              <Image
                src="/heroImage.svg"
                alt="SEO growth illustration"
                width={800}
                height={680}
                priority
                className="w-full h-auto drop-shadow-2xl scale-110" 
              />
            </m.div>
            
            <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full -z-10" />
          </m.div>
        </div>
      </LazyMotion>
    </section>
  )
}