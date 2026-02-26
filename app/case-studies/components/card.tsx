"use client";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

interface CaseStudyProps {
  data: {
    industry: string;
    title: string;
    problem: string;
    solution: string;
    results: string[];
    image: string;
    metrics: { label: string; value: string }[];
  };
  index: number;
}

export const CaseStudyCard = ({ data, index }: CaseStudyProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 py-24 border-b border-white/5`}
    >
      {/* Visual Side */}
      <div className="flex-1 relative group overflow-hidden rounded-[2rem] bg-slate-900 border border-white/10">
        <div className="aspect-video lg:aspect-square relative">
          <img 
            src={data.image} 
            alt={data.title}
            className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
          
          {/* Floating Stats over Image */}
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
            {data.metrics.map((m, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                <p className="text-[10px] uppercase tracking-widest text-orange-500 font-bold">{m.label}</p>
                <p className="text-xl font-black text-white">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="flex-1 flex flex-col justify-center space-y-8">
        <div>
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-widest">
            {data.industry}
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mt-6 leading-tight uppercase tracking-tighter">
            {data.title}
          </h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-orange-500 font-bold flex items-center gap-2">
              <span className="w-8 h-[1px] bg-orange-500" /> THE CHALLENGE
            </h4>
            <p className="text-slate-400 text-lg leading-relaxed">{data.problem}</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-emerald-500 font-bold flex items-center gap-2">
              <span className="w-8 h-[1px] bg-emerald-500" /> OUR STRATEGY
            </h4>
            <p className="text-slate-400 text-lg leading-relaxed">{data.solution}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          {data.results.map((res, i) => (
            <div key={i} className="flex items-start gap-3 text-slate-200">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
              <span className="font-medium">{res}</span>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-4 text-white font-bold group w-fit pt-6">
          VIEW DETAILED ANALYSIS 
          <span className="p-3 rounded-full border border-white/20 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all">
            <ArrowRight size={20} />
          </span>
        </button>
      </div>
    </motion.div>
  );
};