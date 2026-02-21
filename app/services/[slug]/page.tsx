"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { LazyMotion, domAnimation } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";

// Components
import { Hero } from "./components/hero";
import { Deliverables } from "./components/deliverables";
import { Process } from "./components/process";
import Testimonials from "@/app/components/home/testimonials";
import PrimaryCTA from "@/app/components/home/primaryCTA";
import ServiceFAQ from "../component/faq";

export default function IndividualServicePage() {
  const { slug } = useParams();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Dynamic Data Fetching
    const loadData = async () => {
      try {
        // Dynamically import the JSON file based on the URL slug
        const module = await import(`./data/${slug}.json`);
        setData(module.default);
      } catch (error) {
        console.error("Service data not found for slug:", slug);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();

    // 2. Lenis Smooth Scroll
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Custom Lens Cursor
    const cursor = document.getElementById("custom-cursor");
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [slug]);

  // Loading State
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#020617]">
        <div className="w-12 h-12 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  // Error/404 State
  if (!data) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#020617] text-white px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter opacity-10 absolute">404 Error</h1>
        <h2 className="text-4xl font-dancing text-accent mb-4 relative">Service Not Available</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          The specialized service you are looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="px-8 py-3 bg-accent text-white font-bold rounded-full hover:scale-105 transition-transform">
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      {/* Custom Lens Cursor */}
      <div 
        id="custom-cursor" 
        className="fixed w-20 h-20 border border-accent/40 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block" 
        style={{ transform: 'translate(-50%, -50%)' }} 
      />
      
      <main className=" overflow-x-hidden bg-[#020617] selection:bg-accent selection:text-white">
        {/* Dark Hero Section */}
        <Hero data={data} />
        
        {/* Light Section Wrapper */}
        <div className=" rounded-t-[3rem] md:rounded-t-[5rem] relative z-20 mt-[-50px]">
          <Deliverables items={data.deliverables} />
          
          
          <Process steps={data.process} />
          
          <div className="bg-[#f8f9fa] py-20">
            <Testimonials />
          </div>

          <PrimaryCTA />
          <ServiceFAQ data={data.faqs} />
        </div>
      </main>
    </LazyMotion>
  );
}