'use client'

import { useEffect, useRef } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
import { FileText, LineChart, Link2, MapPin, PenTool, Settings, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ResultsCinematic from './result'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { title: "Local SEO", icon: MapPin, color: "bg-blue-600", img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=400" },
  { title: "Technical SEO", icon: Settings, color: "bg-orange-600", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=400" },
  { title: "On-Page SEO", icon: FileText, color: "bg-emerald-600", img: "https://images.unsplash.com/photo-1454165833767-027eeef1593e?q=80&w=400" },
  { title: "Content", icon: PenTool, color: "bg-purple-600", img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=400" },
  { title: "Link Building", icon: Link2, color: "bg-rose-600", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400" },
  { title: "Consulting", icon: LineChart, color: "bg-amber-600", img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=400" },
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    if (!headingRef.current) return
    const letters = headingRef.current.querySelectorAll('.char')

    const ctx = gsap.context(() => {
      // Logic: Index based alternating animation
      gsap.fromTo(letters,
        { 
          opacity: 0, 
          // Alternates: Even indices come from +100px, Odd from -100px
          y: (i) => (i % 2 === 0 ? 120 : -120), 
          filter: 'blur(20px)',
          scale: 0.8,
          rotate: (i) => (i % 2 === 0 ? 10 : -10),
        },
        {
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          scale: 1,
          rotate: 0,
          duration: 1.2,
          stagger: 0.04,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            // 'restart' ensures animation happens everytime it enters screen
            toggleActions: 'restart none none reverse', 
          }
        }
      )
    }, headingRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <section ref={containerRef} className="relative md:h-[300vh] lg:h-[180%] bg-slate-50 ">
        {/* Pinned Sticky Layer */}
        <div className="sticky top-0 flex min-h-screen w-full flex-col justify-center overflow-hidden py-10">
          <div className="container mx-auto px-6 lg:px-20">
            
            {/* Heading Section */}
            <div className="mb-12 md:mb-16">
              <h2 
                ref={headingRef} 
                className="text-6xl sm:text-7xl font-black text-slate-900 leading-[0.85] tracking-tighter"
              >
                {["CORE", "SEO", "SERVICES"].map((word, wordIdx) => (
                  <span key={wordIdx} className="inline-block mr-4 md:mr-8 whitespace-nowrap">
                    {word.split('').map((char, charIdx) => (
                      <span 
                        key={charIdx} 
                        className={`char inline-block font-(family-name:--font-dancing) ${word === "SEO" ? "text-orange-500" : ""}`}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
              </h2>
              <m.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-slate-500 text-lg md:text-2xl mt-8 font-medium max-w-xl"
              >
                Precision SEO services that scale your revenue, not just your traffic.
              </m.p>
            </div>

            {/* Grid with responsive scaling */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 lg:gap-10">
              {services.map((service, i) => {
                // Magical float effect: each card moves at different speed
                const cardY = useTransform(scrollYProgress, [0, 1], [0, (i + 1) * -70])
                const cardScale = useTransform(scrollYProgress, [0.5, 1], [1, 0.75])
                const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0.8])

                return (
                  <m.div key={i} style={{ y: cardY, scale: cardScale, opacity }}>
                    <Link href="/services" className="group relative block aspect-[3/4] sm:aspect-square lg:aspect-[4/5] rounded-3xl m-4 overflow-hidden  shadow-2xl transition-all border border-slate-100">
                      <img 
                        src={service.img} 
                        className="absolute inset-0 w-full h-full object-cover  opacity-60  group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                        alt={service.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent" />
                      
                      <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end text-white">
                        <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl ${service.color} flex items-center justify-center mb-4 shadow-xl border border-white/10 group-hover:rotate-12 transition-transform`}>
                          <service.icon size={24} className="md:w-7 md:h-7" />
                        </div>
                        <h3 className="text-xl md:text-3xl font-bold tracking-tight mb-2 group-hover:text-orange-400 transition-colors">
                          {service.title}
                        </h3>
                        <div className="h-[2px] w-0 group-hover:w-full bg-orange-500 transition-all duration-500" />
                      </div>
                    </Link>
                  </m.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* NEXT OVERLAPPING SECTION */}
      <section className="relative z-50 -mt-40 min-h-screen bg-[#020617] rounded-t-[4rem] shadow-[0_-50px_100px_rgba(0,0,0,0.4)] flex items-center justify-center ">
        <ResultsCinematic/>
      </section>
    </>
  )
}