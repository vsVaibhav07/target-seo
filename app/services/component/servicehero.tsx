"use client";
import React, { useEffect, useRef } from "react";
import { m, motion, useMotionValue, useSpring, useTransform, LazyMotion, domAnimation } from "framer-motion";
import { gsap } from "gsap";
import { Sparkles, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const InteractiveHeroImage = ({ src }:{src:string}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

 function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      className="relative w-full h-full flex items-center justify-center lg:justify-end"
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        // 'max-w-full' ensures it shrinks if the parent container gets smaller
        className="relative w-full max-w-[500px] aspect-square flex items-center justify-center"
      >
        <div className="relative w-full h-full filter drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_45px_45px_rgba(59,130,246,0.2)]">
          <Image
            src={src}
            alt="Service Hero"
            fill
            className="object-contain"
            priority
          />
        </div>

        <motion.div
          style={{ translateZ: 100 }}
          className="absolute top-[20%] right-[5%] p-3 bg-[#0f172a]/40 backdrop-blur-md border border-white/10 rounded-xl hidden md:flex items-center gap-2 shadow-2xl"
        >
          <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
            <Zap className="w-4 h-4 text-accent" />
          </div>
          <span className="text-[10px] text-white font-bold uppercase tracking-widest">
            Real-time Data
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

const BluePremiumHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text-anim", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={containerRef}
        className="relative min-h-screen bg-[#020617] pt-24 pb-12 md:pt-32 md:pb-20 flex flex-col justify-center overflow-x-hidden w-full"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
        </div>

        <div className=" mx-auto w-full px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap- items-center relative z-10">
          {/* LEFT CONTENT */}
          <div className="flex  flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4  py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] md:text-xs font-bold uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5 fill-accent" />
              Next-Gen SEO Solutions
            </motion.div>

            <div className="space-y-10 w-full">
              <div className="space-y-2 hero-text-anim">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tighter leading-[1.1] uppercase">
                  <span className="inline-block bg-clip-text text-white opacity-80 bg-gradient-to-b from-white to-white/40 backdrop-blur-sm">
                    Scalable Traffic
                  </span>
                  <br />
                  <span className="text-accent inline-block">
                    Predictable Revenue
                  </span>
                </h1>
              </div>

              <m.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed border-l-2 border-accent pl-6 backdrop-blur-sm hero-text-anim"
              >
                We don't just rank websites; we build search ecosystems that capture intent and convert visitors into lifelong customers through data-backed strategies.
              </m.p>

              {/* FIXED BUTTONS CONTAINER */}
              <m.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                className="flex flex-row items-center justify-center lg:justify-start gap-4 md:gap-8 flex-nowrap w-full"
              >
                <Link href="/rebrand-solution" className="group relative flex items-center gap-3 md:gap-4 shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-full border border-accent/30 border-dashed animate-[spin_10s_linear_infinity] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-3 md:p-5 bg-accent text-white rounded-full transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-white group-hover:text-accent shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                      <ArrowRight className="w-5 h-5 md:w-7 md:h-7" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-white font-black tracking-tight md:tracking-[0.15em] uppercase text-[10px] md:text-sm group-hover:text-accent transition-colors whitespace-nowrap">
                      🔥 Free SEO Audit
                    </span>
                    <span className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest whitespace-nowrap">
                      Request Now
                    </span>
                  </div>
                </Link>

                <div className="hidden sm:block h-12 w-[1px] bg-white/10 shrink-0" />

                <Link href="/case-studies" className="relative group px-4 md:px-8 py-3 md:py-4 overflow-hidden rounded-full border border-white/10 text-white transition-all duration-300 backdrop-blur-md shrink-0">
                  <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                  <span className="relative z-10 flex items-center gap-2 md:gap-3 font-black text-[9px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] group-hover:text-black transition-colors duration-500 whitespace-nowrap">
                    📊 Case Studies
                  </span>
                </Link>
              </m.div>
            </div>
          </div>

          {/* RIGHT IMAGE - Now with dynamic sizing based on grid */}
          <div className="w-full flex  justify-center lg:justify-end min-w-0">
            <InteractiveHeroImage src="/images/servicesHero.png" />
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default BluePremiumHero;