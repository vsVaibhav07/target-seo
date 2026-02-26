'use client'

import { useEffect, useRef } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
import { 
  Search, Share2, Network, Mic, Code2, 
  Palette, Brain, MessageSquare, Zap, ArrowUpRight 
} from 'lucide-react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ResultsCinematic from './result'

gsap.registerPlugin(ScrollTrigger)

// Updated Services Data from your array
const services = [
  { title: "Search Engine Optimization", slug: "seo", desc: "Dominate organic search with semantic authority and high-performance technical frameworks.", icon: Search, image: "/images/seo-service.jpg", accent: "#ea580c", bgColor: "#0f172a" },
  { title: "Social Media Marketing", slug: "smo", desc: "Transform your social footprint into a community-driven revenue engine through viral storytelling.", icon: Share2, image: "/images/smo-service.avif", accent: "#2563eb", bgColor: "#022c22" },
  { title: "Generative Engine Optimization", slug: "geo", desc: "Ensure your brand is the primary citation for AI engines like Perplexity, ChatGPT, and SGE.", icon: Network, image: "/images/geo-service.jpg", accent: "#06b6d4", bgColor: "#083344" },
  { title: "Answer Engine Optimization", slug: "aeo", desc: "Win the 'Zero-Click' search era by optimizing for voice intent and direct featured snippets.", icon: Mic, image: "/images/aeo-service.jpg", accent: "#f43f5e", bgColor: "#450a0a" },
  { title: "Web Development", slug: "web-development", desc: "Building high-performance, scalable web applications with cutting-edge tech stacks.", icon: Code2, image: "/images/web-dev-service.avif", accent: "#3b82f6", bgColor: "#020617" },
  { title: "UI/UX & Web Design", slug: "web-design", desc: "Crafting visually stunning, user-centric interfaces that blend aesthetic excellence with conversion.", icon: Palette, image: "/images/web-design-service.jpg", accent: "#8b5cf6", bgColor: "#1e1b4b" },
  { title: "LLM & AI Optimization", slug: "llmo", desc: "Strategic content engineering to influence how Large Language Models perceive and rank your brand.", icon: Brain, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995", accent: "#9333ea", bgColor: "#1e1b4b" },
  { title: "Content Marketing", slug: "content-marketing", desc: "Building sustainable domain authority through high-signal, authoritative editorial assets.", icon: MessageSquare, image: "https://images.unsplash.com/photo-1552664730-d307ca884978", accent: "#f59e0b", bgColor: "#451a03" },
  { title: "Performance Marketing", slug: "ppc", desc: "Aggressive, data-backed ad campaigns engineered for maximum ROAS and rapid scaling.", icon: Zap, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", accent: "#10b981", bgColor: "#064e3b" }
];

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
      gsap.fromTo(letters,
        { 
          opacity: 0, 
          y: (i) => (i % 2 === 0 ? 80 : -80), 
          filter: 'blur(15px)',
          scale: 0.9,
        },
        {
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          scale: 1,
          duration: 1,
          stagger: 0.03,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 90%',
            toggleActions: 'restart none none reverse', 
          }
        }
      )
    }, headingRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <section ref={containerRef} className="relative min-h-[400vh] lg:min-h-[250vh] bg-slate-50">
        <div className="sticky top-0 flex min-h-screen w-full flex-col justify-center overflow-hidden py-20">
          <div className="container mx-auto px-6 lg:px-20">
            
            {/* Heading Section */}
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 
                  ref={headingRef} 
                  className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.8] tracking-tighter uppercase"
                >
                  {["Core", "SEO", "Services"].map((word, wordIdx) => (
                    <span key={wordIdx} className="inline-block font-dancing mr-4 whitespace-nowrap">
                      {word.split('').map((char, charIdx) => (
                        <span 
                          key={charIdx} 
                          className={`char inline-block ${word === "SEO" ? "text-accent" : ""}`}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  ))}
                </h2>
                <m.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-slate-500 text-lg md:text-xl mt-6 font-medium max-w-lg leading-tight"
                >
                  Precision SEO services that scale your revenue, not just your traffic.
                </m.p>
              </div>
              <div className="hidden md:block text-right">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Total Solutions</span>
                <p className="text-4xl font-black text-slate-900">09</p>
              </div>
            </div>

            {/* Grid Layout - Responsive 3 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {services.map((service, i) => {
                // Parallax card effect
                const cardY = useTransform(scrollYProgress, [0, 1], [0, (i + 1) * -40])
                const opacity = useTransform(scrollYProgress, [0.95, 1], [1, 0])

                return (
                  <m.div key={i} style={{ y: cardY, opacity }}>
                    <Link 
                      href={`/services/${service.slug}`} 
                      className="group relative my-4 block aspect-[16/10] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl transition-all border border-slate-200"
                      style={{ backgroundColor: service.bgColor }}
                    >
                      {/* Image Layer */}
                      <img 
                        src={service.image} 
                        className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" 
                        alt={service.title}
                      />
                      
                      {/* Gradient Overlay based on accent color */}
                      <div 
                        className="absolute inset-0 opacity-80 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ background: `linear-gradient(to top, ${service.bgColor}, transparent)` }}
                      />
                      
                      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white z-10">
                        <div className="flex justify-between items-start">
                          <div 
                            className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border border-white/10 backdrop-blur-md transition-transform duration-500 group-hover:-rotate-12"
                            style={{ backgroundColor: service.accent }}
                          >
                            <service.icon size={24} />
                          </div>
                          <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0" />
                        </div>

                        <div>
                          <h3 className="text-xl md:text-2xl font-black tracking-tighter mb-3 leading-none uppercase italic group-hover:not-italic transition-all">
                            {service.title}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-300 line-clamp-2 font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                      
                      {/* Hover Border Accent */}
                      <div 
                        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700"
                        style={{ backgroundColor: service.accent }}
                      />
                    </Link>
                  </m.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* NEXT OVERLAPPING SECTION */}
      <section className="relative z-50 -mt-20 min-h-screen bg-[#020617] rounded-t-[3rem] md:rounded-t-[5rem] shadow-[0_-50px_100px_rgba(0,0,0,0.4)]">
        <ResultsCinematic/>
      </section>
    </>
  )
}