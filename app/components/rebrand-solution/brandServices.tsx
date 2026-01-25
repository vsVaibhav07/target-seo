"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { id: 1, title: "Web Development", img: "/webAnalysis.webp" },
  { id: 2, title: "SEO Optimization", img: "/seoImage1.webp" },
  { id: 3, title: "Strategic Marketing", img: "/marketing.webp" },
  { id: 4, title: "Digital Advertising", img: "/social.webp" },
  { id: 5, title: "Brand Building", img: "/startup.webp" },
  { id: 6, title: "UI/UX Design", img: "/seo2.webp" },
];

const BrandService: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const mobileWheelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    // 1. Re-triggering Heading Animation
    if (headingRef.current) {
      const chars = headingRef.current.querySelectorAll(".char");
      gsap.fromTo(chars, 
        { 
          opacity: 0, 
          y: (i) => (i % 2 === 0 ? 50 : -50),
          rotate: (i) => (i % 2 === 0 ? 15 : -15) 
        },
        { 
          opacity: 1, 
          y: 0, 
          rotate: 0,
          duration: 0.8, 
          stagger: 0.04, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            // toggleActions: "play" triggers once, "restart none none reverse" triggers every time
            toggleActions: "restart none none reverse",
          }
        }
      );
    }

    // 2. Main Scroll Animation
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const rawProgress = self.progress * (SERVICES.length - 1);
          const currentIndex = Math.min(Math.round(rawProgress), SERVICES.length - 1);
          setActiveId(SERVICES[currentIndex].id);
        },
      },
    });

    mainTl.to([wheelRef.current, mobileWheelRef.current], {
      rotation: -360,
      ease: "none",
    });

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  // Split text with custom coloring for specific letters
  const splitText = (text: string) => {
    return text.split("").map((char, i) => {
      // Color letters at index 2 (R) and 5 (C) or customize as needed
      const isColored = i === 2 || i === 5;
      return (
        <span 
          key={i} 
          className={`char inline-block ${isColored ? "text-orange-500" : "text-white"}`}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      );
    });
  };

  return (
    <section ref={containerRef} className="relative lg:pb-10 w-full h-full min-h-screen overflow-hidden bg-black flex flex-col font-syne border-b border-white/5">
      {/* Background Section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image src="/serviceBg.webp" alt="BG" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col h-full w-full justify-between py-6 lg:py-10">
        
        {/* TOP: Heading */}
        <div className="text-center shrink-0 px-4">
          <h2 ref={headingRef} className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
            {splitText("SERVICES")}<span className="text-orange-600 char inline-block">.</span>
          </h2>
        </div>

        {/* CENTER: Interaction Area */}
        <div className="flex flex-col lg:flex-row flex-1 w-full items-center justify-center lg:gap-32 px-6 lg:px-20 relative overflow-visible">
          
          {/* IMAGE CARD */}
          <div className="w-full lg:w-auto flex items-center justify-center z-20">
            <div className="relative w-full max-w-[240px] md:max-w-[340px] lg:w-[320px] lg:h-[400px] aspect-[4/5] lg:aspect-auto overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black ">
              {SERVICES.map((service, index) => (
                <div key={service.id} className="absolute inset-0 transition-transform duration-700 ease-in-out"
                  style={{ zIndex: index + 1, transform: activeId > index ? "translateY(0)" : "translateY(100%)" }}>
                  <Image src={service.img} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE & TABLET CIRCULAR TITLE (Fixed Centering) */}
          <div className="absolute inset-0 flex lg:hidden items-center justify-center pointer-events-none w-full left-0">
            <div ref={mobileWheelRef} className="w-[450px] h-[450px] md:w-[680px] md:h-[680px] relative flex items-center justify-center">
              {SERVICES.map((service, i) => (
                <div 
                  key={service.id}
                  className="absolute w-full h-full flex items-start justify-center pt-2 md:pt-4"
                  style={{ 
                    transform: `rotate(${i * (360 / SERVICES.length)}deg)`,
                    transformOrigin: "center center" 
                  }}
                >
                  <p className={`text-xl md:text-3xl font-bold uppercase transition-all duration-300 text-center w-full px-4 ${
                    activeId === service.id ? 'text-orange-500 opacity-100' : 'text-white/5 opacity-0'
                  }`}>
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* LAPTOP WHEEL SECTION */}
          <div className="hidden lg:flex lg:w-auto h-full relative items-center justify-center">
            <div className="relative w-[360px] h-[360px] flex items-center justify-center">
              
              {/* Rotating Text Layer */}
              <div ref={wheelRef} className="absolute inset-0 flex items-center justify-center">
                {SERVICES.map((service, i) => {
                  const words = service.title.split(" ");
                  const angle = i * (360 / SERVICES.length);
                  return (
                    <div key={service.id} className="absolute inset-0 flex items-start justify-center" style={{ transform: `rotate(${angle}deg)` }}>
                      <div className={`transition-all duration-500 mt-[-15px] ${activeId === service.id ? "text-orange-600" : "text-white/30"}`}>
                        <svg width="260" height="150" viewBox="0 0 260 150" className="overflow-visible">
                          <path id={`inner-${service.id}`} fill="none" d="M 40,85 A 85,90 0 0,1 220,85" />
                          <path id={`outer-${service.id}`} fill="none" d="M 20,120 A 110,110 0 0,1 240,120" />
                          <text className="text-2xl font-black uppercase tracking-tighter fill-current">
                            <textPath href={`#inner-${service.id}`} startOffset="50%" textAnchor="middle">{words[0]}</textPath>
                          </text>
                          {words[1] && (
                            <text className="text-xl font-black uppercase tracking-widest fill-current opacity-70">
                              <textPath href={`#outer-${service.id}`} startOffset="50%" textAnchor="middle">{words[1]}</textPath>
                            </text>
                          )}
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Static Hand */}
              <div className="absolute z-50 pointer-events-none translate-y-10">
                <Image src="/hand.png" alt="Pointer" width={140} height={140} className="object-contain drop-shadow-[0_15px_30px_rgba(255,100,0,0.4)]" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: Tablet/Mobile Static Pointer */}
        <div className="lg:hidden flex justify-center pb-4 md:pb-8 z-30 shrink-0">
             <Image 
              src="/hand.png" 
              alt="Pointer" 
              width={100} 
              height={100} 
              className="object-contain w-[75px] md:w-[160px] lg:w-[200px]" 
            />
        </div>
      </div>
    </section>
  );
};

export default BrandService;