"use client";

import React, { useState } from "react";
import { m, LazyMotion, domAnimation, Variants } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  BarChart3,
  Globe2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Hero5 from "./hero4";
import Hero from "./hero";

// --- DATA ---
const line1 = "We Help Businesses Rank Higher,";
const line2 = "Get More Leads & Grow Revenue";
const description =
  "ROI-driven SEO strategies for local and national businesses. No fluff. Just results.";
const images = [
  "/marketing.webp",
  "/seoImage1.webp",
  "/seo2.webp",
  "/social.webp",
  "/startup.webp",
];

// --- ANIMATIONS ---
const reveal:Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ==========================================
// VERSION 1: THE LUXURY MASONRY (Image Heavy)
// ==========================================
function Hero1() {
  return (
    <section className="relative min-h-screen bg-[#050505] flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <m.div initial="hidden" animate="visible" className="space-y-8">
          <m.div
            custom={0}
            variants={reveal}
            className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs flex items-center gap-2"
          >
            <Sparkles size={14} /> Elite Growth Agency
          </m.div>
          <m.h1
            custom={1}
            variants={reveal}
            className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter"
          >
            {line1} <br />{" "}
            <span className="text-orange-600 italic">{line2}</span>
          </m.h1>
          <m.p
            custom={2}
            variants={reveal}
            className="text-slate-400 text-lg max-w-md"
          >
            {description}
          </m.p>
          <m.div custom={3} variants={reveal} className="flex gap-4">
            <Link
              href="/rebrand-solution"
              className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-orange-600 hover:text-white transition-all"
            >
              Get Free SEO Audit <ArrowRight size={18} />
            </Link>
          </m.div>
        </m.div>
        <div className="relative h-[600px] hidden lg:flex gap-4">
          <m.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="flex-1 space-y-4 pt-20"
          >
            {images.slice(0, 2).map((img, i) => (
              <div
                key={i}
                className="relative h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <Image
                  src={img}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="work"
                />
              </div>
            ))}
          </m.div>
          <m.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="flex-1 space-y-4"
          >
            {images.slice(2, 4).map((img, i) => (
              <div
                key={i}
                className="relative h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <Image
                  src={img}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="work"
                />
              </div>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// VERSION 2: KINETIC TYPOGRAPHY (Only Text)
// ==========================================
function Hero2() {
  return (
    <section className="relative h-screen bg-black flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl"
      >
        <h1 className="text-5xl md:text-[100px] font-black text-white leading-none tracking-[ -0.05em] uppercase">
          {line1.split(",")[0]} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700">
            THE REVENUE
          </span>{" "}
          <br />
          ENGINE.
        </h1>
        <p className="mt-8 text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
          {description}
        </p>
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
          <Link
            href="/rebrand-solution"
            className="text-2xl font-black text-white underline decoration-orange-600 underline-offset-8 hover:text-orange-500 transition-all"
          >
            Start Audit →
          </Link>
          <Link
            href="/case-studies"
            className="text-2xl font-black text-slate-600 hover:text-white transition-all"
          >
            See Success Stories
          </Link>
        </div>
      </m.div>
    </section>
  );
}

// ==========================================
// VERSION 3: SPLIT-SCREEN MINIMAL (Clean)
// ==========================================
function Hero3() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 bg-black flex items-center justify-center p-12 lg:p-24 order-2 lg:order-1">
        <div className="space-y-8 max-w-md">
          <h1 className="text-5xl font-black text-white leading-tight uppercase tracking-tighter">
            {line1} <span className="text-orange-500">{line2}</span>
          </h1>
          <p className="text-slate-400 text-lg">{description}</p>
          <Link
            href="/rebrand-solution"
            className="inline-block bg-orange-600 text-white px-10 py-4 font-bold rounded-lg shadow-xl"
          >
            Analyze My Site
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-[400px] order-1 lg:order-2">
        <Image
          src="/marketing.webp"
          fill
          className="object-cover"
          alt="marketing"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
}

// ==========================================
// VERSION 4: CYBER INTERACTIVE (Modern/Tech)
// ==========================================
function Hero4() {
  return (
    <section className="relative h-screen bg-[#020202] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      >
        <source src="/heroBG.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="h-1 w-20 bg-orange-600" />
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
            RANK <br /> <span className="opacity-40">HIGHER.</span>
          </h1>
          <p className="text-slate-300 border-l-2 border-orange-600 pl-6 text-xl">
            {line1} {line2}
          </p>
          <div className="flex gap-4">
            <Link
              href="/rebrand-solution"
              className="p-4 bg-orange-600 text-white rounded-full hover:rotate-12 transition-transform"
            >
              <ArrowRight size={32} />
            </Link>
            <span className="text-white font-bold self-center tracking-widest uppercase text-sm">
              Request Your Audit
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <TrendingUp />, label: "SEO" },
            { icon: <BarChart3 />, label: "Leads" },
            { icon: <Globe2 />, label: "Traffic" },
            { icon: <Sparkles />, label: "Growth" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-orange-600/20 transition-all group"
            >
              <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-white font-bold">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// MAIN EXAMPLES SWITCHER
// ==========================================
export default function HeroExample() {
  const [v, setV] = useState(1);
  return (
    <LazyMotion features={domAnimation}>
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20 flex gap-2">
        {[1, 2, 3, 4, 5,6].map((num) => (
          <button
            key={num}
            onClick={() => setV(num)}
            className={`px-6 py-2 rounded-full text-xs font-black transition-all ${v === num ? "bg-orange-600 text-white" : "text-white hover:bg-white/10"}`}
          >
            VERSION {num}
          </button>
        ))}
      </div>
      {v === 1 && <Hero5 />}
      {v === 2 && <Hero2 />}
      {v === 3 && <Hero3 />}
      {v === 4 && <Hero4 />}
      {v === 5 && <Hero1 />}
      {v === 6 && <Hero />}
    </LazyMotion>
  );
}
