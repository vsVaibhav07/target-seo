"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";
import DotBackground from "./components/dotBg";
import CustomCursor from "./components/circleCursor";
import AboutHero from "./components/hero";
import AboutUs from "./components/aboutUs";
import CEOSection from "./components/aboutCEO";
import WhyChooseUs from "./components/whyUs";
import { m, LazyMotion, domMax } from "framer-motion";
import CTASection from "./components/CTASection";

export default function AboutPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <LazyMotion features={domMax}>
      <main className="relative cursor-none bg-[#020617] text-white selection:bg-accent overflow-x-hidden">
        <CustomCursor />
        {/* Fixed Background Layer */}
        <div className="fixed inset-0 z-0">
          <DotBackground />
          {/* Moving Decorative SVG Blurs */}
          <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full animate-bounce duration-[10s]" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full">
          <AboutHero />
          <AboutUs />
          <CEOSection />
          <WhyChooseUs />
          <CTASection />
        </div>
      </main>
    </LazyMotion>
  );
}
