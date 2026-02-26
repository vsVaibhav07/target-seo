"use client";
import { m } from "framer-motion";
import Image from "next/image";
import AnimatedHeading from "@/app/components/common/animatedHeading";
import BlogGrid from "./components/blogGrid";

export default function BlogsPage() {
  return (
    <main className="relative min-h-screen bg-[#020617] pt-40 overflow-hidden">
      
      {/* --- FIXED BACKGROUND IMAGE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <m.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/blogbg.webp"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </m.div>
        {/* Dark Overlay to maintain readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] opacity-90" />
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="container mx-auto px-6 text-center mb-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-block px-6 py-2 border border-accent/20 rounded-full bg-accent/5 backdrop-blur-md"
          >
            <span className="text-accent font-mono tracking-[0.4em] text-[10px] font-bold uppercase">
              Insights & Knowledge
            </span>
          </m.div>

          <div className="flex flex-col items-center justify-center">
            
            <AnimatedHeading 
              text=" BLOGS " 
              className="text-6xl md:text-8xl font-black uppercase font-dancing text-white" 
            />
            
            <AnimatedHeading 
              text="INSIGHTS." 
              className="text-6xl md:text-8xl font-black uppercase italic font-serif text-accent bg-clip-text bg-gradient-to-r from-accent to-accent/40" 
            />
          </div>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mt-8 font-light px-4"
          >
            Explore our latest thoughts on SEO, technology, and digital growth strategies to stay ahead in the game.
          </m.p>
        </section>

        {/* Blogs Grid */}
        <BlogGrid />
      </div>

    </main>
  );
}