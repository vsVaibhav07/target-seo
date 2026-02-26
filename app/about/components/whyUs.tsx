"use client";
import { m } from "framer-motion";
import { CheckCircle2, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import AnimatedHeading from "@/app/components/common/animatedHeading"

const reasons = [
  { t: "Proven Expertise", d: "Deep knowledge of Google's algorithms since 2008.", icon: Zap },
  { t: "Ethical Methods", d: "No shortcuts. Sustainable white-hat SEO strategies.", icon: ShieldCheck },
  { t: "Guaranteed Growth", d: "Expect at least 30-50% traffic growth within 6 months.", icon: TrendingUp },
  { t: "Custom Strategy", d: "Tailored campaigns designed around your specific goals.", icon: CheckCircle2 }
];

export default function WhyChooseUs() {
  return (
    <section className="py-40 container mx-auto px-6">
      <div className="mb-24">
        <AnimatedHeading text="WHY" className="text-6xl md:text-8xl font-black font-dancing text-white" />
        <AnimatedHeading text="CHOOSE US?" className="text-6xl md:text-8xl font-black font-dancing text-accent" />
        <p className="text-xl text-slate-400 font-light mt-6 max-w-xl">
          In today’s landscape, ranking is about more than visibility. It’s about credibility and growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((item, i) => (
          <m.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-10 bg-white/[0.03] border border-white/10 rounded-[3rem] hover:bg-accent group transition-all duration-700 relative overflow-hidden"
          >
            <item.icon className="w-12 h-12 text-accent group-hover:text-white mb-8 transition-colors" />
            <h3 className="text-2xl font-bold uppercase mb-4 leading-tight group-hover:text-white">{item.t}</h3>
            <p className="text-slate-400 group-hover:text-white/80 text-sm leading-relaxed">{item.d}</p>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />
          </m.div>
        ))}
      </div>
      
      <m.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="mt-24 p-12 md:p-20 bg-gradient-to-br from-accent to-accent/80 rounded-[4rem] text-center shadow-2xl shadow-accent/20"
      >
        <h4 className="text-4xl md:text-6xl font-black font-dancing text-white mb-6 italic">Our Promise</h4>
        <p className="text-xl md:text-3xl max-w-4xl mx-auto font-light leading-relaxed text-white">
          Deliver real results, not just reports. Together, we can turn your online presence into a driving force for business growth.
        </p>
      </m.div>
    </section>
  );
}