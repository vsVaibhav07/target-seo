"use client";
import React, { useRef } from "react";
import { m, useScroll, useSpring } from "framer-motion";

// 1. Define the interface for a single step
interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

// 2. Define the props interface for the Process component
interface ProcessProps {
  steps: ProcessStep[];
}

export const Process = ({ steps }: ProcessProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Adjusted scroll offset for better trigger timing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const scaleY = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30,
    restDelta: 0.001 
  });

  return (
    <section 
      ref={containerRef} 
      className="relative wavy-top -mt-14 bg-[#020617] text-white py-32 overflow-hidden"
    >
      {/* Background Glow Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-32">
          <m.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block"
          >
            Workflow
          </m.span>
          <h2 className="text-5xl md:text-7xl font-dancing uppercase tracking-tighter leading-none">
            <span className="font-dancing text-accent normal-case font-medium italic">
               Execution Process
            </span>
          </h2>
        </div>

        {/* --- TIMELINE --- */}
        <div className="relative ml-4 md:ml-12">
          
          {/* Main Vertical Static Track */}
          <div className="absolute left-0 top-0 w-[2px] h-full bg-white/5" />

          {/* Animated Progress Line with High-End Glow */}
          <m.div 
            className="absolute left-0 top-0 w-[2px] bg-accent shadow-[0_0_20px_#ea580c] origin-top z-10"
            style={{ height: "100%", scaleY }}
          />

          {steps?.map((item, idx) => (
            <div 
              key={idx} 
              className="relative pl-12 md:pl-24 mb-32 last:mb-0 group"
            >
              {/* Step Node Dot */}
              <m.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ margin: "-100px" }}
                className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-[#020617] border-2 border-accent shadow-[0_0_10px_rgba(234,88,12,0.5)] z-20 group-hover:scale-150 transition-transform duration-500"
              />
              
              <m.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                {/* Step Marker */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-accent font-mono text-sm font-black">
                    PHASE {item.step}
                  </span>
                  <div className="h-[1px] w-12 bg-accent/20 group-hover:w-20 transition-all duration-700" />
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-5xl font-dancing font-bold text-white uppercase tracking-tight mb-6 group-hover:text-accent transition-colors duration-500">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 text-justify text-lg md:text-xl leading-relaxed max-w-3xl font-medium">
                  {item.desc}
                </p>
                
                {/* Premium Visual Footer for Step */}
                <div className="mt-8 flex gap-2 opacity-20 group-hover:opacity-100 transition-all duration-700">
                   <div className="w-8 h-1 bg-accent rounded-full" />
                   <div className="w-2 h-1 bg-accent rounded-full" />
                   <div className="w-2 h-1 bg-accent rounded-full" />
                </div>
              </m.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};