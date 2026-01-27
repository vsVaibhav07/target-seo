"use client";

import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Globe2,
  Sparkles,
  TrendingUp,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function Hero5() {
  const line1 = "We Help Businesses Rank Higher,";
  const line2 = "Get More Leads & Grow Revenue";
  const description =
    "ROI-driven SEO strategies for local and national businesses. No fluff. Just results.";

  const stats = [
    {
      icon: <TrendingUp size={24} />,
      label: "SEO Growth",
      detail: "Top Rankings",
    },
    {
      icon: <BarChart3 size={24} />,
      label: "More Leads",
      detail: "High Conversion",
    },
    {
      icon: <Globe2 size={24} />,
      label: "Global Reach",
      detail: "Market Authority",
    },
    { icon: <Sparkles size={24} />, label: "Revenue", detail: "Scalable ROI" },
  ];

  return (
    <section className="relative pt-36 min-h-screen bg-[#020202] flex items-center justify-center overflow-hidden py-20">
      {/* Background Video/Overlay */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none grayscale"
      >
        <source src="/heroBG.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <LazyMotion features={domAnimation}>
        <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          {/* LEFT PART: DATA CONTENT */}
          <div className="space-y-10">
            {/* Trust Signal Badge */}
            <m.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full"
            >
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <span className="text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-widest">
                Google Reviews | 100+ Clients | Transparent Reporting
              </span>
            </m.div>

            {/* Headline */}
            <div className="space-y-2">
              <m.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] uppercase"
              >
                {line1} <br />
                <span className="text-orange-600 inline-block mt-2">
                  {line2}
                </span>
              </m.h1>
            </div>

            {/* Sub-headline */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed border-l-2 border-orange-600 pl-6"
            >
              {description}
            </m.p>

            {/* CTAs */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-5"
            >
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
              <div className="flex gap-4">
            <Link
              href="/rebrand-solution"
              className="p-4 border-2 border-white text-white rounded-full hover:rotate-12 transition-transform"
            >
              <ArrowRight size={32} />
            </Link>
           
          </div>

              <Link
                href="/case-studies"
                className="px-8 py-4 rounded-xl border border-white/10 text-white font-black text-sm uppercase tracking-wider hover:bg-white/5 transition-all backdrop-blur-sm flex items-center gap-2"
              >
                📊 View Case Studies
              </Link>
            </m.div>
          </div>

          {/* RIGHT PART: GRID CARDS (Remain as it is but polished) */}
          <div className="grid grid-cols-2 gap-4 relative">
            {/* Aesthetic Glow behind cards */}
            <div className="absolute inset-0 bg-orange-600/20 blur-[120px] rounded-full" />

            {stats.map((item, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i + 0.5 }}
                whileHover={{
                  y: -10,
                  backgroundColor: "rgba(234, 88, 12, 0.15)",
                }}
                className="relative bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-xl transition-all group overflow-hidden"
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-white font-black uppercase tracking-tighter text-lg">
                  {item.label}
                </h3>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                  {item.detail}
                </p>

                {/* Decorative background number */}
                <span className="absolute -bottom-2 -right-2 text-6xl font-black text-white/5 pointer-events-none group-hover:text-orange-500/10 transition-colors">
                  0{i + 1}
                </span>
              </m.div>
            ))}
          </div>
        </div>
      </LazyMotion>
    </section>
  );
}
