"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "/marketing.webp",
  "/seoImage1.webp",
  "/seo2.webp",
  "/social.webp",
  "/startup.webp",
  "/webAnalysis.webp",
];

const MAX_IMAGES = 8;

const RebrandHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const state = useRef({
    index: 0,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
  });

  useEffect(() => {
    // 1. Text Animation with ScrollTrigger for Repeatability
    if (headingRef.current && containerRef.current) {
      const chars = headingRef.current.querySelectorAll(".char");
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Jab section 80% screen par aaye
          toggleActions: "play none none reverse", // Scroll wapas karne par reverse ho jaye
          onEnter: () => tl.restart(), // Har baar enter karne par restart
          onEnterBack: () => tl.restart(), // Niche se upar aane par bhi restart
        }
      });

      tl.fromTo(
        chars,
        {
          opacity: 0,
          y: (i) => (i % 2 === 0 ? 120 : -120), // Opposite direction
          skewX: (i) => (i % 2 === 0 ? 30 : -30),
        },
        {
          opacity: 1,
          y: 0,
          skewX: 0,
          duration: 1.2,
          stagger: 0.03,
          ease: "expo.out",
        }
      );
    }

    // 2. Initial Trail Setup
    gsap.set(imageRefs.current, {
      opacity: 0,
      scale: 0,
      xPercent: -50,
      yPercent: -50,
    });

    // Trail Spawning Logic
    const spawnImage = (clientX: number, clientY: number) => {
      const el = imageRefs.current[state.current.index % MAX_IMAGES];
      if (!el || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const rotation = gsap.utils.random(-15, 15);
      gsap.killTweensOf(el);

      const tl = gsap.timeline();
      tl.set(el, {
        x, y, rotation, scale: 0.05, opacity: 0,
        zIndex: state.current.index + 20,
      })
      .to(el, { opacity: 1, scale: 1, duration: 1.2, ease: "expo.out" })
      .to(el, { opacity: 0, scale: 1.5, duration: 1, ease: "power2.inOut" }, "-=0.4");

      state.current.index++;
    };

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { x: clientX, y: clientY, duration: 0.2, ease: "power2.out" });
      }

      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const isInside = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
        if (isInside) {
          const dx = clientX - state.current.lastX;
          const dy = clientY - state.current.lastY;
          const distance = Math.hypot(dx, dy);
          const now = Date.now();

          if (distance > 80 && now - state.current.lastTime > 100) {
            spawnImage(clientX, clientY);
            state.current.lastX = clientX; state.current.lastY = clientY; state.current.lastTime = now;
          }
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      ScrollTrigger.getAll().forEach(t => t.kill()); // Cleanup trigger
    };
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block will-change-transform">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section 
      ref={containerRef}
      style={{ clipPath: "inset(0 0 0 0)" }}
      className="relative w-full h-screen max-w-screen overflow-hidden bg-black cursor-none z-10"
    >
      {/* PINNED BACKGROUND VIDEO */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-100 grayscale">
          <source src="/hero2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ANIMATED HEADING */}
      <div className="relative z-10 h-full flex items-center justify-center text-center pointer-events-none select-none">
        <h1 ref={headingRef} className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-none">
          <div className="text-white overflow-hidden pb-4">
            {splitText("REBRAND")}
          </div>
          <div className="text-transparent overflow-hidden" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)" }}>
            {splitText("SOLUTION")}
          </div>
        </h1>
      </div>

      {/* TRAIL IMAGES */}
      {Array.from({ length: MAX_IMAGES }).map((_, i) => (
        <div key={i} ref={(el) => { imageRefs.current[i] = el; }}
          className="absolute top-0 left-0 w-48 h-64 md:w-64 md:h-80 pointer-events-none opacity-0 z-20">
          <Image src={IMAGES[i % IMAGES.length]} alt={`trail-${i}`} fill priority className="object-cover rounded-xl border border-white/20 shadow-2xl" />
        </div>
      ))}

      {/* CURSOR */}
      <div ref={cursorRef} className="fixed top-0 left-0 w-12 h-12 rounded-full border border-white/40 pointer-events-none z-[100] mix-blend-difference flex items-center justify-center translate-x-[-50%] translate-y-[-50%]">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </div>
    </section>
  );
};

export default RebrandHero;