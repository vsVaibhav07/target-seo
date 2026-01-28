"use client";

import React, { useEffect, useRef } from "react";
import { m, LazyMotion, domAnimation, useInView } from "framer-motion";
import { 
  ArrowRight, BarChart3, Globe2, Sparkles, TrendingUp, Star 
} from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import Lenis from "lenis";

// --- MAGIC BUBBLE CURSOR ---
const MagicCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles: any[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number; color: string;
      constructor(x: number, y: number) {
        this.x = x; this.y = y;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * -2 - 1;
        this.color = `rgba(234, 88, 12, ${Math.random() * 0.4})`;
      }
      update() {
        this.x += this.speedX; this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.1;
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.1) {
          particles.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
};

export default function Hero5() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2 });
  const line1 = "We Help Businesses Rank Higher,";
  const line2 = "Get More Leads & Grow Revenue";
  const description = "ROI-driven SEO strategies for local and national businesses. No fluff. Just results.";

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (isInView) {
      const chars = document.querySelectorAll(".char-anim");
      gsap.fromTo(chars, 
        { 
          opacity: 0, 
          y: (i) => (i % 2 === 0 ? 60 : -60),
          filter: "blur(12px)"
        },
        { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          duration: 1.2, 
          stagger: 0.015, 
          ease: "power4.out" 
        }
      );
    }
  }, [isInView]);

  // NEW LOGIC: Breaks text into words, then words into characters
  const splitIntoWords = (text: string) => {
    return text.split(" ").map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em]">
        {word.split("").map((char, charIndex) => (
          <span key={charIndex} className="char-anim inline-block">
            {char}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="relative pt-36 min-h-screen bg-[#020617] flex items-center justify-center overflow-hidden py-20">
      <MagicCursor />
      
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none grayscale">
        <source src="/heroBG.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />

      <LazyMotion features={domAnimation}>
        <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          
          <div className="space-y-10">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter leading-[1.1] md:leading-[1] uppercase">
                <span className="inline-block bg-clip-text text-white opacity-80 bg-gradient-to-b from-white to-white/40 backdrop-blur-sm">
                  {splitIntoWords(line1)}
                </span>
                <br />
                <span className="text-orange-600 inline-block ">
                  {splitIntoWords(line2)}
                </span>
              </h1>
            </div>

            <m.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed border-l-2 border-orange-600 pl-6 backdrop-blur-sm"
            >
              {description}
            </m.p>

            <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-wrap items-center gap-8">
              <Link href="/rebrand-solution" className="group relative flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full border border-orange-600/30 dashed animate-[spin_10s_linear_infinity] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-5 bg-orange-600 text-white rounded-full transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-white group-hover:text-orange-600 shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                    <ArrowRight size={28} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-black tracking-[0.15em] uppercase text-sm group-hover:text-orange-500 transition-colors">
                    🔥 Get Free SEO Audit
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    Request Your Audit
                  </span>
                </div>
              </Link>
              <div className="hidden md:block h-12 w-[1px] bg-white/10" />
              <Link href="/case-studies" className="relative group px-8 py-4 overflow-hidden rounded-full border border-white/10 text-white transition-all duration-300 backdrop-blur-md">
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                <span className="relative z-10 flex items-center gap-3 font-black text-xs uppercase tracking-[0.2em] group-hover:text-black transition-colors duration-500">
                  📊 View Case Studies
                </span>
              </Link>
            </m.div>

            <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <span className="text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-widest">
                Google Reviews | 100+ Clients | Transparent Reporting
              </span>
            </m.div>
          </div>

          {/* RIGHT PART: UPDATED CARDS */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute inset-0 bg-orange-600/10 blur-[120px] rounded-full" />
            
            <StatsCard index={0} icon={<TrendingUp size={24} />} label="SEO Growth" detail="Top Rankings">
               <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
                  <m.circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" fill="none" 
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity }} />
                  <m.path d="M20 50 L80 50 M50 20 L50 80" stroke="white" strokeWidth="0.5" 
                    animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
               </svg>
            </StatsCard>

            <StatsCard index={1} icon={<BarChart3 size={24} />} label="Rankings" detail="+142% Growth">
              <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end gap-1 px-4 opacity-20">
                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                  <m.div key={i} className="flex-1 bg-orange-500" 
                    initial={{ height: 0 }} animate={{ height: `${h}%` }} 
                    transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }} />
                ))}
              </div>
            </StatsCard>

            <StatsCard index={2} icon={<Globe2 size={24} />} label="Authority" detail="Market Leader">
               <m.div animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -top-10 -right-10 w-32 h-32 bg-orange-600/20 blur-2xl rounded-full" />
            </StatsCard>

            <StatsCard index={3} icon={<Sparkles size={24} />} label="Revenue" detail="Scalable ROI">
               <m.div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <m.div key={i} className="absolute bg-white/20 w-1 h-1 rounded-full"
                      animate={{ y: [-20, 100], x: Math.random() * 200, opacity: [0, 1, 0] }}
                      transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: i * 0.5 }}
                    />
                  ))}
               </m.div>
            </StatsCard>
          </div>
        </div>
      </LazyMotion>
    </section>
  );
}

function StatsCard({ children, icon, label, detail, index }: any) {
  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * index, duration: 0.8, ease: "circOut" }}
      whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.08)", transition: { duration: 0.3 } }}
      className="relative bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-2xl transition-all group overflow-hidden"
    >
      <div className="relative z-10">
        <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-500">{icon}</div>
        <h3 className="text-white font-black uppercase tracking-tighter text-lg">{label}</h3>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{detail}</p>
      </div>
      {children}
      <span className="absolute -bottom-2 -right-2 text-6xl font-black text-white/5 pointer-events-none group-hover:text-orange-500/10 transition-colors">
        0{index + 1}
      </span>
    </m.div>
  );
}