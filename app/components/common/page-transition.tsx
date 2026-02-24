"use client";

import { m,Variants } from "framer-motion";

const curtainVariant:Variants = {
  initial: { 
    top: "0%" 
  },
  animate: { 
    top: "-100%", // Upar slide ho jayega
    transition: { 
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1],
      delay: 0.3
    }
  },
  exit: { 
    top: "0%", // Page leave karte waqt wapas niche aayega
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } 
  },
};

const textVariant:Variants = {
  initial: { opacity: 1, y: 0 },
  animate: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.4 }
  }
}

export default function PageTransition() {
  return (
    <>
      <m.div
        variants={curtainVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        // pointer-events-none is crucial!
        className="fixed inset-0 z-[9999] bg-[#ea580c] flex items-center justify-center pointer-events-none"
        style={{ height: "100vh" }} // Ensure full height
      >
        <m.div variants={textVariant} className="flex flex-col items-center">
             <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4" />
             <h2 className="text-white font-black tracking-[0.5em] uppercase text-sm">Target SEO</h2>
        </m.div>
      </m.div>
    </>
  );
}