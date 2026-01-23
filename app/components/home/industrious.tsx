'use client'
import { useScroll, useTransform, m } from 'framer-motion'
import { Home, Layers, Scale, ShoppingCart, Stethoscope } from 'lucide-react'
import { useRef } from 'react'

const industries = [
  { name: 'Law Firms', icon: Scale },
  { name: 'Healthcare', icon: Stethoscope },
  { name: 'Home Services', icon: Home },
  { name: 'E-commerce', icon: ShoppingCart },
  { name: 'B2B & SaaS', icon: Layers }
]

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-white overflow-clip">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <m.div style={{ x }} className="flex w-[200vw] h-full items-center">
          
          <div className="flex h-full w-screen flex-shrink-0 flex-col items-center justify-center bg-slate-50">
            <h2 className="flex flex-col lg:flex-row font-[family-name:var(--font-dancing)] items-center gap-4 text-7xl md:text-9xl font-bold text-slate-900">
              <span>Industries</span>
              <span>We</span>
              <span className="text-orange-500 ">Serve</span>
            </h2>
            <p className="mt-8 text-slate-400 uppercase tracking-widest text-sm">Scroll to explore</p>
          </div>

          <div className="flex h-full w-screen shrink-0 items-center justify-center px-10 bg-white">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-7xl">
              {industries.map((ind, i) => (
                <m.div 
                  key={ind.name}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center text-center bg-white transition-shadow hover:shadow-xl"
                >
                  <div className="mb-4 p-4 rounded-2xl bg-orange-50 text-orange-600">
                    <ind.icon size={32} />
                  </div>
                  <span className="font-bold text-slate-800">{ind.name}</span>
                </m.div>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}