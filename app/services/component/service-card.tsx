'use client'

import React, { useRef } from 'react'
import { m, useScroll, useTransform, LazyMotion, domAnimation } from 'framer-motion'
import { Search, Share2, Brain, MonitorPlay, Zap, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: "Search Engine Optimization",
    slug: "seo",
    desc: "Dominate search rankings with data-driven on-page and technical SEO strategies.",
    icon: <Search className="w-8 h-8" />,
    color: "from-orange-600 to-red-600",
    pattern: "M0 0h20v20H0z", // Square pattern
  },
  {
    title: "Social Media Marketing",
    slug: "smo",
    desc: "Build a loyal community and boost engagement across all social platforms.",
    icon: <Share2 className="w-8 h-8" />,
    color: "from-blue-600 to-cyan-600",
    pattern: "M10 0l10 20H0z", // Triangle pattern
  },
  {
    title: "LLM Optimization",
    slug: "llmo",
    desc: "Optimize your brand for AI search engines like Perplexity, ChatGPT, and Gemini.",
    icon: <Brain className="w-8 h-8" />,
    color: "from-purple-600 to-pink-600",
    pattern: "M10 10m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0", // Circle pattern
  },
  {
    title: "Performance Marketing",
    slug: "ppc",
    desc: "High-converting ad campaigns that maximize your ROI and minimize ad spend.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-emerald-600 to-teal-600",
    pattern: "M0 10h20M10 0v20", // Plus pattern
  }
]

export default function ServiceCards() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="bg-[#020617] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-[10vh]"> {/* Spacing for sticky effect */}
            {services.map((service, index) => (
              <Card key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}

function Card({ service, index, total }: any) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  // Stack effect: Scale down slightly as they stack
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (index * 0.05)])

  return (
    <div 
      ref={container} 
      className="sticky top-24 h-[500px] w-full flex items-center justify-center"
    >
      <m.div 
        style={{ scale }}
        whileHover="hover"
        className="relative w-full h-full rounded-[3rem] border border-white/10 bg-slate-900 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center p-8 md:p-12 gap-10"
      >
        {/* NOISY BACKGROUND OVERLAY */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* DYNAMIC DESIGN PATTERN IN BACKGROUND */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity">
          <m.svg 
            variants={{ hover: { rotate: 90, scale: 1.2 } }}
            transition={{ duration: 0.8, ease: "circOut" }}
            viewBox="0 0 20 20" className="w-full h-full fill-white"
          >
            <path d={service.pattern} />
          </m.svg>
        </div>

        {/* LEFT CONTENT */}
        <div className="flex-1 z-10">
          <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg`}>
            {service.icon}
          </div>
          <h2 className="text-3xl md:text-5xl font-dancing text-white uppercase mb-4 leading-none">
            {service.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-8">
            {service.desc}
          </p>
          
          <Link 
            href={`/services/${service.slug}`}
            className="group/btn relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-orange-600 hover:text-white transition-all duration-300"
          >
            Explore Service
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* RIGHT DECORATION (Visual Placeholder) */}
        <div className="hidden md:flex flex-1 justify-end z-10">
          <div className="relative w-64 h-64 rounded-full border border-white/5 flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full animate-pulse" />
             <div className={`text-6xl font-black opacity-10 uppercase text-white rotate-90`}>
                {service.slug}
             </div>
          </div>
        </div>

        {/* GLOW EFFECT */}
        <m.div 
          variants={{ hover: { opacity: 0.6 } }}
          className={`absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br ${service.color} blur-[100px] opacity-20 transition-opacity`}
        />
      </m.div>
    </div>
  )
}

