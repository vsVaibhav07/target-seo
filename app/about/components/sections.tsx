"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Target, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

// Step 1: Fixed Variants (viewport removed to fix TS error)
const fadeUp: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

// --- HERO SECTION ---
export const AboutHero: React.FC = () => (
  <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-transparent">
    {/* Background Large Text Decor */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none">
      <h2 className="text-[20vw] font-black text-white/[0.02] leading-none uppercase">
        Digital Growth
      </h2>
    </div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-6xl relative z-10"
    >
      <span className="text-accent font-mono tracking-[0.8em] uppercase text-[10px] md:text-xs mb-8 block font-bold">
        Crafting Search Ecosystems
      </span>
      
      <div style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }} className="relative inline-block">
        <h1 className="text-7xl md:text-[8rem] font-serif text-white uppercase tracking-tight leading-[0.8] mb-4">
          ABOUT 
          <span className="block italic font-serif text-transparent bg-clip-text bg-gradient-r from-orange-400 via-orange-600 to-orange-800 lowercase font-light tracking-tighter py-2">
            us.
          </span>
        </h1>
        
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-600/20 blur-3xl rounded-full" />
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 border-t border-white/10 pt-10">
        <p className="text-slate-400 text-lg md:text-xl max-w-xl text-center md:text-left font-light leading-relaxed">
          At <span className="text-white font-medium">Target SEO Solutions</span>, we transform organic search into your most aggressive revenue channel. 
        </p>
        <div className="h-20 w-[1px] bg-accent/50 hidden md:block" />
        <div className="flex flex-col items-start text-left">
          <span className="text-white font-bold text-4xl">16+</span>
          <span className="text-slate-500 text-[10px] uppercase tracking-widest font-black">Years Expertise</span>
        </div>
      </div>
    </motion.div>

    {/* Scroll Indicator */}
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent" />
    </motion.div>
  </section>
);

// --- MISSION & VALUES ---
export const MissionValues: React.FC = () => (
  <section className="py-32 container mx-auto px-6 grid lg:grid-cols-2 gap-20 bg-transparent">
    <motion.div 
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      variants={fadeUp} 
      className="space-y-8"
    >
      <h2 className="text-5xl font-black font-dancing text-white uppercase">Our Mission</h2>
      <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-accent pl-8">
        Our mission is to deliver real results for businesses of all sizes... every brand should have the chance to be seen, heard, and trusted online.
      </p>
    </motion.div>
    <div className="grid grid-cols-2 gap-6">
      {[
        { title: "Integrity", desc: "Honest, clear practices." },
        { title: "Innovation", desc: "Leading tech trends." },
        { title: "Excellence", desc: "Highest standards." },
        { title: "Client-First", desc: "Tailored solutions." }
      ].map((val, i) => (
        <motion.div 
          key={i} 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: i * 0.1 }}
          className="p-8 bg-transparent border border-white/10 rounded-3xl backdrop-blur-xl"
        >
          <h4 className="text-accent font-bold mb-2 uppercase text-xs tracking-widest">{val.title}</h4>
          <p className="text-white text-sm opacity-60">{val.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// --- CEO SECTION ---
export const CEOSection: React.FC = () => (
  <section className="py-32 bg-transparent border-y border-white/10">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
      <div className="w-full lg:w-1/3 relative">
        <div className="aspect-[4/5] bg-transparent rounded-[3rem] overflow-hidden border border-white/20 relative">
            <Image 
              src="/images/AwadheshSir.jpeg" 
              alt="Avadhesh Kumar Singh" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-2xl shadow-2xl z-20">
            <h3 className="text-white font-bold text-xl">16+ Years</h3>
            <p className="text-white/80 text-xs uppercase tracking-widest">Experience</p>
        </div>
      </div>
      <div className="w-full lg:w-2/3 space-y-8">
        <motion.div 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-6xl font-black font-serif text-white uppercase leading-none">Avadhesh Kumar Singh</h2>
          <p className="text-accent font-mono mt-2">Founder & CEO, Target SEO Solutions</p>
        </motion.div>
        <p className="text-slate-300 text-lg italic leading-relaxed">
          "I started Target SEO Solutions with one mission—to help businesses grow online with strategies that are clear, ethical, and results-focused."
        </p>
        <div className="flex gap-4">
          <a href="#" className="p-4 bg-white/10 rounded-full hover:bg-accent transition-all text-white"><Linkedin size={24} /></a>
          <a href="mailto:avadhesh@targetseosolutions.com" className="p-4 bg-white/10 rounded-full hover:bg-accent transition-all text-white"><Mail size={24} /></a>
        </div>
      </div>
    </div>
  </section>
);

// --- WHY CHOOSE US GRID ---
export const WhyChooseUs: React.FC = () => (
  <section className="py-32 container mx-auto px-6 bg-transparent">
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-7xl font-black font-dancing text-white uppercase tracking-tighter">Why Choose Us</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { t: "Proven SEO Expertise", d: "Updated knowledge of Google's algorithms." },
        { t: "Ethical White-Hat", d: "No shortcuts. Complete transparency." },
        { t: "Guaranteed Metrics", d: "30-50% traffic growth within 6 months." }
      ].map((item, i) => (
        <motion.div 
          key={i} 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeUp} 
          className="p-10 rounded-[3rem] bg-transparent border border-accent/10 hover:border-accent/40 transition-all"
        >
          <Target className="text-accent w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4 uppercase">{item.t}</h3>
          <p className="text-slate-400 leading-relaxed">{item.d}</p>
        </motion.div>
      ))}
    </div>
  </section>
);