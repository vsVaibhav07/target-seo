"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Importing your existing components
import BluePremiumHero from "./servicehero";
import ServiceFeatures from "./features";

gsap.registerPlugin(ScrollTrigger);

const CompleteHero = () => {
  const containerRef = useRef(null);
  const heroWrapperRef = useRef(null);
  const featuresWrapperRef = useRef(null);

  useEffect(() => {
    // 1. Smooth Scroll (Lenis) - Essential for scrub animations to look premium
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. GSAP 3D Book Animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // How long the folding lasts
          scrub: 1,      // Tied to scroll position
          pin: true,     // Keeps the sections in view during the fold
          anticipatePin: 1,
        },
      });

      // NO FADE EFFECTS - Pure Rotation & Translation
      tl.to(heroWrapperRef.current, {
        rotateX: -90,
        yPercent: -50,
        z: -800, // Moves it "into" the screen
        ease: "none",
      })
      .from(featuresWrapperRef.current, {
        rotateX: 90,
        yPercent: 50,
        z: -800, // Comes from "inside" the screen
        ease: "none",
      }, 0); // Start both at exactly the same time

    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-[#020617] pb-40 overflow-hidden">
      {/* Container that provides the 3D perspective */}
      <div 
        ref={containerRef} 
        className="relative h-screen w-full perspective-3d"
      >
        
        {/* --- HERO SECTION WRAPPER --- */}
        <div 
          ref={heroWrapperRef} 
          className="absolute inset-0 w-full h-full origin-bottom preserve-3d z-20"
        >
          {/* Your Original Hero Component */}
          <BluePremiumHero />
        </div>

        {/* --- FEATURES SECTION WRAPPER --- */}
        <div 
          ref={featuresWrapperRef} 
          className="absolute inset-0 w-full h-full origin-top preserve-3d z-10"
        >
          {/* Your Original Features Component */}
          <ServiceFeatures />
        </div>

      </div>

      {/* Global CSS for 3D rendering */}
      <style jsx global>{`
        .perspective-3d {
          perspective: 2000px;
          transform-style: preserve-3d;
        }
        .preserve-3d {
          transform-style: preserve-3d;
          /* Ensures high quality rendering during rotation */
          backface-visibility: hidden; 
          will-change: transform;
        }
      `}</style>
    </main>
  );
};

export default CompleteHero;