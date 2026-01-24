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
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    if (headingRef.current) {
      const chars = headingRef.current.querySelectorAll(".char");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          onEnter: () => tl.restart(),
          onEnterBack: () => tl.restart(),
        }
      });
      tl.fromTo(chars, 
        { opacity: 0, y: (i) => (i % 2 === 0 ? 60 : -60), skewX: (i) => (i % 2 === 0 ? 15 : -15) },
        { opacity: 1, y: 0, skewX: 0, duration: 1, stagger: 0.03, ease: "power4.out" }
      );
    }

    const totalServices = SERVICES.length;
    const radius = 200; // Radius for distribution

    const serviceItems = gsap.utils.toArray<HTMLElement>(".service-item");
    serviceItems.forEach((item, i) => {
      gsap.set(item, {
        rotation: i * (360 / totalServices),
        transformOrigin: `center ${radius}px`,
      });
    });

    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const rawProgress = self.progress * (totalServices - 1);
          const currentIndex = Math.min(Math.round(rawProgress), totalServices - 1);
          setActiveId(SERVICES[currentIndex].id);
        },
      },
    });

    mainTl.to(wheelRef.current, {
      rotation: -360,
      ease: "none",
    });

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block">{char === " " ? "\u00A0" : char}</span>
    ));
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black flex flex-col font-syne">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image src="/serviceBg.webp" alt="BG" fill priority className="object-cover " />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_95%)]" />
      </div>

      <div className="relative z-10 flex flex-col h-full w-full py-16 gap-4">
        <div className="text-center">
          <h2 ref={headingRef} className="text-7xl md:text-8xl font-black text-white uppercase tracking-tighter overflow-hidden">
            {splitText("SERVICES")}<span className="text-orange-600 char inline-block">.</span>
          </h2>
        </div>

        <div className="flex flex-1 w-full items-center justify-between px-10 md:px-40 mt-[40px]">
          <div className="w-5/12 h-full flex items-center justify-center">
            <div className="relative w-full max-w-[340px] aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black">
              {SERVICES.map((service, index) => (
                <div key={service.id} className="absolute inset-0 transition-transform duration-700 ease-in-out"
                  style={{ zIndex: index + 1, transform: activeId > index ? "translateY(0)" : "translateY(100%)" }}>
                  <Image src={service.img} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>

          <div className="w-7/12 h-full relative flex items-center justify-center">
            {/* COMPACT WHEEL */}
            <div ref={wheelRef} className="absolute w-[400px] h-[400px] flex items-center justify-center">
              {SERVICES.map((service, i) => {
                const words = service.title.split(" ");
                const angle = i * (360 / SERVICES.length);
                
                return (
                  <div 
                    key={service.id} 
                    className="absolute inset-0 flex items-start justify-center"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div className={`transition-all duration-500 mt-[-30px] ${
                        activeId === service.id ? "text-orange-600 opacity-100 scale-100" : "text-white/60 opacity-80 scale-90"
                      }`}
                    >
                      {/* FIXED SVG PATHS TO PREVENT OVERLAP */}
                      <svg width="300" height="180" viewBox="0 0 300 180" className="overflow-visible">
                        {/* Word 1 Path (Higher up) */}
                        <path id={`inner-${service.id}`} fill="none" d="M 50,100 A 100,100 0 0,1 250,100" />
                        {/* Word 2 Path (Significantly Lower down) */}
                        <path id={`outer-${service.id}`} fill="none" d="M 30,145 A 120,120 0 0,1 270,145" />
                        
                        <text className="text-2xl font-black uppercase tracking-tighter fill-current">
                          <textPath href={`#inner-${service.id}`} startOffset="50%" textAnchor="middle">
                            {words[0]}
                          </textPath>
                        </text>

                        {words[1] && (
                          <text className="text-xl font-black uppercase tracking-widest fill-current opacity-80">
                            <textPath href={`#outer-${service.id}`} startOffset="50%" textAnchor="middle">
                              {words[1]}
                            </textPath>
                          </text>
                        )}
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative z-50 pointer-events-none translate-y-12">
              <Image src="/hand.png" alt="Pointer" width={180} height={180} className="object-contain drop-shadow-[0_20px_40px_rgba(255,100,0,0.4)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandService;