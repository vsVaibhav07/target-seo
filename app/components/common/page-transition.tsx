"use client";

import { m } from "framer-motion";

const slideAnimation = {
  initial: { top: 0 },
  animate: { top: "100vh" },
  exit: { top: "100vh" },
};

export default function PageTransition() {
  return (
    <>
      {/* Yeh block page load hote hi niche ki taraf slide ho jayega */}
      <m.div
        variants={slideAnimation}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[99] bg-orange-600 pointer-events-none"
      />
    </>
  );
}