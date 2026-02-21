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

export default function PremiumOverlapFix() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Pinning Section 1
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top", // Section 2 ke start tak pin rahega
        pin: pinnedRef.current,
        pinSpacing: false, // Allows section 2 to move over it
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div ref={containerRef} className="relative w-full">
        
        {/* SECTION 1: Fixed/Pinned Background Section */}
        <section 
          ref={pinnedRef} 
          className="relative h-screen w-full flex items-center justify-center bg-[#020617] overflow-hidden z-10"
        >
          {/* Premium Background Visuals */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mb-12">
              <div className="flex items-center gap-3 text-orange-500 text-[10px] font-black tracking-[0.4em] uppercase mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Premium Deliverables</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter uppercase">
                Expert <span className="text-orange-500">Precision.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {deliverables.map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-2xl">
                  <item.icon className="w-10 h-10 mb-4 text-orange-500" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       
        <section className="relative z-20  bg-white text-slate-900 shadow-[0_-50px_100px_rgba(0,0,0,0.4)]">
         <WhyUs/>
        </section>

      </div>
    </LazyMotion>
  );
}