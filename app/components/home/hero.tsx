'use client'

import { m, Variants, LazyMotion, domAnimation, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

// --- Animations Restored ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 }
  }
}

const slowWipeVariants: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] }
  }
}

const simpleReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 } }
}

const wordHover: Variants = {
  hover: {
    y: -3,
    scale: 1.05,
    color: "#ea580c", 
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
}

const buttonAdvanced: Variants = {
  hidden: { scale: 0, opacity: 0, y: 20 },
  visible: { 
    scale: 1, opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 260, damping: 20, delay: 1.8 }
  }
}

export default function Hero() {
  const line1 = "We Help Businesses Rank Higher,"
  const line2 = "Get More Leads & Grow Revenue"
  
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Rotation logic
  const rotationRaw = useTransform(scrollYProgress, [0, 1], [0, -360])
  const rotation = useSpring(rotationRaw, { stiffness: 40, damping: 20 })

  const images = [
    '/marketing.jpg',
  '/seoImage1.jpg',
  '/seo2.jpg',
  '/social.jpg',
  '/startup.jpg',
  '/webAnalysis.jpg',
  '/seo.png',
  '/webAnalysis.jpg'
];
  const radius =300 

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black overflow-clip">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="block w-full h-full object-cover opacity-60">
            <source src="/heroBG.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <LazyMotion features={domAnimation}>
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center w-full">
            
            {/* LEFT CONTENT */}
            <m.div variants={containerVariants} initial="hidden" animate="visible" className="will-change-transform">
              <h1 className="text-4xl sm:text-6xl lg:text-4xl font-black leading-[1.05] mb-6 text-white">
                <div className="flex flex-wrap gap-x-[0.25em] mb-2">
                  {line1.split(" ").map((word, i) => (
                    <m.span key={i} variants={slowWipeVariants} className="inline-block">
                      <m.span whileHover="hover" variants={wordHover} className="inline-block cursor-default">{word}</m.span>
                    </m.span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-[0.35em]">
                  {line2.split(" ").map((word, i) => (
                    <m.span key={i} variants={slowWipeVariants} className="inline-block">
                      <m.span whileHover="hover" variants={wordHover} className={`inline-block cursor-default ${word.includes('Revenue') || word.includes('Leads') ? 'text-orange-600' : ''}`}>{word}</m.span>
                    </m.span>
                  ))}
                </div>
              </h1>

              <m.div variants={simpleReveal}>
                <p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                  ROI-driven SEO strategies for local and national businesses. 
                  <span className="font-bold text-white"> No fluff. Just results.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-5 mb-10">
                  <m.div variants={buttonAdvanced} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/free-audit" className="group inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-10 py-5 rounded-xl font-bold shadow-2xl shadow-orange-600/40 hover:bg-orange-500 transition-colors text-lg w-full sm:w-auto">
                      Get Free SEO Audit
                      <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </m.div>

                  <m.div variants={buttonAdvanced} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/case-studies" className="inline-flex items-center justify-center px-10 py-5 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 backdrop-blur-sm transition-colors text-lg w-full sm:w-auto">View Case Studies</Link>
                  </m.div>
                </div>
              </m.div>
            </m.div>

            {/* RIGHT SIDE: FIXED CAROUSEL */}
            <div className="relative h-[500px] w-full flex items-center justify-center perspective-[2000px]">
              {/* Central Glow */}
              <div className="absolute w-64 h-64 bg-orange-600/20 blur-[100px] rounded-full" />
              
              <m.div 
                style={{ rotateY: rotation, transformStyle: "preserve-3d" }}
                className="relative w-[220px] h-[320px]"
              >
                {images.map((src, i) => {
                  const angle = (i * 360) / images.length
                  
                  return (
                    <m.div
                      key={i}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                        backfaceVisibility: "hidden",
                        transformStyle: "preserve-3d"
                      }}
                    >
                      {/* Inner m.div handles the scaling relative to rotation */}
                      <ItemCard src={src} rotation={rotation} angle={angle} />
                    </m.div>
                  )
                })}
              </m.div>
            </div>
          </div>
        </LazyMotion>
      </div>
    </section>
  )
}

// Separate component for the card to handle per-frame scaling efficiently
function ItemCard({ src, rotation, angle }: { src: string, rotation: any, angle: number }) {
  // UseTransform for the scale of each individual card
  const scale = useTransform(rotation, (r) => {
    // Logic: Calculate if this specific card is facing front
    const totalRotation = (r + angle) % 360
    const normalized = Math.abs(totalRotation > 180 ? totalRotation - 360 : totalRotation)
    // Scale from 1.15 (front) to 0.6 (back)
    return 1.15 - (normalized / 180) * 0.55
  })

  // Also adding opacity for more depth
  const opacity = useTransform(scale, [0.6, 1.15], [0.3, 1])

  return (
    <m.div 
      style={{ scale, opacity }}
      className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
    >
      <Image 
        src={src} 
        alt="Portfolio" 
        fill 
        className="object-cover"
        sizes="220px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    </m.div>
  )
}