"use client";
import { m, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedHeading from "@/app/components/common/animatedHeading";

export default function AboutHero() {
  const containerRef = useRef(null);
  
  // Mouse movement parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 60);
      mouseY.set((clientY / innerHeight - 0.5) * 60);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Multi-SVG Data
  const blobs = [
    { top: '10%', left: '15%', size: 'w-64 h-64', speed: 0.8, delay: 0 },
    { top: '60%', left: '10%', size: 'w-48 h-48', speed: -1.2, delay: 2 },
    { top: '20%', left: '70%', size: 'w-80 h-80', speed: 1.5, delay: 1 },
    { top: '70%', left: '80%', size: 'w-40 h-40', speed: -0.5, delay: 3 },
  ];

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
      
      

      {/* 2. Massive Background Text (Cleaned Size) */}
      <m.div 
        style={{ x: useTransform(springX, (v) => v * -0.8) }} 
        className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none"
      >
        <h2 className="text-[22vw] font-black uppercase leading-none whitespace-nowrap italic">
          PRECISION
        </h2>
      </m.div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          
          <m.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 px-6 py-2 border border-accent/10 rounded-full bg-white/[0.02] backdrop-blur-sm"
          >
            <span className="text-accent font-mono tracking-[0.4em] text-[9px] font-bold uppercase">
              Engineering Domain Authority
            </span>
          </m.div>
          
          {/* Main Headings - Fixed Overflow and Sizing */}
          <div className="relative py-4 text-center flex flex-col gap-0">
            <AnimatedHeading 
              text="BEYOND" 
              className="text-6xl md:text-9xl lg:text-[10rem] text-center font-black leading-[0.9] uppercase font-dancing text-white px-2" 
            />
            
            <AnimatedHeading 
              text="SEARCH" 
              className="text-6xl md:text-9xl lg:text-[10rem] text-center font-black leading-[0.9] uppercase italic font-serif text-accent " 
            />
          </div>

          {/* Clean Description Section */}
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-col md:flex-row items-center gap-12 max-w-5xl border-t border-white/5 pt-12"
          >
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed text-center md:text-left md:w-2/3">
              We dismantle digital barriers to turn organic potential into <span className="text-white font-medium border-b border-accent/30">measurable market equity.</span>
            </p>
            
            <div className="flex items-center gap-8 md:w-1/3">
              <div className="text-left group cursor-default">
                <span className="block text-5xl font-black text-white group-hover:text-accent transition-colors duration-500">16+</span>
                <span className="text-[10px] uppercase text-accent tracking-[0.2em] font-bold whitespace-nowrap">Years of Experience</span>
              </div>
            </div>
          </m.div>
        </div>
      </div>

      {/* 3. Minimalist Scroll Indicator */}
      <m.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </m.div>
    </section>
  );
}