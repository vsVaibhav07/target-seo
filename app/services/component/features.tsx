"use client";

import React, { useEffect, useRef } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ShieldCheck, Search, FileSearch, BarChart4, Sparkles } from "lucide-react";
import WhyUs from "./whyus";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const deliverables = [
  { title: "Technical Audit", desc: "Deep dive into site architecture.", icon: ShieldCheck, color: "#F97316" },
  { title: "Keyword Strategy", desc: "High-intent search terms.", icon: Search, color: "#3B82F6" },
  { title: "Content Gap", desc: "Finding missed opportunities.", icon: FileSearch, color: "#A855F7" },
  { title: "ROI Reporting", desc: "Data-driven growth tracking.", icon: BarChart4, color: "#10B981" }
];

export default function ServiceFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Desktop Only Pinning
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        pin: pinnedRef.current,
        pinSpacing: false,
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div ref={containerRef} className="relative w-full">
        
        {/* SECTION 1: Adjusted for Mobile Scrolling */}
        <section 
          ref={pinnedRef} 
          className="relative min-h-[100vh] h-auto lg:h-screen w-full flex items-center justify-center bg-[#020617] overflow-hidden z-10 py-20 lg:py-0"
        >
          {/* Background Visuals */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-600/10 blur-[80px] md:blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mb-12 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-accent text-[10px] font-black tracking-[0.4em] uppercase mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Premium Deliverables</span>
              </div>
              <h2 className="text-5xl md:text-7xl  font-black text-white leading-tight tracking-tighter font-dancing uppercase">
                Expert <span className="text-orange-500">Precision.</span>
              </h2>
            </div>

            {/* Grid: Auto height for mobile, defined for desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverables.map((item, i) => (
                <m.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="p-8 rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-2xl flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <item.icon className="w-10 h-10 mb-4 text-orange-500" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: WhyUs */}
        <section className="relative z-20 bg-white text-slate-900 shadow-[0_-50px_100px_rgba(0,0,0,0.4)]">
          <WhyUs />
        </section>

      </div>
    </LazyMotion>
  );
}