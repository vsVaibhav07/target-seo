"use client";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedHeading from "@/app/components/common/animatedHeading";

export default function AboutUs() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={container} className="py-40 relative px-6 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <m.div style={{ y: imgY }} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-accent/10">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" 
              alt="Our Workspace"
              className="object-cover w-full h-full scale-110 grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </m.div>
          <div className="absolute -top-10 -left-10 w-full h-full border border-accent/20 rounded-[2rem] -z-10" />
        </div>

        <div className="space-y-10">
          <div className="space-y-2">
            <AnimatedHeading text="GLOBAL" className="text-5xl md:text-7xl font-black font-dancing text-white" />
            <AnimatedHeading text="GROWTH" className="text-5xl md:text-7xl font-black font-dancing text-accent" />
          </div>
          
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed text-justify">
            <p>At Target SEO Solutions, we are partners in growth for businesses worldwide. Our vision has grown into a full-service agency helping brands shine in a competitive digital landscape.</p>
            <p className="border-l-4 border-accent pl-6 italic text-white text-xl bg-white/5 py-6 rounded-r-xl shadow-xl">
              "Every brand deserves a seat at the top of the SERPs."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
             {["Integrity", "Innovation", "Excellence", "Client-First"].map((item) => (
               <div key={item} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-accent hover:bg-accent/5 transition-all">
                 <span className="font-bold uppercase tracking-widest text-[10px] text-accent">{item}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}