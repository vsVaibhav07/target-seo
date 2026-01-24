"use client";

import React, { useRef, useEffect } from "react";
import { m, useScroll, useTransform, LazyMotion, domAnimation } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: "01", title: "Web Design", desc: "We innovate your web design to connect with your potential customers." },
  { id: "02", title: "Strategic Marketing", desc: "Tailoring marketing services to meet unique needs." },
  { id: "03", title: "Research & Planning", desc: "Understanding market landscape and competitive environment." },
  { id: "04", title: "Digital Advertising", desc: "Leverage cutting-edge technologies to maximize visibility." },
  { id: "05", title: "Brand Building", desc: "Crafting compelling brand identities that resonate." },
  { id: "06", title: "Media Strategy", desc: "Media plans that align with your marketing objectives." },
];

const RebrandServices = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const serviceHeadingRef = useRef<HTMLHeadingElement>(null);
  
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  // --- STEP 1: Letter Animation Trigger ---
  useEffect(() => {
    if (serviceHeadingRef.current) {
      const chars = serviceHeadingRef.current.querySelectorAll(".service-char");
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceHeadingRef.current,
          start: "top 80%", // Jab heading viewport ke 80% par aaye
          toggleActions: "play none none reverse",
          onEnter: () => tl.restart(),
          onEnterBack: () => tl.restart(),
        }
      });

      tl.fromTo(
        chars,
        {
          opacity: 0,
          y: (i) => (i % 2 === 0 ? 80 : -80), // Opposite movement
          skewX: (i) => (i % 2 === 0 ? 20 : -20),
        },
        {
          opacity: 1,
          y: 0,
          skewX: 0,
          duration: 1.2,
          stagger: 0.04,
          ease: "expo.out",
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // --- STEP 2: Text Splitting Helper ---
  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="service-char  inline-block will-change-transform">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <LazyMotion features={domAnimation}>
      <section ref={targetRef} className="relative h-[400vh] bg-[#050505] z-30">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <m.div style={{ x }} className="flex h-full w-[300vw]">
            
            {/* SCREEN 1: Intro with Animated Heading */}
            <div className="w-screen h-full flex flex-col items-center justify-center">
              <div className="overflow-hidden">
                <h2 
                  ref={serviceHeadingRef}
                  className="text-8xl md:text-[14rem] font-black text-white tracking-tighter leading-none"
                >
                  {splitText("SERVICES")}
                  <span className="text-orange-600 service-char inline-block">.</span>
                </h2>
              </div>
            </div>

            {/* SCREEN 2: Cards 1-3 */}
            <div className="w-screen h-full flex items-center justify-center px-10 md:px-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
                {services.slice(0, 3).map((s, i) => <BigCard key={i} {...s} />)}
              </div>
            </div>

            {/* SCREEN 3: Cards 4-6 */}
            <div className="w-screen h-full flex items-center justify-center px-10 md:px-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
                {services.slice(3, 6).map((s, i) => <BigCard key={i} {...s} />)}
              </div>
            </div>

          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

const BigCard = ({ id, title, desc }: { id: string; title: string; desc: string }) => (
  <m.div 
    whileHover={{ scale: 1.02 }}
    className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl group hover:bg-white/10 transition-all h-[450px] flex flex-col justify-between"
  >
    <div>
      <span className="text-6xl font-black text-white/5 group-hover:text-orange-600/20 transition-colors">{id}</span>
      <h3 className="text-3xl font-bold text-white mt-4 mb-4 leading-tight">{title}</h3>
      <p className="text-gray-400 text-lg leading-relaxed">{desc}</p>
    </div>
    <button className="flex items-center gap-4 text-orange-600 font-bold uppercase tracking-widest group-hover:gap-6 transition-all">
      Read More <ArrowUpRight />
    </button>
  </m.div>
);

export default RebrandServices;