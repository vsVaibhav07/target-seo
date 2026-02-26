"use client";
import { m } from "framer-motion";
import { Linkedin, Mail, Target, Award } from "lucide-react";
import Image from "next/image";

import SectionTitle from "@/app/components/common/sectionTitle";

export default function CEOSection() {
  return (
    <section className="py-40 relative px-6">
      <div className="container mx-auto bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-20">
        <div className="w-full lg:w-2/5 relative">
          <m.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="aspect-[3/4] rounded-[3rem] overflow-hidden border-8 border-white/5 relative shadow-2xl"
          >
            <Image 
              src="/images/AwadheshSir.jpeg" 
              alt="Avadhesh Kumar Singh" 
              fill 
              className="object-cover"
            />
          </m.div>
          <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-3xl hidden md:block shadow-2xl">
            <span className="text-4xl font-black block text-white">16+</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/80">Years Excellence</span>
          </div>
        </div>

        <div className="w-full lg:w-3/5 space-y-8">
          <div className="space-y-2">
           
             <SectionTitle className='  bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.1),transparent_50%)]  ' text='AVADHESH KUMAR SINGH' />
            <p className="text-accent font-mono mt-4 uppercase tracking-[0.4em] text-sm font-bold">Founder & CEO</p>
          </div>

          <p className="text-2xl text-slate-300 italic leading-snug font-light border-l-2 border-accent/30 pl-8">
            "My goal has always been to see my clients succeed, as their growth reflects my success."
          </p>

          <div className="grid md:grid-cols-2 gap-8 pt-4">
            <div className="flex gap-4 items-start group">
              <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent transition-colors"><Target size={24} className="text-accent group-hover:text-white" /></div>
              <div>
                <h4 className="font-bold uppercase text-sm text-white">Leadership</h4>
                <p className="text-xs text-slate-400">Focus on integrity and innovation.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start group">
              <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent transition-colors"><Award size={24} className="text-accent group-hover:text-white" /></div>
              <div>
                <h4 className="font-bold uppercase text-sm text-white">Industry Impact</h4>
                <p className="text-xs text-slate-400">Trusted by brands globally.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-accent border border-white/10 group transition-all">
              <Linkedin className="group-hover:scale-110 text-white" size={20} />
            </a>
            <a href="mailto:avadhesh@targetseosolutions.com" className="p-4 bg-white/5 rounded-full hover:bg-accent border border-white/10 group transition-all">
              <Mail className="group-hover:scale-110 text-white" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}