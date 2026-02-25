"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";
import DotBackground from "./components/dotBg";
import CustomCursor from "./components/circleCursor";
import { 
  AboutHero, 
  MissionValues, 
  CEOSection, 
  WhyChooseUs 
} from "./components/sections";

export default function AboutPage() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative bg-[#020617] selection:bg-orange-500 selection:text-white">
      {/* Background & Cursor */}
      <CustomCursor />
      <DotBackground />

      {/* Content Container (Scrolls over fixed background) */}
      <div className="relative z-10">
        <AboutHero />
        
        <div className="bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617]">
          <MissionValues />
          <CEOSection />
          <WhyChooseUs />
          
          {/* Final CTA */}
          <section className="py-40 text-center px-6">
            <h2 className="text-5xl md:text-8xl font-dancing text-white uppercase tracking-tighter mb-10">
              Let's Grow <br/> <span className="text-accent font-serif">Together.</span>
            </h2>
            <button className="px-12 py-5 bg-accent text-white font-bold font-serif cursor-pointer rounded-full uppercase tracking-widest hover:scale-110 transition-transform">
              Get In Touch
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}