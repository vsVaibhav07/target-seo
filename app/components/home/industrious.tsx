'use client'

import { useScroll, useTransform, Variants,m } from 'framer-motion'
import {
  Home,
  Layers,
  Scale,
  ShoppingCart,
  Stethoscope
} from 'lucide-react'
import { Dancing_Script } from 'next/font/google'
import { useRef } from 'react'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

const industries = [
  { name: 'Law Firms', icon: Scale },
  { name: 'Healthcare', icon: Stethoscope },
  { name: 'Home Services', icon: Home },
  { name: 'E-commerce', icon: ShoppingCart },
  { name: 'B2B & SaaS', icon: Layers }
]

const titleWords = ['Industries', 'We', 'Serve']

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  // Horizontal Movement: 0% to -50%
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  // Animation Variants
  const titleVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1] as const,
      }
    })
  }

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-white overflow-clip">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <m.div style={{ x }} className="flex w-[200vw] h-full items-center">
          
          {/* --- Screen 1: Animated Heading (Light Theme) --- */}
          <div className="flex h-full w-screen flex-shrink-0 flex-col items-center justify-center px-4 bg-slate-50">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 md:gap-8">
              {titleWords.map((word, i) => (
                <div key={i} className="overflow-visible py-2">
                  <m.span
                    custom={i}
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className={`${dancingScript.className} block whitespace-nowrap text-7xl sm:text-8xl md:text-9xl font-bold leading-tight ${word === 'Serve' ? 'text-orange-500' : 'text-slate-900'}`}
                  >
                    {word}
                  </m.span>
                </div>
              ))}
            </div>
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 text-slate-400 text-sm font-medium uppercase tracking-widest"
            >
              Scroll to explore
            </m.div>
          </div>

          {/* --- Screen 2: Compact Industry Cards --- */}
          <div className="flex h-full w-screen flex-shrink-0 items-center justify-center px-6 md:px-20 bg-white">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 w-full max-w-7xl">
              {industries.map((industry, i) => {
                const Icon = industry.icon
                return (
                  <m.div
                    key={industry.name}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover="hover"
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: false }}
                    className="group relative flex flex-col items-center justify-center aspect-square rounded-[2rem] bg-white border border-slate-100 p-6 shadow-sm overflow-hidden"
                  >
                    {/* Hover Background Expansion */}
                    <m.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600"
                      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                      variants={{
                        hover: { clipPath: 'circle(150% at 50% 50%)' }
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />

                    {/* Rotating Icon Container */}
                    <m.div 
                      variants={{
                        hover: { rotate: 360, scale: 1.1 }
                      }}
                      transition={{ type: "spring", stiffness: 150, damping: 15 }}
                      className="relative z-10 mb-3 p-4 rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-white/20 group-hover:text-white transition-all duration-300 shadow-inner"
                    >
                      <Icon size={28} strokeWidth={1.5} />
                    </m.div>

                    {/* Industry Label */}
                    <m.span 
                      className="relative z-10 text-center font-bold text-slate-700 group-hover:text-white transition-colors text-xs md:text-sm"
                    >
                      {industry.name}
                    </m.span>

                    {/* Subtle bottom accent line */}
                    <div className="absolute bottom-3 w-4 h-0.5 bg-orange-500/20 rounded-full group-hover:bg-white group-hover:w-8 transition-all duration-500" />
                  </m.div>
                )
              })}
            </div>
          </div>
          
        </m.div>
      </div>
    </section>
  )
}