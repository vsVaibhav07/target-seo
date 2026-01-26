'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { TrendingUp, Lightbulb } from 'lucide-react'
import { useRef, useEffect } from 'react'
import Lenis from 'lenis' // Corrected import
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Sub-components
import DeepParallaxIndustries from './industriensWithParallax'
import CarouselIndustries from './pinnedIndustries'
import SectionTitle from '../common/sectionTitle'

gsap.registerPlugin(ScrollTrigger)

const cases = [
  {
    industry: 'Local Service Business',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop',
    problem: 'No organic leads & visibility',
    solution: 'Local SEO + GMB optimization',
    results: ['+220% organic traffic', 'Top 3 rankings in 60 days'],
  },
  {
    industry: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000&auto=format&fit=crop',
    problem: 'High traffic, low conversions',
    solution: 'Technical SEO + content optimization',
    results: ['+140% revenue growth', '+35% conversion rate'],
  },
  {
    industry: 'SaaS / B2B',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
    problem: 'Low authority & visibility',
    solution: 'Content SEO + backlinks',
    results: ['120+ keywords ranked', '3x demo signups'],
  },
]

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-66.66%'])
  const img2Y = useTransform(scrollYProgress, [0.25, 0.50], ['-100%', '0%'])
  const img3Y = useTransform(scrollYProgress, [0.65, 0.9], ['100%', '0%'])

  return (
    <div className="relative bg-[#020617]">
      <div ref={containerRef} className="relative h-[250vh] lg:h-[1500vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:grid lg:grid-cols-2">
          
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.1),transparent_50%)]" />
          </div>

          <div className="relative h-[45vh] lg:h-[90%] w-full flex items-center justify-center p-6 lg:p-16 z-20">
            <div className="relative h-full lg:m-10 lg:my-20 w-full max-w-2xl overflow-hidden rounded-3xl lg:rounded-[3rem] border border-white/10 bg-slate-900 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0">
                <img src={cases[0].image} className="absolute inset-0 h-full w-full object-cover" alt="Case 01" />
                <motion.div style={{ y: img2Y }} className="absolute inset-0 z-10">
                  <img src={cases[1].image} className="h-full w-full object-cover shadow-[0_-10px_40px_rgba(0,0,0,0.8)]" alt="Case 02" />
                </motion.div>
                <motion.div style={{ y: img3Y }} className="absolute inset-0 z-20">
                  <img src={cases[2].image} className="h-full w-full object-cover shadow-[0_-10px_40px_rgba(0,0,0,0.8)]" alt="Case 03" />
                </motion.div>
              </div>
              <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="relative h-[55vh] lg:h-[120%]  overflow-hidden px-6 md:px-20 z-10">
            <motion.div style={{ y: textY }} className="flex pb-20 lg:pb-40  flex-col">
              {cases.map((item, index) => (
                <section key={index} className="flex h-[55vh] my-4 lg:h-screen flex-col justify-center py-8 lg:py-20">
                  
                  
                  <SectionTitle text={item.problem} badgeText={item.industry} />
                  <div className="space-y-4 lg:space-y-8 max-w-xl">
                    <div className="flex gap-4">
                      <div className="shrink-0 flex h-8 w-8 lg:h-12 lg:w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <Lightbulb className="text-orange-400" size={20} />
                      </div>
                      <div>
                        <p className="mb-1 text-[10px] lg:text-xs font-bold uppercase tracking-widest text-slate-500">Strategy Applied</p>
                        <p className="text-sm lg:text-xl text-slate-300 font-medium">{item.solution}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 lg:gap-4 border-t border-white/10 pt-4 lg:pt-8">
                      {item.results.map((r, i) => (
                        <div key={i} className="flex items-center gap-3 text-lg lg:text-3xl font-black text-emerald-400 tracking-tight">
                          <TrendingUp className="text-emerald-500" size={24} />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <section className="relative z-40 lg:-mt-[40vh] min-h-screen bg-white shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="relative z-50">
           <CarouselIndustries />
           <DeepParallaxIndustries />
        </div>
      </section>
    </div>
  )
}