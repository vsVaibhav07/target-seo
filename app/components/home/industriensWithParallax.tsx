'use client'
import { useScroll, useTransform, m, useSpring } from 'framer-motion'
import { Home, Layers, Scale, ShoppingCart, Stethoscope } from 'lucide-react'
import { useRef } from 'react'

const industries = [
  { name: 'Law Firms', icon: Scale, color: 'bg-blue-500', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500' },
  { name: 'Healthcare', icon: Stethoscope, color: 'bg-emerald-500', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' },
  { name: 'Home Services', icon: Home, color: 'bg-orange-500', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500' },
  { name: 'E-commerce', icon: ShoppingCart, color: 'bg-purple-500', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=500' },
  { name: 'B2B & SaaS', icon: Layers, color: 'bg-slate-800', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500' }
]

export default function DeepParallaxIndustries() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const textY = useTransform(smoothProgress, [0, 1], ["0%", "200%"])
  const textOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0])

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-slate-950 overflow-clip">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Decorative Text */}
        <m.h2 
          style={{ y: textY, opacity: textOpacity }}
          className="absolute text-[20vw] font-black text-white/5 whitespace-nowrap select-none"
        >
          EXPERTISE
        </m.h2>

        <div className="relative w-full max-w-7xl h-[600px] perspective-1000">
          {industries.map((ind, i) => {
            const start = i / industries.length
            const end = (i + 1) / industries.length
            
            // Depth & Movement Calculations
            const z = useTransform(smoothProgress, [start, end], [400, 0])
            const opacity = useTransform(smoothProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0])
            const scale = useTransform(smoothProgress, [start, end], [0.8, 1.1])

            return (
              <m.div
                key={ind.name}
                style={{ zIndex: industries.length - i, opacity, scale, translateZ: z }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="group relative w-full max-w-2xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <img src={ind.img} alt={ind.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-10 left-10 flex items-center gap-6">
                    <div className={`p-5 rounded-2xl ${ind.color} text-white shadow-lg`}>
                      <ind.icon size={40} />
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-white">{ind.name}</h3>
                      <p className="text-white/60 uppercase tracking-tighter">Industry Excellence</p>
                    </div>
                  </div>
                </div>
              </m.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}