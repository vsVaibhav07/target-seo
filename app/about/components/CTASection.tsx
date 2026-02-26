"use client";
import { m } from "framer-motion";
import AnimatedHeading from "@/app/components/common/animatedHeading";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-40 md:py-60 relative flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/10 blur-[100px] md:blur-[150px] rounded-full -z-10" />

      <div className="flex flex-col items-center justify-center w-full mb-10">
        {/* LET'S SCALE - Size optimized to avoid cutting */}
        <AnimatedHeading 
          text="LET'S SCALE" 
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase font-dancing text-white leading-[1.1] text-center" 
        />
        
        {/* TOGETHER - Wrapped in AnimatedHeading for visibility */}
        <div className="mt-2">
           <AnimatedHeading 
            text="TOGETHER." 
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic font-serif text-accent bg-clip-text bg-gradient-to-r from-accent to-accent/40 leading-[1.1] text-center" 
          />
        </div>
      </div>

      <m.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-slate-400 text-base md:text-lg max-w-lg mb-12 font-light px-4"
      >
        Ready to dominate the search results? Let's build a digital strategy that actually converts your traffic into revenue.
      </m.p>

      {/* Button with explicit cursor-pointer */}
      <m.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-10 py-5 bg-accent rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-white transition-all shadow-[0_20px_50px_rgba(234,88,12,0.3)] hover:shadow-accent/50 flex items-center gap-4 cursor-pointer z-20"
      >
        <span>Start Your Project</span>
        <div className="bg-white/20 p-1.5 rounded-full group-hover:rotate-45 transition-transform duration-300">
          <ArrowUpRight size={18} />
        </div>
      </m.button>

      {/* Footer Tag */}
      <m.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 flex flex-col items-center gap-3"
      >
        <div className="w-10 h-[1px] bg-accent/30" />
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-accent font-bold opacity-80">
          Available for Global Projects
        </span>
      </m.div>

    </section>
  );
}