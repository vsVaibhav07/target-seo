"use client";
import React, { useRef } from "react";
import { m, useScroll, useSpring } from "framer-motion";

const visionSteps = [
  {
    id: "01",
    title: "Intelligent Analysis",
    desc: "SEO is no longer about keywords; it's about entities and intent. We dive deep into the knowledge graph to ensure your brand becomes the undisputed answer."
  },
  {
    id: "02",
    title: "Semantic Dominance",
    desc: "We build topical clusters that signal ultimate authority. By covering every facet of your niche, we make it impossible for competitors to outrank you."
  },
  {
    id: "03",
    title: "Performance Engineering",
    desc: "Speed is a ranking factor, but experience is a conversion factor. We optimize for lightning-fast sites that feel like high-end digital experiences."
  }
];

export const Vision = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.2", "end 0.8"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="relative bg-[#020617] text-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <header className="mb-16">
          <m.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-orange-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-2 block"
          >
            The Vision
          </m.span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            Redefining <span className="text-white/20 italic">Authority</span>
          </h2>
        </header>

        {/* --- TIMELINE CONTENT --- */}
        <div className="relative border-l border-white/10 ml-2">
          
          {/* Animated Vertical Line */}
          <m.div 
            className="absolute left-[-1px] top-0 w-[1px] bg-orange-600 shadow-[0_0_10px_#ea580c] origin-top"
            style={{ height: "100%", scaleY }}
          />

          {visionSteps.map((step) => (
            <div 
              key={step.id} 
              className="relative pl-8 mb-10 last:mb-0 group"
            >
              {/* Animated Bullet Point */}
              <div className="absolute left-[-4.5px] top-2 w-2 h-2 rounded-full bg-orange-500 z-10 shadow-[0_0_8px_#ea580c]" />
              
              <m.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-10%" }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-orange-500 font-mono text-sm font-bold italic">
                    {step.id}
                  </span>
                  <div className="h-[1px] w-6 bg-orange-500/20"></div>
                </div>

                {/* Smaller Heading */}
                <h3 className="text-2xl  md:text-3xl font-bold uppercase mb-4 tracking-tight">
                  {step.title}
                </h3>
                
                {/* Description - Optimized Width */}
                <p className="text-slate-400 text-base md:text-lg leading-relaxed text-justify max-w-4xl ">
                  {step.desc}
                </p>
              </m.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};