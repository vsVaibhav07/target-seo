'use client'

import { m, Variants, LazyMotion, domAnimation } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// 1. Parent Container: Slow stagger effect ke liye
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Har word ke beech ka slow gap
      delayChildren: 0.5,
    }
  }
}

// 2. Slow Wipe Reveal: Sirf heading ke words ke liye
const slowWipeVariants: Variants = {
  hidden: { 
    opacity: 0,
    clipPath: 'inset(0 100% 0 0)', 
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 1.2,          // Individual word reveal speed (Slow & Premium)
      ease: [0.25, 1, 0.5, 1], // Quintic ease for butter smoothness
    }
  }
}

// 3. Simple Fade: Paragraph aur Buttons ke liye
const simpleReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, delay: 1.5 } // Heading khatam hone ke baad aayega
  }
}

const floatAnimation: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
}

const wordHover: Variants = {
  hover: {
    y: -3,
    scale: 1.05,
    color: "#ea580c", 
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
}

export default function Hero() {
  const line1 = "We Help Businesses Rank Higher,"
  const line2 = "Get More Leads & Grow Revenue"

  return (
    <section className="relative pt-10 md:pt-20 lg:pt-10 overflow-hidden min-h-[700px] lg:min-h-screen flex items-center bg-black">
      {/* BACKGROUND VIDEOS */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="block w-full h-full object-cover opacity-60"
        >
          <source src="/heroBG.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      <LazyMotion features={domAnimation}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center w-full">
          
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="will-change-transform"
          >
            {/* HEADING with SLOW STAGGERED WIPE */}
            <h1 className="text-4xl sm:text-6xl lg:text-4xl font-black leading-[1.05] mb-6 text-white">
              <div className="flex flex-wrap gap-x-[0.25em] mb-2">
                {line1.split(" ").map((word, i) => (
                  <m.span key={i} variants={slowWipeVariants} className="inline-block">
                    <m.span whileHover="hover" variants={wordHover} className="inline-block cursor-default">
                        {word}
                    </m.span>
                  </m.span>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-[0.35em]">
                {line2.split(" ").map((word, i) => (
                  <m.span 
                    key={i} 
                    variants={slowWipeVariants}
                    className="inline-block"
                  >
                    <m.span 
                       whileHover="hover" 
                       variants={wordHover} 
                       className={`inline-block cursor-default ${word.includes('Revenue') || word.includes('Leads') ? 'text-orange-600' : ''}`}
                    >
                        {word}
                    </m.span>
                  </m.span>
                ))}
              </div>
            </h1>

            {/* Content below Heading (Delayed Reveal) */}
            <m.div variants={simpleReveal}>
              <p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                ROI-driven SEO strategies for local and national businesses. 
                <span className="font-bold text-white"> No fluff. Just results.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-10">
                <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/free-audit"
                    className="group inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-10 py-5 rounded-xl font-bold shadow-2xl shadow-orange-600/40 hover:bg-orange-500 transition-colors text-lg w-full sm:w-auto"
                  >
                    Get Free SEO Audit
                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </m.div>

                <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center px-10 py-5 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 backdrop-blur-sm transition-colors text-lg w-full sm:w-auto"
                  >
                    View Case Studies
                  </Link>
                </m.div>
              </div>

              <p className="flex items-center gap-2 text-slate-400 font-medium">
                <span className="text-orange-500 text-xl">★★★★★</span> 
                <span className="tracking-wide uppercase text-xs font-bold">100+ Clients ROI Focused</span>
              </p>
            </m.div>
          </m.div>

          {/* RIGHT IMAGE SECTION */}
          <m.div 
            className="relative flex items-center justify-center perspective-1000"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
          >
            <m.div
              variants={floatAnimation}
              animate="animate"
              whileHover={{ 
                rotateY: 12, 
                rotateX: -8,
                transition: { duration: 0.4 }
              }}
              className="relative z-10 w-full sm:w-[80%] lg:w-[90%] cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/heroImage.svg"
                alt="SEO growth illustration"
                width={800}
                height={680}
                priority
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(255,255,255,0.12)] scale-110" 
              />
            </m.div>
            <div className="absolute inset-0 bg-orange-600/10 blur-[130px] rounded-full -z-10 animate-pulse" />
          </m.div>
        </div>
      </LazyMotion>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1200px;
        }
      `}</style>
    </section>
  )
}