"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { industries, Industry } from "./components/data";
import { Hero } from "../services/[slug]/components/hero";

const MotionLink = motion(Link);

export default function IndustriesPage() {

  const heroData = {
  subtitle: "Intelligence.",
  title: "Deep Domain",
  heroDesc:
    "We don't do 'average' for everyone. We build high-velocity engineering frameworks exclusively for industries where precision is the only currency that matters.",
};

  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-orange-500/30">
      
      {/* --- HERO SECTION --- */}
      <Hero data={heroData} />

      {/* --- BENTO GRID INDUSTRIES --- */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {industries.map((item, index) => (
              <IndustryCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* --- PREMIUM CTA SECTION --- */}
      <section className="py-40 bg-[#020617] relative overflow-hidden text-center border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif uppercase mb-8">
            Don't see your <br /> <span className="text-accent font-dancing italic">Industry?</span>
          </h2>
          <p className="text-slate-400 mb-12 max-w-lg mx-auto">
            We build custom technical playbooks for unique business models. Let's engineer your growth together.
          </p>
          
          <div className="flex justify-center">
            <MotionLink
              href="/contact"
              initial="initial"
              whileHover="hover"
              className="relative group flex items-center gap-4 px-12 py-6 rounded-full border-2 border-orange-600/50 bg-transparent overflow-hidden"
            >
              <motion.div
                variants={{ initial: { y: "105%" }, hover: { y: 0 } }}
                className="absolute inset-0 bg-accent z-0"
              />
              <div className="relative z-10 flex items-center gap-3">
                <Sparkles className="group-hover:text-white text-accent transition-colors" size={20} />
                <span className="text-white font-black text-xl uppercase tracking-tighter transition-colors">
                  Request Custom Strategy
                </span>
                <ArrowRight className="text-white" size={24} />
              </div>
            </MotionLink>
          </div>
        </div>
      </section>
    </main>
  );
}

{/* --- INDIVIDUAL BENTO CARD COMPONENT --- */}
function IndustryCard({ item, index }: { item: Industry; index: number }) {
  // Logic to make the first and second cards bigger for bento look
  const colSpan = index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`${colSpan} group relative min-h-[450px] rounded-[2.5rem] bg-white/[0.03] border border-white/5 p-10 overflow-hidden hover:border-orange-500/30 transition-all duration-500`}
    >
      {/* Background Icon Watermark */}
      <item.icon 
        size={200} 
        className="absolute -right-10 -top-10 text-white/[0.02] group-hover:text-orange-500/[0.05] transition-colors duration-700 -rotate-12" 
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} mb-8 shadow-lg`}>
            <item.icon size={32} className="text-white" />
          </div>
          <h3 className="text-3xl font-black uppercase text-white mb-2 leading-tight">
            {item.title}
          </h3>
          <p className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-6">
            {item.subtitle}
          </p>
          <p className="text-slate-400 font-light leading-relaxed max-w-sm">
            {item.description}
          </p>

          <div className="mt-8 space-y-3">
            {item.expertise.map((exp, i) => (
              <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                <CheckCircle2 size={14} className="text-orange-600" /> {exp}
              </div>
            ))}
          </div>
        </div>

        {/* Metric Badge */}
        <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
          <div>
            <p className="text-4xl font-black text-white">{item.metric}</p>
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">{item.metricLabel}</p>
          </div>
          <motion.div 
            whileHover={{ x: 5 }}
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all cursor-pointer"
          >
            <ArrowRight size={20} />
          </motion.div>
        </div>
      </div>

      {/* Card Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}