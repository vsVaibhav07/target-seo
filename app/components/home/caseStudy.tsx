'use client'

import { useScroll, useTransform, Variants,m } from 'framer-motion'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import { Dancing_Script } from 'next/font/google'
import Link from 'next/link'
import { useRef } from 'react'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

const cases = [
  {
    industry: 'Local Service Business',
    problem: 'No organic leads & visibility',
    solution: 'Local SEO + GMB optimization',
    results: ['+220% organic traffic', 'Top 3 rankings in 60 days']
  },
  {
    industry: 'E-commerce',
    problem: 'High traffic, low conversions',
    solution: 'Technical SEO + content opt.',
    results: ['+140% revenue growth', '+35% conversion rate']
  },
  {
    industry: 'SaaS / B2B',
    problem: 'Low authority & visibility',
    solution: 'Content SEO + backlinks',
    results: ['120+ keywords ranked', '3x demo signups']
  }
]

const titleWords = ['Case','Studies' ]

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

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
    <section ref={sectionRef} className="relative h-[300vh] bg-[#020617] overflow-clip">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05),transparent_70%)]" />

        <m.div style={{ x }} className="flex w-[200vw] h-full items-center">
          
          {/* --- Screen 1: Heading --- */}
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
                    className={`${dancingScript.className} block whitespace-nowrap text-7xl sm:text-8xl md:text-9xl font-bold leading-tight ${word === 'Studies' ? 'text-orange-500' : 'text-white'}`}
                  >
                    {word}
                  </m.span>
                </div>
              ))}
            </div>
          </div>

          {/* --- Screen 2: Compact Case Cards --- */}
          <div className="flex h-full min-h-screen w-screen shrink-0 items-center justify-center px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
              {cases.map((item, i) => (
                <m.div
                  key={item.industry}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover="hover"
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-slate-900/40 border border-slate-800/50 p-6 shadow-xl backdrop-blur-md h-fit"
                >
                  {/* Expanding Hover Background */}
                  <m.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600"
                    initial={{ clipPath: 'circle(0% at 50% 100%)' }}
                    variants={{ hover: { clipPath: 'circle(150% at 50% 100%)' } }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-wider group-hover:bg-white/20 group-hover:text-white transition-all">
                        {item.industry}
                      </span>
                      <ArrowUpRight size={20} className="text-slate-500 group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:translate-x-1 transition-transform">
                      {item.problem}
                    </h3>
                    
                    <p className="text-xs text-slate-400 group-hover:text-orange-50 mb-4 transition-colors">
                      <span className="font-bold text-slate-200 group-hover:text-white">Solution: </span>
                      {item.solution}
                    </p>

                    <div className="pt-4 border-t border-slate-800 group-hover:border-white/10 space-y-2">
                      {item.results.map((result) => (
                        <div key={result} className="flex items-center gap-2 text-emerald-400 group-hover:text-white font-bold text-xs transition-colors">
                          <TrendingUp size={14} />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </m.div>
              ))}
            </div>

            {/* Bottom Floating Link */}
            <div className="absolute bottom-12">
               <Link
                href="/case-studies"
                className="group flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3 text-sm text-white font-bold shadow-lg hover:bg-white hover:text-orange-500 transition-all duration-300"
              >
                View All Case Studies
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}