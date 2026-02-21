"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { 
  Search, ArrowUpRight, Sparkles, MoveRight, 
  Layers, Zap 
} from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const services = [
  {
    title: "Strategic SEO Audit",
    label: "Intelligence",
    description: "Uncovering deep technical insights and hidden ranking barriers using proprietary AI frameworks.",
    icon: <Search className="w-8 h-8 text-accent" />,
    stats: "99.9% Accuracy"
  },
  {
    title: "Authority Scaling",
    label: "Backlinks",
    description: "Acquire high-impact digital PR and backlink placements from industry-leading publications.",
    icon: <Layers className="w-8 h-8 text-accent" />,
    stats: "+150% Domain Rating"
  },
  {
    title: "Performance Content",
    label: "Revenue",
    description: "Content that doesn't just rank, but converts cold traffic into loyal brand advocates.",
    icon: <Zap className="w-8 h-8 text-accent" />,
    stats: "4.2x ROI Growth"
  }
];

const BluePremiumHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-[#020617] pt-32 pb-20 px-6 lg:px-12 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[150px] rounded-full opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full opacity-30" />
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5 fill-accent" />
            Next-Gen SEO Solutions
          </motion.div>

          <div className="space-y-4">
            <h1 className="hero-text text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none">
              Dominating <br />
              <span className="text-accent">
                Search Ecosystems.
              </span>
            </h1>
            <p className="hero-text text-lg text-white/70 max-w-md font-light leading-relaxed">
              We engineer high-performance search strategies that turn organic traffic into predictable revenue streams. No fluff, just results.
            </p>
          </div>

         

          
        </div>

        {/* RIGHT SLIDER */}
        <div className="lg:col-span-7 relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            autoplay={{ delay: 3500 }}
            pagination={{ 
              clickable: true, 
              renderBullet: (index, className) => {
                return `<span class="${className} !bg-accent"></span>`;
              }
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="w-full !pb-14"
          >
            {services.map((item, idx) => (
              <SwiperSlide key={idx} className="!w-[320px] md:!w-[400px]">
                <div className="bg-gradient-to-b from-blue-900/30 to-[#020617] border border-white/10 backdrop-blur-xl p-8 rounded-[32px] h-[450px] flex flex-col justify-between group transition-all duration-500 hover:border-accent/40 shadow-2xl shadow-black/40">
                  
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-accent/10 rounded-2xl border border-accent/20 text-accent group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black tracking-[0.2em] text-accent/60 uppercase">
                      {item.label}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div>
                      <p className="text-[10px] text-accent uppercase font-bold tracking-wider">Target Outcome</p>
                      <p className="text-xl font-bold text-white">{item.stats}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Side text Accent */}
      <div className="absolute right-[-80px] top-1/2 -rotate-90 hidden xl:block">
        <span className="text-8xl font-black text-white/[0.02] select-none tracking-widest">SEARCH ENGINE</span>
      </div>
    </section>
  );
};

export default BluePremiumHero;

