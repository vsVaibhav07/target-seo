'use client'
import { useScroll, useTransform, m, LazyMotion, domAnimation, useSpring } from 'framer-motion'
import { Home, Layers, Scale, ShoppingCart, Stethoscope } from 'lucide-react'
import { useRef } from 'react'

const industries = [
  { 
    name: 'Law Firms', 
    icon: Scale, 
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800' 
  },
  { 
    name: 'Healthcare', 
    icon: Stethoscope, 
    img: 'https://images.unsplash.com/photo-1538108197017-c13466739397?q=80&w=800' 
  },
  { 
    name: 'Home Services', 
    icon: Home, 
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800' 
  },
  { 
    name: 'E-commerce', 
    icon: ShoppingCart, 
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800' 
  },
  { 
    name: 'B2B & SaaS', 
    icon: Layers, 
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800' 
  }
]

export default function CarouselIndustries() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["start start", "end end"] 
  })

  // Smooth out the scroll progress for a premium feel
  const smoothX = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <LazyMotion features={domAnimation}>
      <section ref={targetRef} className="relative h-[400vh] bg-[#f8f9fa]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* Main Track */}
          <m.div 
            style={{ x: smoothX }} 
            className="flex gap-[10vw] px-[10vw] items-center perspective-1000"
          >
            {/* Intro Content */}
            <div className="flex flex-shrink-0 flex-col justify-center w-[40vw]">
              <m.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-orange-500 font-bold uppercase tracking-widest mb-4"
              >
                Our Expertise
              </m.span>
              <h2 className="text-7xl md:text-8xl font-black text-slate-900 leading-[0.9]">
                Who We <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                  Empower
                </span>
              </h2>
              <p className="mt-8 text-slate-500 text-xl max-w-md">
                We specialize in high-growth industries that demand precision and scale.
              </p>
            </div>

            {/* Industry Cards */}
            {industries.map((ind, i) => (
              <IndustryCard key={ind.name} ind={ind} i={i} scrollYProgress={scrollYProgress} />
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  )
}

function IndustryCard({ ind, i, scrollYProgress }: any) {
  const cardRef = useRef(null)
  
  // Calculate relative progress for this specific card based on its position in the array
  const start = 0.1 + (i * 0.15)
  const end = start + 0.3
  
  // Depth effects
  const rotateY = useTransform(scrollYProgress, [start, end], [15, -15])
  const scale = useTransform(scrollYProgress, [start, (start + end) / 2, end], [0.9, 1.05, 0.9])
  
  // Internal parallax (image moves slower than card)
  const imgX = useTransform(scrollYProgress, [start, end], ["-10%", "10%"])

  return (
    <m.div 
      ref={cardRef}
      style={{ 
        rotateY,
        scale,
        transformStyle: "preserve-3d" 
      }}
      className="relative flex-shrink-0 w-[350px] md:w-[450px] h-[550px] rounded-[2.5rem] bg-slate-900 overflow-hidden group shadow-2xl transition-shadow duration-500 hover:shadow-orange-500/10"
    >
      {/* Parallax Background Image */}
      <m.div style={{ x: imgX }} className="absolute inset-0 w-[120%] h-full">
        <img 
          src={ind.img} 
          className="h-full w-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" 
          alt={ind.name} 
        />
      </m.div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/80" />

      {/* Content Layer */}
      <div className="absolute inset-0 p-12 flex flex-col justify-end translate-z-20">
        <m.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="mb-6 w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-lg"
        >
          <ind.icon size={32} />
        </m.div>
        
        <h3 className="text-4xl font-bold text-white mb-2">{ind.name}</h3>
        <div className="h-1 w-12 bg-orange-500 rounded-full group-hover:w-full transition-all duration-500" />
        
        <p className="text-white/0 group-hover:text-white/70 transition-all duration-500 mt-4 text-sm uppercase tracking-widest">
          View Case Study →
        </p>
      </div>
    </m.div>
  )
}