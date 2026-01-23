'use client'

import { m,useScroll, useTransform, Variants } from 'framer-motion'
import { Brain, PhoneCall, Search, TrendingUp } from 'lucide-react'
import { Dancing_Script } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'], // Fixed weight
  display: 'swap'
})

const items = [
  { title: 'ROI-Focused SEO', icon: TrendingUp },
  { title: 'Transparent Reporting', icon: Search },
  { title: 'Industry-Specific Strategies', icon: Brain },
  { title: 'Dedicated SEO Manager', icon: PhoneCall }
]

// Fixed: Title ko array mein rakha taaki .map chal sake
const titleWords = ['Why', 'Target', 'SEO', 'Solutions']

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  // Added: missing titleVariants with strict typing
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
    <section
      ref={sectionRef}
      className="relative h-[300vh] cursor-none overflow-clip"
    >
      {/* --- Custom Cursor --- */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-50 h-10 w-10 -ml-5 -mt-5 rounded-full border-2 border-orange-500 flex items-center justify-center transition-transform duration-100 ease-out hidden md:flex"
      >
        <m.div
          animate={{
            scale: isHovered ? 1.8 : 1,
            backgroundColor: isHovered ? 'rgba(249, 115, 22, 0.2)' : 'transparent',
          }}
          className="h-full w-full rounded-full flex items-center justify-center"
        />
      </div>

      {/* --- Sticky container --- */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)]" />

        <m.div style={{ x }} className="flex h-full w-[200vw]">
          
          {/* --- Screen 1: Heading Animation --- */}
          <div className="flex h-full w-screen flex-shrink-0 flex-col items-center justify-center px-4">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 md:gap-8">
              {titleWords.map((word, i) => (
                <div key={i} className="overflow-visible py-2"> 
                  <m.span
                    custom={i}
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className={`${dancingScript.className} block whitespace-nowrap text-7xl sm:text-8xl md:text-8xl font-bold leading-tight ${word === 'SEO' ? 'text-orange-500' : 'text-white'}`}
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

          {/* --- Screen 2: Cards Grid Animation --- */}
          <div className="flex h-full w-[100vw] md:px-40 lg:px-52 items-center justify-center px-6 sm:px-10">
            <div className="mx-auto grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
              {items.map(({ title, icon: Icon }, i) => (
                <m.div
                  key={title}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ 
                    delay: i * 0.1, 
                    duration: 0.5, 
                    ease: "easeOut" 
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800/50 p-6 md:p-8 shadow-xl backdrop-blur-md"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent" />
                  
                  <div className="relative z-10 flex items-center gap-5">
                    <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-inner">
                      <Icon size={24} className="md:w-7 md:h-7" />
                    </div>
                    <p className="text-lg md:text-xl font-semibold text-white tracking-tight group-hover:text-orange-50 transition-colors">
                      {title}
                    </p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
          
        </m.div>
      </div>
    </section>
  )
}