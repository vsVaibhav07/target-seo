"use client";

import React, { useRef } from "react";
import {
  m,
  useScroll,
  useSpring,
  useTransform,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import { Search, PenTool, Zap, BarChart3 } from "lucide-react";
import { Pricing } from "./pricing";
import Image from "next/image";

const steps = [
  {
    title: "Discovery & Audit",
    desc: "We perform a deep-dive analysis of your industry, competitors, and current digital footprint.",
    icon: <Search className="w-6 h-6" />,
    color: "#ea580c",
    cx: "50%",
    cy: "0%",
  },
  {
    title: "Strategy Planning",
    desc: "A custom-tailored roadmap is built, aligning high-impact SEO tactics with your business goals.",
    icon: <PenTool className="w-6 h-6" />,
    color: "#3b82f6",
    cx: "12.5%",
    cy: "33.3%",
  },
  {
    title: "Execution & Optimization",
    desc: "Our experts implement technical fixes and content updates with surgical precision.",
    icon: <Zap className="w-6 h-6" />,
    color: "#a855f7",
    cx: "87.5%",
    cy: "66.6%",
  },
  {
    title: "Reporting & Scaling",
    desc: "Continuous data-backed monitoring ensures we keep scaling your organic growth and ROI.",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "#10b981",
    cx: "50%",
    cy: "100%",
  },
];

export default function SnakyProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 40%"],
  });

  const acceleratedProgress = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  const pathLength = useSpring(acceleratedProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={containerRef}
        className="relative max-w-screen  overflow-visible overflow-x-hidden"
      >
        {/* --- PINNED BACKGROUND IMAGE LAYER --- */}
        {/* We use 'fixed' or 'sticky' to pin it. Sticky works best within a section wrapper */}
        <div className="fixed inset-0 -z-50 h-screen w-full pointer-events-none overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1770110000509-6c8298224699?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Process Background"
            fill
            className="absolute h-screen object-cover"
          />
          {/* Darker overlay to help text readability since image is now "clearly visible" */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        </div>

        {/* --- MAIN CONTENT LAYER (Offset up to sit over the sticky bg) --- */}
        <div className="relative z-10 pt-10  ">
          {/* Section Title */}
          <div className="max-w-7xl mx-auto px-6 mb-40 text-center">
            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-orange-500 font-bold tracking-[0.3em] uppercase text-[12px] mb-4"
            >
              Phase-wise Execution
            </m.p>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic">
              Our <span className="text-orange-600">Workflow</span>
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto min-h-[1200px]">
            {/* THE SNAKY LINE LAYER */}
            <div className="absolute inset-0 w-full h-full hidden md:block">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 1200"
                fill="none"
                preserveAspectRatio="none"
                className="overflow-visible"
              >
                <path
                  d="M200 0 C200 150, 50 150, 50 400 C50 650, 350 650, 350 800 C350 950, 200 1200, 200 1200"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                />
                <m.path
                  d="M200 0 C200 150, 50 150, 50 400 C50 650, 350 650, 350 800 C350 950, 200 1200, 200 1200"
                  stroke="url(#lineGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ pathLength }}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ea580c" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>

              {/* STOPS ON PATH */}
              {steps.map((step, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ margin: "-100px" }}
                  className="absolute z-50 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: step.cx, top: step.cy }}
                >
                  <div className="relative flex items-center justify-center">
                    <div
                      className="absolute w-12 h-12 rounded-full blur-xl opacity-30 animate-pulse"
                      style={{ backgroundColor: step.color }}
                    />
                    <div
                      className="w-5 h-5 rounded-full border-2 border-white bg-[#020617] relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                      style={{ borderColor: step.color }}
                    />
                  </div>
                </m.div>
              ))}
            </div>

            {/* ALTERNATING CARDS LAYER */}
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[1200px]">
              {steps.map((step, index) => {
                const isEven = index % 2 === 1;
                return (
                  <div
                    key={index}
                    className={`flex w-full px-4 md:px-0 ${
                      isEven ? "justify-end" : "justify-start"
                    }`}
                  >
                    <m.div
                      initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full md:w-[44%] group"
                    >
                      <div className="bg-[#0f172a]/80 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-[2.5rem] hover:border-orange-500/40 transition-all duration-700 relative overflow-hidden shadow-2xl">
                        <span className="absolute -top-6 -right-4 text-[120px] font-black text-white/[0.05] italic pointer-events-none select-none">
                          0{index + 1}
                        </span>

                        <div className="flex items-center gap-6 mb-6">
                          <div
                            className="w-16 h-16 rounded-2xl bg-[#020617] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                            style={{ color: step.color }}
                          >
                            {step.icon}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight uppercase">
                            {step.title}
                          </h3>
                        </div>

                        <p className="text-slate-100 leading-relaxed text-base md:text-lg relative z-10 pr-4">
                          {step.desc}
                        </p>

                        <div
                          className="absolute bottom-0 right-0 w-32 h-32 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full pointer-events-none"
                          style={{ backgroundColor: step.color }}
                        />
                      </div>
                    </m.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Footer */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="my-10 mb-40 text-center relative z-10"
          >
            <div className="h-20 w-px bg-gradient-to-b from-orange-600 to-transparent mx-auto mb-10" />
            <h4 className="text-white text-xl font-bold mb-8 tracking-widest uppercase italic">
              Ready to see results?
            </h4>
            <button className="relative group px-12 py-5 overflow-hidden rounded-full bg-white text-black font-black uppercase tracking-widest transition-all">
              <span className="relative z-10">Get Started Now</span>
              <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </m.div>
          <Pricing/>
        </div>
      </section>
    </LazyMotion>
  );
}