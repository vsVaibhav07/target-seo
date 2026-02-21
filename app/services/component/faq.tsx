"use client";

import React, { useState } from "react";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface ServiceFAQProps {
  data?: FAQItem[];
}

export default function ServiceFAQ({ data = [] }: ServiceFAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative bg-[#020617] py-32 overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <HelpCircle className="w-5 h-5 text-orange-500" />
              <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-[10px]">
                Support Center
              </span>
            </m.div>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter"
            >
              Frequently Asked <span className="text-orange-600">Questions</span>
            </m.h2>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {data.map((faq, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  activeIndex === i 
                    ? "bg-white/5 border-orange-600/30" 
                    : "bg-slate-900/40 border-white/5 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-bold text-white pr-8">{faq.q}</span>
                  <div className={`p-2 rounded-full transition-transform duration-500 ${activeIndex === i ? "bg-orange-600 rotate-180" : "bg-white/5"}`}>
                    {activeIndex === i ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-white" />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}