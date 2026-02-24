"use client";

import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { Quote } from "lucide-react";

export default function CeoMessage() {
  return (
    <section className="  bg-[#020617]">
      <m.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto relative border-x border-t border-white/10 rounded-t-[3rem] lg:rounded-t-[5rem] p-8 md:p-12 overflow-hidden shadow-[0_-15px_40px_-15px_rgba(234,88,12,0.15)]"
      >
        {/* Decorative Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative z-10">
          {/* LEFT SIDE: PROFILE */}
          <div className="flex flex-col items-center md:items-start shrink-0">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-tr from-orange-600 to-amber-400 shadow-xl">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#020617]">
                <Image
                  src="/images/awadheshSir2.jpg" // Replace with real CEO image
                  alt="CEO Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-4 text-center md:text-left">
              <h4 className="text-white font-bold text-xl tracking-tight">
                Avadhesh Singh
              </h4>
              <p className="text-accent text-xs font-mono uppercase tracking-widest mt-1">
                (Founder & CEO)
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: TEXT CONTENT */}
          <div className="flex-1 space-y-5 relative">
            <div className="flex items-center gap-2">
              <Quote className="w-5 h-5 text-accent opacity-50" />
              <span className="h-px w-8 bg-white/10" />
            </div>

            <h3 className="text-xl md:text-3xl font-bold text-white leading-tight tracking-tight italic">
              "Our vision transcends simple rankings; we are here to transform
              your brand into a{" "}
              <span className="text-accent">
                dominant digital authority.
              </span>
              "
            </h3>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
              The digital landscape evolves every single day. At Target SEO, we
              don't just chase algorithms—we engineer future-proof strategies
              that prioritize high-intent growth, radical transparency, and
              measurable ROI. Our mission is to ensure that every marketing
              dollar you spend is an investment toward sustainable market
              leadership.
            </p>

            <div className="pt-2 flex items-center gap-2 text-accent font-bold text-[10px] uppercase tracking-[0.2em]">
              <div className="w-10 h-[1px] bg-accent" />
              <span>Executive Commitment</span>
            </div>
          </div>
        </div>
      </m.div>
    </section>
  );
}
