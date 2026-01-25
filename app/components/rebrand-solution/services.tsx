"use client";

import React, { useRef, useEffect, useState } from "react";
import { m, useScroll, useTransform, LazyMotion, domAnimation, useSpring } from "framer-motion";
import { ArrowUpRight, MoveRight } from "lucide-react";
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
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const serviceHeadingRef = useRef<HTMLHeadingElement>(null);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    const compute = () => {
      if (scrollContentRef.current) {
        setLimit(scrollContentRef.current.scrollWidth - window.innerWidth);
      }
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -limit]);

  useEffect(() => {
    if (serviceHeadingRef.current) {
      const chars = serviceHeadingRef.current.querySelectorAll(".service-char");
      
      ScrollTrigger.create({
        trigger: serviceHeadingRef.current,
        start: "top 90%",
        onEnter: () => animateChars(chars, 1),
        onEnterBack: () => animateChars(chars, -1),
      });
    }

    const animateChars = (chars: NodeListOf<Element>, direction: number) => {
      gsap.fromTo(chars,
        { 
          opacity: 0, 
          y: (i) => (i % 2 === 0 ? 60 * direction : -60 * direction), 
          skewX: (i) => (i % 2 === 0 ? 25 : -25) 
        },
        { 
          opacity: 1, 
          y: 0, 
          skewX: 0, 
          duration: 1, 
          stagger: 0.03, 
          ease: "expo.out",
          overwrite: true
        }
      );
    };

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  const splitText = (text: string) => {
    const coloredIndices = [2, 4, 5]; 
    return text.split("").map((char, i) => (
      <span 
        key={i} 
        className={`service-char inline-block will-change-transform ${coloredIndices.includes(i) ? 'text-orange-600' : 'text-white'}`}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <LazyMotion features={domAnimation}>
      <section ref={targetRef} className="relative h-[600vh] bg-[#050505]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          <m.div 
            ref={scrollContentRef}
            style={{ x }} 
            className="flex flex-nowrap h-full items-center px-[2vw]"
          >
            <div className="flex-shrink-0 w-screen h-screen flex items-center justify-center">
              <h2 ref={serviceHeadingRef} className="text-[14vw] font-black tracking-tighter leading-none select-none">
                {splitText("SERVICES")}<span className="text-orange-600 service-char">.</span>
              </h2>
            </div>

            <div className="flex flex-nowrap items-center gap-2"> 
              {services.map((service, index) => (
                <CardWrapper key={service.id} service={service} index={index} />
              ))}
            </div>
            
            <div className="flex-shrink-0 w-[15vw]" />
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

const CardWrapper = ({ service, index }: { service: typeof services[0], index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress: itemProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(itemProgress, [0, 0.5, 1], [30, 0, -30]);
  const scale = useTransform(itemProgress, [0, 0.5, 1], [0.8, 1.02, 0.8]);
  const opacity = useTransform(itemProgress, [0, 0.2, 0.5, 0.8, 1], [0.4, 1, 1, 1, 0.4]);
  
  const springScale = useSpring(scale, { stiffness: 120, damping: 20 });
  const springRotate = useSpring(rotateY, { stiffness: 120, damping: 20 });

  return (
    <div 
      ref={ref}
      className="flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[26vw] flex justify-center items-center perspective-1500"
    >
      <m.div 
        style={{ 
          scale: springScale, 
          rotateY: springRotate,
          opacity,
          transformStyle: "preserve-3d"
        }} 
        className="w-full flex justify-center"
      >
        <ServiceCard service={service} />
      </m.div>
    </div>
  );
};

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
  <m.div 
    whileHover={{ z: 30 }}
    className="relative w-[85%] md:w-[90%] h-[420px] md:h-[480px] bg-gradient-to-br from-neutral-900/90 to-black border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden group shadow-xl"
  >
    <div className="absolute top-0 left-0 w-full h-[3px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
    
    <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
      <div className="flex justify-between items-start">
        <span className="text-6xl font-black text-white/5 group-hover:text-orange-600/20 transition-colors duration-500">
          {service.id}
        </span>
        <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-500">
          <ArrowUpRight className="text-white" size={20} />
        </div>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4 group-hover:text-orange-500 transition-colors tracking-tight">
        {service.title}
      </h3>
      <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-100 transition-colors line-clamp-4">
        {service.desc}
      </p>
    </div>

    <div className="relative z-10" style={{ transform: "translateZ(15px)" }}>
      <button className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] bg-white/5 px-5 py-3 rounded-full hover:bg-orange-600 transition-all duration-300">
        Discover <MoveRight size={14} className="text-orange-600 group-hover:text-white" />
      </button>
    </div>

    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-600/5 rounded-full blur-[80px] group-hover:bg-orange-600/15 transition-all duration-1000" />
  </m.div>
);

export default RebrandServices;