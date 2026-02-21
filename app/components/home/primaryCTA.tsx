"use client";

import { Variants, m } from "framer-motion";

export default function PrimaryCTA() {
  const headingTitle = "Ready to Lead?";
  const headingSubtitle = "Get Your FREE Growth Plan";
  const words = headingSubtitle.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const textItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Decorative Glows for the Dark Background */}
      <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-[#f8f9fa] rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.4)] p-10 md:p-16 grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side: Dark Text on Light Card */}
          <div className="space-y-8">
            <div className="overflow-hidden">
              <m.span
                variants={textItemVariants}
                className="inline-block px-5 py-2 rounded-full border border-accent/10 bg-accent/5 text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4"
              >
                Limited Availability
              </m.span>
            </div>

            <div className="space-y-2">
              <m.h3 
                variants={textItemVariants}
                className="font-dancing text-4xl md:text-5xl text-accent font-medium"
              >
                {headingTitle}
              </m.h3>
              <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight uppercase tracking-tighter">
                {words.map((word, i) => (
                  <span key={i} className={word === "FREE" || word === "Growth" ? "text-accent" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h2>
            </div>

            <m.p
              variants={textItemVariants}
              className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-md font-medium"
            >
              Our audit uncovers technical friction and search intent gaps that your competitors are missing. 
              <span className="text-primary font-bold italic"> No fluff, just data.</span>
            </m.p>

            {/* Social Proof Tags */}
            <m.div variants={textItemVariants} className="flex gap-4 items-center pt-4">
               <div className="h-px w-12 bg-slate-200" />
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                 Trusted by <span className="text-primary">500+ Global Brands</span>
               </p>
            </m.div>
          </div>

          {/* Right Side: High-Contrast Form */}
          <m.form
            variants={textItemVariants}
            className="grid gap-5 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100"
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-5 rounded-2xl border border-slate-200 bg-slate-50 text-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all cursor-text"
              />
              <input
                type="email"
                placeholder="Business Email"
                className="w-full px-6 py-5 rounded-2xl border border-slate-200 bg-slate-50 text-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all cursor-text"
              />
              <input
                type="url"
                placeholder="Website Domain"
                className="w-full px-6 py-5 rounded-2xl border border-slate-200 bg-slate-50 text-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all cursor-text"
              />
            </div>

            <m.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 bg-accent text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-[0_20px_40px_rgba(234,88,12,0.3)] hover:bg-orange-600 transition-all cursor-pointer"
            >
              Get Free Strategy
            </m.button>
            <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
              Success is a choice. Make it now.
            </p>
          </m.form>
        </m.div>
      </div>
    </section>
  );
}