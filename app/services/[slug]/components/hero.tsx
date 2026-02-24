"use client";
import React, { useEffect, useRef, useState } from "react";
import { m } from "framer-motion";
import gsap from "gsap";
import Lenis from "lenis";
import { ChevronDown } from "lucide-react";

const Typewriter = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 160; 
  const deletingSpeed = 70;
  const pauseTime = 2200;

  useEffect(() => {
    const handleAction = () => {
      if (!isDeleting) {
        if (displayedText.length < text.length) {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(text.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    };
    const timer = setTimeout(handleAction, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text]);

  return (
    <span className="relative  inline-flex items-center">
      <span className=" text-4xl md:text-5xl lg:text-8xl font-serif italic tracking-wider uppercase drop-shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)]">
        {displayedText}
      </span>
      <m.span 
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7 }}
        className="w-[3px] h-[0.9em] bg-accent ml-2"
      />
    </span>
  );
};

export const Hero = ({ data }: { data: any }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorSize, setCursorSize] = useState(1);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });

    const handleMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      lenis.destroy();
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen wavy-bottom z-30 pt-20 lg:pt-32 pb-10 flex flex-col items-center justify-center px-6 overflow-hidden bg-[#010409] cursor-none">
      
      {/* --- DEEP DARK CURTAIN BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <defs>
            {/* Extremely dark muted gradients */}
            <linearGradient id="darkCurtain1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#010409" />
              <stop offset="50%" stopColor="rgba(30, 58, 138, 0.08)" />
              <stop offset="100%" stopColor="#010409" />
            </linearGradient>
            <linearGradient id="darkCurtain2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#010409" />
              <stop offset="50%" stopColor="rgba(88, 28, 135, 0.05)" />
              <stop offset="100%" stopColor="#010409" />
            </linearGradient>
          </defs>

          {/* Layer 1: Subtle Flow */}
          <m.path
            animate={{ 
              d: [
                "M-100 0 C 300 120 1100 -80 1540 80 V 800 C 1100 680 300 880 -100 720 Z",
                "M-100 0 C 300 -80 1100 120 1540 0 V 800 C 1100 880 300 680 -100 720 Z",
                "M-100 0 C 300 120 1100 -80 1540 80 V 800 C 1100 680 300 880 -100 720 Z"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            fill="url(#darkCurtain1)"
            stroke="rgba(255, 255, 255, 0.03)"
            strokeWidth="1"
          />

          {/* Layer 2: Deep Fold */}
          <m.path
            animate={{ 
              d: [
                "M-100 0 C 400 200 1000 30 1540 180 V 600 C 1000 720 400 420 -100 580 Z",
                "M-100 0 C 400 30 1000 200 1540 80 V 600 C 1000 420 400 720 -100 580 Z",
                "M-100 0 C 400 200 1000 30 1540 180 V 600 C 1000 720 400 420 -100 580 Z"
              ]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            fill="url(#darkCurtain2)"
            stroke="rgba(255, 255, 255, 0.02)"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      {/* --- INVERTING CURSOR --- */}
      <m.div 
        ref={cursorRef}
        animate={{ scale: cursorSize }}
        className="fixed top-0 left-0 w-12 h-12 bg-white rounded-full pointer-events-none z-[9999] hidden md:block -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />

      {/* --- CONTENT --- */}
      <div className="relative z-10 text-center flex flex-col items-center">
        

        <m.h1 
          onMouseEnter={() => setCursorSize(5)} 
          onMouseLeave={() => setCursorSize(1)}
          className="text-6xl md:text-[100px] font-black leading-[0.85] uppercase tracking-tighter mb-12 text-white/90 select-none"
        >
          <span className="font-dancing normal-case text-accent block mb-4 text-7xl md:text-[140px] drop-shadow-2xl">
            {data.title}
          </span>
          <div className="flex flex-col text-white md:flex-row items-center justify-center gap-x-6  gap-y-4">
           
            <Typewriter text={data.subtitle} />
          </div>
        </m.h1>

        <m.p className="max-w-3xl text-slate-200 text-lg md:text-xl font-light leading-relaxed mb-10 opacity-60">
          {data.heroDesc}
        </m.p>

        {/* --- MINIMAL DOWN ARROW --- */}
        <m.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="group cursor-pointer flex flex-col items-center gap-4"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
            <div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center bg-white/[0.01] backdrop-blur-md  group-hover:border-accent/30 transition-all duration-700">
                <ChevronDown className="text-white/20 group-hover:text-accent" size={24} />
            </div>
        </m.div>
      </div>

      {/* Very subtle bottom vignette */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#010409] to-transparent z-20 pointer-events-none" />

    </section>
  );
};