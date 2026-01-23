'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Settings, FileText, PenTool, Link2, LineChart } from 'lucide-react'
import { Dancing_Script } from 'next/font/google'
import { useRef, useEffect, useState } from 'react'

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

const services = [
  { title: 'Local SEO', icon: MapPin },
  { title: 'Technical SEO', icon: Settings },
  { title: 'On-Page SEO', icon: FileText },
  { title: 'Content Marketing', icon: PenTool },
  { title: 'Link Building', icon: Link2 },
  { title: 'SEO Consulting', icon: LineChart }
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const springConfig = { damping: 25, stiffness: 300 }
  const cursorX = useSpring(mousePos.x, springConfig)
  const cursorY = useSpring(mousePos.y, springConfig)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  const titleVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    })
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.2,
        ease: "easeOut",
      }
    })
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative h-[300vh] bg-slate-50"
      style={{ perspective: "1200px" }}
    >
      {/* --- Custom Cursor --- */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9999] border-2 border-orange-500 flex items-center justify-center bg-orange-500/10 hidden md:flex"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "rgba(249, 115, 22, 1)" : "rgba(249, 115, 22, 0.1)",
        }}
      />

      {/* --- Sticky Content --- */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[200vw] h-full items-center">
          
          {/* Screen 1: Heading - Enhanced Visibility */}
          <div className="flex h-full w-screen flex-shrink-0 flex-col items-center justify-center px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
              {["Core", "SEO", "Services"].map((word, i) => (
                <div key={i} className="overflow-visible py-2"> 
                  <motion.span
                    custom={i}
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className={`${dancing.className} block whitespace-nowrap text-7xl sm:text-8xl md:text-9xl font-bold leading-tight ${word === 'SEO' ? 'text-orange-500' : 'text-slate-900'}`}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </div>
            {/* Added a small indicator for the user to scroll */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 text-slate-400 text-sm font-medium uppercase tracking-widest"
            >
              Scroll to explore
            </motion.div>
          </div>

          {/* Screen 2: Cards Grid */}
          <div className="flex h-full w-screen flex-shrink-0 items-center justify-center px-6 md:px-20">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full max-w-5xl">
              {services.map((service, i) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="flex justify-center "
                  >
                    <Link
                      href="/services"
                      className="group relative flex flex-col items-center justify-center w-full aspect-square max-w-[200px] rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 hover:shadow-orange-200/60 transition-all duration-500 hover:bg-orange-400  overflow-hidden border border-slate-100"
                    >
                      <motion.div 
                        className="absolute inset-0 bg-orange-500"
                        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                        whileHover={{ clipPath: 'circle(150% at 50% 50%)' }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      <div className="relative z-10 mb-3 text-orange-500 group-hover:text-white transition-transform duration-500 group-hover:scale-110">
                        <Icon className="w-10 h-10 md:w-12 md:h-12" />
                      </div>
                      <h3 className="relative text-center z-10 text-xs sm:text-sm md:text-lg font-bold text-slate-800 group-hover:text-white px-2">
                        {service.title}
                      </h3>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  )
}