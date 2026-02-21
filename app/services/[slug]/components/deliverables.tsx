"use client";
import React from "react";
import { m } from "framer-motion";

interface DeliverableItem {
  title: string;
  desc: string;
  list: string[];
  icon: string;
}

export const Deliverables = ({ items }: { items: DeliverableItem[] }) => {
  const bgImage = "https://plus.unsplash.com/premium_photo-1684225765169-2c46196bcca6?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section className="relative py-32 px-6 overflow-hidden min-h-screen flex items-center">
      
      {/* --- FIXED BACKGROUND ENGINE --- */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Dark Glass Overlay for contrast */}
      <div className="absolute inset-0 z-0 bg-[#020617]/40 backdrop-blur-[2px] pointer-events-none" />
      
      {/* Gradient Vignette to blend with other sections */}
      <div className="absolute inset-0 z-0  opacity-80" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <m.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl mb-6"
          >
            <span className="text-white font-bold text-[10px] uppercase tracking-[0.4em]">
              Executive Deliverables
            </span>
          </m.div>
          
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-2xl">
           
            <span className="font-dancing text-accent normal-case italic font-medium">
              Deliverables
            </span>
          </h2>
        </div>

        {/* Dynamic Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <m.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col h-full bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-slate-900/60 transition-all duration-500 hover:border-accent/40 shadow-2xl overflow-hidden"
            >
              {/* Animated Inner Glow on Hover */}
              <div className="absolute -inset-full bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                
                {/* Icon & Number Row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-accent transition-all duration-500 shadow-xl">
                    <span className="filter drop-shadow-lg">{item.icon}</span>
                  </div>
                  <span className="text-white/10 font-black text-6xl tracking-tighter group-hover:text-accent/20 transition-colors duration-500">
                    {idx + 1}
                  </span>
                </div>

                {/* Content Area */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-light opacity-90">
                    {item.desc}
                  </p>
                </div>

                {/* Checklist: Enhanced visibility with Accent dots */}
                <div className="mt-auto pt-6 border-t border-white/10 space-y-3">
                  {item.list.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#ea580c]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-200 group-hover:text-white transition-colors">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Decorative Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700" />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};