'use client'

import { m, Variants, LazyMotion, domAnimation, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

// --- Re-triggerable Animations ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const slowWipeVariants: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
  }
}

const simpleReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, delay: 0.8 } 
  }
}

const wordHover: Variants = {
  hover: {
    y: -3,
    scale: 1.05,
    color: "#f97316", 
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
}

const buttonAdvanced: Variants = {
  hidden: { scale: 0.9, opacity: 0, y: 20 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15, delay: 1 }
  }
}

export default function Hero() {
  const line1 = "We Help Businesses Rank Higher,"
  const line2 = "Get More Leads & Grow Revenue"
  
  const containerRef = useRef<HTMLDivElement>(null)
  const [radius, setRadius] = useState(300)

  // Responsive Radius logic
  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 160 : 300)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const rotationRaw = useTransform(scrollYProgress, [0, 1], [0, -360])
  const rotation = useSpring(rotationRaw, { stiffness: 40, damping: 20 })

  const images = [
    '/marketing.webp', '/seoImage1.webp', '/seo2.webp', '/social.webp',
    '/startup.webp', '/webAnalysis.webp', '/seo.webp', '/webAnalysis.webp'
  ];

  return (
    <section ref={containerRef} className="relative h-[300vh] md:h-[400vh] bg-black overflow-clip">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center py-10">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="block w-full h-full object-cover opacity-40">
            <source src="/heroBG.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black md:bg-gradient-to-r md:from-black md:via-black/80 md:to-transparent" />
        </div>

        <LazyMotion features={domAnimation}>
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center w-full">
            
            {/* LEFT CONTENT - Triggered on view */}
            <m.div 
              variants={containerVariants} 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} // Re-triggers whenever 30% of hero is in view
              className="text-center lg:text-left pt-16 lg:pt-0"
            >
              <h1 className="text-3xl sm:text-5xl  font-(family-name:--font-dancing)  font-black leading-[1.1] mb-6 text-white tracking-tight">
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-[0.2em] mb-1">
                  {line1.split(" ").map((word, i) => (
                    <m.span key={i} variants={slowWipeVariants} className="inline-block">
                      <m.span whileHover="hover" variants={wordHover} className="inline-block cursor-default">{word}</m.span>
                    </m.span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-[0.2em]">
                  {line2.split(" ").map((word, i) => (
                    <m.span key={i} variants={slowWipeVariants} className="inline-block">
                      <m.span whileHover="hover" variants={wordHover} className={`inline-block cursor-default ${word.includes('Revenue') || word.includes('Leads') ? 'text-orange-500' : ''}`}>{word}</m.span>
                    </m.span>
                  ))}
                </div>
              </h1>

              <m.div variants={simpleReveal}>
                <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  ROI-driven SEO strategies for local and national businesses. 
                  <span className="font-bold text-white"> No fluff. Just results.</span>
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-6">
                  <m.div variants={buttonAdvanced} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/rebrand-solution" className="group relative inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] transition-all text-lg w-full sm:w-auto">
                      Get Free SEO Audit
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </m.div>

                  <m.div variants={buttonAdvanced} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/case-studies" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 backdrop-blur-md transition-all text-lg w-full sm:w-auto">
                      View Case Studies
                    </Link>
                  </m.div>
                </div>
              </m.div>
            </m.div>

            {/* RIGHT SIDE: CAROUSEL */}
            <m.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-[350px] sm:h-[450px] lg:h-[500px] w-full flex items-center justify-center perspective-[1500px] lg:perspective-[2000px]"
            >
              <div className="absolute w-48 h-48 bg-orange-600/30 blur-[100px] rounded-full" />
              
              <m.div 
                style={{ rotateY: rotation, transformStyle: "preserve-3d" }}
                className="relative w-[160px] h-[240px] sm:w-[200px] gap-4 sm:h-[280px] lg:w-[220px] lg:h-[320px]"
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
                      <ItemCard src={src} rotation={rotation} angle={angle} />
                    </m.div>
                  )
                })}
              </m.div>
            </m.div>
          </div>
        </LazyMotion>
      </div>
    </section>
  )
}

function ItemCard({ src, rotation, angle }: { src: string, rotation: MotionValue<number>, angle: number }) {
  const scale = useTransform(rotation, (r: number) => {
    const totalRotation = (r + angle) % 360
    const normalized = Math.abs(totalRotation > 180 ? totalRotation - 360 : totalRotation)
    return 1.1 - (normalized / 180) * 0.5
  })

  const yOffset = useTransform(rotation, (r: number) => {
    const totalRotation = (r + angle) % 360
    const normalized = Math.abs(totalRotation > 180 ? totalRotation - 360 : totalRotation)
    return (normalized / 180) * 40 - 20
  })

  const opacity = useTransform(scale, [0.6, 1.1], [0.2, 1])

  return (
    <m.div 
      style={{ scale, opacity, y: yOffset }}
      className="relative w-[75%] sm:w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
    >
      <Image 
        src={src} 
        alt="Portfolio Item" 
        fill 
        className="object-cover w-10 sm:w-auto"
        sizes="(max-width: 768px) 160px, 220px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
    </m.div>
  )
}