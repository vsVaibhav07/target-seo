"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  Search,
  ArrowRight,
  Sparkles,
  Zap,
  ArrowDown,
  CheckCircle2,
  BarChart,
  ExternalLink,
  MousePointerClick,
  Code2,
  ShoppingBag,
  Layers,
  Cpu,
  Globe,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Link from "next/link";
import { Hero } from "../services/[slug]/components/hero";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const MotionLink = motion(Link);
// --- PROJECT DATA ---
const caseStudies = [
  {
    id: "747disco",
    category: "Entertainment & Branding",
    client: "747Disco",
    title: "Scaling Digital Footprint for Premium Entertainment",
    overview:
      "747Disco needed a digital identity that matched their high-energy physical events. We focused on visual storytelling and local search dominance.",
    audit: {
      technical: [
        "Mobile Load Speed: 5s",
        "No Event Schema Markup",
        "Low Social Integration",
      ],
      content: [
        "Weak Brand Voice",
        "Missing Local Keywords",
        "Poor CTA Placement",
      ],
    },
    strategy:
      "Implemented high-performance asset loading and localized SEO to capture 'Event & Party' search intent in target regions.",
    metrics: [
      { label: "Engagement", value: "+120%", icon: Zap },
      { label: "Local Visibility", value: "#1 Rank", icon: Target },
      { label: "User Retention", value: "+45%", icon: TrendingUp },
    ],
    image:
      "https://www.rebrandsolution.com/assets/images/achievements/747Disco.webp",
    bgColor: "#0b0f1a",
    accent: "rgba(147, 51, 234, 0.15)",
  },
  {
    id: "rebrand-solution",
    category: "Web Development & B2B",
    client: "Rebrand Solution",
    title: "Engineering a High-Conversion Agency Platform",
    overview:
      "A web development business needs to showcase technical perfection. We rebuilt the architecture for speed and lead generation efficiency.",
    audit: {
      technical: [
        "Performance Score: 80/100",
        "High JS Execution Time",
        "Legacy Code Bloat",
      ],
      content: [
        "Generic Service Pages",
        "Low Case Study Depth",
        "No Lead Magnets",
      ],
    },
    strategy:
      "Moved to a modern stack (Next.js) with optimized Core Web Vitals, resulting in a 98/100 performance score.",
    metrics: [
      { label: "Site Speed", value: "0.8s", icon: Code2 },
      { label: "Inbound Leads", value: "2.5x", icon: MousePointerClick },
      { label: "Domain Rating", value: "+30", icon: BarChart },
    ],
    image: "/images/rebrandsolution.png",
    bgColor: "#050810",
    accent: "rgba(37, 99, 235, 0.15)",
  },
  {
    id: "zestofmoringa",
    category: "E-Commerce / Health",
    client: "Zest of Moringa",
    title: "Scaling Organic Sales for Wellness Commerce",
    overview:
      "Zest of Moringa required a shift from social-only traffic to a steady stream of organic search revenue.",
    audit: {
      technical: [
        "Unoptimized Product Images",
        "Poor Internal Linking",
        "LCP Failure",
      ],
      content: [
        "Non-semantic Product Titles",
        "No Educational Blog Funnel",
        "Thin Descriptions",
      ],
    },
    strategy:
      "Executed a semantic content strategy focusing on the health benefits of Moringa to capture high-intent 'Superfood' buyers.",
    metrics: [
      { label: "Organic Sales", value: "+160%", icon: ShoppingBag },
      { label: "Traffic Volume", value: "15K+", icon: TrendingUp },
      { label: "Keyword Rankings", value: "100+", icon: Search },
    ],
    image:
      "https://www.rebrandsolution.com/assets/images/achievements/zest-of-moringa.webp",
    bgColor: "#020617",
    accent: "rgba(16, 185, 129, 0.15)",
  },
];
const data = {
  subtitle: "Strategic Digital Orchestration",
  title: "Data to Dominance.",
  description:
    "Deep dives into how we engineered high-performance SEO and scalable web systems for global brands. Real impact, measured performance.",
};

const methodologySteps = [
  {
    title: "Deep Technical Audit",
    desc: "We analyze Core Web Vitals, server response, and indexing logic with a 200+ point checklist.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Semantic Content Architecture",
    desc: "Moving beyond keywords to build Topic Clusters that establish industry E-E-A-T.",
    icon: Layers,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Performance Engineering",
    desc: "Using Next.js and Headless architecture to achieve sub-second loading speeds.",
    icon: Cpu,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Authority Scaling",
    desc: "Boosting Domain Authority through high-trust digital PR and niche-relevant editorial links.",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
  },
];

export default function CaseStudiesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, duration: 1.2 });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Stacking/Pinning Logic
    const sections = gsap.utils.toArray(".case-section");
    sections.forEach((section: any) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="bg-[#020617] text-slate-200 selection:bg-orange-500/30"
    >
      <Hero data={data} />

      {/* --- PINNED CASE STUDIES --- */}
      <div className="relative">
        {caseStudies.map((study, index) => (
          <section
            key={study.id}
            className="case-section relative h-screen w-full flex items-center justify-center overflow-hidden border-t border-white/5"
            style={{ backgroundColor: study.bgColor }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(circle at center, ${study.accent}, transparent)`,
              }}
            />

            <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12 items-center relative z-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <span className="text-orange-500 font-mono text-xs font-bold uppercase tracking-widest">
                    Project 0{index + 1}
                  </span>
                  <h2 className="text-5xl md:text-7xl font-black font-serif text-white mt-2 uppercase">
                    {study.client}
                  </h2>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed max-w-xl italic">
                  {`"${study.overview}"`}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                    >
                      <p className="text-xl font-black text-white">{m.value}</p>
                      <p className="text-[8px] uppercase font-bold text-slate-500 tracking-tighter">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={"#methodology"}
                    className="px-8 py-4 bg-orange-600 text-white font-bold uppercase text-xs rounded-full hover:bg-white hover:text-orange-600 transition-all shadow-lg"
                  >
                    View Strategy
                  </Link>
                  <a
                    href={`https://${study.id}.com`}
                    target="_blank"
                    className="p-4 border border-white/10 rounded-full hover:bg-white/5 transition-all text-white"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </motion.div>

              <div className="relative group w-full max-w-4xl mx-auto">
                {/* --- Realistic Laptop Frame Header --- */}
                <div className="bg-[#1a1a1a] border-t border-x border-white/10 rounded-t-2xl py-3 px-5 flex items-center justify-between shadow-2xl">
                  {/* Window Controls (Mac Style) */}
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-inner" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-inner" />
                  </div>
                  {/* Minimal Browser URL Bar */}
                  <div className="hidden md:flex bg-white/5 border border-white/5 rounded-full px-4 py-1 w-2/3 items-center justify-center text-[10px] text-slate-500 font-mono tracking-tighter">
                    https://{study.client.toLowerCase().replace(/\s/g, "")}
                    .com/audit_report
                  </div>
                  <div className="w-10" /> {/* Spacer */}
                </div>

                {/* --- Screen / Screenshot Content (Fixed 16:9 Aspect Ratio) --- */}
                <div className="relative aspect-video w-full overflow-hidden border-x border-b border-white/10 rounded-b-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] bg-[#020617]">
                  <Image
                    src={study.image}
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    alt={study.client}
                    fill
                    unoptimized
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* --- Data Reveal on Hover --- */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                    <div className="bg-black/60 backdrop-blur-2xl p-5 rounded-2xl border border-white/10 shadow-2xl">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <p className="text-[11px] text-orange-500 font-black uppercase tracking-[0.2em]">
                          Technical Audit Architecture
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {study.audit.technical.map((t, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-bold text-white/90 bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-md hover:bg-orange-600/20 hover:border-orange-500/50 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floor Reflection / Shadow Depth */}
                <div className="absolute -bottom-6 left-[10%] right-[10%] h-12 bg-orange-600/10 blur-[80px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* --- CREATIVE METHOD SECTION (DARK BLUE THEME) --- */}
      <section
        id="methodology"
        className="relative py-32 overflow-hidden bg-[#020617] z-[200]"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-orange-500 font-mono text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
            >
              The Execution DNA
            </motion.span>
            <h2 className="text-5xl md:text-8xl font-black uppercase text-white leading-none mb-8">
              Our{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Methodology.
              </span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
              We replace guesswork with a rigorous engineering lifecycle
              designed for scalability.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto mt-20">
            {/* Timeline Line */}
            <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent lg:-translate-x-1/2" />

            <div className="space-y-32">
              {methodologySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center justify-between gap-12`}
                >
                  <div className="absolute left-[20px] lg:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#020617] border-2 border-white/20 flex items-center justify-center z-20">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.color} animate-pulse`}
                    />
                  </div>

                  <div
                    className={`w-full lg:w-[45%] pl-16 lg:pl-0 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
                  >
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 bg-gradient-to-br ${step.color} opacity-80 backdrop-blur-md`}
                    >
                      <step.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white uppercase mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg font-light">
                      {step.desc}
                    </p>
                  </div>

                  <div className="hidden lg:block w-[45%] h-32 relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-[0.03] rounded-full blur-3xl`}
                    />
                    <div className="flex items-center justify-center h-full opacity-10">
                      <span className="text-9xl font-black text-white tracking-tighter">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 bg-[#020617] text-center relative z-10 border-t border-white/5">
        <h3 className="text-5xl md:text-7xl font-dancing font-black text-white uppercase mb-12">
          Your Growth <br />{" "}
          <span className="text-accent font-serif italic">Starts Here.</span>
        </h3>
        <div className="flex justify-center items-center py-10">
          <MotionLink
            href="/contact" // Aapka target route
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="relative group flex items-center gap-4 px-12 py-6 rounded-full border-2 border-orange-600/50 bg-transparent overflow-hidden transition-all duration-300"
          >
            {/* Animated Background Fill - Wave Effect */}
            <motion.div
              variants={{
                initial: { y: "105%" },
                hover: { y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-accent z-0"
            />

            {/* Content Wrapper */}
            <div className="relative z-10 flex items-center gap-3">
              <motion.div
                variants={{
                  initial: { rotate: 0, scale: 1 },
                  hover: { rotate: 15, scale: 1.2 },
                }}
              >
                <Sparkles
                  className="text-orange-500 group-hover:text-white transition-colors duration-300"
                  size={20}
                />
              </motion.div>

              <span className="text-white font-black text-xl uppercase tracking-tighter group-hover:text-white transition-colors duration-300">
                Get A Free Audit
              </span>

              <motion.div
                variants={{
                  initial: { x: 0 },
                  hover: { x: 10 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="text-white" size={24} />
              </motion.div>
            </div>

            {/* Hover Glow - High End Agency Look */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_60px_rgba(234,88,12,0.5)] pointer-events-none" />
          </MotionLink>
        </div>
      </section>
    </main>
  );
}
