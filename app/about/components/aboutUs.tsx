"use client";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionTitle from "@/app/components/common/sectionTitle";

export default function AboutUs() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={container}
      className="py-24 md:py-32 lg:px-20 relative px-6 overflow-hidden"
    >
      <div className="container mx-auto grid lg:flex lg:gap-20  items-center">
        {/* Left Side: Perfectly Sized Image & Border */}
        <div className="relative mx-auto lg:ml-0 w-full max-w-[380px] md:max-w-[420px]">
          {/* Decorative Frame - Ab ye image ke symmetrical piche hai */}
          <div className="absolute top-6 left-6 right-[-24px] bottom-[-24px] border-8 border-blue-500/10 rounded-[2rem] z-0 hidden md:block" />

          <m.div
            style={{ y: imgY }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 z-10 group"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400"
              alt="Our Workspace"
              fill
              sizes="400px"
              className="object-cover scale-105 grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </m.div>
        </div>

        {/* Right Side: Content & Single Line Heading */}
        <div className="space-y-8">
          <SectionTitle
            className=" bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.1),transparent_50%)] w-full "
            text="GLOBAL GROWTH"
          />

          <div className="space-y-6">
            <p className="text-slate-400 text-base md:text-lg leading-relaxed text-justify">
              At Target SEO Solutions, we are partners in growth for businesses
              worldwide. Our vision has grown into a full-service agency helping
              brands shine in a competitive digital landscape.
            </p>

            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="border-l-4 border-accent pl-6 italic text-white text-lg bg-white/[0.03] py-5 rounded-r-xl"
            >
              "Every brand deserves a seat at the top of the SERPs."
            </m.div>
          </div>

          {/* Value Cards */}
          <div className="grid grid-cols-2 gap-3">
            {["Integrity", "Innovation", "Excellence", "Client-First"].map(
              (item) => (
                <div
                  key={item}
                  className="p-3 bg-white/[0.02] border border-white/5 rounded-xl hover:border-accent/40 transition-all group"
                >
                  <span className="font-bold uppercase tracking-widest text-[9px] text-slate-500 group-hover:text-accent">
                    {item}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
