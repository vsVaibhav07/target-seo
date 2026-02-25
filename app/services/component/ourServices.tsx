'use client'

import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ArrowRight, Search, Share2, Brain, Zap, MessageSquare,Palette,Code2, Mic, Network, type LucideIcon } from "lucide-react";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface Service {
  title: string;
  slug: string;
  desc: string;
  icon: LucideIcon;
  image: string;
  accent: string;
  bgColor: string;
}

const services: Service[] = [
  {
    title: "Search Engine Optimization",
    slug: "seo",
    desc: "Dominate organic search with semantic authority and high-performance technical frameworks.",
    icon: Search,
    image: "/images/seo-service.jpg",
    accent: "#ea580c",
    bgColor: "#0f172a" 
  },
  {
    title: "Social Media Marketing",
    slug: "smo",
    desc: "Transform your social footprint into a community-driven revenue engine through viral storytelling.",
    icon: Share2,
    image: "/images/smo-service.avif",
    accent: "#2563eb",
    bgColor: "#022c22" 
  },
  {
    title: "Generative Engine Optimization",
    slug: "geo",
    desc: "Ensure your brand is the primary citation for AI engines like Perplexity, ChatGPT, and SGE.",
    icon: Network,
    image: "/images/geo-service.jpg",
    accent: "#06b6d4",
    bgColor: "#083344"
  },
  {
    title: "Answer Engine Optimization",
    slug: "aeo",
    desc: "Win the 'Zero-Click' search era by optimizing for voice intent and direct featured snippets.",
    icon: Mic,
    image: "/images/aeo-service.jpg",
    accent: "#f43f5e",
    bgColor: "#450a0a"
  },
  {
    title: "Web Development",
    slug: "web-development",
    desc: "Building high-performance, scalable web applications with cutting-edge tech stacks and seamless API integrations.",
    icon: Code2, 
    image: "/images/web-dev-service.avif",
    accent: "#3b82f6", 
    bgColor: "#020617" 
  },
  {
    title: "UI/UX & Web Design",
    slug: "web-design",
    desc: "Crafting visually stunning, user-centric interfaces that blend aesthetic excellence with psychological conversion triggers.",
    icon: Palette, 
    image: "/images/web-design-service.jpg",
    accent: "#8b5cf6", 
    bgColor: "#1e1b4b" 
  },
  {
    title: "LLM & AI Optimization",
    slug: "llmo",
    desc: "Strategic content engineering to influence how Large Language Models perceive and rank your brand.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    accent: "#9333ea",
    bgColor: "#1e1b4b" 
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    desc: "Building sustainable domain authority through high-signal, authoritative editorial assets.",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    accent: "#f59e0b",
    bgColor: "#451a03"
  },
  {
    title: "Performance Marketing",
    slug: "ppc",
    desc: "Aggressive, data-backed ad campaigns engineered for maximum ROAS and rapid scaling.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    accent: "#10b981",
    bgColor: "#064e3b" 
  }
];

export default function OurServices() {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top", 
          end: "bottom bottom",
          pin: leftRef.current,
          pinSpacing: false,
          anticipatePin: 1,
        });

        services.forEach((service, i) => {
          gsap.to(containerRef.current, {
            backgroundColor: service.bgColor,
            scrollTrigger: {
              trigger: `.service-text-${i}`,
              start: "top 60%",
              end: "top 20%",
              scrub: true,
            }
          });

          if (i > 0) {
            gsap.fromTo(`.img-wrapper-${i}`, 
              { clipPath: 'inset(100% 0% 0% 0%)' },
              { 
                clipPath: 'inset(0% 0% 0% 0%)', 
                ease: 'none',
                scrollTrigger: {
                  trigger: `.service-text-${i}`,
                  start: "top 80%",
                  end: "top 20%",
                  scrub: 1,
                }
              }
            );
          }
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative overflow-hidden transition-colors duration-1000"
      style={{ backgroundColor: services[0].bgColor }}
    >
      <div className="flex flex-col md:flex-row relative">
        
        {/* LEFT SIDE: VISUALS (Pinned) */}
        <div 
          ref={leftRef} 
          className="hidden md:flex w-1/2 h-screen flex-col justify-between py-14 px-16 z-20"
        >
          <div>
            <h3 className="text-accent font-mono tracking-widest uppercase text-xs mb-4">Our Expertise</h3>
            <h2 className="text-6xl lg:text-8xl font-dancing text-white leading-tight">Our Services</h2>
          </div>

          {/* Centered Image Container */}
          <div className="relative w-full aspect-square bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-black/20 self-center">
            {services.map((service, i) => (
              <div 
                key={i} 
                className={`img-wrapper-${i} absolute inset-0 w-full h-full overflow-hidden`}
                style={{ zIndex: i + 10 }}
              >
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  priority={i === 0}
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="h-10" />
        </div>

        {/* RIGHT SIDE: CONTENT (Scrolling) */}
        <div className="w-full md:w-1/2 px-6 md:px-20 z-10 text-white">
          <div className="md:hidden pt-20 pb-10">
            <h2 className="text-6xl font-dancing">Our Services</h2>
          </div>

          {services.map((service, i) => {
            // Fix: Capture the Icon component here
            const IconComponent = service.icon;
            
            return (
              <div 
                key={i} 
                className={`service-text-${i} min-h-screen flex flex-col justify-center py-20 group`}
              >
                <div className="md:hidden w-full h-80 mb-8 rounded-[2rem] overflow-hidden relative border border-white/10">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>

                {/* Fixed Icon Rendering */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-xl transition-transform group-hover:scale-110 duration-500"
                  style={{ backgroundColor: service.accent }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter uppercase leading-[0.85]">
                  {service.title}
                </h3>

                <p className="text-slate-400 font-serif text-lg md:text-xl leading-relaxed mb-12 max-w-sm opacity-80">
                  {service.desc}
                </p>

                <Link 
                  href={`/services/${service.slug}`}
                  className="group/btn inline-flex items-center gap-4 text-white font-bold tracking-widest uppercase text-xs"
                >
                  <span className="relative py-2 border-b border-white/20 group-hover/btn:border-white transition-all duration-300">
                    Explore Strategy
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      <div className="h-[10vh] md:h-0" />
    </section>
  )
}