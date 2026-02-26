"use client";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Calendar, Clock, Share2 } from "lucide-react";

export default function BlogDetailPage() {
  return (
    <main className="relative min-h-screen bg-[#020617] pt-32 pb-20 overflow-hidden">
      
      {/* --- FIXED BACKGROUND IMAGE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/blogbg.webp"
          alt="Background"
          fill
          priority
          className="object-cover opacity-[0.15]" // Opacity adjust karein visibility ke hisaab se
        />
        {/* Subtle Gradient Overlay taaki bottom pe image abrupt cut na ho */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="container relative z-10 mx-auto px-6 max-w-4xl">
        
        {/* 1. Breadcrumb & Meta */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-4 mb-8 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500"
        >
          <Link href="/blogs" className="hover:text-accent transition-colors">Blogs</Link>
          <span className="text-white/20">/</span>
          <span className="text-accent">SEO Strategy</span>
        </m.div>

        {/* 2. Title Section */}
        <m.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black font-dancing text-white leading-[1.1] mb-8 uppercase"
        >
          The Future of Organic Search <br /> 
          <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/40">
            In 2026.
          </span>
        </m.h1>

        {/* 3. Author & Reading Time */}
        <m.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between border-y border-white/10 py-6 mb-12 backdrop-blur-sm bg-white/[0.01]"
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Calendar size={14} className="text-accent" />
              <span>Feb 24, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Clock size={14} className="text-accent" />
              <span>8 Min Read</span>
            </div>
          </div>
          <button className="text-white hover:text-accent transition-colors cursor-pointer">
            <Share2 size={18} />
          </button>
        </m.div>

        {/* 4. Hero Image (Article Cover) */}
        <m.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-[2rem] overflow-hidden mb-16 border border-white/10 shadow-2xl"
        >
          <Image 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026"
            alt="Blog Detail"
            fill
            className="object-cover"
          />
        </m.div>

        {/* 5. Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-slate-300 leading-relaxed font-light italic border-l-4 border-accent pl-6 mb-10">
            Search engines are evolving faster than ever. In 2026, the intersection of AI, user intent, and technical precision will define who stays on top.
          </p>
          
          <h2 className="text-3xl font-bold text-white mt-12 mb-6 uppercase tracking-tighter font-serif"> The Rise of Semantic Intent</h2>
          <p className="text-slate-400 text-justify leading-relaxed mb-8">
            Gone are the days of simple keyword stuffing. Modern SEO is about understanding the "Why" behind a search query. We look into how neural networks are now processing context better than literal strings.
          </p>

          <div className="my-12 p-8 bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-md">
            <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Key Takeaway</h4>
            <p className="text-white text-lg text-justify m-0">Precision engineering in content is no longer optional—it's the bare minimum for domain authority.</p>
          </div>

          <p className="text-slate-400 text-justify leading-relaxed">
            As we move further into the decade, the focus shifts toward "E-E-A-T" (Experience, Expertise, Authoritativeness, and Trustworthiness) powered by real human insights rather than just AI-generated noise.
          </p>
        </article>

        {/* 6. Navigation Buttons */}
        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="#" className="group flex items-center gap-4 text-left max-w-[250px]">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ChevronLeft size={20} />
            </div>
            <div>
              <span className="block text-[10px] uppercase text-slate-500 font-bold tracking-widest mb-1">Previous</span>
              <span className="text-sm font-bold text-white group-hover:text-accent transition-colors line-clamp-1">The Psychology of UX</span>
            </div>
          </Link>

          <Link href="#" className="group flex items-center text-right gap-4 max-w-[250px]">
            <div>
              <span className="block text-[10px] uppercase text-slate-500 font-bold tracking-widest mb-1">Next Post</span>
              <span className="text-sm font-bold text-white group-hover:text-accent transition-colors line-clamp-1">AI Impact on Content</span>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/50 text-white/50 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ChevronRight size={20} />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}