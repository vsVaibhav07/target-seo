'use client'

import { m, useScroll, useTransform } from 'framer-motion'
import { Brain, PhoneCall, Search, TrendingUp } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import SectionTitle from '../common/sectionTitle'

const items = [
  { title: 'ROI-Focused SEO', icon: TrendingUp, desc: 'We don’t just rank keywords; we drive revenue growth.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500' },
  { title: 'Transparent Reporting', icon: Search, desc: 'Real-time dashboards showing exactly where your money goes.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500' },
  { title: 'Industry Specific', icon: Brain, desc: 'Tailored blueprints for SaaS, E-commerce, and Local niches.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500' },
  { title: 'Dedicated Manager', icon: PhoneCall, desc: 'A direct line to an expert, not a support ticket queue.', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=500' }
]

export default function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const yDesktop1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const yDesktop2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const yMobile = useTransform(scrollYProgress, [0, 1], [0, -60])
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2])

  return (
    <section ref={containerRef} className="relative py-20 md:py-28 bg-[#020617] overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-orange-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <m.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm">
            The Advantage
          </m.span>
          <SectionTitle text='Why Target SEO' />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
          {items.map((item, i) => {
            const isEven = i % 2 === 0
            const yValue = isMobile ? yMobile : (isEven ? yDesktop1 : yDesktop2)

            return (
              <m.div
                key={i}
                style={{ y: yValue, rotateX: rotate }}
                className="group relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-slate-900/50 border border-white/5 backdrop-blur-xl overflow-hidden"
              >
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale" />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-5 md:mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-base md:text-lg">{item.desc}</p>
                </div>

                <div className="absolute bottom-0 right-0 p-6 md:p-8 opacity-10 text-white font-black text-6xl md:text-8xl italic select-none">
                  0{i + 1}
                </div>
              </m.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
