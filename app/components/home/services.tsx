"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Settings,
  FileText,
  PenTool,
  Link2,
  LineChart,
} from "lucide-react";
import { Dancing_Script } from "next/font/google";
import { useRef, useEffect, useState } from "react";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const services = [
  { title: "Local SEO", icon: MapPin },
  { title: "Technical SEO", icon: Settings },
  { title: "On-Page SEO", icon: FileText },
  { title: "Content Marketing", icon: PenTool },
  { title: "Link Building", icon: Link2 },
  { title: "SEO Consulting", icon: LineChart },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(mousePos.x, springConfig);
  const cursorY = useSpring(mousePos.y, springConfig);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // FIX: Added 'as const' to the ease array
  const titleVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1] as const,
      },
    }),
  };

  // FIX: Added 'Variants' type and 'as const'
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-slate-50"
      style={{ perspective: "1200px" }}
    >
      {/* --- Custom Cursor --- */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9999] border-2 border-orange-500 flex items-center justify-center bg-orange-500/10 hidden md:flex"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered
            ? "rgba(249, 115, 22, 1)"
            : "rgba(249, 115, 22, 0.1)",
        }}
      />

      {/* --- Sticky Content --- */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex w-[200vw] h-full items-center"
        >
          {/* Screen 1: Heading */}
          <div className="flex h-full w-screen flex-shrink-0 flex-col items-center justify-center px-4">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 md:gap-8">
              {["Core", "SEO", "Services"].map((word, i) => (
                <div key={i} className="overflow-visible py-2">
                  <motion.span
                    custom={i}
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className={`${dancing.className} block whitespace-nowrap text-7xl sm:text-8xl md:text-9xl font-bold leading-tight ${word === "SEO" ? "text-orange-500" : "text-slate-900"}`}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 text-slate-400 text-sm font-medium uppercase tracking-widest"
            >
              Scroll to explore
            </motion.div>
          </div>

          {/* Screen 2: Cards Grid */}
          <div className="flex h-full w-screen min-h-screen pt-20 shrink-0 items-center justify-center px-6 md:px-20">
  <div className="grid grid-cols-2 lg:grid-cols-3 lg:p-40 gap-8 w-full max-w-6xl">
    {services.map((service, i) => {
      const Icon = service.icon;
      
      // Icon ke liye specific animation variant
      const iconAnimation:Variants = {
        hover: { 
          rotate: 360,
          scale: 1.1,
          transition: { type: "spring"as const, stiffness: 200, damping: 10 }
        }
      };

      return (
        <motion.div
          key={service.title}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          // Is line se pura card 'hover' state ko pehchanega
          whileHover="hover" 
          viewport={{ once: false }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex justify-center"
        >
          <Link
            href="/services"
            className="group relative flex flex-col items-center justify-center w-full aspect-square max-w-[240px] rounded-[3rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(249,115,22,0.3)] overflow-hidden"
          >
            {/* Background Expanding Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600"
              initial={{ clipPath: 'circle(0% at 50% 50%)' }}
              variants={{
                hover: { clipPath: 'circle(150% at 50% 50%)' }
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Icon with Group Hover (Parent ki 'hover' state se link hai) */}
            <motion.div 
              variants={iconAnimation}
              className="relative z-10 mb-4 p-4 rounded-2xl bg-orange-50 text-orange-500 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-sm"
            >
              <Icon className="w-10 h-10 md:w-12 md:h-12" />
            </motion.div>

            {/* Text Animation */}
            <motion.h3 
              variants={{
                hover: { scale: 1.1, color: "#ffffff" }
              }}
              className="relative z-10 text-center text-sm md:text-xl font-extrabold tracking-tight text-slate-800 transition-all duration-500 px-4"
            >
              {service.title}
            </motion.h3>

            {/* Bottom Indicator Line */}
            <motion.div 
              variants={{
                hover: { width: "48px", backgroundColor: "#ffffff" }
              }}
              className="absolute bottom-6 w-8 h-1 bg-orange-500 rounded-full transition-all duration-500" 
            />
          </Link>
        </motion.div>
      );
    })}
  </div>
</div>
        </motion.div>
      </div>
    </section>
  );
}
